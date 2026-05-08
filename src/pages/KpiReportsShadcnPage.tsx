import { Link } from "react-router-dom";
import { CanvasSidebarToggle } from "../components/surveys/CanvasSidebarToggle";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis
} from "recharts";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/shadcn/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/shadcn/ui/chart";

const cycleTimeData = [
  { sprint: "W1", hours: 42 },
  { sprint: "W2", hours: 38 },
  { sprint: "W3", hours: 34 },
  { sprint: "W4", hours: 29 },
  { sprint: "W5", hours: 24 },
  { sprint: "W6", hours: 22 }
];

const investmentData = [
  { bucket: "Feature", value: 44 },
  { bucket: "Infra", value: 24 },
  { bucket: "Support", value: 18 },
  { bucket: "Debt", value: 14 }
];

const issuesCompletedData = [
  { sprint: "W1", count: 14 },
  { sprint: "W2", count: 18 },
  { sprint: "W3", count: 17 },
  { sprint: "W4", count: 21 },
  { sprint: "W5", count: 24 },
  { sprint: "W6", count: 26 }
];

const bugResolutionData = [
  { sprint: "W1", hours: 19 },
  { sprint: "W2", hours: 16 },
  { sprint: "W3", hours: 14 },
  { sprint: "W4", hours: 12 },
  { sprint: "W5", hours: 11 },
  { sprint: "W6", hours: 9 }
];

const areaChartConfig = {
  hours: {
    label: "Hours",
    color: "var(--color-chart-2)"
  },
  count: {
    label: "Issues",
    color: "var(--color-chart-1)"
  }
} satisfies ChartConfig;

const barChartConfig = {
  value: {
    label: "Share %",
    color: "var(--color-chart-3)"
  }
} satisfies ChartConfig;

export function KpiReportsShadcnPage({
  onSidebarToggle,
  showSidebarToggle
}: {
  onSidebarToggle: () => void;
  showSidebarToggle: boolean;
}) {
  return (
    <section className="survey-main-canvas survey-kpi-report-shell dark" aria-label="KPI report shadcn experiment page">
      <div className="min-h-full overflow-auto bg-background text-foreground">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-8 py-8">
          <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-2">
              {showSidebarToggle ? <CanvasSidebarToggle className="mb-3" onToggle={onSidebarToggle} /> : null}
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Shadcn Experiment
              </p>
              <div className="space-y-1">
                <h1 className="text-4xl font-semibold tracking-tight">KPI report</h1>
                <p className="max-w-2xl text-sm text-muted-foreground">
                  A branch-only exploration of how the KPI surface feels when rebuilt with shadcn/ui
                  cards, buttons, and chart primitives.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="outline">
                <Link to="/reports/kpis">Open current KPI page</Link>
              </Button>
              <Button>Share snapshot</Button>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card className="border-border/70 bg-card/90">
              <CardHeader>
                <CardTitle>Cycle time</CardTitle>
                <CardDescription>Time it takes to complete an issue</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-44 w-full" config={areaChartConfig}>
                  <AreaChart data={cycleTimeData} margin={{ left: -16, right: 8, top: 8 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis axisLine={false} dataKey="sprint" tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} width={28} />
                    <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
                    <Area
                      dataKey="hours"
                      fill="var(--color-hours)"
                      fillOpacity={0.18}
                      stroke="var(--color-hours)"
                      strokeWidth={2}
                      type="monotone"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/90">
              <CardHeader>
                <CardTitle>Investments</CardTitle>
                <CardDescription>Where did we spend our time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-44 w-full" config={barChartConfig}>
                  <BarChart data={investmentData} margin={{ left: -12, right: 8, top: 8 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis axisLine={false} dataKey="bucket" tickLine={false} />
                    <YAxis axisLine={false} tickFormatter={(value) => `${value}%`} tickLine={false} width={30} />
                    <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
                    <Bar dataKey="value" fill="var(--color-value)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/90">
              <CardHeader>
                <CardTitle>Issues completed</CardTitle>
                <CardDescription>How many issues are completed</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-44 w-full" config={areaChartConfig}>
                  <AreaChart data={issuesCompletedData} margin={{ left: -16, right: 8, top: 8 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis axisLine={false} dataKey="sprint" tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} width={28} />
                    <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
                    <Area
                      dataKey="count"
                      fill="var(--color-count)"
                      fillOpacity={0.18}
                      stroke="var(--color-count)"
                      strokeWidth={2}
                      type="monotone"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/90">
              <CardHeader>
                <CardTitle>Bug resolution time</CardTitle>
                <CardDescription>How fast bugs are resolved</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-44 w-full" config={areaChartConfig}>
                  <AreaChart data={bugResolutionData} margin={{ left: -16, right: 8, top: 8 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis axisLine={false} dataKey="sprint" tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} width={28} />
                    <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
                    <Area
                      dataKey="hours"
                      fill="var(--color-hours)"
                      fillOpacity={0.18}
                      stroke="var(--color-hours)"
                      strokeWidth={2}
                      type="monotone"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
