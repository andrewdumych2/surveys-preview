export interface SurveySettingsTopic {
  label: string;
  enabled: boolean;
}

export const surveySettingsTopics: SurveySettingsTopic[] = [
  { label: "CI/CD", enabled: true },
  { label: "Clear direction", enabled: true },
  { label: "Code frequency", enabled: false },
  { label: "Code review", enabled: true },
  { label: "Codebase quality", enabled: true },
  { label: "Cross-team collaboration", enabled: false },
  { label: "Deep work", enabled: true },
  { label: "Documentation", enabled: true },
  { label: "Incident response", enabled: false },
  { label: "Local development", enabled: true },
  { label: "Meetings productiveness", enabled: false },
  { label: "Production debugging", enabled: true },
  { label: "Realistic timelines", enabled: true },
  { label: "Releases", enabled: false },
  { label: "Requirements", enabled: true },
  { label: "Team processes", enabled: true },
  { label: "Technical debt", enabled: false },
  { label: "Test coverage", enabled: false },
  { label: "Test coverage", enabled: true },
  { label: "Test efficiency", enabled: false }
];

export const surveySettingsStartDateLabel = "Select start date";
export const surveySettingsCadenceLabel = "Select cadence";
