import { BugResolutionTimeLineChart, CycleTimeLineChart } from "../components/charts/CycleTimeLineChart";
import { useEffect, useRef, useState } from "react";
import { arrayMove } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { InvestmentsChart } from "../components/charts/InvestmentsChart";
import { IssuesCompletedBarChart } from "../components/charts/IssuesCompletedBarChart";
import { SurveyIcon } from "../components/surveys/SurveyIcons";
import { CanvasSidebarToggle } from "../components/surveys/CanvasSidebarToggle";
import { SurveyPicker } from "../components/surveys/SurveyPicker";
import avatar0 from "../assets/avatars/avatar-0.png";
import avatar1 from "../assets/avatars/avatar-1.png";
import avatar2 from "../assets/avatars/avatar-2.png";
import avatar3 from "../assets/avatars/avatar-3.png";
import avatar4 from "../assets/avatars/avatar-4.png";
import { Button } from "../components/ui/Button";
import { DrillInPanel } from "../components/ui/DrillInPanel";
import { IconButton } from "../components/ui/IconButton";
import { toast } from "../components/ui/toast";
import { isWorkType, WorkTypeBadge } from "../components/ui/WorkTypeBadge";
import { SURVEY_DRAWER_TRANSITION_MS } from "../constants/animation";

const KPI_CARDS = [
  {
    title: "Cycle time",
    description: "Time it takes to complete an issue"
  },
  {
    title: "Investments",
    description: "Where did we spend our time"
  },
  {
    title: "Team performance",
    description: "Issues completed per team"
  },
  {
    title: "Bug resolution time",
    description: "How fast bugs are resolved"
  }
] as const;

const KPI_CARD_ACTIONS = [
  { value: "edit", label: "Edit", iconName: "edit" },
  { value: "delete", label: "Delete", iconName: "delete" }
] as const;

type KpiCard = (typeof KPI_CARDS)[number];

type KpiDrillInSelection = {
  breakdownLabel: string;
  metricTitle: string;
};

type KpiDrillInValue = {
  label: string;
  markerColor?: string;
  value: string;
};

type KpiDrillInIssueRow = {
  chartValue?: number;
  title: string;
  breakdown: string;
};

type KpiDrillInContent = {
  hideIssueBreakdownColumn?: boolean;
  issueColumnLabel: string;
  issueVariant?: "default" | "bar" | "badge";
  issues: readonly KpiDrillInIssueRow[];
  values: readonly KpiDrillInValue[];
};

type KpiAssigneeAvatarKey = "avatar0" | "avatar1" | "avatar2" | "avatar3" | "avatar4";

const MONTH_LABELS = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December"
} as const;

const ASSIGNEE_AVATARS: Record<KpiAssigneeAvatarKey, string> = {
  avatar0,
  avatar1,
  avatar2,
  avatar3,
  avatar4
};

type KpiDrillInRow = {
  id: string;
  title: string;
  status: string;
  priorityIcon: string;
  priorityClassName: string;
  estimate: string;
  assignee: string;
  assigneeAvatar: KpiAssigneeAvatarKey;
};

const CYCLE_TIME_DRILL_IN_ROWS: readonly KpiDrillInRow[] = [
  {
    id: "ENG-314",
    title: "Unify deployment failure notifications",
    status: "Done",
    priorityIcon: "priority-high",
    priorityClassName: "survey-kpi-drill-in-priority-high",
    estimate: "3",
    assignee: "AL",
    assigneeAvatar: "avatar0"
  },
  {
    id: "ENG-298",
    title: "Refactor cycle time calculation for reopened issues",
    status: "Done",
    priorityIcon: "priority-highest",
    priorityClassName: "survey-kpi-drill-in-priority-highest",
    estimate: "5",
    assignee: "MK",
    assigneeAvatar: "avatar1"
  },
  {
    id: "ENG-276",
    title: "Trim stale automation jobs from worker queue",
    status: "Done",
    priorityIcon: "priority-medium",
    priorityClassName: "survey-kpi-drill-in-priority-medium",
    estimate: "2",
    assignee: "IR",
    assigneeAvatar: "avatar2"
  },
  {
    id: "ENG-265",
    title: "Fix retries for GitHub sync webhooks",
    status: "Done",
    priorityIcon: "priority-high",
    priorityClassName: "survey-kpi-drill-in-priority-high",
    estimate: "1",
    assignee: "TJ",
    assigneeAvatar: "avatar3"
  },
  {
    id: "ENG-244",
    title: "Stabilize report export formatting",
    status: "Done",
    priorityIcon: "priority-medium",
    priorityClassName: "survey-kpi-drill-in-priority-medium",
    estimate: "2",
    assignee: "AV",
    assigneeAvatar: "avatar4"
  },
  {
    id: "ENG-238",
    title: "Add ownership mapping for team drill-ins",
    status: "Done",
    priorityIcon: "priority-highest",
    priorityClassName: "survey-kpi-drill-in-priority-highest",
    estimate: "8",
    assignee: "LB",
    assigneeAvatar: "avatar2"
  },
  {
    id: "ENG-219",
    title: "Reconcile platform issue throughput with Jira labels",
    status: "Done",
    priorityIcon: "priority-low",
    priorityClassName: "survey-kpi-drill-in-priority-low",
    estimate: "3",
    assignee: "DN",
    assigneeAvatar: "avatar0"
  },
  {
    id: "ENG-208",
    title: "Improve report card hover hit areas",
    status: "Done",
    priorityIcon: "priority-lowest",
    priorityClassName: "survey-kpi-drill-in-priority-lowest",
    estimate: "1",
    assignee: "SK",
    assigneeAvatar: "avatar3"
  },
  {
    id: "ENG-194",
    title: "Patch missing values in KPI CSV export",
    status: "Done",
    priorityIcon: "priority-medium",
    priorityClassName: "survey-kpi-drill-in-priority-medium",
    estimate: "2",
    assignee: "OH",
    assigneeAvatar: "avatar4"
  }
] as const;

const INVESTMENTS_DRILL_IN_ROWS: readonly KpiDrillInRow[] = [
  {
    id: "ENG-412",
    title: "Ship workspace-level spending attribution by team",
    status: "Done",
    priorityIcon: "priority-highest",
    priorityClassName: "survey-kpi-drill-in-priority-highest",
    estimate: "8",
    assignee: "MK",
    assigneeAvatar: "avatar1"
  },
  {
    id: "ENG-401",
    title: "Break down feature work against maintenance allocation",
    status: "Done",
    priorityIcon: "priority-high",
    priorityClassName: "survey-kpi-drill-in-priority-high",
    estimate: "5",
    assignee: "AL",
    assigneeAvatar: "avatar0"
  },
  {
    id: "ENG-396",
    title: "Audit bug-fix tagging for missing engineering hours",
    status: "Done",
    priorityIcon: "priority-medium",
    priorityClassName: "survey-kpi-drill-in-priority-medium",
    estimate: "3",
    assignee: "TJ",
    assigneeAvatar: "avatar3"
  },
  {
    id: "ENG-388",
    title: "Normalize Jira work types for investment reporting",
    status: "Done",
    priorityIcon: "priority-high",
    priorityClassName: "survey-kpi-drill-in-priority-high",
    estimate: "5",
    assignee: "IR",
    assigneeAvatar: "avatar2"
  },
  {
    id: "ENG-377",
    title: "Fix maintenance hours rollover in quarterly snapshots",
    status: "Done",
    priorityIcon: "priority-medium",
    priorityClassName: "survey-kpi-drill-in-priority-medium",
    estimate: "2",
    assignee: "AV",
    assigneeAvatar: "avatar4"
  },
  {
    id: "ENG-361",
    title: "Backfill category mappings for historic roadmap work",
    status: "Done",
    priorityIcon: "priority-low",
    priorityClassName: "survey-kpi-drill-in-priority-low",
    estimate: "3",
    assignee: "DN",
    assigneeAvatar: "avatar0"
  }
] as const;

const ISSUES_COMPLETED_DRILL_IN_ROWS: readonly KpiDrillInRow[] = [
  {
    id: "PLT-204",
    title: "Reduce flaky deploy checks blocking issue throughput",
    status: "Done",
    priorityIcon: "priority-high",
    priorityClassName: "survey-kpi-drill-in-priority-high",
    estimate: "3",
    assignee: "AL",
    assigneeAvatar: "avatar0"
  },
  {
    id: "PLT-198",
    title: "Parallelize snapshot regeneration jobs in platform queue",
    status: "Done",
    priorityIcon: "priority-highest",
    priorityClassName: "survey-kpi-drill-in-priority-highest",
    estimate: "5",
    assignee: "MK",
    assigneeAvatar: "avatar1"
  },
  {
    id: "PLT-191",
    title: "Stabilize schema drift alerts for workspace replicas",
    status: "Done",
    priorityIcon: "priority-medium",
    priorityClassName: "survey-kpi-drill-in-priority-medium",
    estimate: "2",
    assignee: "TJ",
    assigneeAvatar: "avatar3"
  },
  {
    id: "PLT-186",
    title: "Collapse duplicate audit events in export pipeline",
    status: "Done",
    priorityIcon: "priority-medium",
    priorityClassName: "survey-kpi-drill-in-priority-medium",
    estimate: "2",
    assignee: "AV",
    assigneeAvatar: "avatar4"
  },
  {
    id: "PLT-179",
    title: "Add retry budget metrics to internal status pages",
    status: "Done",
    priorityIcon: "priority-low",
    priorityClassName: "survey-kpi-drill-in-priority-low",
    estimate: "1",
    assignee: "DN",
    assigneeAvatar: "avatar0"
  }
] as const;

const BUG_RESOLUTION_DRILL_IN_ROWS: readonly KpiDrillInRow[] = [
  {
    id: "BUG-172",
    title: "Patch race condition in webhook retry backoff",
    status: "Done",
    priorityIcon: "priority-highest",
    priorityClassName: "survey-kpi-drill-in-priority-highest",
    estimate: "5",
    assignee: "IR",
    assigneeAvatar: "avatar2"
  },
  {
    id: "BUG-168",
    title: "Restore incident timeline ordering in support exports",
    status: "Done",
    priorityIcon: "priority-high",
    priorityClassName: "survey-kpi-drill-in-priority-high",
    estimate: "3",
    assignee: "TJ",
    assigneeAvatar: "avatar3"
  },
  {
    id: "BUG-159",
    title: "Fix stale cache invalidation in issue details panel",
    status: "Done",
    priorityIcon: "priority-medium",
    priorityClassName: "survey-kpi-drill-in-priority-medium",
    estimate: "2",
    assignee: "AV",
    assigneeAvatar: "avatar4"
  },
  {
    id: "BUG-151",
    title: "Resolve broken assignee lookups for reopened tickets",
    status: "Done",
    priorityIcon: "priority-medium",
    priorityClassName: "survey-kpi-drill-in-priority-medium",
    estimate: "2",
    assignee: "AL",
    assigneeAvatar: "avatar0"
  },
  {
    id: "BUG-147",
    title: "Reduce time-to-triage for platform outage regressions",
    status: "Done",
    priorityIcon: "priority-low",
    priorityClassName: "survey-kpi-drill-in-priority-low",
    estimate: "3",
    assignee: "MK",
    assigneeAvatar: "avatar1"
  },
  {
    id: "BUG-133",
    title: "Repair broken CSV encoding in legacy issue imports",
    status: "Done",
    priorityIcon: "priority-lowest",
    priorityClassName: "survey-kpi-drill-in-priority-lowest",
    estimate: "1",
    assignee: "DN",
    assigneeAvatar: "avatar0"
  }
] as const;

const KPI_DRILL_IN_ROW_VARIANTS: readonly (readonly KpiDrillInRow[])[] = [
  CYCLE_TIME_DRILL_IN_ROWS,
  INVESTMENTS_DRILL_IN_ROWS,
  ISSUES_COMPLETED_DRILL_IN_ROWS,
  BUG_RESOLUTION_DRILL_IN_ROWS
] as const;

function getDrillInRows(selection: KpiDrillInSelection | null) {
  if (!selection) {
    return [] as const;
  }

  const seed = `${selection.metricTitle}:${selection.breakdownLabel}`;
  let hash = 0;

  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }

  return KPI_DRILL_IN_ROW_VARIANTS[hash % KPI_DRILL_IN_ROW_VARIANTS.length];
}
void getDrillInRows;

function KpiAssigneeAvatar({
  initials,
  avatarKey
}: {
  initials: string;
  avatarKey: KpiAssigneeAvatarKey;
}) {
  return (
    <span className="survey-kpi-assignee-avatar" aria-hidden="true">
      <img src={ASSIGNEE_AVATARS[avatarKey]} alt="" />
      <span className="survey-visually-hidden">{initials}</span>
    </span>
  );
}
void KpiAssigneeAvatar;

function formatDrillInBreakdownLabel(label: string) {
  const match = label.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:\s(\d+))?$/);

  if (!match) {
    return label;
  }

  const monthKey = match[1] as keyof typeof MONTH_LABELS;
  const cycleSuffix = match[2];
  const monthIndex = Object.keys(MONTH_LABELS).indexOf(monthKey);
  const fullMonth = MONTH_LABELS[monthKey];
  const year = cycleSuffix ? 2024 : 2023;
  const lastDayOfMonth = new Date(year, monthIndex + 1, 0).getDate();

  return `1-${lastDayOfMonth} ${fullMonth} ${year}`;
}

function getSelectionVariantIndex(selection: KpiDrillInSelection) {
  const seed = `${selection.metricTitle}:${selection.breakdownLabel}`;
  let hash = 0;

  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }

  return hash % 4;
}

function getIssuesCompletedTeamColor(team: string) {
  if (team === "Platform") {
    return "#06B6D4";
  }

  if (team === "Integrations") {
    return "#9061F9";
  }

  if (team === "R&D") {
    return "#FF5A1F";
  }

  if (team === "Web") {
    return "#3F83F8";
  }

  return undefined;
}

function getKpiDrillInContent(selection: KpiDrillInSelection | null): KpiDrillInContent {
  if (!selection) {
    return {
      issueColumnLabel: "Breakdown",
      issues: [],
      values: []
    };
  }

  const variantIndex = getSelectionVariantIndex(selection);

  if (selection.metricTitle === "Cycle time") {
    const variants = [
      {
        values: [
          { label: "Cycle time", markerColor: "#FF8A4C", value: "17.6 days" }
        ],
        issues: [
          { title: "Unify deployment failure notifications", breakdown: "18.4", chartValue: 18.4 },
          { title: "Refactor cycle time calculation for reopened issues", breakdown: "16.9", chartValue: 16.9 },
          { title: "Trim stale automation jobs from worker queue", breakdown: "14.1", chartValue: 14.1 },
          { title: "Fix retries for GitHub sync webhooks", breakdown: "12.7", chartValue: 12.7 },
          { title: "Stabilize export queue backpressure after peak survey loads", breakdown: "11.8", chartValue: 11.8 },
          { title: "Repair flaky audit sync retries for archived workspaces", breakdown: "10.6", chartValue: 10.6 },
          { title: "Unblock schema migrations stalled by approvals routing", breakdown: "9.8", chartValue: 9.8 },
          { title: "Shorten approval handoffs for customer-facing data fixes", breakdown: "9.2", chartValue: 9.2 },
          { title: "Reduce duplicate remediation loops in release checklists", breakdown: "8.7", chartValue: 8.7 },
          { title: "Remove bottlenecks from postmortem follow-up ownership", breakdown: "8.1", chartValue: 8.1 }
        ]
      },
      {
        values: [
          { label: "Cycle time", markerColor: "#FF8A4C", value: "14.9 days" }
        ],
        issues: [
          { title: "Patch missing values in KPI CSV export", breakdown: "15.8", chartValue: 15.8 },
          { title: "Reconcile platform issue throughput with Jira labels", breakdown: "14.4", chartValue: 14.4 },
          { title: "Improve report card hover hit areas", breakdown: "13.2", chartValue: 13.2 },
          { title: "Add ownership mapping for team drill-ins", breakdown: "12.9", chartValue: 12.9 },
          { title: "Clean up duplicate timeline events in issue lifecycle snapshots", breakdown: "11.7", chartValue: 11.7 },
          { title: "Reduce stale alert churn from reopened bug automations", breakdown: "10.9", chartValue: 10.9 },
          { title: "Speed up rollout approvals for regional workspace changes", breakdown: "10.2", chartValue: 10.2 },
          { title: "Consolidate fragmented runbooks for on-call remediation", breakdown: "9.8", chartValue: 9.8 },
          { title: "Eliminate duplicate checkpoint writes in export jobs", breakdown: "9.1", chartValue: 9.1 },
          { title: "Stabilize ownership reassignment after queue failovers", breakdown: "8.6", chartValue: 8.6 }
        ]
      },
      {
        values: [
          { label: "Cycle time", markerColor: "#FF8A4C", value: "18.3 days" }
        ],
        issues: [
          { title: "Normalize Jira work types for investment reporting", breakdown: "19.6", chartValue: 19.6 },
          { title: "Backfill category mappings for historic roadmap work", breakdown: "18.1", chartValue: 18.1 },
          { title: "Audit bug-fix tagging for missing engineering hours", breakdown: "17.5", chartValue: 17.5 },
          { title: "Ship workspace-level spending attribution by team", breakdown: "16.3", chartValue: 16.3 },
          { title: "Harden incident replay jobs for replicated analytics streams", breakdown: "15.4", chartValue: 15.4 },
          { title: "Collapse duplicate ownership transitions in support escalations", breakdown: "14.8", chartValue: 14.8 },
          { title: "Untangle approval queues tied to dependent release tracks", breakdown: "14.2", chartValue: 14.2 },
          { title: "Repair legacy import workflows blocked by stale metadata", breakdown: "13.7", chartValue: 13.7 },
          { title: "Re-sequence quarterly maintenance windows across teams", breakdown: "13.1", chartValue: 13.1 },
          { title: "Reduce handoff churn in compliance-driven fixes", breakdown: "12.6", chartValue: 12.6 }
        ]
      },
      {
        values: [
          { label: "Cycle time", markerColor: "#FF8A4C", value: "12.7 days" }
        ],
        issues: [
          { title: "Collapse duplicate audit events in export pipeline", breakdown: "13.5", chartValue: 13.5 },
          { title: "Stabilize schema drift alerts for workspace replicas", breakdown: "12.8", chartValue: 12.8 },
          { title: "Parallelize snapshot regeneration jobs in platform queue", breakdown: "12.1", chartValue: 12.1 },
          { title: "Reduce flaky deploy checks blocking issue throughput", breakdown: "11.6", chartValue: 11.6 },
          { title: "Rebuild missing worker checkpoints after queue failover tests", breakdown: "10.7", chartValue: 10.7 },
          { title: "Shorten review latency for support-owned report regressions", breakdown: "9.9", chartValue: 9.9 },
          { title: "Cut approval lag from nightly replication maintenance", breakdown: "9.3", chartValue: 9.3 },
          { title: "Refine incident triage routing for export failures", breakdown: "8.8", chartValue: 8.8 },
          { title: "De-duplicate backlog items generated by flaky sync retries", breakdown: "8.2", chartValue: 8.2 },
          { title: "Tighten workspace repair playbooks for faster closes", breakdown: "7.6", chartValue: 7.6 }
        ]
      }
    ] as const;

    return {
      issueColumnLabel: "Cycle time (d)",
      issueVariant: "bar",
      issues: variants[variantIndex].issues,
      values: variants[variantIndex].values
    };
  }

  if (selection.metricTitle === "Investments") {
    const workTypeOrder = {
      Features: 0,
      Bugs: 1,
      Maintenance: 2
    } as const;

    const variants = [
      {
        values: [
          { label: "Features", markerColor: "#AC94FA", value: "16.2" },
          { label: "Bugs", markerColor: "#F98080", value: "11.1" },
          { label: "Maintenance", markerColor: "#31C48D", value: "4.1" }
        ],
        issues: [
          { title: "Ship workspace-level spending attribution by team", breakdown: "Features" },
          { title: "Break down feature work against maintenance allocation", breakdown: "Features" },
          { title: "Audit bug-fix tagging for missing engineering hours", breakdown: "Bugs" },
          { title: "Normalize Jira work types for investment reporting", breakdown: "Maintenance" },
          { title: "Backfill product roadmap effort into quarterly snapshots", breakdown: "Features" },
          { title: "Repair broken issue import mapping for support escalations", breakdown: "Bugs" },
          { title: "Rotate stale cleanup jobs into scheduled maintenance windows", breakdown: "Maintenance" },
          { title: "Expand feature attribution to shared platform initiatives", breakdown: "Features" },
          { title: "Fix duplicate defect categorization in time tracking exports", breakdown: "Bugs" },
          { title: "Tune recurring housekeeping jobs for idle environments", breakdown: "Maintenance" }
        ]
      },
      {
        values: [
          { label: "Features", markerColor: "#AC94FA", value: "18.9" },
          { label: "Bugs", markerColor: "#F98080", value: "13.6" },
          { label: "Maintenance", markerColor: "#31C48D", value: "5.8" }
        ],
        issues: [
          { title: "Fix maintenance hours rollover in quarterly snapshots", breakdown: "Maintenance" },
          { title: "Backfill category mappings for historic roadmap work", breakdown: "Features" },
          { title: "Patch race condition in webhook retry backoff", breakdown: "Bugs" },
          { title: "Restore incident timeline ordering in support exports", breakdown: "Bugs" },
          { title: "Expand attribution rules for customer-facing feature launches", breakdown: "Features" },
          { title: "Clean up duplicate defect records from mirrored projects", breakdown: "Bugs" },
          { title: "Stabilize nightly pruning jobs for archived workspaces", breakdown: "Maintenance" },
          { title: "Reclassify platform roadmap spikes under feature capacity", breakdown: "Features" },
          { title: "Tighten bug-tag validation in engineering time audits", breakdown: "Bugs" },
          { title: "Refresh maintenance calendars across shared environments", breakdown: "Maintenance" }
        ]
      },
      {
        values: [
          { label: "Features", markerColor: "#AC94FA", value: "21.7" },
          { label: "Bugs", markerColor: "#F98080", value: "15.1" },
          { label: "Maintenance", markerColor: "#31C48D", value: "7.4" }
        ],
        issues: [
          { title: "Fix stale cache invalidation in issue details panel", breakdown: "Maintenance" },
          { title: "Resolve broken assignee lookups for reopened tickets", breakdown: "Features" },
          { title: "Reduce time-to-triage for platform outage regressions", breakdown: "Bugs" },
          { title: "Repair broken CSV encoding in legacy issue imports", breakdown: "Maintenance" },
          { title: "Extend feature allocation to experimental delivery tracks", breakdown: "Features" },
          { title: "Correct bug spend totals after project key migrations", breakdown: "Bugs" },
          { title: "Normalize preventive upkeep tasks in monthly planning", breakdown: "Maintenance" },
          { title: "Capture feature spikes from partner integration launches", breakdown: "Features" },
          { title: "Repair defect categorization after backlog consolidation", breakdown: "Bugs" },
          { title: "Schedule recurring cleanup for deprecated analytics jobs", breakdown: "Maintenance" }
        ]
      },
      {
        values: [
          { label: "Features", markerColor: "#AC94FA", value: "17.6" },
          { label: "Bugs", markerColor: "#F98080", value: "10.3" },
          { label: "Maintenance", markerColor: "#31C48D", value: "4.3" }
        ],
        issues: [
          { title: "Reduce flaky deploy checks blocking issue throughput", breakdown: "Features" },
          { title: "Parallelize snapshot regeneration jobs in platform queue", breakdown: "Maintenance" },
          { title: "Collapse duplicate audit events in export pipeline", breakdown: "Features" },
          { title: "Add retry budget metrics to internal status pages", breakdown: "Bugs" },
          { title: "Backfill missing feature tags for quarter-close summaries", breakdown: "Features" },
          { title: "Repair issue sync fallout in defect aging dashboards", breakdown: "Bugs" },
          { title: "Consolidate weekly maintenance routines across regions", breakdown: "Maintenance" },
          { title: "Model feature investment for cross-team platform bets", breakdown: "Features" },
          { title: "Patch duplicate defect imports from mirrored repositories", breakdown: "Bugs" },
          { title: "Retire obsolete housekeeping jobs in support workspaces", breakdown: "Maintenance" }
        ]
      }
    ] as const;

    return {
      issueColumnLabel: "Work type",
      issueVariant: "badge",
      issues: [...variants[variantIndex].issues].sort(
        (left, right) =>
          workTypeOrder[left.breakdown as keyof typeof workTypeOrder] -
          workTypeOrder[right.breakdown as keyof typeof workTypeOrder]
      ),
      values: variants[variantIndex].values
    };
  }

  if (selection.metricTitle === "Team performance") {
    const teamColor = getIssuesCompletedTeamColor(selection.breakdownLabel);

    const variants = [
      {
        values: [
          { label: "Completed", markerColor: teamColor, value: "301" }
        ],
        issues: [
          { title: "Reduce flaky deploy checks blocking issue throughput", breakdown: "14 issues" },
          { title: "Parallelize snapshot regeneration jobs in platform queue", breakdown: "11 issues" },
          { title: "Stabilize schema drift alerts for workspace replicas", breakdown: "9 issues" },
          { title: "Collapse duplicate audit events in export pipeline", breakdown: "8 issues" },
          { title: "Repair delayed incident exports in customer workspaces", breakdown: "8 issues" },
          { title: "Refine support triage automation for nightly batches", breakdown: "7 issues" },
          { title: "Tighten release readiness checks across platform repos", breakdown: "7 issues" },
          { title: "Rebuild missing observability alerts after failovers", breakdown: "6 issues" },
          { title: "Cut rerun volume from flaky migration backfills", breakdown: "5 issues" },
          { title: "Align replica health checks with updated queue policies", breakdown: "5 issues" }
        ]
      },
      {
        values: [
          { label: "Completed", markerColor: teamColor, value: "254" }
        ],
        issues: [
          { title: "Add retry budget metrics to internal status pages", breakdown: "13 issues" },
          { title: "Normalize Jira work types for investment reporting", breakdown: "10 issues" },
          { title: "Audit bug-fix tagging for missing engineering hours", breakdown: "8 issues" },
          { title: "Backfill category mappings for historic roadmap work", breakdown: "7 issues" },
          { title: "Repair missing release checkpoints in shared pipelines", breakdown: "7 issues" },
          { title: "Simplify queue ownership rules for integrations work", breakdown: "6 issues" },
          { title: "Consolidate duplicate support metrics across feeds", breakdown: "6 issues" },
          { title: "Reduce manual retries for broken webhook deliveries", breakdown: "5 issues" },
          { title: "Patch stale rollout gates in connector environments", breakdown: "4 issues" },
          { title: "Refresh internal runbooks for integrations incidents", breakdown: "4 issues" }
        ]
      },
      {
        values: [
          { label: "Completed", markerColor: teamColor, value: "208" }
        ],
        issues: [
          { title: "Ship workspace-level spending attribution by team", breakdown: "12 issues" },
          { title: "Patch race condition in webhook retry backoff", breakdown: "9 issues" },
          { title: "Fix stale cache invalidation in issue details panel", breakdown: "7 issues" },
          { title: "Resolve broken assignee lookups for reopened tickets", breakdown: "6 issues" },
          { title: "Reduce noisy replication alerts in delivery workflows", breakdown: "6 issues" },
          { title: "Repair backlog sync gaps after project archivals", breakdown: "5 issues" },
          { title: "Harden R&D release previews against data drift", breakdown: "5 issues" },
          { title: "Reconcile missing task histories in experiment tracking", breakdown: "4 issues" },
          { title: "Cut rerouted incidents from ownership mismatches", breakdown: "4 issues" },
          { title: "Stabilize export generation after schema promotions", breakdown: "3 issues" }
        ]
      },
      {
        values: [
          { label: "Completed", markerColor: teamColor, value: "85" }
        ],
        issues: [
          { title: "Restore incident timeline ordering in support exports", breakdown: "6 issues" },
          { title: "Repair broken CSV encoding in legacy issue imports", breakdown: "5 issues" },
          { title: "Fix maintenance hours rollover in quarterly snapshots", breakdown: "4 issues" },
          { title: "Break down feature work against maintenance allocation", breakdown: "3 issues" },
          { title: "Refresh browser-side caching for low-volume web reports", breakdown: "3 issues" },
          { title: "Repair missing screenshot attachments in issue summaries", breakdown: "2 issues" },
          { title: "Reduce stale comments in embedded release previews", breakdown: "2 issues" },
          { title: "Stabilize import handling for archived web workspaces", breakdown: "2 issues" },
          { title: "Patch delayed refreshes in client-side trend widgets", breakdown: "1 issue" },
          { title: "Normalize copied report links after routing changes", breakdown: "1 issue" }
        ]
      }
    ] as const;

    return {
      hideIssueBreakdownColumn: true,
      issueColumnLabel: "Completed",
      issueVariant: "default",
      issues: variants[variantIndex].issues,
      values: variants[variantIndex].values
    };
  }

  const bugResolutionVariants = [
    {
      values: [
        { label: "Resolution time", markerColor: "#F98080", value: "6.2 days" }
      ],
      issues: [
        { title: "Patch race condition in webhook retry backoff", breakdown: "5.8", chartValue: 5.8 },
        { title: "Restore incident timeline ordering in support exports", breakdown: "6.3", chartValue: 6.3 },
        { title: "Fix stale cache invalidation in issue details panel", breakdown: "6.7", chartValue: 6.7 },
        { title: "Resolve broken assignee lookups for reopened tickets", breakdown: "7.1", chartValue: 7.1 },
        { title: "Repair delayed pager escalations after incident reopen", breakdown: "7.5", chartValue: 7.5 },
        { title: "Reduce duplicate defect merges in support queues", breakdown: "7.8", chartValue: 7.8 },
        { title: "Stabilize root-cause tagging for recurring regressions", breakdown: "8.1", chartValue: 8.1 },
        { title: "Tighten bug reproduction steps in post-incident audits", breakdown: "8.5", chartValue: 8.5 },
        { title: "Reconcile missing outage notes in engineering exports", breakdown: "8.9", chartValue: 8.9 },
        { title: "Patch stale priority sync after customer escalations", breakdown: "9.2", chartValue: 9.2 }
      ]
    },
    {
      values: [
        { label: "Resolution time", markerColor: "#F98080", value: "8.1 days" }
      ],
      issues: [
        { title: "Reduce time-to-triage for platform outage regressions", breakdown: "8.4", chartValue: 8.4 },
        { title: "Repair broken CSV encoding in legacy issue imports", breakdown: "7.9", chartValue: 7.9 },
        { title: "Audit bug-fix tagging for missing engineering hours", breakdown: "7.6", chartValue: 7.6 },
        { title: "Normalize Jira work types for investment reporting", breakdown: "7.2", chartValue: 7.2 },
        { title: "Shorten replication rollback steps during platform incidents", breakdown: "6.8", chartValue: 6.8 },
        { title: "Consolidate duplicate defect ownership across services", breakdown: "6.5", chartValue: 6.5 },
        { title: "Resolve flaky browser-state bugs in issue drill-ins", breakdown: "6.1", chartValue: 6.1 },
        { title: "Repair alert deduplication for transient deployment faults", breakdown: "5.8", chartValue: 5.8 },
        { title: "Reduce manual triage overhead in connector regressions", breakdown: "5.4", chartValue: 5.4 },
        { title: "Patch missing RCA links in support-facing incident views", breakdown: "5.1", chartValue: 5.1 }
      ]
    },
    {
      values: [
        { label: "Resolution time", markerColor: "#F98080", value: "10.4 days" }
      ],
      issues: [
        { title: "Reduce flaky deploy checks blocking issue throughput", breakdown: "11.1", chartValue: 11.1 },
        { title: "Parallelize snapshot regeneration jobs in platform queue", breakdown: "10.8", chartValue: 10.8 },
        { title: "Collapse duplicate audit events in export pipeline", breakdown: "10.2", chartValue: 10.2 },
        { title: "Add retry budget metrics to internal status pages", breakdown: "9.5", chartValue: 9.5 },
        { title: "Repair inconsistent backlog routing after release freezes", breakdown: "9.1", chartValue: 9.1 },
        { title: "Shorten incident handoffs in platform escalation chains", breakdown: "8.8", chartValue: 8.8 },
        { title: "Stabilize defect imports after mirrored project syncs", breakdown: "8.4", chartValue: 8.4 },
        { title: "Reduce alert fatigue from noisy deployment regressions", breakdown: "8.1", chartValue: 8.1 },
        { title: "Normalize failure tagging in postmortem exports", breakdown: "7.7", chartValue: 7.7 },
        { title: "Repair broken context links in bug investigation views", breakdown: "7.3", chartValue: 7.3 }
      ]
    },
    {
      values: [
        { label: "Resolution time", markerColor: "#F98080", value: "13.7 days" }
      ],
      issues: [
        { title: "Ship workspace-level spending attribution by team", breakdown: "14.6", chartValue: 14.6 },
        { title: "Break down feature work against maintenance allocation", breakdown: "13.8", chartValue: 13.8 },
        { title: "Fix maintenance hours rollover in quarterly snapshots", breakdown: "13.1", chartValue: 13.1 },
        { title: "Backfill category mappings for historic roadmap work", breakdown: "12.4", chartValue: 12.4 },
        { title: "Repair brittle escalation flows across shared environments", breakdown: "11.8", chartValue: 11.8 },
        { title: "Reduce slow bug verification loops in compliance releases", breakdown: "11.3", chartValue: 11.3 },
        { title: "Stabilize ownership sync after merged support incidents", breakdown: "10.9", chartValue: 10.9 },
        { title: "Normalize regression tagging after high-severity outages", breakdown: "10.4", chartValue: 10.4 },
        { title: "Patch replay tools used for platform incident triage", breakdown: "10.1", chartValue: 10.1 },
        { title: "Shorten restore validation for customer-facing defects", breakdown: "9.7", chartValue: 9.7 }
      ]
    }
  ] as const;

  return {
    issueColumnLabel: "Resolution time (d)",
    issueVariant: "bar",
    issues: bugResolutionVariants[variantIndex].issues,
    values: bugResolutionVariants[variantIndex].values
  };
}

function renderCardBody(
  card: KpiCard,
  onOpenDrillIn: (selection: KpiDrillInSelection) => void,
  selectedBreakdownLabel: string | null
) {
  if (card.title === "Cycle time") {
    return (
      <CycleTimeLineChart
        className="survey-kpi-card-body survey-kpi-card-body-chart survey-kpi-chart-clickable"
        onSelectMonth={(month) => onOpenDrillIn({ metricTitle: card.title, breakdownLabel: month })}
        selectedMonth={selectedBreakdownLabel}
      />
    );
  }

  if (card.title === "Investments") {
    return (
      <InvestmentsChart
        className="survey-kpi-card-body survey-kpi-card-body-chart survey-kpi-chart-clickable"
        onSelectMonth={(month) => onOpenDrillIn({ metricTitle: card.title, breakdownLabel: month })}
        selectedMonth={selectedBreakdownLabel}
      />
    );
  }

  if (card.title === "Team performance") {
    return (
      <IssuesCompletedBarChart
        className="survey-kpi-card-body survey-kpi-card-body-chart survey-kpi-chart-clickable"
        onSelectTeam={(team) => onOpenDrillIn({ metricTitle: card.title, breakdownLabel: team })}
        selectedTeam={selectedBreakdownLabel}
      />
    );
  }

  if (card.title === "Bug resolution time") {
    return (
      <BugResolutionTimeLineChart
        className="survey-kpi-card-body survey-kpi-card-body-chart survey-kpi-chart-clickable"
        onSelectMonth={(month) => onOpenDrillIn({ metricTitle: card.title, breakdownLabel: month })}
        selectedMonth={selectedBreakdownLabel}
      />
    );
  }

  return <div className="survey-kpi-card-body" aria-hidden="true" />;
}

function SortableKpiCard({
  card,
  cardRef,
  index,
  onAction,
  onOpenDrillIn,
  selectedBreakdownLabel
}: {
  card: KpiCard;
  cardRef?: (element: HTMLElement | null) => void;
  index: number;
  onAction: (cardTitle: string, action: "edit" | "delete") => void;
  onOpenDrillIn: (selection: KpiDrillInSelection) => void;
  selectedBreakdownLabel: string | null;
}) {
  const { isDragging, ref: sortableRef, handleRef } = useSortable({
    id: card.title,
    index
  });

  function handleCardRef(element: HTMLElement | null) {
    sortableRef(element);
    cardRef?.(element);
  }

  return (
    <article
      ref={handleCardRef}
      className={`survey-kpi-card ${isDragging ? "survey-kpi-card-sorting" : ""}`.trim()}
    >
      <header className="survey-kpi-card-header">
        <div className="survey-kpi-card-header-row">
          <div ref={handleRef} className="survey-kpi-card-drag-surface">
            <span className="survey-kpi-card-drag-indicator" aria-hidden="true" title="Drag tile">
              <SurveyIcon name="drag" />
            </span>
            <div className="survey-kpi-card-copy">
              <h2 className="survey-kpi-card-title">{card.title}</h2>
              <p className="survey-kpi-card-description">{card.description}</p>
            </div>
          </div>
          <SurveyPicker
            value=""
            options={KPI_CARD_ACTIONS}
            ariaLabel={`${card.title} actions`}
            className="survey-kpi-card-menu"
            triggerClassName="survey-kpi-card-menu-trigger"
            menuClassName="survey-kpi-card-menu-surface"
            align="right"
            selectionMode="action"
            renderTriggerContent={() => <SurveyIcon name="ellipsis" />}
            onChange={(nextValue) => onAction(card.title, nextValue as "edit" | "delete")}
          />
        </div>
      </header>
      {renderCardBody(card, onOpenDrillIn, selectedBreakdownLabel)}
    </article>
  );
}

function KpiDrillInValues({ values }: { values: readonly KpiDrillInValue[] }) {
  return (
    <section className="survey-kpi-drill-in-summary-section" aria-label="Selected graph values">
      <div className="survey-kpi-drill-in-values">
        {values.map((item) => (
          <article key={item.label} className="survey-kpi-drill-in-value-card">
            <span className="survey-kpi-drill-in-value-label">
              <span>{item.label}</span>
              {item.markerColor ? (
                <span
                  className="survey-kpi-drill-in-value-marker"
                  style={{ backgroundColor: item.markerColor }}
                  aria-hidden="true"
                />
              ) : null}
            </span>
            <span className="survey-kpi-drill-in-value">{item.value}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function KpiDrillInTable({
  hideIssueBreakdownColumn = false,
  issueColumnLabel,
  issueVariant = "default",
  rows
}: {
  hideIssueBreakdownColumn?: boolean;
  issueColumnLabel: string;
  issueVariant?: "default" | "bar" | "badge";
  rows: readonly KpiDrillInIssueRow[];
}) {
  const maxChartValue = issueVariant === "bar"
    ? rows.reduce((max, row) => Math.max(max, row.chartValue ?? 0), 0)
    : 0;

  return (
    <section className="survey-kpi-drill-in-table-section" aria-label="Related issues">
      <div
        className={`survey-kpi-drill-in-table-head ${hideIssueBreakdownColumn ? "survey-kpi-drill-in-table-head-single-column" : ""}`.trim()}
        role="presentation"
      >
        <span className="survey-kpi-drill-in-column-label">Issue</span>
        {!hideIssueBreakdownColumn ? (
          <span className="survey-kpi-drill-in-column-label">{issueColumnLabel}</span>
        ) : null}
      </div>
      <div className="survey-kpi-drill-in-table" role="table" aria-label="Related issues">
        {rows.map((row) => (
          <div
            key={row.title}
            className={`${hideIssueBreakdownColumn ? "survey-kpi-drill-in-row-single-column" : ""} survey-kpi-drill-in-row ${issueVariant === "bar" ? "survey-kpi-drill-in-row-bar" : ""}`.trim()}
            role="row"
          >
            <div className="survey-kpi-drill-in-main" role="cell">
              {issueVariant === "bar" ? (
                <div className="survey-kpi-drill-in-bar-track">
                  <div
                    className="survey-kpi-drill-in-bar-fill"
                    style={{
                      width: `${maxChartValue > 0 ? ((row.chartValue ?? 0) / maxChartValue) * 100 : 0}%`
                    }}
                  />
                  <span className="survey-kpi-drill-in-title survey-kpi-drill-in-bar-title">{row.title}</span>
                </div>
              ) : (
                <span className="survey-kpi-drill-in-title">{row.title}</span>
              )}
            </div>
            {!hideIssueBreakdownColumn ? (
              <div className="survey-kpi-drill-in-breakdown" role="cell">
                {issueVariant === "badge" && isWorkType(row.breakdown) ? (
                  <WorkTypeBadge workType={row.breakdown} />
                ) : (
                  <span
                    className={`survey-kpi-drill-in-breakdown-value ${issueVariant === "bar" ? "survey-kpi-drill-in-breakdown-value-primary" : ""}`.trim()}
                  >
                    {row.breakdown}
                  </span>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export function KpiReportsPage({
  onSidebarToggle,
  showSidebarToggle
}: {
  onSidebarToggle: () => void;
  showSidebarToggle: boolean;
}) {
  const [isPinned, setIsPinned] = useState(true);
  const [cards, setCards] = useState([...KPI_CARDS]);
  const [selectedDrillIn, setSelectedDrillIn] = useState<KpiDrillInSelection | null>(null);
  const [panelSelection, setPanelSelection] = useState<KpiDrillInSelection | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const reportContentRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const enterFrameId = useRef<number | null>(null);
  const exitTimeoutId = useRef<number | null>(null);

  useEffect(() => {
    if (enterFrameId.current !== null) {
      window.cancelAnimationFrame(enterFrameId.current);
      enterFrameId.current = null;
    }

    if (exitTimeoutId.current !== null) {
      window.clearTimeout(exitTimeoutId.current);
      exitTimeoutId.current = null;
    }

    if (selectedDrillIn) {
      const isReplacingVisibleSelection = panelSelection !== null && panelVisible;

      setPanelSelection(selectedDrillIn);

      if (isReplacingVisibleSelection) {
        setPanelVisible(true);
        return;
      }

      setPanelVisible(false);
      enterFrameId.current = window.requestAnimationFrame(() => {
        enterFrameId.current = window.requestAnimationFrame(() => {
          setPanelVisible(true);
          enterFrameId.current = null;
        });
      });
      return;
    }

    if (!panelSelection) {
      return;
    }

    setPanelVisible(false);

    exitTimeoutId.current = window.setTimeout(() => {
      setPanelSelection(null);
      exitTimeoutId.current = null;
    }, SURVEY_DRAWER_TRANSITION_MS);
  }, [panelSelection, panelVisible, selectedDrillIn]);

  useEffect(
    () => () => {
      if (enterFrameId.current !== null) {
        window.cancelAnimationFrame(enterFrameId.current);
      }

      if (exitTimeoutId.current !== null) {
        window.clearTimeout(exitTimeoutId.current);
      }
    },
    []
  );

  useEffect(() => {
    if (!panelVisible || !panelSelection) {
      return;
    }

    const contentElement = reportContentRef.current;
    const selectedCardElement = cardRefs.current[panelSelection.metricTitle];

    if (!contentElement || !selectedCardElement) {
      return;
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      selectedCardElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [panelSelection, panelVisible]);

  function handlePinnedToggle() {
    const nextPinned = !isPinned;
    setIsPinned(nextPinned);
    toast(nextPinned ? "Pinned" : "Unpinned");
  }

  function handleCardAction(cardTitle: string, action: "edit" | "delete") {
    if (action === "edit") {
      toast(`Edit ${cardTitle}`);
      return;
    }

    let deletedCard: KpiCard | null = null;
    let deletedIndex = -1;

    setCards((currentCards) => {
      deletedIndex = currentCards.findIndex((card) => card.title === cardTitle);

      if (deletedIndex === -1) {
        return currentCards;
      }

      deletedCard = currentCards[deletedIndex];
      return currentCards.filter((card) => card.title !== cardTitle);
    });

    if (!deletedCard || deletedIndex === -1) {
      return;
    }

    if (selectedDrillIn?.metricTitle === cardTitle || panelSelection?.metricTitle === cardTitle) {
      setSelectedDrillIn(null);
    }

    toast.undo("Deleted", {
      description: cardTitle,
      onUndo: () => {
        setCards((currentCards) => {
          if (!deletedCard) {
            return currentCards;
          }

          if (currentCards.some((card) => card.title === deletedCard?.title)) {
            return currentCards;
          }

          const nextCards = [...currentCards];
          nextCards.splice(Math.min(deletedIndex, nextCards.length), 0, deletedCard);
          return nextCards;
        });
      }
    });
  }

  function handleOpenDrillIn(selection: KpiDrillInSelection) {
    setSelectedDrillIn((current) => {
      if (
        current &&
        current.metricTitle === selection.metricTitle &&
        current.breakdownLabel === selection.breakdownLabel
      ) {
        return null;
      }

      return selection;
    });
  }

  const showPanel = panelSelection !== null;
  const drillInContent = panelSelection ? getKpiDrillInContent(panelSelection) : null;

  return (
    <section
      className={`survey-main-canvas survey-kpi-report-shell ${showPanel && panelVisible ? "survey-main-canvas-with-panel survey-main-canvas-report-with-panel" : ""}`.trim()}
      aria-label="KPI report page"
    >
      <header className="survey-kpi-report-header">
        <div className="survey-kpi-report-heading">
          {showSidebarToggle ? <CanvasSidebarToggle onToggle={onSidebarToggle} /> : null}
          <h1 className="survey-report-title">KPI report</h1>
          <p className="survey-kpi-report-description">
            High level view of your teams&apos; key health metrics
          </p>
        </div>

        <div className="survey-kpi-report-actions" aria-label="KPI report actions">
          <IconButton
            aria-label="Pin report"
            aria-pressed={isPinned}
            className={`survey-kpi-toolbar-icon-button ${isPinned ? "survey-kpi-toolbar-icon-button-pinned" : ""}`.trim()}
            onClick={handlePinnedToggle}
          >
            <SurveyIcon name={isPinned ? "sparkle" : "star-outline"} />
          </IconButton>
          <IconButton aria-label="Filter" className="survey-kpi-toolbar-icon-button">
            <SurveyIcon name="filter" />
          </IconButton>
          <IconButton aria-label="Export" className="survey-kpi-toolbar-icon-button">
            <SurveyIcon name="file-csv" />
          </IconButton>
          <Button variant="secondary" className="survey-kpi-toolbar-button">
            <SurveyIcon name="plus" />
            <span>Add content</span>
          </Button>
        </div>
      </header>

      <div className="survey-body">
        <div ref={reportContentRef} className="survey-kpi-report-content">
          <div className="survey-kpi-report-page">
            <DragDropProvider
              onDragEnd={(event) => {
                if (event.canceled) {
                  return;
                }

                setCards((currentCards) => {
                  const sourceId = event.operation.source?.id;
                  const targetId = event.operation.target?.id;

                  if (sourceId == null || targetId == null || sourceId === targetId) {
                    return currentCards;
                  }

                  const sourceIndex = currentCards.findIndex((card) => card.title === sourceId);
                  const targetIndex = currentCards.findIndex((card) => card.title === targetId);

                  if (sourceIndex === -1 || targetIndex === -1) {
                    return currentCards;
                  }

                  return arrayMove(currentCards, sourceIndex, targetIndex);
                });
              }}
            >
              <div className="survey-kpi-grid" aria-label="KPI cards">
                {cards.map((card, index) => (
                  <SortableKpiCard
                    key={card.title}
                    card={card}
                    cardRef={(element) => {
                      cardRefs.current[card.title] = element;
                    }}
                    index={index}
                    onAction={handleCardAction}
                    onOpenDrillIn={handleOpenDrillIn}
                    selectedBreakdownLabel={
                      selectedDrillIn?.metricTitle === card.title ? selectedDrillIn.breakdownLabel : null
                    }
                  />
                ))}
              </div>
            </DragDropProvider>
          </div>
        </div>

        {panelSelection && drillInContent ? (
          <DrillInPanel
            ariaLabel="KPI drill in details"
            contentClassName="survey-report-drill-in-content survey-kpi-drill-in-content"
            isVisible={panelVisible}
            onClose={() => setSelectedDrillIn(null)}
            panelClassName="survey-kpi-drill-in-panel"
            title={
              <>
                <span>{panelSelection.metricTitle}</span>
                <span className="survey-details-slash"> / </span>
                <span>{formatDrillInBreakdownLabel(panelSelection.breakdownLabel)}</span>
              </>
            }
          >
            <div className="survey-kpi-drill-in-layout">
              <KpiDrillInValues values={drillInContent.values} />
              <KpiDrillInTable
                hideIssueBreakdownColumn={drillInContent.hideIssueBreakdownColumn}
                issueColumnLabel={drillInContent.issueColumnLabel}
                issueVariant={drillInContent.issueVariant}
                rows={drillInContent.issues}
              />
            </div>
          </DrillInPanel>
        ) : null}
      </div>
    </section>
  );
}
