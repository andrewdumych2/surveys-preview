import { useState, type ReactNode } from "react";
import { SurveyPicker, type SurveyPickerOption } from "../components/surveys/SurveyPicker";
import { SurveyIcon } from "../components/surveys/SurveyIcons";
import { Toggle } from "../components/ui/Toggle";
import {
  surveySettingsCadenceLabel,
  surveySettingsStartDateLabel,
  surveySettingsTopics
} from "../data/surveySettingsData";

function SettingsSelectRow({
  title,
  description,
  value,
  options,
  menuLabel,
  onSelect
}: {
  title: string;
  description: string;
  value: string;
  options: readonly SurveyPickerOption[];
  menuLabel: string;
  onSelect: (nextValue: string) => void;
}) {
  return (
    <section className="survey-settings-row">
      <div className="survey-settings-copy">
        <h2 className="survey-settings-title">{title}</h2>
        <p className="survey-settings-description">{description}</p>
      </div>

      <SurveyPicker
        className="survey-settings-picker"
        triggerClassName="survey-settings-select"
        menuClassName="survey-settings-picker-menu"
        align="right"
        value={value}
        options={options}
        ariaLabel={menuLabel}
        onChange={onSelect}
        renderTriggerContent={(selectedOption) => (
          <>
            <span>{selectedOption?.label ?? value}</span>
            <span className="survey-settings-select-chevron" aria-hidden="true">
              <SurveyIcon name="chevron" />
            </span>
          </>
        )}
      />
    </section>
  );
}

function SettingsActionRow({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="survey-settings-row">
      <div className="survey-settings-copy">
        <h2 className="survey-settings-title">{title}</h2>
        <p className="survey-settings-description">{description}</p>
      </div>
      {children}
    </section>
  );
}

const startDateOptions: readonly SurveyPickerOption[] = [
  { value: "Select start date", label: surveySettingsStartDateLabel },
  { value: "May 1, 2026", label: "May 1, 2026" },
  { value: "June 1, 2026", label: "June 1, 2026" },
  { value: "July 1, 2026", label: "July 1, 2026" },
  { value: "August 1, 2026", label: "August 1, 2026" }
];

const cadenceOptions: readonly SurveyPickerOption[] = [
  { value: "Select cadence", label: surveySettingsCadenceLabel },
  { value: "Monthly", label: "Monthly" },
  { value: "Quarterly", label: "Quarterly" },
  { value: "Half year", label: "Half year" },
  { value: "Yearly", label: "Yearly" }
];

export function SurveysSettingsPage() {
  const [topics, setTopics] = useState(() => surveySettingsTopics.map((topic) => ({ ...topic })));
  const [startDate, setStartDate] = useState(surveySettingsStartDateLabel);
  const [cadence, setCadence] = useState(surveySettingsCadenceLabel);

  const handleTopicToggle = (index: number, nextEnabled: boolean) => {
    setTopics((currentTopics) =>
      currentTopics.map((topic, topicIndex) =>
        topicIndex === index ? { ...topic, enabled: nextEnabled } : topic
      )
    );
  };

  return (
    <section className="survey-main-canvas survey-settings-page-shell">
      <div className="survey-settings-page-scroll">
        <div className="survey-settings-page-content">
          <SettingsSelectRow
            title="Start date"
            description="Managers will receive the survey link in the morning of the scheduled date. The survey will remain open for 7 days."
            value={startDate}
            options={startDateOptions}
            menuLabel="Select start date"
            onSelect={setStartDate}
          />

          <div className="survey-settings-divider" />

          <SettingsSelectRow
            title="Cadence"
            description="Frequency at which new surveys are automatically scheduled"
            value={cadence}
            options={cadenceOptions}
            menuLabel="Select cadence"
            onSelect={setCadence}
          />

          <div className="survey-settings-divider" />

          <section className="survey-settings-topics-block">
            <div className="survey-settings-copy survey-settings-copy-full">
              <h2 className="survey-settings-title">Topics</h2>
              <p className="survey-settings-description">
                Respondents will rate their sentiment toward the following topics
              </p>
            </div>

            <div className="survey-settings-topics-grid" aria-label="Survey topics">
              {topics.map((topic, index) => (
                <Toggle
                  key={`${topic.label}-${index}`}
                  className="survey-settings-topic"
                  checked={topic.enabled}
                  label={topic.label}
                  aria-label={topic.label}
                  onChange={(nextEnabled) => handleTopicToggle(index, nextEnabled)}
                />
              ))}

              <button type="button" className="survey-settings-topic-link">
                <span className="survey-settings-topic-link-icon" aria-hidden="true">
                  <SurveyIcon name="plus" />
                </span>
                <span>New topic</span>
              </button>
            </div>
          </section>

          <div className="survey-settings-divider" />

          <SettingsActionRow title="Teams" description="Select the teams you want to survey">
            <button type="button" className="survey-settings-button survey-settings-button-static">
              Select teams
            </button>
          </SettingsActionRow>

          <div className="survey-settings-divider" />

          <SettingsActionRow
            title="Reminders"
            description="Automatically inform teams when the survey starts in Slack"
          >
            <button type="button" className="survey-settings-button survey-settings-button-static">
              <span className="survey-settings-slack-mark" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </span>
              <span>Connect Slack</span>
            </button>
          </SettingsActionRow>

          <div className="survey-settings-divider" />

          <div className="survey-settings-footer">
            <button type="button" className="survey-settings-footer-button" disabled>
              Enable surveys
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
