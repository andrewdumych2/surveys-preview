import { useMemo, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { CartesianGrid, ComposedChart, Line, ReferenceLine, XAxis, YAxis } from "recharts";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { cn } from "@/lib/utils";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig
} from "../shadcn/ui/chart";

type LinePoint = {
  month: string;
  value: number;
};

const CYCLE_TIME_POINTS: readonly LinePoint[] = [
  { month: "Jan", value: 9 },
  { month: "Feb", value: 7.2 },
  { month: "Mar", value: 8.1 },
  { month: "Apr", value: 4.3 },
  { month: "May", value: 2.1 },
  { month: "Jun", value: 6.9 },
  { month: "Jul", value: 4.8 },
  { month: "Aug", value: 11.2 },
  { month: "Sep", value: 7.1 },
  { month: "Oct", value: 11.8 },
  { month: "Nov", value: 7.4 },
  { month: "Dec", value: 9.1 },
  { month: "Jan 2", value: 18.2 },
  { month: "Feb 2", value: 14.9 },
  { month: "Mar 2", value: 17.9 },
  { month: "Apr 2", value: 17.6 },
  { month: "May 2", value: 19.4 },
  { month: "Jun 2", value: 18.5 },
  { month: "Jul 2", value: 16.3 },
  { month: "Aug 2", value: 18.1 },
  { month: "Sep 2", value: 14.5 }
] as const;

const BUG_RESOLUTION_POINTS: readonly LinePoint[] = [
  { month: "Jan", value: 5.8 },
  { month: "Feb", value: 9.0 },
  { month: "Mar", value: 4.2 },
  { month: "Apr", value: 1.6 },
  { month: "May", value: 5.1 },
  { month: "Jun", value: 3.4 },
  { month: "Jul", value: 8.7 },
  { month: "Aug", value: 6.1 },
  { month: "Sep", value: 9.0 },
  { month: "Oct", value: 4.3 },
  { month: "Nov", value: 11.2 },
  { month: "Dec", value: 8.2 },
  { month: "Jan 2", value: 10.1 },
  { month: "Feb 2", value: 6.2 },
  { month: "Mar 2", value: 7.0 },
  { month: "Apr 2", value: 12.9 },
  { month: "May 2", value: 13.7 },
  { month: "Jun 2", value: 10.4 },
  { month: "Jul 2", value: 9.7 },
  { month: "Aug 2", value: 13.8 },
  { month: "Sep 2", value: 15.1 }
] as const;

const CHART_PRIMARY_TEXT = "var(--theme-text-primary)";
const CHART_SECONDARY_TEXT = "var(--theme-text-secondary)";
const CHART_CURSOR_STROKE = "var(--theme-text-tertiary)";
const CHART_SELECTED_CURSOR_STROKE = "var(--theme-text-primary)";
const CHART_TOOLTIP_BACKGROUND = "var(--theme-bg-panel)";
const CHART_TOOLTIP_BORDER = "var(--theme-border-default)";
const CHART_TICK_LINE_STROKE = "var(--theme-border-subtle)";
const KPI_LINE_CHART_LEFT_INSET_PX = 46;
const KPI_LINE_CHART_LEGEND_HEIGHT_PX = 32;
const KPI_LINE_CHART_X_AXIS_HEIGHT_PX = 24;
const CHART_NUMERIC_FONT_FAMILY =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace';
const KPI_LINE_SERIES_KEYS = ["trend", "value"] as const;

type KpiLineSeriesKey = (typeof KPI_LINE_SERIES_KEYS)[number];

function buildTrendSeries(points: readonly LinePoint[]) {
  return points.map((point, index, collection) => {
    const window = collection.slice(Math.max(0, index - 2), Math.min(collection.length, index + 3));
    const trend = window.reduce((sum, entry) => sum + entry.value, 0) / window.length;

    return {
      ...point,
      trend: Number(trend.toFixed(1))
    };
  });
}

function KpiLineXAxisTick({
  activeMonth,
  index,
  payload,
  x,
  y
}: {
  activeMonth: string | null;
  index?: number;
  payload?: { value?: string | number };
  x?: number;
  y?: number;
}) {
  if (typeof x !== "number" || typeof y !== "number" || !payload?.value) {
    return null;
  }

  const rawMonth = String(payload.value);
  const month = rawMonth.replace(/\s2$/, "");
  const isActive = activeMonth === rawMonth;
  const shouldShowDefaultLabel = typeof index === "number" ? index % 4 === 0 : true;

  if (activeMonth && !isActive) {
    return null;
  }

  if (!activeMonth && !shouldShowDefaultLabel) {
    return null;
  }

  return (
    <text
      x={x}
      y={y}
      dy={10}
      fill={isActive ? CHART_PRIMARY_TEXT : CHART_SECONDARY_TEXT}
      fontSize={11}
      textAnchor="middle"
    >
      {month}
    </text>
  );
}

function KpiLineTooltipContent({
  active,
  config,
  payload
}: {
  active?: boolean;
  config: ChartConfig;
  payload?: Array<{
    color?: string;
    dataKey?: string | number;
    name?: NameType;
    value?: ValueType;
  }>;
}) {
  if (!active || !payload?.length) {
    return null;
  }

  const rows = payload.filter((entry) => entry.value !== undefined);

  return (
    <div
      className="grid min-w-32 items-start gap-1.5 rounded-lg px-2.5 py-2 text-xs shadow-xl"
      style={{
        background: CHART_TOOLTIP_BACKGROUND,
        border: `1px solid ${CHART_TOOLTIP_BORDER}`,
        color: CHART_PRIMARY_TEXT
      }}
    >
      <div className="grid gap-1.5">
        {rows.map((entry) => {
          const numericValue =
            typeof entry.value === "number" ? entry.value : Number(entry.value ?? 0);
          const configKey = String(entry.dataKey ?? entry.name ?? "");
          const itemLabel =
            configKey in config
              ? config[configKey as keyof typeof config].label
              : entry.name ?? entry.dataKey ?? "Value";

          return (
            <div key={String(entry.dataKey ?? entry.name)} className="flex items-center gap-2">
              <div
                className="h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: entry.color ?? "currentColor" }}
              />
              <div className="grid min-w-0 flex-1 grid-cols-[minmax(max-content,1fr)_max-content] items-center gap-x-4 leading-4">
                <span className="truncate text-[11px] leading-4" style={{ color: CHART_PRIMARY_TEXT }}>
                  {itemLabel}
                </span>
                <span className="font-mono tabular-nums leading-4" style={{ color: CHART_PRIMARY_TEXT }}>
                  {Number.isFinite(numericValue) ? numericValue.toFixed(1) : String(entry.value)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function KpiLineLegend({
  activeSeriesKeys,
  config,
  onToggle
}: {
  activeSeriesKeys: KpiLineSeriesKey[] | null;
  config: ChartConfig;
  onToggle: (seriesKey: KpiLineSeriesKey) => void;
}) {
  return (
    <div className="survey-kpi-chart-legend" role="group" aria-label="Chart series filters">
      {KPI_LINE_SERIES_KEYS.map((seriesKey) => {
        const isSelected = activeSeriesKeys === null || activeSeriesKeys.includes(seriesKey);
        const label = config[seriesKey]?.label ?? seriesKey;
        const color = "color" in (config[seriesKey] ?? {}) ? config[seriesKey]?.color : undefined;

        return (
          <button
            key={seriesKey}
            type="button"
            className={`survey-kpi-chart-legend-button ${isSelected ? "survey-kpi-chart-legend-button-active" : ""}`.trim()}
            onClick={() => onToggle(seriesKey)}
          >
            <span
              className="survey-kpi-chart-legend-dot"
              style={{ backgroundColor: color ?? "currentColor" }}
              aria-hidden="true"
            />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

function KpiLineChart({
  className = "",
  data,
  legendClassName,
  onSelectMonth,
  selectedMonth = null,
  seriesColor,
  seriesLabel,
  trendColor,
  trendLabel,
  yAxisLabel
}: {
  className?: string;
  data: readonly LinePoint[];
  legendClassName?: string;
  onSelectMonth?: (month: string) => void;
  selectedMonth?: string | null;
  seriesColor: string;
  seriesLabel: string;
  trendColor: string;
  trendLabel: string;
  yAxisLabel: string;
}) {
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const [activeSeriesKeys, setActiveSeriesKeys] = useState<KpiLineSeriesKey[] | null>(null);
  const chartData = useMemo(() => buildTrendSeries(data), [data]);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartConfig = {
    value: {
      label: seriesLabel,
      color: seriesColor
    },
    trend: {
      label: trendLabel,
      color: trendColor
    }
  } satisfies ChartConfig;

  function handleChartClick(event: ReactMouseEvent<HTMLDivElement>) {
    if (!onSelectMonth || !chartRef.current) {
      return;
    }

    if ((event.target as HTMLElement | null)?.closest(".survey-kpi-chart-legend")) {
      return;
    }

    const bounds = chartRef.current.getBoundingClientRect();
    const relativeY = event.clientY - bounds.top;
    const plotHeight = bounds.height - KPI_LINE_CHART_LEGEND_HEIGHT_PX - KPI_LINE_CHART_X_AXIS_HEIGHT_PX;

    if (relativeY < 0 || relativeY > plotHeight) {
      return;
    }

    const plotWidth = Math.max(bounds.width - KPI_LINE_CHART_LEFT_INSET_PX, 1);
    const relativeX = Math.min(
      Math.max(event.clientX - bounds.left - KPI_LINE_CHART_LEFT_INSET_PX, 0),
      plotWidth
    );
    const step = plotWidth / Math.max(data.length - 1, 1);
    const nearestIndex = Math.round(relativeX / step);

    const nextMonth = data[Math.min(nearestIndex, data.length - 1)].month;
    onSelectMonth(nextMonth);
  }

  function handleLegendToggle(seriesKey: KpiLineSeriesKey) {
    setActiveSeriesKeys((current) => {
      if (current === null) {
        return [seriesKey];
      }

      if (current.includes(seriesKey)) {
        return current.length === 1 ? null : current.filter((item) => item !== seriesKey);
      }

      return [...current, seriesKey];
    });
  }

  return (
    <div
      ref={chartRef}
      className={cn("flex h-full w-full flex-col", className)}
      onClickCapture={handleChartClick}
      onMouseDownCapture={(event) => {
        event.preventDefault();
      }}
    >
      <ChartContainer
        className={cn(
          "kpi-line-chart h-full w-full [&_.recharts-cartesian-axis-line]:stroke-transparent [&_.recharts-line]:drop-shadow-none [&_.recharts-surface]:overflow-visible",
          legendClassName
        )}
        config={chartConfig}
      >
        <ComposedChart
          data={chartData}
          margin={{ top: 6, right: 0, bottom: 0, left: 0 }}
          onMouseLeave={() => setActiveMonth(null)}
          onMouseMove={(nextState) => {
            const nextMonth =
              typeof nextState?.activeLabel === "string" ? nextState.activeLabel : null;
            setActiveMonth(nextMonth);
          }}
        >
          <CartesianGrid strokeDasharray="0" vertical={false} />
          {activeMonth && activeMonth !== selectedMonth ? (
            <ReferenceLine
              ifOverflow="extendDomain"
              stroke={CHART_CURSOR_STROKE}
              strokeDasharray="4 4"
              strokeWidth={1}
              x={activeMonth}
            />
          ) : null}
          {selectedMonth ? (
            <ReferenceLine
              ifOverflow="extendDomain"
              stroke={CHART_SELECTED_CURSOR_STROKE}
              strokeDasharray="4 4"
              strokeWidth={1}
              x={selectedMonth}
            />
          ) : null}
          <YAxis
            axisLine={false}
            dataKey="value"
            domain={[0, 20]}
            label={{
              value: yAxisLabel,
              angle: -90,
              dx: -16,
              style: { fill: CHART_SECONDARY_TEXT, fontSize: 11, letterSpacing: 0 }
            }}
            tick={{
              fill: CHART_SECONDARY_TEXT,
              fontSize: 11,
              fontFamily: CHART_NUMERIC_FONT_FAMILY,
              style: { fontVariantNumeric: "tabular-nums" }
            }}
            tickCount={5}
            tickLine={false}
            ticks={[0, 5, 10, 15, 20]}
            width={36}
          />
          <XAxis
            axisLine={false}
            dataKey="month"
            interval={0}
            tick={<KpiLineXAxisTick activeMonth={selectedMonth ?? activeMonth} />}
            tickLine={{ stroke: CHART_TICK_LINE_STROKE }}
            tickMargin={4}
          />
          <ChartTooltip
            content={<KpiLineTooltipContent config={chartConfig} />}
            cursor={false}
            isAnimationActive={false}
          />
          {activeSeriesKeys === null || activeSeriesKeys.includes("value") ? (
            <Line
              activeDot={{ r: 3, strokeWidth: 0, fill: "var(--color-value)" }}
              dataKey="value"
              dot={false}
              legendType="circle"
              isAnimationActive={false}
              stroke="var(--color-value)"
              strokeWidth={2}
              type="linear"
            />
          ) : null}
          {activeSeriesKeys === null || activeSeriesKeys.includes("trend") ? (
            <Line
              dataKey="trend"
              dot={false}
              legendType="circle"
              isAnimationActive={false}
              stroke="var(--color-trend)"
              strokeDasharray="4 4"
              strokeLinecap="round"
              strokeWidth={1.5}
              type="linear"
            />
          ) : null}
        </ComposedChart>
      </ChartContainer>
      <KpiLineLegend activeSeriesKeys={activeSeriesKeys} config={chartConfig} onToggle={handleLegendToggle} />
    </div>
  );
}

export function CycleTimeLineChart({
  className = "",
  onSelectMonth,
  selectedMonth = null
}: {
  className?: string;
  onSelectMonth?: (month: string) => void;
  selectedMonth?: string | null;
}) {
  return (
    <KpiLineChart
      className={className}
      data={CYCLE_TIME_POINTS}
      legendClassName="cycle-time-chart"
      onSelectMonth={onSelectMonth}
      selectedMonth={selectedMonth}
      seriesColor="#FF8A4C"
      seriesLabel="Cycle time"
      trendColor="#585858"
      trendLabel="Trendline"
      yAxisLabel="Issues"
    />
  );
}

export function BugResolutionTimeLineChart({
  className = "",
  onSelectMonth,
  selectedMonth = null
}: {
  className?: string;
  onSelectMonth?: (month: string) => void;
  selectedMonth?: string | null;
}) {
  return (
    <KpiLineChart
      className={className}
      data={BUG_RESOLUTION_POINTS}
      legendClassName="bug-resolution-time-chart"
      onSelectMonth={onSelectMonth}
      selectedMonth={selectedMonth}
      seriesColor="#F98080"
      seriesLabel="Bugs"
      trendColor="#585858"
      trendLabel="Trendline"
      yAxisLabel="Bugs"
    />
  );
}
