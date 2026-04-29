import { Link, useParams } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Tabs } from "../components/ui/Tabs";
import { usePrototype } from "../state/PrototypeContext";

const DETAIL_TABS = [
  { id: "overview", label: "Overview" },
  { id: "signals", label: "Signals" },
  { id: "timeline", label: "Timeline" }
] as const;

export function IdeaDetailsPage() {
  const { ideaId } = useParams();
  const { getIdeaById, activeTab, setActiveTab } = usePrototype();
  const idea = getIdeaById(ideaId);

  if (!idea) {
    return (
      <main className="page-shell">
        <section className="empty-state">
          <h1>Idea not found</h1>
          <p>This prototype route exists, but the selected concept does not.</p>
          <Link to="/ideas">
            <Button>Back to ideas</Button>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="detail-hero">
        <div>
          <Link className="back-link" to="/ideas">
            ← Back to concepts
          </Link>
          <span className="eyebrow">{idea.team}</span>
          <h1>{idea.name}</h1>
          <p>{idea.summary}</p>
        </div>
        <div className="score-card">
          <span>Confidence</span>
          <strong>{idea.confidence}%</strong>
          <p>{idea.insight}</p>
        </div>
      </section>

      <section className="toolbar">
        <Tabs items={DETAIL_TABS} value={activeTab} onChange={setActiveTab} />
      </section>

      <section className="detail-grid">
        <div className="detail-panel">
          {activeTab === "overview" ? (
            <div className="metrics-grid">
              {idea.metrics.map((metric) => (
                <article key={metric.id} className="metric-card">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </article>
              ))}
            </div>
          ) : null}

          {activeTab === "signals" ? (
            <div className="stack-list">
              <article className="info-card">
                <strong>Primary owner</strong>
                <p>{idea.owner}</p>
              </article>
              <article className="info-card">
                <strong>Status</strong>
                <p>{idea.status}</p>
              </article>
              <article className="info-card">
                <strong>Updated</strong>
                <p>{idea.updatedAt}</p>
              </article>
            </div>
          ) : null}

          {activeTab === "timeline" ? (
            <ol className="timeline-list">
              {idea.timeline.map((event) => (
                <li key={event.id}>
                  <strong>{event.title}</strong>
                  <p>{event.description}</p>
                  <span className="meta-text">{event.time}</span>
                </li>
              ))}
            </ol>
          ) : null}
        </div>

        <aside className="detail-side-panel">
          <article className="info-card">
            <strong>Why this starter matters</strong>
            <p>
              It gives us a real interaction sandbox while we wait on the exact Figma
              nodes for a screen-perfect pass.
            </p>
          </article>
          <article className="info-card">
            <strong>Next Figma swap-in target</strong>
            <p>Header, concept cards, and the create modal are the best first replacement set.</p>
          </article>
        </aside>
      </section>
    </main>
  );
}
