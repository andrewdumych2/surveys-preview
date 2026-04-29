import { useState } from "react";
import { IconButton } from "../components/ui/IconButton";
import { Button } from "../components/ui/Button";
import { toast } from "../components/ui/toast";
import { Toggle } from "../components/ui/Toggle";
import { SurveyIcon } from "../components/surveys/SurveyIcons";
import { surveys } from "../data/surveysData";
import type { SurveyThemeMode } from "../App";

const LIGHT_COLORS = [
  { label: "Page", value: "#f5f5f5" },
  { label: "Canvas", value: "#ffffff" },
  { label: "Panel", value: "#ffffff" },
  { label: "Accent", value: "#3f83f8" },
  { label: "Accent soft", value: "rgba(28, 100, 242, 0.14)" },
  { label: "Badge", value: "rgba(17, 25, 40, 0.04)" },
  { label: "Surface hover", value: "rgba(17, 25, 40, 0.04)" },
  { label: "Border", value: "rgba(17, 25, 40, 0.06)" },
  { label: "Primary text", value: "#000000" },
  { label: "Secondary text", value: "rgba(0, 0, 0, 0.65)" },
  { label: "Tertiary text", value: "rgba(0, 0, 0, 0.4)" }
] as const;

const DARK_COLORS = [
  { label: "Page", value: "#141414" },
  { label: "Canvas", value: "#171717" },
  { label: "Panel", value: "#1f1f1f" },
  { label: "Accent", value: "#3f83f8" },
  { label: "Accent soft", value: "rgba(28, 100, 242, 0.14)" },
  { label: "Badge", value: "rgba(255, 255, 255, 0.04)" },
  { label: "Surface hover", value: "rgba(255, 255, 255, 0.04)" },
  { label: "Border", value: "rgba(255, 255, 255, 0.04)" },
  { label: "Primary text", value: "#ffffff" },
  { label: "Secondary text", value: "rgba(255, 255, 255, 0.65)" },
  { label: "Tertiary text", value: "rgba(255, 255, 255, 0.4)" }
] as const;

const SEMANTIC_COLORS = [
  { label: "Danger", value: "#f05252" },
  { label: "Warning", value: "#f8a562" },
  { label: "Neutral", value: "#d1d5db" },
  { label: "Neutral soft", value: "#fae8a3" },
  { label: "Positive soft", value: "#8eb270" },
  { label: "Success", value: "#057a55" }
] as const;

const TYPOGRAPHY = [
  {
    label: "H1",
    className: "survey-report-title",
    text: "17 December, 2025",
    specs: ["22px", "24px", "-1px", "Inter", "600"]
  },
  {
    label: "H2",
    className: "survey-report-section-title",
    text: "Experience score",
    specs: ["16px", "20px", "-0.4px", "Inter", "600"]
  },
  {
    label: "Body clickable",
    className: "survey-metric-label",
    text: "Average",
    specs: ["13px", "18px", "0px", "Inter", "500"]
  },
  {
    label: "Text",
    className: "survey-details-summary",
    text: "Documentation quality varies by team.",
    specs: ["13px", "18px", "-0.15px", "Inter", "400"]
  },
  {
    label: "Small text",
    className: "style-guide-small-text",
    text: "Product Engineering",
    specs: ["10px", "16px", "0px", "Inter", "400"]
  }
] as const;

function ColorList({
  title,
  className,
  colors
}: {
  title: string;
  className: string;
  colors: readonly { label: string; value: string }[];
}) {
  return (
    <section className="style-guide-block">
      <h2>{title}</h2>
      <div className={`style-guide-palette ${className}`.trim()}>
        {colors.map((color) => (
          <div key={`${title}-${color.label}`} className="style-guide-color-row">
            <span
              className="style-guide-color-swatch"
              style={{ background: color.value }}
              aria-hidden="true"
            />
            <span className="style-guide-color-label">{color.label}</span>
            <span className="style-guide-color-value">{color.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StyleGuidePage({ themeMode }: { themeMode: SurveyThemeMode }) {
  const [toggleStates, setToggleStates] = useState({
    notifications: true,
    reminders: false
  });

  const showDefaultToast = () => {
    toast("New survey insights are ready", {
      description: "Pulse feedback from the Product Engineering team has been synced."
    });
  };

  const showSuccessToast = () => {
    toast.success("Survey schedule updated", {
      description: "The next recurring survey will go out on Monday at 9:00 AM."
    });
  };

  const showErrorToast = () => {
    toast.error("Slack delivery failed", {
      description: "Reconnect the workspace to resume survey reminders."
    });
  };

  const showPromiseToast = () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1200)), {
      loading: "Publishing survey changes...",
      success: "Survey changes published",
      error: "We couldn't publish the survey changes",
      description: "This mirrors the loading state from Sonner's promise API."
    });
  };

  return (
    <section className="survey-main-canvas style-guide-page-shell">
      <div className="style-guide-page-body">
        <h1 className="style-guide-title">Style Guide</h1>

        <section className="style-guide-block">
          <h2>Typography</h2>
          <div className="style-guide-stack">
            {TYPOGRAPHY.map((item) => (
              <div key={item.label} className="style-guide-type-row">
                <div className="style-guide-row-label">{item.label}</div>
                <div className="style-guide-type-preview">
                  <div className="style-guide-type-sample">
                    <span className={`style-guide-type-text ${item.className}`.trim()}>{item.text}</span>
                    <div className="style-guide-type-meta">
                      Size {item.specs[0]} / Line {item.specs[1]} / Tracking {item.specs[2]} / Font {item.specs[3]} / Weight {item.specs[4]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ColorList
          title="Colors"
          className={themeMode === "dark" ? "style-guide-theme-dark survey-theme-dark" : "style-guide-theme-light"}
          colors={themeMode === "dark" ? DARK_COLORS : LIGHT_COLORS}
        />
        <ColorList title="Semantic" className="style-guide-theme-light" colors={SEMANTIC_COLORS} />

        <section className="style-guide-block">
          <h2>Toast</h2>
          <div className="style-guide-stack">
            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Preview</div>
              <div className="style-guide-component-preview">
                <div className="style-guide-toast-stack" aria-label="Toast preview examples">
                  <article className="style-guide-toast-card">
                    <div className="style-guide-toast-copy">
                      <div className="style-guide-toast-title">New survey insights are ready</div>
                      <div className="style-guide-toast-description">
                        Pulse feedback from the Product Engineering team has been synced.
                      </div>
                    </div>
                  </article>

                  <article className="style-guide-toast-card style-guide-toast-card-success">
                    <div className="style-guide-toast-copy">
                      <div className="style-guide-toast-title">Survey schedule updated</div>
                      <div className="style-guide-toast-description">
                        The next recurring survey will go out on Monday at 9:00 AM.
                      </div>
                    </div>
                  </article>

                  <article className="style-guide-toast-card style-guide-toast-card-error">
                    <div className="style-guide-toast-copy">
                      <div className="style-guide-toast-title">Slack delivery failed</div>
                      <div className="style-guide-toast-description">
                        Reconnect the workspace to resume survey reminders.
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Actions</div>
              <div className="style-guide-component-preview style-guide-component-preview-wrap">
                <Button variant="secondary" onClick={showDefaultToast}>
                  Default toast
                </Button>
                <Button variant="secondary" onClick={showSuccessToast}>
                  Success toast
                </Button>
                <Button variant="secondary" onClick={showErrorToast}>
                  Error toast
                </Button>
                <Button variant="secondary" onClick={showPromiseToast}>
                  Promise toast
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="style-guide-block">
          <h2>Sidebar item</h2>
          <div className="style-guide-stack">
            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Default</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-sidebar-item">
                  <span className="survey-sidebar-icon">
                    <SurveyIcon name="comment" />
                  </span>
                  <span className="survey-sidebar-label">Surveys</span>
                </button>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Hover</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-sidebar-item style-guide-force-hover">
                  <span className="survey-sidebar-icon">
                    <SurveyIcon name="comment" />
                  </span>
                  <span className="survey-sidebar-label">Surveys</span>
                </button>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Active</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-sidebar-item survey-sidebar-item-active">
                  <span className="survey-sidebar-icon">
                    <SurveyIcon name="comment" />
                  </span>
                  <span className="survey-sidebar-label">Surveys</span>
                </button>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Focus</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-sidebar-item style-guide-force-focus">
                  <span className="survey-sidebar-icon">
                    <SurveyIcon name="comment" />
                  </span>
                  <span className="survey-sidebar-label">Surveys</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="style-guide-block">
          <h2>Badge</h2>
          <div className="style-guide-stack">
            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Default</div>
              <div className="style-guide-component-preview">
                <span className="survey-ai-badge">AI</span>
              </div>
            </div>
          </div>
        </section>

        <section className="style-guide-block">
          <h2>Button</h2>
          <div className="style-guide-stack">
            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Default</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-settings-button">
                  Settings
                </button>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Left icon</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-settings-button">
                  <SurveyIcon name="download" />
                  <span>Settings</span>
                </button>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Right icon</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-settings-button">
                  <span>Settings</span>
                  <SurveyIcon name="chevron" />
                </button>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Both</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-settings-button">
                  <SurveyIcon name="download" />
                  <span>Settings</span>
                  <SurveyIcon name="chevron" />
                </button>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Hover</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-settings-button style-guide-force-hover">
                  Settings
                </button>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Focus</div>
              <div className="style-guide-component-preview">
                <button type="button" className="survey-settings-button style-guide-force-focus">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="style-guide-block">
          <h2>Toggle</h2>
          <div className="style-guide-stack">
            <div className="style-guide-component-row">
              <div className="style-guide-row-label">On</div>
              <div className="style-guide-component-preview">
                <Toggle
                  checked={toggleStates.notifications}
                  label="Survey notifications"
                  aria-label="Survey notifications"
                  onChange={(nextChecked) =>
                    setToggleStates((currentState) => ({
                      ...currentState,
                      notifications: nextChecked
                    }))
                  }
                />
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Off</div>
              <div className="style-guide-component-preview">
                <Toggle
                  checked={toggleStates.reminders}
                  label="Slack reminders"
                  aria-label="Slack reminders"
                  onChange={(nextChecked) =>
                    setToggleStates((currentState) => ({
                      ...currentState,
                      reminders: nextChecked
                    }))
                  }
                />
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Disabled</div>
              <div className="style-guide-component-preview">
                <Toggle
                  checked
                  disabled
                  label="Always-on compliance checks"
                  aria-label="Always-on compliance checks"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="style-guide-block">
          <h2>Survey picker menu</h2>
          <div className="style-guide-stack">
            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Open</div>
              <div className="style-guide-component-preview">
                <div className="style-guide-dropdown-preview">
                  <div className="survey-picker-menu survey-picker-menu-left survey-picker-menu-open" role="menu" aria-label="Select survey">
                    {surveys.slice(0, 4).map((survey) => {
                      const isActive = survey.id === surveys[1]?.id;

                      return (
                        <button
                          key={survey.id}
                          type="button"
                          role="menuitemradio"
                          aria-checked={isActive}
                          className={`survey-picker-item ${isActive ? "survey-picker-item-active" : ""}`.trim()}
                        >
                          <span className="survey-picker-item-check" aria-hidden="true">
                            {isActive ? <SurveyIcon name="check" /> : null}
                          </span>
                          <span className="survey-picker-item-label">{survey.menuLabel}</span>
                          {survey.badgeLabel ? <span className="survey-picker-badge">{survey.badgeLabel}</span> : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="style-guide-block">
          <h2>Icon button</h2>
          <div className="style-guide-stack">
            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Default</div>
              <div className="style-guide-component-preview">
                <IconButton className="survey-details-close" aria-label="Close">
                  <SurveyIcon name="close" />
                </IconButton>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Hover</div>
              <div className="style-guide-component-preview">
                <IconButton className="survey-details-close style-guide-force-hover" aria-label="Close">
                  <SurveyIcon name="close" />
                </IconButton>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Active</div>
              <div className="style-guide-component-preview">
                <IconButton className="survey-details-close style-guide-force-active" aria-label="Close">
                  <SurveyIcon name="close" />
                </IconButton>
              </div>
            </div>

            <div className="style-guide-component-row">
              <div className="style-guide-row-label">Focus</div>
              <div className="style-guide-component-preview">
                <IconButton className="survey-details-close style-guide-force-focus" aria-label="Close">
                  <SurveyIcon name="close" />
                </IconButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
