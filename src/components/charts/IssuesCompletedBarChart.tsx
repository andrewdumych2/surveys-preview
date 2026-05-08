import { useMemo, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";
import { ChartContainer, type ChartConfig } from "../shadcn/ui/chart";
import { SurveyIcon } from "../surveys/SurveyIcons";
import { IconButton } from "../ui/IconButton";

const ISSUES_COMPLETED_DATA = [
  {
    team: "Platform",
    icon: "layers",
    accent: "#06B6D4",
    fill: "rgba(8,145,178,0.14)",
    hoverFill: "rgba(8,145,178,0.24)",
    value: 301
  },
  {
    team: "Integrations",
    icon: "plug",
    accent: "#9061F9",
    fill: "rgba(144,97,249,0.14)",
    hoverFill: "rgba(144,97,249,0.24)",
    value: 254
  },
  {
    team: "R&D",
    icon: "trend",
    accent: "#FF5A1F",
    fill: "rgba(255,90,31,0.14)",
    hoverFill: "rgba(255,90,31,0.24)",
    value: 208
  },
  {
    team: "Web",
    icon: "window",
    accent: "#3F83F8",
    fill: "rgba(28,100,242,0.14)",
    hoverFill: "rgba(28,100,242,0.24)",
    value: 85
  }
] as const;

const ISSUES_COMPLETED_CHART_CONFIG = {
  value: {
    label: "Team throughput",
    color: "#06B6D4"
  }
} satisfies ChartConfig;

const CHART_DOMAIN_MAX = 320;
const BAR_HEIGHT = 30;
const BAR_GAP = 12;

function IssuesCompletedBarShape(props: {
  fill?: string;
  height?: number;
  hoveredTeam?: string | null;
  payload?: (typeof ISSUES_COMPLETED_DATA)[number];
  selectedTeam?: string | null;
  width?: number;
  x?: number;
  y?: number;
}) {
  const { fill, height = 0, hoveredTeam, payload, selectedTeam, width = 0, x = 0, y = 0 } = props;

  if (!payload || width <= 0 || height <= 0) {
    return null;
  }

  const isHovered = hoveredTeam === payload.team;
  const isSelected = selectedTeam === payload.team;
  const iconSize = 14;
  const iconY = y + (height - iconSize) / 2;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
        fill={fill}
        stroke={isSelected ? payload.accent : isHovered ? `${payload.accent}66` : "transparent"}
        strokeWidth={isSelected ? 1.5 : isHovered ? 1 : 0}
      />
      <foreignObject x={x + 16} y={iconY} width={width - 32} height={iconSize + 2}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            minWidth: 0,
            color: "var(--theme-text-primary)",
            fontSize: "13px",
            lineHeight: "18px",
            letterSpacing: "-0.15px"
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "14px",
              height: "14px",
              color: payload.accent,
              flexShrink: 0
            }}
          >
            <SurveyIcon name={payload.icon} />
          </span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {payload.team}
          </span>
        </div>
      </foreignObject>
      <text
        x={x + width + 16}
        y={y + height / 2}
        dominantBaseline="middle"
        fill="var(--theme-text-primary)"
        fontSize={13}
        letterSpacing={-0.15}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {payload.value}
      </text>
    </g>
  );
}

export function IssuesCompletedBarChart({
  className = "",
  onSelectTeam,
  selectedTeam = null
}: {
  className?: string;
  onSelectTeam?: (team: string) => void;
  selectedTeam?: string | null;
}) {
  const [sortDirection, setSortDirection] = useState<"desc" | "asc">("desc");
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);

  const sortedData = useMemo(() => {
    return [...ISSUES_COMPLETED_DATA].sort((left, right) =>
      sortDirection === "desc" ? right.value - left.value : left.value - right.value
    );
  }, [sortDirection]);

  function getHoveredTeam(clientY: number) {
    if (!chartRef.current) {
      return null;
    }

    const bounds = chartRef.current.getBoundingClientRect();
    const relativeY = clientY - bounds.top;
    const rowHeight = BAR_HEIGHT + BAR_GAP;
    const maxHeight = rowHeight * sortedData.length - BAR_GAP;

    if (relativeY < 0 || relativeY > maxHeight) {
      return null;
    }

    const rowIndex = Math.floor(relativeY / rowHeight);
    return sortedData[Math.min(rowIndex, sortedData.length - 1)]?.team ?? null;
  }

  function handleChartClick(event: ReactMouseEvent<HTMLDivElement>) {
    if (!onSelectTeam) {
      return;
    }

    const nextTeam = getHoveredTeam(event.clientY);

    if (nextTeam) {
      onSelectTeam(nextTeam);
    }
  }

  return (
    <div className={className}>
      <div className="issues-completed-chart-header">
        <span>Team</span>
        <div className="issues-completed-chart-sort">
          <IconButton
            aria-label={sortDirection === "desc" ? "Sort ascending" : "Sort descending"}
            className="issues-completed-chart-sort-button"
            onClick={() => setSortDirection((current) => (current === "desc" ? "asc" : "desc"))}
          >
            <SurveyIcon name={sortDirection === "desc" ? "sort-desc" : "sort-asc"} />
          </IconButton>
        </div>
      </div>
      <div
        ref={chartRef}
        onClickCapture={handleChartClick}
        onMouseLeave={() => setHoveredTeam(null)}
        onMouseMoveCapture={(event) => {
          setHoveredTeam(getHoveredTeam(event.clientY));
        }}
        onMouseDownCapture={(event) => {
          event.preventDefault();
        }}
      >
        <ChartContainer className="issues-completed-chart-frame" config={ISSUES_COMPLETED_CHART_CONFIG}>
          <BarChart
            data={sortedData}
            layout="vertical"
            margin={{ top: 0, right: 36, bottom: 0, left: 0 }}
            barCategoryGap={12}
          >
            <XAxis type="number" domain={[0, CHART_DOMAIN_MAX]} hide />
            <YAxis dataKey="team" type="category" hide />
            <Bar
              barSize={BAR_HEIGHT}
              dataKey="value"
              isAnimationActive={false}
              radius={4}
              shape={<IssuesCompletedBarShape hoveredTeam={hoveredTeam} selectedTeam={selectedTeam} />}
            >
              {sortedData.map((entry) => (
                <Cell
                  key={entry.team}
                  fill={
                    selectedTeam === entry.team
                      ? entry.hoverFill
                      : hoveredTeam === entry.team
                        ? entry.hoverFill
                        : entry.fill
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
