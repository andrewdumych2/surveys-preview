import type { Idea } from "../types/models";

export const initialIdeas: Idea[] = [
  {
    id: "adaptive-onboarding",
    name: "Adaptive onboarding",
    summary: "Guide first-time users into the right setup path using role and goal signals.",
    owner: "Avery Stone",
    team: "Growth",
    status: "in-review",
    updatedAt: "2h ago",
    confidence: 76,
    insight: "Teams that see a tailored first-run path activate 22% faster in concept testing.",
    metrics: [
      { id: "m1", label: "Activation lift", value: "+22%" },
      { id: "m2", label: "Setup time", value: "4.5 min" },
      { id: "m3", label: "Drop-off risk", value: "Low" }
    ],
    timeline: [
      {
        id: "t1",
        title: "Prototype assembled",
        description: "Initial flow connected to sample personas and guidance content.",
        time: "Today, 09:30"
      },
      {
        id: "t2",
        title: "Feedback clustered",
        description: "Themes suggest clearer branching and stronger reassurance copy.",
        time: "Yesterday, 16:10"
      }
    ]
  },
  {
    id: "pilot-pricing-lab",
    name: "Pilot pricing lab",
    summary: "Let PMs simulate pricing bundles before exposing changes in the live app.",
    owner: "Mina Patel",
    team: "Product",
    status: "draft",
    updatedAt: "5h ago",
    confidence: 61,
    insight: "Decision speed improves when tradeoffs are shown side by side with narrative prompts.",
    metrics: [
      { id: "m4", label: "Scenario count", value: "12" },
      { id: "m5", label: "Review time", value: "18 min" },
      { id: "m6", label: "Team alignment", value: "Medium" }
    ],
    timeline: [
      {
        id: "t3",
        title: "Scenarios drafted",
        description: "Added baseline, premium, and hybrid bundle comparisons.",
        time: "Today, 08:05"
      },
      {
        id: "t4",
        title: "Research imported",
        description: "Qualitative notes linked to each pricing direction for richer debate.",
        time: "Yesterday, 13:25"
      }
    ]
  },
  {
    id: "ops-pulse-board",
    name: "Ops pulse board",
    summary: "Create a living cockpit for incident readiness and handoff health across squads.",
    owner: "Jon Reeves",
    team: "Ops",
    status: "approved",
    updatedAt: "1d ago",
    confidence: 88,
    insight: "Stakeholders trust the concept more when health signals and owner context live together.",
    metrics: [
      { id: "m7", label: "Coverage", value: "94%" },
      { id: "m8", label: "Risk flags", value: "3 open" },
      { id: "m9", label: "Readiness", value: "High" }
    ],
    timeline: [
      {
        id: "t5",
        title: "Board approved",
        description: "Leadership asked for an interactive proof before connecting real feeds.",
        time: "Yesterday, 11:45"
      },
      {
        id: "t6",
        title: "Signal taxonomy refined",
        description: "Merged duplicated categories into a simpler health model.",
        time: "2 days ago, 10:20"
      }
    ]
  }
];
