import {
  createContext,
  startTransition,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren
} from "react";
import { initialIdeas } from "../data/mockData";
import type { Idea, NewIdeaPayload } from "../types/models";

interface PrototypeContextValue {
  ideas: Idea[];
  selectedTeam: "All" | "Growth" | "Product" | "Ops";
  setSelectedTeam: (team: "All" | "Growth" | "Product" | "Ops") => void;
  activeTab: "overview" | "signals" | "timeline";
  setActiveTab: (tab: "overview" | "signals" | "timeline") => void;
  createIdea: (payload: NewIdeaPayload) => Promise<Idea>;
  getIdeaById: (id: string | undefined) => Idea | undefined;
}

const PrototypeContext = createContext<PrototypeContextValue | null>(null);

function buildIdeaFromPayload(payload: NewIdeaPayload): Idea {
  const slug = payload.name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return {
    id: slug || `idea-${Date.now()}`,
    name: payload.name,
    summary: payload.summary,
    owner: "You",
    team: payload.team,
    status: "draft",
    updatedAt: "Just now",
    confidence: 54,
    insight: "Fresh ideas start with low certainty and become stronger as they get critique.",
    metrics: [
      { id: `${slug}-1`, label: "Activation lift", value: "+8%" },
      { id: `${slug}-2`, label: "Prototype time", value: "2 days" },
      { id: `${slug}-3`, label: "Decision risk", value: "Watch" }
    ],
    timeline: [
      {
        id: `${slug}-event`,
        title: "Idea created",
        description: "This concept is ready for review, iteration, and clickable exploration.",
        time: "Moments ago"
      }
    ]
  };
}

export function PrototypeProvider({ children }: PropsWithChildren) {
  const [ideas, setIdeas] = useState<Idea[]>(initialIdeas);
  const [selectedTeam, setSelectedTeam] = useState<
    "All" | "Growth" | "Product" | "Ops"
  >("All");
  const [activeTab, setActiveTab] = useState<"overview" | "signals" | "timeline">(
    "overview"
  );

  async function createIdea(payload: NewIdeaPayload) {
    const idea = buildIdeaFromPayload(payload);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 350);
    });

    startTransition(() => {
      setIdeas((current) => [idea, ...current]);
    });

    return idea;
  }

  const value = useMemo<PrototypeContextValue>(
    () => ({
      ideas,
      selectedTeam,
      setSelectedTeam,
      activeTab,
      setActiveTab,
      createIdea,
      getIdeaById: (id) => ideas.find((idea) => idea.id === id)
    }),
    [ideas, selectedTeam, activeTab]
  );

  return (
    <PrototypeContext.Provider value={value}>
      {children}
    </PrototypeContext.Provider>
  );
}

export function usePrototype() {
  const context = useContext(PrototypeContext);

  if (!context) {
    throw new Error("usePrototype must be used inside PrototypeProvider");
  }

  return context;
}
