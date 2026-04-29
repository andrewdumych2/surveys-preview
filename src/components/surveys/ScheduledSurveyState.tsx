import type { SurveyDataset } from "../../data/surveysData";
import type { SurveyThemeMode } from "../../App";
import { Button } from "../ui/Button";
import scheduledSurveyLightIllustration from "../../assets/surveys/scheduled-survey-light.png";
import scheduledSurveyDarkIllustration from "../../assets/surveys/scheduled-survey-dark.png";

export function ScheduledSurveyState({
  survey,
  themeMode,
  onOpenSettings
}: {
  survey: SurveyDataset;
  themeMode: SurveyThemeMode;
  onOpenSettings: () => void;
}) {
  const illustration = themeMode === "dark" ? scheduledSurveyDarkIllustration : scheduledSurveyLightIllustration;
  const startDate = survey.scheduledStartLabel ?? survey.reportDate;
  const relativeTime = survey.scheduledRelativeLabel ? ` (${survey.scheduledRelativeLabel})` : "";

  return (
    <div className="survey-scheduled-state" aria-label="Scheduled survey state">
      <div className="survey-scheduled-state-content">
        <img
          key={themeMode}
          className="survey-scheduled-state-illustration"
          src={illustration}
          alt=""
          aria-hidden="true"
        />
        <div className="survey-scheduled-state-copy">
          <h2 className="survey-scheduled-state-title">Survey is scheduled</h2>
          <p className="survey-scheduled-state-subtitle">Start date: {startDate}{relativeTime}</p>
        </div>
        <Button type="button" variant="secondary" onClick={onOpenSettings}>
          Settings
        </Button>
      </div>
    </div>
  );
}
