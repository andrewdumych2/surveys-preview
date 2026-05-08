import type { SurveyCellDetails } from "../../data/surveysData";
import { DrillInPanel } from "../ui/DrillInPanel";
import { SurveyIcon } from "./SurveyIcons";

function sentimentClass(sentiment: "negative" | "mixed" | "neutral" | "positive") {
  if (sentiment === "negative") {
    return "survey-comment-negative";
  }
  if (sentiment === "mixed") {
    return "survey-comment-mixed";
  }
  if (sentiment === "positive") {
    return "survey-comment-positive";
  }
  return "survey-comment-neutral";
}

function healthClass(healthTone: SurveyCellDetails["healthTone"]) {
  if (healthTone === "good") {
    return "survey-health-good";
  }
  if (healthTone === "watch") {
    return "survey-health-watch";
  }
  if (healthTone === "risk") {
    return "survey-health-risk";
  }
  return "survey-health-none";
}

export function SurveyDetailsPanel({
  details,
  isVisible,
  onClose
}: {
  details: SurveyCellDetails;
  isVisible: boolean;
  onClose: () => void;
}) {
  return (
    <DrillInPanel
      ariaLabel="Survey cell details"
      isVisible={isVisible}
      onClose={onClose}
      title={
        <>
          <span>{details.title}</span>
          <span className="survey-details-slash"> / </span>
          <span>{details.team}</span>
        </>
      }
    >
      <section className="survey-kpi-drill-in-summary-section survey-details-metrics-section">
        <div className="survey-details-metrics-grid">
          <article className="survey-kpi-drill-in-value-card survey-metric-card">
            <span className="survey-kpi-drill-in-value-label survey-metric-label">Average</span>
            <strong className="survey-kpi-drill-in-value survey-metric-value">{details.average}</strong>
          </article>
          <article className="survey-kpi-drill-in-value-card survey-metric-card">
            <span className="survey-kpi-drill-in-value-label survey-metric-label">vs prev. survey</span>
            <div className="survey-metric-delta">
              <strong className="survey-kpi-drill-in-value survey-metric-value">{details.previousChange}</strong>
              {details.previousDirection !== "flat" ? (
                <span
                  className={`survey-delta-icon ${details.previousDirection === "up" ? "survey-delta-up" : "survey-delta-down"}`}
                  aria-hidden="true"
                >
                  <SurveyIcon name={details.previousDirection === "up" ? "arrow-up" : "arrow-down"} />
                </span>
              ) : null}
            </div>
          </article>
          <article className="survey-kpi-drill-in-value-card survey-metric-card">
            <span className="survey-kpi-drill-in-value-label survey-metric-label">Health</span>
            <div className="survey-health-row">
              <span className={`survey-health-dot ${healthClass(details.healthTone)}`} />
              <strong className="survey-kpi-drill-in-value survey-health-text">{details.healthLabel}</strong>
            </div>
          </article>
          <article className="survey-kpi-drill-in-value-card survey-metric-card">
            <span className="survey-kpi-drill-in-value-label survey-metric-label">Distribution</span>
            <div className="survey-distribution-bars" aria-hidden="true">
              {details.distribution.map((count, index) => (
                <span
                  key={`${index}-${count}`}
                  className={`survey-distribution-bar survey-distribution-bar-${index + 1}`}
                  style={{ height: `${Math.max(5, count * 5)}px` }}
                />
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="survey-kpi-drill-in-summary-section survey-details-section">
        <div className="survey-details-section-label">
          <span>Summary</span>
          <span className="survey-ai-badge">AI</span>
        </div>
        <div className="survey-details-summary-card">
          <p className="survey-details-summary">{details.summary}</p>
        </div>
      </section>

      <section className="survey-kpi-drill-in-summary-section survey-details-comments">
        <div className="survey-details-section-label">
          <span>Comments</span>
          <span className="survey-count-badge">{details.commentCount}</span>
        </div>
        <div className="survey-comment-group">
          <h3 className="survey-comment-heading">{details.commentHeading}</h3>
          <div className="survey-comment-list">
            {details.comments.map((comment, index) => (
              <p key={`${comment.text}-${index}`} className="survey-comment-item">
                <span className={`survey-comment-bullet ${sentimentClass(comment.sentiment)}`}>•</span>
                <span>{comment.text}</span>
              </p>
            ))}
          </div>
        </div>
      </section>
    </DrillInPanel>
  );
}
