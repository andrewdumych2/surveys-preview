import { useEffect, useRef, useState, type ReactNode } from "react";
import { getHeatmapTone } from "../../data/heatmapScale";
import type { SurveyCellSelection } from "../../data/surveysData";
import { getSurveyReportData, type ReportImprovement, type ReportRankedItem } from "../../data/reportData";
import { SurveyIcon } from "./SurveyIcons";

function formatScore(value: number) {
  return value.toFixed(1);
}

function ScorePill({ score }: { score: number }) {
  const tone = getHeatmapTone(score);

  return (
    <span className="survey-report-score-pill" style={{ backgroundColor: tone.background, color: tone.text }}>
      {formatScore(score)}
    </span>
  );
}

function ImprovementDots({
  score,
  tone
}: {
  score: number;
  tone: "current" | "previous";
}) {
  const fillColor = tone === "current" ? "var(--theme-success)" : "var(--theme-text-subtle)";
  const emptyColor = "var(--theme-surface-hover)";
  const dots = Array.from({ length: 5 }, (_, index) => {
    const fillRatio = Math.max(0, Math.min(1, score - index));
    const fillPercentage = fillRatio * 100;

    return {
      key: `${tone}-${score}-${index}`,
      style: {
        background: `linear-gradient(to right, ${fillColor} 0%, ${fillColor} ${fillPercentage}%, ${emptyColor} ${fillPercentage}%, ${emptyColor} 100%)`
      }
    };
  });

  return (
    <div className="survey-report-dot-row" aria-hidden="true">
      {dots.map((dot) => (
        <span key={dot.key} className="survey-report-dot" style={dot.style} />
      ))}
    </div>
  );
}

function ImprovementRows({ item }: { item: ReportImprovement }) {
  return (
    <div className="survey-report-improvement-metrics">
      <div className="survey-report-bar-row">
        <span className="survey-report-bar-value">{formatScore(item.currentScore)}</span>
        <ImprovementDots score={item.currentScore} tone="current" />
      </div>
      <div className="survey-report-bar-row">
        <span className="survey-report-bar-value">{formatScore(item.previousScore)}</span>
        <ImprovementDots score={item.previousScore} tone="previous" />
      </div>
    </div>
  );
}

function TopicButton({
  title,
  isSelected,
  onClick,
  className,
  children
}: {
  title: string;
  isSelected: boolean;
  onClick: (title: string) => void;
  className: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`${className} survey-report-topic-button ${isSelected ? "survey-report-topic-button-selected" : ""}`.trim()}
      onClick={() => onClick(title)}
      aria-pressed={isSelected}
      aria-label={`Open topic details for ${title}`}
    >
      {children}
    </button>
  );
}

function RankedList({
  items,
  activeTopicTitle,
  onSelectTopic
}: {
  items: ReportRankedItem[];
  activeTopicTitle: string | null;
  onSelectTopic: (title: string) => void;
}) {
  return (
    <div className="survey-report-ranked-list">
      {items.map((item) => (
        <TopicButton
          key={`${item.title}-${item.score}`}
          title={item.title}
          isSelected={activeTopicTitle === item.title}
          onClick={onSelectTopic}
          className="survey-report-ranked-row"
        >
          <ScorePill score={item.score} />
          <span className="survey-report-ranked-title">{item.title}</span>
        </TopicButton>
      ))}
    </div>
  );
}

export function SurveyReportView({
  surveyId,
  selectedTopic,
  onSelectTopic
}: {
  surveyId: string;
  selectedTopic: SurveyCellSelection | null;
  onSelectTopic: (title: string) => void;
}) {
  const surveyReportData = getSurveyReportData(surveyId);
  const activeTopicTitle = selectedTopic?.rowLabel ?? null;
  const reportViewRef = useRef<HTMLElement | null>(null);
  const [showExportButton, setShowExportButton] = useState(false);

  useEffect(() => {
    const reportView = reportViewRef.current;

    if (!reportView) {
      return;
    }

    const scrollContainer = reportView.closest(".survey-content");

    if (!(scrollContainer instanceof HTMLElement)) {
      return;
    }

    const updateExportVisibility = () => {
      const distanceFromBottom =
        scrollContainer.scrollHeight - scrollContainer.scrollTop - scrollContainer.clientHeight;

      setShowExportButton(distanceFromBottom <= 8);
    };

    updateExportVisibility();

    scrollContainer.addEventListener("scroll", updateExportVisibility, { passive: true });
    window.addEventListener("resize", updateExportVisibility);

    return () => {
      scrollContainer.removeEventListener("scroll", updateExportVisibility);
      window.removeEventListener("resize", updateExportVisibility);
    };
  }, []);

  return (
    <section ref={reportViewRef} className="survey-report-view" aria-label="Survey report">
      <article className="survey-report-card">
        <header className="survey-report-card-header">
          <span className="survey-report-eyebrow">{surveyReportData.surveyLabel}</span>
          <h1 className="survey-report-title">{surveyReportData.surveyDate}</h1>
        </header>

        <div className="survey-report-card-content">
          <section className="survey-report-block">
            <div className="survey-report-score-header">
              <div className="survey-report-score-copy">
                <h2 className="survey-report-section-title">Experience score</h2>
                <p className="survey-report-description">{surveyReportData.experienceSummary}</p>
              </div>

              <div className="survey-report-score-callout">
                <div className="survey-report-score-badge">
                  <span className="survey-report-score-badge-value">{formatScore(surveyReportData.experienceScore)}</span>
                </div>
                <span className="survey-report-score-delta">+{formatScore(surveyReportData.scoreDelta)}</span>
              </div>
            </div>
          </section>

          <section className="survey-report-block">
            <h2 className="survey-report-section-title">Top improvements</h2>
            <div className="survey-report-improvements-grid">
              {surveyReportData.topImprovements.map((item) => (
                <TopicButton
                  key={item.title}
                  title={item.title}
                  isSelected={activeTopicTitle === item.title}
                  onClick={onSelectTopic}
                  className="survey-report-improvement-card"
                >
                  <h3 className="survey-report-improvement-title">{item.title}</h3>
                  <ImprovementRows item={item} />
                </TopicButton>
              ))}
            </div>

            <div className="survey-report-legend">
              <div className="survey-report-legend-item">
                <span className="survey-report-legend-dot survey-report-legend-dot-current" />
                <span className="survey-report-legend-label">{surveyReportData.legendCurrent}</span>
              </div>
              <div className="survey-report-legend-item">
                <span className="survey-report-legend-dot survey-report-legend-dot-previous" />
                <span className="survey-report-legend-label">{surveyReportData.legendPrevious}</span>
              </div>
            </div>
          </section>

          <section className="survey-report-block">
            <h2 className="survey-report-section-title">Developers care mostly about</h2>
            <div className="survey-report-focus-grid">
              {surveyReportData.commentFocus.map((item) => (
                <TopicButton
                  key={item.title}
                  title={item.title}
                  isSelected={activeTopicTitle === item.title}
                  onClick={onSelectTopic}
                  className="survey-report-focus-card"
                >
                  <ScorePill score={item.score} />
                  <div className="survey-report-focus-copy">
                    <h3 className="survey-report-focus-title">{item.title}</h3>
                    <p className="survey-report-focus-meta">{item.commentCount} comments</p>
                  </div>
                </TopicButton>
              ))}
            </div>
          </section>

          <section className="survey-report-block survey-report-two-column-block">
            <div className="survey-report-column">
              <h2 className="survey-report-section-title">Highest rated</h2>
              <RankedList
                items={surveyReportData.highestRated}
                activeTopicTitle={activeTopicTitle}
                onSelectTopic={onSelectTopic}
              />
            </div>

            <div className="survey-report-column">
              <h2 className="survey-report-section-title">Opportunities</h2>
              <RankedList
                items={surveyReportData.opportunities}
                activeTopicTitle={activeTopicTitle}
                onSelectTopic={onSelectTopic}
              />
            </div>
          </section>
        </div>
      </article>

      <div
        className={`survey-report-export-bar ${showExportButton ? "survey-report-export-bar-visible" : ""}`.trim()}
        aria-hidden={!showExportButton}
      >
        <button type="button" className="survey-report-export-button">
          <span>Export PDF</span>
          <SurveyIcon name="download" className="survey-report-export-icon" />
        </button>
      </div>
    </section>
  );
}
