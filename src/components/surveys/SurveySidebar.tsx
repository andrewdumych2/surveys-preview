import { useState, type MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  mainNavigation,
  pinnedReports,
  teamNavigation,
  utilityNavigation,
  type SidebarItem
} from "../../data/surveysData";
import { SurveyIcon } from "./SurveyIcons";

function SidebarNavItem({
  item,
  locked = false,
  onClick,
  current = false,
  staticDisplay = false
}: {
  item: SidebarItem;
  locked?: boolean;
  onClick?: () => void;
  current?: boolean;
  staticDisplay?: boolean;
}) {
  const className = `survey-sidebar-item ${current ? "survey-sidebar-item-active" : ""} ${staticDisplay ? "survey-sidebar-item-static" : ""}`;

  const content = (
    <>
      <span className={`survey-sidebar-icon ${item.accent ? `survey-sidebar-icon-${item.accent}` : ""}`}>
        <SurveyIcon name={item.icon} />
      </span>
      <span className="survey-sidebar-label">{item.label}</span>
      {locked ? (
        <span className="survey-sidebar-lock" aria-hidden="true">
          <SurveyIcon name="lock" />
        </span>
      ) : null}
    </>
  );

  if (staticDisplay) {
    return (
      <div className={className} aria-hidden="true">
        {content}
      </div>
    );
  }

  return (
    <button
      type="button"
      className={className}
      aria-current={current ? "page" : undefined}
      onClick={onClick}
      disabled={!onClick}
    >
      {content}
    </button>
  );
}

function SidebarSection({
  title,
  items,
  lockLastItem = false
}: {
  title: string;
  items: SidebarItem[];
  lockLastItem?: boolean;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const sectionId = `survey-sidebar-section-${title.toLowerCase().replace(/\s+/g, "-")}`;

  function toggleSection() {
    setCollapsed((current) => !current);
  }

  function handleHeaderClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    toggleSection();
  }

  return (
    <section
      className={`survey-sidebar-section ${collapsed ? "survey-sidebar-section-collapsed" : ""}`}
      onClick={toggleSection}
    >
      <button
        type="button"
        className="survey-sidebar-section-trigger"
        aria-expanded={!collapsed}
        aria-controls={sectionId}
        onClick={handleHeaderClick}
      >
        <span className="survey-sidebar-section-title">{title}</span>
        <span className="survey-sidebar-section-caret" aria-hidden="true">
          <SurveyIcon name="section-chevron" />
        </span>
      </button>
      <div
        id={sectionId}
        className="survey-sidebar-section-items-shell"
        aria-hidden={collapsed}
      >
        <div className="survey-sidebar-section-items">
        {items.map((item, index) => (
          <SidebarNavItem
            key={item.label}
            item={item}
            locked={lockLastItem && index === items.length - 1}
            staticDisplay
          />
        ))}
        </div>
      </div>
    </section>
  );
}

export function SurveySidebar({
  themeMode,
  onThemeChange
}: {
  themeMode: "light" | "dark";
  onThemeChange: (mode: "light" | "dark") => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const themeToggleItem: SidebarItem =
    themeMode === "dark"
      ? { label: "Dark mode", icon: "moon" }
      : { label: "Light mode", icon: "sun" };
  const styleGuideItem: SidebarItem = { label: "Style Guide", icon: "grid" };

  return (
    <aside className="survey-sidebar" id="survey-primary-sidebar">
      <div className="survey-sidebar-top">
        <div className="survey-workspace-switcher" role="button" tabIndex={0}>
          <span className="survey-workspace-logo">A</span>
          <span className="survey-workspace-name">Acme inc.</span>
          <span className="survey-workspace-chevron" aria-hidden="true">
            <SurveyIcon name="chevron" />
          </span>
        </div>

        <div className="survey-sidebar-group">
          {mainNavigation.map((item) => (
            <SidebarNavItem
              key={item.label}
              item={item}
              current={item.label === "Surveys" && location.pathname.startsWith("/surveys")}
              onClick={
                item.label === "Surveys"
                  ? () => navigate("/surveys")
                  : undefined
              }
            />
          ))}
        </div>

        <SidebarSection title="My teams" items={teamNavigation} />
        <SidebarSection title="Pinned reports" items={pinnedReports} lockLastItem />
      </div>

      <div className="survey-sidebar-bottom">
        <SidebarNavItem
          item={styleGuideItem}
          current={location.pathname.startsWith("/style-guide")}
          onClick={() => navigate("/style-guide")}
        />

        <SidebarNavItem
          item={themeToggleItem}
          onClick={() => onThemeChange(themeMode === "dark" ? "light" : "dark")}
        />

        {utilityNavigation.map((item) => (
          <SidebarNavItem
            key={item.label}
            item={item}
            current={item.label === "Settings" && location.pathname.startsWith("/surveys/settings")}
            onClick={item.label === "Settings" ? () => navigate("/surveys/settings") : undefined}
          />
        ))}
      </div>
    </aside>
  );
}
