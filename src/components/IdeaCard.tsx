import { Link } from "react-router-dom";
import type { Idea } from "../types/models";

const statusLabels: Record<Idea["status"], string> = {
  draft: "Draft",
  "in-review": "In review",
  approved: "Approved"
};

export function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <Link className="idea-card" to={`/ideas/${idea.id}`}>
      <div className="idea-card-top">
        <span className={`status-pill status-${idea.status}`}>{statusLabels[idea.status]}</span>
        <span className="meta-text">{idea.updatedAt}</span>
      </div>
      <div className="idea-card-body">
        <h3>{idea.name}</h3>
        <p>{idea.summary}</p>
      </div>
      <div className="idea-card-footer">
        <span>{idea.team}</span>
        <span>{idea.owner}</span>
      </div>
    </Link>
  );
}
