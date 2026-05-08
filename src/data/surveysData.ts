export interface SidebarItem {
  label: string;
  icon: string;
  active?: boolean;
  accent?: string;
}

export interface HeatmapRow {
  label: string;
  values: Array<number | null>;
}

export interface SurveyCellSelection {
  rowLabel: string;
  columnLabel: string;
  value: number | null;
  rowValues: Array<number | null>;
}

export interface SurveyComment {
  sentiment: "negative" | "mixed" | "neutral" | "positive";
  text: string;
}

export interface SurveyCellDetails {
  title: string;
  team: string;
  average: string;
  previousChange: string;
  previousDirection: "up" | "down" | "flat";
  healthLabel: string;
  healthTone: "good" | "watch" | "risk" | "none";
  distribution: number[];
  summary: string;
  commentCount: number;
  commentHeading: string;
  comments: SurveyComment[];
}

export interface SurveyMeta {
  id: string;
  menuLabel: string;
  rangeLabel: string;
  reportDate: string;
  status: "completed" | "scheduled";
  badgeLabel?: string;
  scheduledStartLabel?: string;
  scheduledRelativeLabel?: string;
}

export interface SurveyDataset extends SurveyMeta {
  columns: string[];
  rows: HeatmapRow[];
}

export type SurveyTabId = "results" | "report" | "participation";

export const surveyParticipationRate = 87;

export const topTabs = [
  { id: "results", label: "Results" },
  { id: "report", label: "Report" },
  { id: "participation", label: "Participation", disabled: true }
] as const;

export const mainNavigation: SidebarItem[] = [
  { label: "Delivery", icon: "bars" },
  { label: "Investments", icon: "pie" },
  { label: "Initiatives", icon: "target" },
  { label: "Surveys", icon: "comment", active: true },
  { label: "All reports", icon: "grid" }
];

export const teamNavigation: SidebarItem[] = [
  { label: "R&D", icon: "trend", accent: "orange" },
  { label: "Platform", icon: "layers", accent: "cyan" },
  { label: "Web", icon: "window", accent: "blue" },
  { label: "Integrations", icon: "plug", accent: "purple" }
];

export const pinnedReports: SidebarItem[] = [
  { label: "KPIs", icon: "sparkle", accent: "indigo" },
  { label: "DORA", icon: "shield", accent: "green" },
  { label: "Estimation accuracy", icon: "hash", accent: "pink" }
];

export const utilityNavigation: SidebarItem[] = [
  { label: "Invite people", icon: "user-plus" },
  { label: "Teams", icon: "users" },
  { label: "Settings", icon: "gear" }
];

const teamLabels = [
  "Platform",
  "Integrations",
  "R&D",
  "Web",
  "Data",
  "Mobile",
  "DevOps",
  "Security",
  "Product Engineering"
] as const;

const questionLabels = [
  "CI/CD",
  "Clear direction",
  "Code review",
  "Codebase quality",
  "Cross-team collaboration",
  "Production debugging",
  "Requirements",
  "Meetings productiveness",
  "Deep work",
  "Documentation",
  "Releases",
  "Team processes",
  "Incident response"
] as const;

function createSeededRandom(seed: number) {
  let current = seed;

  return () => {
    current = (current * 1664525 + 1013904223) % 4294967296;
    return current / 4294967296;
  };
}

function roundToTenth(value: number) {
  return Math.max(1, Math.min(5, Math.round(value * 10) / 10));
}

function averageOf(values: Array<number | null>) {
  const scoredValues = values.filter((value): value is number => value !== null);

  if (scoredValues.length === 0) {
    return null;
  }

  const total = scoredValues.reduce((sum, value) => sum + value, 0);
  return Number((total / scoredValues.length).toFixed(1));
}

function clampScore(value: number) {
  return roundToTenth(Math.max(1, Math.min(5, value)));
}

function tuneGeneratedRow(label: string, values: Array<number | null>, random: () => number) {
  const outlierRows = new Set(["CI/CD", "Code review", "Releases"]);

  const tunedValues = values.map((value, index) => {
    if (value === null) {
      return value;
    }

    let nextValue = value;

    if ((label.length + index) % 4 === 0 && random() < 0.32) {
      nextValue -= 0.5 + random() * 0.8;
    } else if (random() < 0.1) {
      nextValue -= 0.3 + random() * 0.5;
    }

    if (outlierRows.has(label)) {
      nextValue -= 1.05 + random() * 0.55;

      if (index % 3 === 1 || random() < 0.24) {
        nextValue -= 0.35 + random() * 0.45;
      }
    }

    return clampScore(nextValue);
  });

  if (!outlierRows.has(label)) {
    return tunedValues;
  }

  let guard = 0;

  while ((averageOf(tunedValues) ?? 5) >= 3 && guard < 12) {
    const weakestIndex = tunedValues.findIndex((value) => value !== null && value > 1.2);

    if (weakestIndex === -1) {
      break;
    }

    tunedValues[weakestIndex] = clampScore((tunedValues[weakestIndex] ?? 1) - 0.35);
    guard += 1;
  }

  return tunedValues;
}

function buildRandomizedHeatmap(seed: number, liftAdjustment = 0) {
  const random = createSeededRandom(seed);
  const randomizedTeamLabels = [...teamLabels];

  const generatedRows = questionLabels.map((label, rowIndex) => {
    const rawValues = randomizedTeamLabels.map((_, columnIndex) => {
      const roll = random();

      if ((rowIndex + columnIndex) % 13 === 0 && roll < 0.08) {
        return null;
      }

      const base = 2.6 + random() * 2.2;
      const rowBias = ((rowIndex % 5) - 2) * 0.12;
      const columnBias = ((columnIndex % 4) - 1.5) * 0.1;
      const lift = 0.52 + liftAdjustment;

      return roundToTenth(base + rowBias + columnBias + lift);
    });

    return { label, values: tuneGeneratedRow(label, rawValues, random) };
  });

  const sortedColumns = randomizedTeamLabels
    .map((label, index) => ({
      label,
      index,
      average: averageOf(generatedRows.map((row) => row.values[index])) ?? Number.POSITIVE_INFINITY
    }))
    .sort((left, right) => left.average - right.average);

  const orderedTeamLabels = sortedColumns.map((column) => column.label);
  const sortedQuestionRows = generatedRows
    .map((row) => {
      const sortedValues = sortedColumns.map((column) => row.values[column.index]);
      const rowAverage = averageOf(sortedValues);

      return {
        label: row.label,
        values: [rowAverage, ...sortedValues] as Array<number | null>,
        average: rowAverage ?? Number.POSITIVE_INFINITY
      };
    })
    .sort((left, right) => left.average - right.average)
    .map(({ label, values }) => ({ label, values }));

  const averageRowValues = orderedTeamLabels.map((_, index) =>
    averageOf(sortedQuestionRows.map((row) => row.values[index + 1]))
  );
  const overallAverage = averageOf(averageRowValues);

  return {
    columns: ["Average", ...orderedTeamLabels],
    rows: [{ label: "Average", values: [overallAverage, ...averageRowValues] }, ...sortedQuestionRows] satisfies HeatmapRow[]
  };
}

const surveyDatasetDefinitions: Array<Omit<SurveyDataset, "columns" | "rows"> & { seed: number; liftAdjustment?: number }> = [
  {
    id: "mar-2025-scheduled",
    menuLabel: "Mar 25, 2025",
    rangeLabel: "25 March, 2025",
    reportDate: "25 March, 2025",
    status: "scheduled",
    badgeLabel: "Scheduled",
    scheduledStartLabel: "25 March, 2025",
    scheduledRelativeLabel: "in 20 hours",
    seed: 91,
    liftAdjustment: 0.18
  },
  {
    id: "dec-2025",
    menuLabel: "17 Dec, 2025",
    rangeLabel: "17-24 December, 2025",
    reportDate: "17 December, 2025",
    status: "completed",
    seed: 42,
    liftAdjustment: 0
  },
  {
    id: "mar-2025",
    menuLabel: "Mar 31, 2025",
    rangeLabel: "31 March-7 April, 2025",
    reportDate: "31 March, 2025",
    status: "completed",
    seed: 33,
    liftAdjustment: -0.08
  },
  {
    id: "apr-2024",
    menuLabel: "Apr 1, 2024",
    rangeLabel: "1-8 April, 2024",
    reportDate: "1 April, 2024",
    status: "completed",
    seed: 24,
    liftAdjustment: -0.14
  }
];

export const surveys: SurveyDataset[] = surveyDatasetDefinitions.map(({ seed, liftAdjustment, ...survey }) => ({
  ...survey,
  ...buildRandomizedHeatmap(seed, liftAdjustment)
}));

export function getOrderedSurveys() {
  return [...surveys].sort((left, right) => {
    if (left.status === "scheduled" && right.status !== "scheduled") {
      return -1;
    }

    if (right.status === "scheduled" && left.status !== "scheduled") {
      return 1;
    }

    return surveyDatasetDefinitions.findIndex((survey) => survey.id === left.id) -
      surveyDatasetDefinitions.findIndex((survey) => survey.id === right.id);
  });
}

export function getDefaultSurveyId() {
  return surveys.find((survey) => survey.status === "completed")?.id ?? surveys[0]?.id ?? "";
}

export function getSurveyById(surveyId: string) {
  return surveys.find((survey) => survey.id === surveyId) ?? surveys[0];
}

export function getUpcomingSurvey() {
  return surveys.find((survey) => survey.status === "scheduled") ?? null;
}

const defaultSurvey = getSurveyById(getDefaultSurveyId());

export const orderedHeatmapColumns = defaultSurvey.columns;
export const heatmapColumns = orderedHeatmapColumns;
export const heatmapRows: HeatmapRow[] = defaultSurvey.rows;

const detailCopyByRow: Record<string, { summary: string; heading: string; comments: SurveyComment[] }> = {
  "Code review": {
    summary:
      "Heavy technical debt slows down development. Review expectations are uneven, and long review loops make it harder for the team to keep momentum through delivery.",
    heading: "Test coverage is comprehensive",
    comments: [
      { sentiment: "negative", text: "Strongly disagree. The priority and urgency are not usually clear in review requests." },
      { sentiment: "negative", text: "Strongly disagree. Review quality depends too much on who happens to pick things up." },
      { sentiment: "mixed", text: "Disagree. Too many requests come through different channels and context gets lost between systems." },
      { sentiment: "mixed", text: "Disagree. I get pinged while focusing on work and the context switch is manageable but disruptive." },
      { sentiment: "mixed", text: "Disagree. We have standards, but they are not applied consistently across services." },
      { sentiment: "positive", text: "Agree. Reviews feel much smoother when ownership is explicit and the code area is well documented." }
    ]
  },
  Documentation: {
    summary:
      "Documentation quality varies by team. Strong examples exist, but reference material is often incomplete when engineers need to make changes quickly.",
    heading: "Docs are easy to trust",
    comments: [
      { sentiment: "negative", text: "Strongly disagree. I often need to ask around before I can find the latest documentation." },
      { sentiment: "mixed", text: "Disagree. The right information exists but is spread across too many places." },
      { sentiment: "neutral", text: "Neutral. The newest services are fairly well documented, but older areas are harder to navigate." },
      { sentiment: "positive", text: "Agree. When docs are paired with examples, onboarding is noticeably faster." }
    ]
  },
  default: {
    summary:
      "This area shows a meaningful spread across teams. Feedback suggests the experience is workable, but consistency and clarity still have room to improve.",
    heading: "Team sentiment snapshot",
    comments: [
      { sentiment: "negative", text: "Strongly disagree. The current workflow creates avoidable friction for day-to-day execution." },
      { sentiment: "mixed", text: "Disagree. The process works, but too much context has to be rebuilt every time." },
      { sentiment: "neutral", text: "Neutral. We can usually get through it, but the quality of the experience depends on the project." },
      { sentiment: "positive", text: "Agree. Clear ownership and better tooling make this feel much healthier." }
    ]
  }
};

function getHealthTone(value: number | null): SurveyCellDetails["healthTone"] {
  if (value === null) {
    return "none";
  }
  if (value >= 4) {
    return "good";
  }
  if (value >= 2.5) {
    return "watch";
  }
  return "risk";
}

function getHealthLabel(tone: SurveyCellDetails["healthTone"]) {
  if (tone === "good") {
    return "Good";
  }
  if (tone === "watch") {
    return "Watch";
  }
  if (tone === "risk") {
    return "At risk";
  }
  return "No data";
}

function buildDistribution(values: Array<number | null>) {
  const buckets = [0, 0, 0, 0, 0];

  values.forEach((value) => {
    if (value === null) {
      return;
    }
    if (value <= 1.5) {
      buckets[0] += 1;
    } else if (value <= 2.5) {
      buckets[1] += 1;
    } else if (value <= 3.5) {
      buckets[2] += 1;
    } else if (value <= 4.5) {
      buckets[3] += 1;
    } else {
      buckets[4] += 1;
    }
  });

  return buckets;
}

function buildPreviousDelta(selection: SurveyCellSelection) {
  if (selection.value === null) {
    return { value: "0.0", direction: "flat" as const };
  }

  const seed = (selection.rowLabel.length * 7 + selection.columnLabel.length * 3) % 9;
  const delta = (seed - 3) / 10;

  if (delta > 0) {
    return { value: delta.toFixed(1), direction: "up" as const };
  }
  if (delta < 0) {
    return { value: Math.abs(delta).toFixed(1), direction: "down" as const };
  }
  return { value: "0.0", direction: "flat" as const };
}

export function getSurveyCellDetails(selection: SurveyCellSelection, surveyId?: string): SurveyCellDetails {
  const copy = detailCopyByRow[selection.rowLabel] ?? detailCopyByRow.default;
  const delta = buildPreviousDelta(selection);
  const tone = getHealthTone(selection.value);
  void (surveyId ? getSurveyById(surveyId) : defaultSurvey);

  return {
    title: selection.rowLabel,
    team: selection.columnLabel,
    average: selection.value === null ? "-" : selection.value.toFixed(1),
    previousChange: delta.value,
    previousDirection: delta.direction,
    healthLabel: getHealthLabel(tone),
    healthTone: tone,
    distribution: buildDistribution(selection.rowValues),
    summary: copy.summary,
    commentCount: copy.comments.length + 9,
    commentHeading: copy.heading,
    comments: copy.comments
  };
}
