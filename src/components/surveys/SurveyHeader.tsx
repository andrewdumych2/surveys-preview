import {
  getUpcomingSurvey,
  surveyParticipationRate,
  topTabs,
  type SurveyDataset,
  type SurveyTabId
} from "../../data/surveysData";
import { SurveyIcon } from "./SurveyIcons";
import { SurveyPicker } from "./SurveyPicker";
import { SurveyParticipationLabel } from "./SurveyParticipationLabel";

function SurveySwitcher({
  activeSurveyId,
  surveys,
  onSurveyChange
}: {
  activeSurveyId: string;
  surveys: SurveyDataset[];
  onSurveyChange: (surveyId: string) => void;
}) {
  const activeSurvey = surveys.find((survey) => survey.id === activeSurveyId) ?? surveys[0];

  if (!activeSurvey) {
    return null;
  }

  return (
    <SurveyPicker
      className="survey-switcher"
      triggerClassName="survey-date-chip"
      value={activeSurvey.id}
      ariaLabel="Select survey"
      options={surveys.map((survey) => ({
        value: survey.id,
        label: survey.menuLabel,
        badgeLabel: survey.badgeLabel
      }))}
      onChange={onSurveyChange}
      renderTriggerContent={() => (
        <>
          <span>{activeSurvey.rangeLabel}</span>
          <SurveyIcon name="chevron" />
        </>
      )}
    />
  );
}

export function SurveyHeader({
  activeTab,
  activeSurveyId,
  surveys,
  onSurveyChange,
  onTabChange,
  onOpenSettings
}: {
  activeTab: SurveyTabId;
  activeSurveyId: string;
  surveys: SurveyDataset[];
  onSurveyChange: (surveyId: string) => void;
  onTabChange: (tab: SurveyTabId) => void;
  onOpenSettings: () => void;
}) {
  const upcomingSurvey = getUpcomingSurvey();

  return (
    <header className="survey-header">
      <div className="survey-header-left">
        <button type="button" className="survey-sidebar-toggle" aria-label="Toggle sidebar">
          <SurveyIcon name="menu" />
        </button>

        <SurveySwitcher activeSurveyId={activeSurveyId} surveys={surveys} onSurveyChange={onSurveyChange} />

        <nav className="survey-top-tabs" aria-label="Survey tabs">
          {topTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`survey-top-tab ${activeTab === tab.id ? "survey-top-tab-active" : ""}`}
              onClick={() => {
                if ("disabled" in tab && tab.disabled) {
                  return;
                }

                onTabChange(tab.id);
              }}
              aria-disabled={"disabled" in tab && tab.disabled ? true : undefined}
            >
              {tab.id === "participation" ? (
                <SurveyParticipationLabel percentage={surveyParticipationRate} />
              ) : (
                tab.label
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="survey-header-right">
        {upcomingSurvey ? <span className="survey-next-survey">Next survey: {upcomingSurvey.rangeLabel}</span> : null}
        <button type="button" className="survey-settings-button" onClick={onOpenSettings}>
          Settings
        </button>
      </div>
    </header>
  );
}
