import { useDeferredValue, useMemo, useState } from "react";
import { CreateIdeaModal } from "../components/CreateIdeaModal";
import { IdeaCard } from "../components/IdeaCard";
import { Button } from "../components/ui/Button";
import { Select } from "../components/ui/Select";
import { Tabs } from "../components/ui/Tabs";
import { usePrototype } from "../state/PrototypeContext";

const TAB_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "signals", label: "Signals" },
  { id: "timeline", label: "Timeline" }
] as const;

export function IdeasPage() {
  const {
    ideas,
    selectedTeam,
    setSelectedTeam,
    activeTab,
    setActiveTab
  } = usePrototype();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flashMessage, setFlashMessage] = useState<string | null>(null);
  const deferredTeam = useDeferredValue(selectedTeam);

  const filteredIdeas = useMemo(() => {
    if (deferredTeam === "All") {
      return ideas;
    }

    return ideas.filter((idea) => idea.team === deferredTeam);
  }, [ideas, deferredTeam]);

  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Clickable testing environment</span>
          <h1>Haystack concept lab</h1>
          <p>
            Turn polished UI ideas into realistic, reviewable web flows before wiring a
            backend. This starter is ready for Figma-driven replacement and refinement.
          </p>
        </div>
        <div className="hero-actions">
          <Button onClick={() => setIsModalOpen(true)}>New concept</Button>
          <Button variant="secondary">Share preview</Button>
        </div>
      </section>

      {flashMessage ? <div className="flash-banner">{flashMessage}</div> : null}

      <section className="toolbar">
        <Tabs
          items={TAB_ITEMS}
          value={activeTab}
          onChange={setActiveTab}
        />
        <div className="toolbar-controls">
          <Select
            id="team-filter"
            label="Team filter"
            value={selectedTeam}
            onChange={(event) =>
              setSelectedTeam(event.target.value as "All" | "Growth" | "Product" | "Ops")
            }
          >
            <option value="All">All teams</option>
            <option value="Growth">Growth</option>
            <option value="Product">Product</option>
            <option value="Ops">Ops</option>
          </Select>
        </div>
      </section>

      <section className="content-grid">
        <div className="ideas-column">
          <div className="section-header">
            <div>
              <span className="eyebrow">Concepts</span>
              <h2>Interactive ideas</h2>
            </div>
            <span className="meta-text">{filteredIdeas.length} visible</span>
          </div>
          <div className="ideas-grid">
            {filteredIdeas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
        </div>

        <aside className="insights-panel">
          <div className="section-header">
            <div>
              <span className="eyebrow">State pattern</span>
              <h2>
                {activeTab === "overview"
                  ? "Prototype foundations"
                  : activeTab === "signals"
                    ? "Signals worth watching"
                    : "Recent movement"}
              </h2>
            </div>
          </div>

          {activeTab === "overview" ? (
            <div className="stack-list">
              <article className="info-card">
                <strong>Modal-driven creation</strong>
                <p>Use this as the first place to swap in your Figma modal and all its states.</p>
              </article>
              <article className="info-card">
                <strong>Deterministic mock data</strong>
                <p>Screen content lives in local fixtures so visual reviews stay stable.</p>
              </article>
              <article className="info-card">
                <strong>Route-backed details</strong>
                <p>Each concept opens in a dedicated URL to mimic realistic navigation.</p>
              </article>
            </div>
          ) : null}

          {activeTab === "signals" ? (
            <div className="stack-list">
              <article className="metric-card">
                <span>Interaction fidelity</span>
                <strong>High</strong>
              </article>
              <article className="metric-card">
                <span>Backend dependency</span>
                <strong>None</strong>
              </article>
              <article className="metric-card">
                <span>Swap-in readiness</span>
                <strong>Figma-ready</strong>
              </article>
            </div>
          ) : null}

          {activeTab === "timeline" ? (
            <ol className="timeline-list">
              <li>Choose your first Figma frame and modal state.</li>
              <li>Replace the starter shell with exact layout and asset exports.</li>
              <li>Layer in hover, validation, and success states from the design.</li>
            </ol>
          ) : null}
        </aside>
      </section>

      <CreateIdeaModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreated={(ideaName) => setFlashMessage(`Prototype created for ${ideaName}.`)}
      />
    </main>
  );
}
