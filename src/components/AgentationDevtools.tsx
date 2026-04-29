import { useEffect, useState, type ComponentType } from "react";

const AGENTATION_ENDPOINT = "http://localhost:4747";
const AGENTATION_QUERY_PARAM = "agentation";

type AgentationProps = {
  endpoint: string;
  onSessionCreated?: (sessionId: string) => void;
};

function shouldEnableAgentation() {
  if (import.meta.env.MODE !== "development") {
    return false;
  }

  if (typeof window === "undefined") {
    return false;
  }

  const params = new URLSearchParams(window.location.search);
  return params.get(AGENTATION_QUERY_PARAM) === "1";
}

export function AgentationDevtools() {
  const [AgentationComponent, setAgentationComponent] = useState<ComponentType<AgentationProps> | null>(null);

  useEffect(() => {
    if (!shouldEnableAgentation()) {
      return;
    }

    let cancelled = false;

    void import("agentation")
      .then(({ Agentation }) => {
        if (!cancelled) {
          setAgentationComponent(() => Agentation);
        }
      })
      .catch((error) => {
        console.warn("[Agentation] Failed to load devtools overlay", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!AgentationComponent) {
    return null;
  }

  return (
    <AgentationComponent
      endpoint={AGENTATION_ENDPOINT}
      onSessionCreated={(sessionId) => {
        console.info("[Agentation] Session created", {
          endpoint: AGENTATION_ENDPOINT,
          sessionId
        });
      }}
    />
  );
}
