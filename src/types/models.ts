export type IdeaStatus = "draft" | "in-review" | "approved";

export type Team = "Growth" | "Product" | "Ops";

export interface Insight {
  id: string;
  label: string;
  value: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  time: string;
}

export interface Idea {
  id: string;
  name: string;
  summary: string;
  owner: string;
  team: Team;
  status: IdeaStatus;
  updatedAt: string;
  confidence: number;
  insight: string;
  metrics: Insight[];
  timeline: TimelineEvent[];
}

export interface NewIdeaPayload {
  name: string;
  summary: string;
  team: Team;
}
