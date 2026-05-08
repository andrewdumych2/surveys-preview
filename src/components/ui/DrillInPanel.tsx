import type { CSSProperties, ReactNode } from "react";
import { SURVEY_DRAWER_OFFSET_PX, SURVEY_DRAWER_TRANSITION_MS } from "../../constants/animation";
import { IconButton } from "./IconButton";
import { SurveyIcon } from "../surveys/SurveyIcons";

export function DrillInPanel({
  ariaLabel,
  children,
  contentClassName = "",
  isVisible,
  onClose,
  panelClassName = "",
  title
}: {
  ariaLabel: string;
  children: ReactNode;
  contentClassName?: string;
  isVisible: boolean;
  onClose: () => void;
  panelClassName?: string;
  title: ReactNode;
}) {
  const animationStyle = {
    "--survey-drawer-offset": `${SURVEY_DRAWER_OFFSET_PX}px`,
    "--survey-drawer-duration": `${SURVEY_DRAWER_TRANSITION_MS}ms`
  } as CSSProperties;

  return (
    <aside
      className={`survey-details-panel ${panelClassName} ${isVisible ? "survey-details-panel-visible" : "survey-details-panel-hidden"}`.trim()}
      aria-label={ariaLabel}
      aria-hidden={!isVisible}
      style={animationStyle}
    >
      <div className="survey-details-header">
        <p className="survey-details-title">{title}</p>
        <IconButton className="survey-details-close" onClick={onClose} aria-label="Close details">
          <SurveyIcon name="close" />
        </IconButton>
      </div>

      <div className={`survey-details-content ${contentClassName}`.trim()}>{children}</div>
    </aside>
  );
}
