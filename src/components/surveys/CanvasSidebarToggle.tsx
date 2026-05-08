import { SurveyIcon } from "./SurveyIcons";

export function CanvasSidebarToggle({
  className = "",
  onToggle
}: {
  className?: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className={`survey-sidebar-toggle survey-sidebar-toggle-visible ${className}`.trim()}
      aria-label="Expand sidebar"
      onClick={onToggle}
    >
      <SurveyIcon name="sidebar-collapsed" />
    </button>
  );
}
