import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getReportTopicSelection } from "../data/reportData";
import {
  getDefaultSurveyId,
  getOrderedSurveys,
  getSurveyCellDetails,
  type SurveyCellSelection,
  type SurveyTabId
} from "../data/surveysData";
import { SurveyDetailsPanel } from "../components/surveys/SurveyDetailsPanel";
import { HeatmapTable } from "../components/surveys/HeatmapTable";
import { ScheduledSurveyState } from "../components/surveys/ScheduledSurveyState";
import { SurveyHeader } from "../components/surveys/SurveyHeader";
import { SurveyReportView } from "../components/surveys/SurveyReportView";
import { SURVEY_DRAWER_TRANSITION_MS } from "../constants/animation";
import { getSurveyById } from "../data/surveysData";
import type { SurveyThemeMode } from "../App";

export function SurveysResultsPage({
  themeMode,
  onSidebarToggle,
  showSidebarToggle
}: {
  themeMode: SurveyThemeMode;
  onSidebarToggle: () => void;
  showSidebarToggle: boolean;
}) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<SurveyTabId>("results");
  const [activeSurveyId, setActiveSurveyId] = useState(getDefaultSurveyId);
  const [selectedCell, setSelectedCell] = useState<SurveyCellSelection | null>(null);
  const [panelSelection, setPanelSelection] = useState<SurveyCellSelection | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const enterFrameId = useRef<number | null>(null);
  const exitTimeoutId = useRef<number | null>(null);
  const surveys = getOrderedSurveys();
  const activeSurvey = getSurveyById(activeSurveyId);
  const isScheduledSurvey = activeSurvey.status === "scheduled";

  function resetPanelState() {
    if (enterFrameId.current !== null) {
      window.cancelAnimationFrame(enterFrameId.current);
      enterFrameId.current = null;
    }

    if (exitTimeoutId.current !== null) {
      window.clearTimeout(exitTimeoutId.current);
      exitTimeoutId.current = null;
    }

    setSelectedCell(null);
    setPanelSelection(null);
    setPanelVisible(false);
  }

  useEffect(() => {
    if (enterFrameId.current !== null) {
      window.cancelAnimationFrame(enterFrameId.current);
      enterFrameId.current = null;
    }

    if (exitTimeoutId.current !== null) {
      window.clearTimeout(exitTimeoutId.current);
      exitTimeoutId.current = null;
    }

    if (selectedCell) {
      const isReplacingVisibleSelection = panelSelection !== null && panelVisible;

      setPanelSelection(selectedCell);

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
  }, [panelSelection, selectedCell]);

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

  const details = isScheduledSurvey ? null : panelSelection ? getSurveyCellDetails(panelSelection, activeSurveyId) : null;
  const showPanel = details !== null;
  const usesReportPanelLayout = activeTab === "report" && showPanel;
  const usesResultsOverlaySafeArea = activeTab === "results" && showPanel;

  return (
    <section
      className={`survey-main-canvas ${showPanel && panelVisible ? "survey-main-canvas-with-panel" : ""} ${usesReportPanelLayout ? "survey-main-canvas-report-with-panel" : ""} ${usesResultsOverlaySafeArea ? "survey-main-canvas-results-with-panel" : ""}`.trim()}
    >
      <SurveyHeader
        activeTab={activeTab}
        activeSurveyId={activeSurveyId}
        onSidebarToggle={onSidebarToggle}
        surveys={surveys}
        showSidebarToggle={showSidebarToggle}
        onOpenSettings={() => navigate("/surveys/settings")}
        onSurveyChange={(surveyId) => {
          if (surveyId === activeSurveyId) {
            return;
          }

          resetPanelState();
          setActiveSurveyId(surveyId);
        }}
        onTabChange={(tab) => {
          if (tab !== activeTab) {
            resetPanelState();
          }

          setActiveTab(tab);
        }}
      />
      <div
        className={`survey-body ${showPanel ? "survey-body-with-panel" : ""} ${usesReportPanelLayout ? "survey-body-report-with-panel" : ""}`.trim()}
      >
        <div className="survey-content survey-content-with-panel">
          {isScheduledSurvey ? (
            <ScheduledSurveyState
              survey={activeSurvey}
              themeMode={themeMode}
              onOpenSettings={() => navigate("/surveys/settings")}
            />
          ) : activeTab === "report" ? (
            <SurveyReportView
              surveyId={activeSurveyId}
              selectedTopic={selectedCell}
              onSelectTopic={(title) => {
                const topicSelection = getReportTopicSelection(title, activeSurveyId);

                if (!topicSelection) {
                  return;
                }

                const isSelectedTopic =
                  selectedCell?.rowLabel === topicSelection.rowLabel &&
                  selectedCell?.columnLabel === topicSelection.columnLabel;

                setSelectedCell(isSelectedTopic ? null : topicSelection);
              }}
            />
          ) : (
            <HeatmapTable surveyId={activeSurveyId} selectedCell={selectedCell} onSelectCell={setSelectedCell} />
          )}
        </div>
        {details ? (
          <SurveyDetailsPanel
            details={details}
            isVisible={panelVisible}
            onClose={() => setSelectedCell(null)}
          />
        ) : null}
      </div>
    </section>
  );
}
