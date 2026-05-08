import { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { Area, CartesianGrid, ComposedChart, ReferenceLine, XAxis, YAxis } from "recharts";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { cn } from "@/lib/utils";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig
} from "../shadcn/ui/chart";

const INVESTMENTS_CHART_DATA = [
  { month: "Jan", features: 16, bugs: 10, maintenance: 6.5 },
  { month: "Feb", features: 19, bugs: 12.5, maintenance: 3.2 },
  { month: "Mar", features: 12, bugs: 9.5, maintenance: 3.8 },
  { month: "Apr", features: 15.2, bugs: 7.6, maintenance: 2.7 },
  { month: "May", features: 12.8, bugs: 10.1, maintenance: 4.9 },
  { month: "Jun", features: 13.4, bugs: 8.9, maintenance: 3.5 },
  { month: "Jul", features: 17.2, bugs: 13.1, maintenance: 5.8 },
  { month: "Aug", features: 16.8, bugs: 10.9, maintenance: 3.7 },
  { month: "Sep", features: 20.5, bugs: 13.3, maintenance: 7.1 },
  { month: "Oct", features: 18.1, bugs: 9.6, maintenance: 4.5 },
  { month: "Nov", features: 17.9, bugs: 14.8, maintenance: 4.9 },
  { month: "Dec", features: 22.3, bugs: 17.6, maintenance: 6.8 },
  { month: "Jan 2", features: 18.6, bugs: 12.9, maintenance: 5.4 },
  { month: "Feb 2", features: 16.2, bugs: 11.1, maintenance: 4.1 },
  { month: "Mar 2", features: 19.4, bugs: 14.2, maintenance: 6.2 },
  { month: "Apr 2", features: 18.9, bugs: 13.6, maintenance: 5.8 },
  { month: "May 2", features: 21.7, bugs: 15.1, maintenance: 7.4 },
  { month: "Jun 2", features: 20.2, bugs: 12.4, maintenance: 5.1 },
  { month: "Jul 2", features: 17.6, bugs: 10.3, maintenance: 4.3 },
  { month: "Aug 2", features: 19.8, bugs: 14.7, maintenance: 5.2 },
  { month: "Sep 2", features: 24.1, bugs: 17.5, maintenance: 6.9 }
] as const;

const INVESTMENTS_CHART_CONFIG = {
  features: {
    label: "Features",
    color: "#AC94FA"
  },
  bugs: {
    label: "Bugs",
    color: "#F98080"
  },
  maintenance: {
    label: "Maintenance",
    color: "#31C48D"
  }
} satisfies ChartConfig;

const CHART_PRIMARY_TEXT = "var(--theme-text-primary)";
const CHART_SECONDARY_TEXT = "var(--theme-text-secondary)";
const CHART_CURSOR_STROKE = "var(--theme-text-tertiary)";
const CHART_SELECTED_CURSOR_STROKE = "var(--theme-text-primary)";
const CHART_TOOLTIP_BACKGROUND = "var(--theme-bg-panel)";
const CHART_TOOLTIP_BORDER = "var(--theme-border-default)";
const CHART_TICK_LINE_STROKE = "var(--theme-border-subtle)";
const INVESTMENTS_CHART_LEFT_INSET_PX = 46;
const INVESTMENTS_CHART_LEGEND_HEIGHT_PX = 32;
const INVESTMENTS_CHART_X_AXIS_HEIGHT_PX = 24;
const CHART_NUMERIC_FONT_FAMILY =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace';
const INVESTMENTS_SERIES_KEYS = ["bugs", "features", "maintenance"] as const;

type InvestmentsSeriesKey = (typeof INVESTMENTS_SERIES_KEYS)[number];

function InvestmentsXAxisTick({
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

function InvestmentsTooltipContent({
  active,
  payload
}: {
  active?: boolean;
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
  const total = rows.reduce((sum, entry) => {
    const nextValue =
      typeof entry.value === "number" ? entry.value : Number(entry.value ?? 0);
    return sum + (Number.isFinite(nextValue) ? nextValue : 0);
  }, 0);

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
          const percentage = total > 0 ? (numericValue / total) * 100 : 0;
          const configKey = String(entry.dataKey ?? entry.name ?? "");
          const itemLabel =
            configKey in INVESTMENTS_CHART_CONFIG
              ? INVESTMENTS_CHART_CONFIG[configKey as keyof typeof INVESTMENTS_CHART_CONFIG].label
              : entry.name ?? entry.dataKey ?? "Value";

          return (
            <div key={String(entry.dataKey ?? entry.name)} className="flex items-center gap-2">
              <div
                className="h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: entry.color ?? "currentColor" }}
              />
              <div className="grid min-w-0 flex-1 grid-cols-[minmax(max-content,1fr)_max-content_3ch] items-center gap-x-4 leading-4">
                <span className="truncate text-[11px] leading-4" style={{ color: CHART_PRIMARY_TEXT }}>
                  {itemLabel}
                </span>
                <span className="font-mono tabular-nums leading-4" style={{ color: CHART_PRIMARY_TEXT }}>
                  {Number.isFinite(numericValue) ? numericValue.toFixed(1) : String(entry.value)}
                </span>
                <span
                  className="justify-self-end text-right font-mono tabular-nums leading-4"
                  style={{ color: CHART_SECONDARY_TEXT }}
                >
                  {percentage.toFixed(0)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InvestmentsLegend({
  activeSeriesKeys,
  onToggle
}: {
  activeSeriesKeys: InvestmentsSeriesKey[] | null;
  onToggle: (seriesKey: InvestmentsSeriesKey) => void;
}) {
  return (
    <div className="survey-kpi-chart-legend" role="group" aria-label="Chart series filters">
      {INVESTMENTS_SERIES_KEYS.map((seriesKey) => {
        const isSelected = activeSeriesKeys === null || activeSeriesKeys.includes(seriesKey);
        const label = INVESTMENTS_CHART_CONFIG[seriesKey].label ?? seriesKey;
        const color = INVESTMENTS_CHART_CONFIG[seriesKey].color;

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

export function InvestmentsChart({
  className = "",
  onSelectMonth,
  selectedMonth = null
}: {
  className?: string;
  onSelectMonth?: (month: string) => void;
  selectedMonth?: string | null;
}) {
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const [activeSeriesKeys, setActiveSeriesKeys] = useState<InvestmentsSeriesKey[] | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);

  function handleChartClick(event: ReactMouseEvent<HTMLDivElement>) {
    if (!onSelectMonth || !chartRef.current) {
      return;
    }

    if ((event.target as HTMLElement | null)?.closest(".survey-kpi-chart-legend")) {
      return;
    }

    const bounds = chartRef.current.getBoundingClientRect();
    const relativeY = event.clientY - bounds.top;
    const plotHeight = bounds.height - INVESTMENTS_CHART_LEGEND_HEIGHT_PX - INVESTMENTS_CHART_X_AXIS_HEIGHT_PX;

    if (relativeY < 0 || relativeY > plotHeight) {
      return;
    }

    const plotWidth = Math.max(bounds.width - INVESTMENTS_CHART_LEFT_INSET_PX, 1);
    const relativeX = Math.min(
      Math.max(event.clientX - bounds.left - INVESTMENTS_CHART_LEFT_INSET_PX, 0),
      plotWidth
    );
    const step = plotWidth / Math.max(INVESTMENTS_CHART_DATA.length - 1, 1);
    const nearestIndex = Math.round(relativeX / step);

    const nextMonth = INVESTMENTS_CHART_DATA[Math.min(nearestIndex, INVESTMENTS_CHART_DATA.length - 1)].month;
    onSelectMonth(nextMonth);
  }

  function handleLegendToggle(seriesKey: InvestmentsSeriesKey) {
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
          "investments-chart h-full w-full [&_.recharts-cartesian-axis-line]:stroke-transparent [&_.recharts-line]:drop-shadow-none [&_.recharts-surface]:overflow-visible"
        )}
        config={INVESTMENTS_CHART_CONFIG}
      >
        <ComposedChart
          data={INVESTMENTS_CHART_DATA}
          margin={{ top: 6, right: 0, bottom: 0, left: 0 }}
          onMouseLeave={() => setActiveMonth(null)}
          onMouseMove={(nextState) => {
            const nextMonth =
              typeof nextState?.activeLabel === "string" ? nextState.activeLabel : null;
            setActiveMonth(nextMonth);
          }}
        >
          <defs>
            <linearGradient id="investments-features-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-features)" stopOpacity={0.09} />
              <stop offset="100%" stopColor="var(--color-features)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="investments-bugs-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-bugs)" stopOpacity={0.07} />
              <stop offset="100%" stopColor="var(--color-bugs)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="investments-maintenance-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-maintenance)" stopOpacity={0.07} />
              <stop offset="100%" stopColor="var(--color-maintenance)" stopOpacity={0} />
            </linearGradient>
          </defs>
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
            dataKey="features"
            domain={[0, 20]}
            label={{
              value: "Issues",
              angle: -90,
              dx: -16,
              style: { fill: CHART_SECONDARY_TEXT, fontSize: 11, letterSpacing: 0 }
            }}
            tick={{
              fill: CHART_SECONDARY_TEXT,
              fontSize: 11,
              fontFamily: CHART_NUMERIC_FONT_FAMILY,
              fontVariantNumeric: "tabular-nums"
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
            tick={<InvestmentsXAxisTick activeMonth={selectedMonth ?? activeMonth} />}
            tickLine={{ stroke: CHART_TICK_LINE_STROKE }}
            tickMargin={4}
          />
          <ChartTooltip
            content={<InvestmentsTooltipContent />}
            cursor={false}
            isAnimationActive={false}
          />
          {activeSeriesKeys === null || activeSeriesKeys.includes("features") ? (
            <Area
              activeDot={{ r: 3, strokeWidth: 0, fill: "var(--color-features)" }}
              dataKey="features"
              dot={false}
              legendType="circle"
              fill="url(#investments-features-fill)"
              fillOpacity={1}
              stroke="var(--color-features)"
              strokeWidth={2}
              type="linear"
              isAnimationActive={false}
            />
          ) : null}
          {activeSeriesKeys === null || activeSeriesKeys.includes("bugs") ? (
            <Area
              activeDot={{ r: 3, strokeWidth: 0, fill: "var(--color-bugs)" }}
              dataKey="bugs"
              dot={false}
              legendType="circle"
              fill="url(#investments-bugs-fill)"
              fillOpacity={1}
              stroke="var(--color-bugs)"
              strokeWidth={2}
              type="linear"
              isAnimationActive={false}
            />
          ) : null}
          {activeSeriesKeys === null || activeSeriesKeys.includes("maintenance") ? (
            <Area
              activeDot={{ r: 3, strokeWidth: 0, fill: "var(--color-maintenance)" }}
              dataKey="maintenance"
              dot={false}
              legendType="circle"
              fill="url(#investments-maintenance-fill)"
              fillOpacity={1}
              stroke="var(--color-maintenance)"
              strokeWidth={2}
              type="linear"
              isAnimationActive={false}
            />
          ) : null}
        </ComposedChart>
      </ChartContainer>
      <InvestmentsLegend activeSeriesKeys={activeSeriesKeys} onToggle={handleLegendToggle} />
    </div>
  );
}
