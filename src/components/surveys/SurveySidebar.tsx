import { useState } from "react";
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
  collapsed = false,
  item,
  locked = false,
  onClick,
  current = false,
  staticDisplay = false
}: {
  collapsed?: boolean;
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
      {!collapsed ? <span className="survey-sidebar-label">{item.label}</span> : null}
      {locked && !collapsed ? (
        <span className="survey-sidebar-lock" aria-hidden="true">
          <SurveyIcon name="lock" />
        </span>
      ) : null}
    </>
  );

  if (staticDisplay) {
    return (
      <div className={className} aria-hidden="true" title={collapsed ? item.label : undefined}>
        {content}
      </div>
    );
  }

  return (
    <button
      type="button"
      className={className}
      aria-current={current ? "page" : undefined}
      aria-label={collapsed ? item.label : undefined}
      onClick={onClick}
      disabled={!onClick}
      title={collapsed ? item.label : undefined}
    >
      {content}
    </button>
  );
}

function SidebarSection({
  collapsedSidebar = false,
  title,
  items,
  lockLastItem = false,
  getItemProps
}: {
  collapsedSidebar?: boolean;
  title: string;
  items: SidebarItem[];
  lockLastItem?: boolean;
  getItemProps?: (item: SidebarItem, index: number) => Partial<{
    locked: boolean;
    onClick: () => void;
    current: boolean;
    staticDisplay: boolean;
  }>;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const sectionId = `survey-sidebar-section-${title.toLowerCase().replace(/\s+/g, "-")}`;

  function toggleSection() {
    setCollapsed((current) => !current);
  }

  return (
    <section
      className={`survey-sidebar-section ${collapsed ? "survey-sidebar-section-collapsed" : ""} ${collapsedSidebar ? "survey-sidebar-section-sidebar-collapsed" : ""}`.trim()}
    >
      {!collapsedSidebar ? (
        <button
          type="button"
          className="survey-sidebar-section-trigger"
          aria-expanded={!collapsed}
          aria-controls={sectionId}
          onClick={toggleSection}
        >
          <span className="survey-sidebar-section-title">{title}</span>
          <span className="survey-sidebar-section-caret" aria-hidden="true">
            <SurveyIcon name="section-chevron" />
          </span>
        </button>
      ) : null}
      <div
        id={sectionId}
        className="survey-sidebar-section-items-shell"
        aria-hidden={collapsedSidebar ? undefined : collapsed}
      >
        <div className="survey-sidebar-section-items">
          {items.map((item, index) => {
            const itemProps = getItemProps?.(item, index) ?? {};

            return (
              <SidebarNavItem
                key={item.label}
                collapsed={collapsedSidebar}
                item={item}
                locked={itemProps.locked ?? (lockLastItem && index === items.length - 1)}
                onClick={itemProps.onClick}
                current={itemProps.current}
                staticDisplay={itemProps.staticDisplay ?? !itemProps.onClick}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SurveySidebar({
  isCollapsed,
  themeMode,
  onThemeChange,
  onToggleCollapsed
}: {
  isCollapsed: boolean;
  themeMode: "light" | "dark";
  onThemeChange: (mode: "light" | "dark") => void;
  onToggleCollapsed: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const usesCompactLayout = false;
  const themeToggleItem: SidebarItem =
    themeMode === "dark"
      ? { label: "Dark mode", icon: "moon" }
      : { label: "Light mode", icon: "sun" };
  const styleGuideItem: SidebarItem = { label: "Style Guide", icon: "grid" };

  return (
    <aside
      className={`survey-sidebar ${usesCompactLayout ? "survey-sidebar-collapsed" : ""}`.trim()}
      id="survey-primary-sidebar"
    >
      <div className="survey-sidebar-top">
        <div className="survey-workspace-row">
          <div
            className="survey-workspace-switcher"
            role="button"
            tabIndex={0}
            aria-label="Workspace switcher"
            title={usesCompactLayout ? "Acme inc." : undefined}
          >
            <span className="survey-workspace-logo">A</span>
            {!usesCompactLayout ? (
              <>
                <span className="survey-workspace-name">Acme inc.</span>
                <span className="survey-workspace-chevron" aria-hidden="true">
                  <SurveyIcon name="chevron" />
                </span>
              </>
            ) : null}
          </div>
          <button
            type="button"
            className="survey-sidebar-collapse-button"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={onToggleCollapsed}
          >
            <SurveyIcon name="sidebar-expanded" />
          </button>
        </div>

        <div className="survey-sidebar-group">
          {mainNavigation.map((item) => (
            <SidebarNavItem
              key={item.label}
              collapsed={usesCompactLayout}
              item={item}
              current={
                (item.label === "Surveys" && location.pathname.startsWith("/surveys")) ||
                (item.label === "All reports" && location.pathname.startsWith("/reports"))
              }
              onClick={(() => {
                if (item.label === "Surveys") {
                  return () => navigate("/surveys");
                }

                if (item.label === "All reports") {
                  return () => navigate("/reports");
                }

                return undefined;
              })()}
            />
          ))}
        </div>

        <SidebarSection collapsedSidebar={usesCompactLayout} title="My teams" items={teamNavigation} />
        <SidebarSection
          collapsedSidebar={usesCompactLayout}
          title="Pinned reports"
          items={pinnedReports}
          lockLastItem
          getItemProps={(item) => {
            if (item.label === "KPIs") {
              return {
                current: location.pathname === "/reports/kpis",
                onClick: () => navigate("/reports/kpis")
              };
            }

            return {
              staticDisplay: true
            };
          }}
        />
      </div>

      <div className="survey-sidebar-bottom">
        <SidebarNavItem
          collapsed={usesCompactLayout}
          item={styleGuideItem}
          current={location.pathname.startsWith("/style-guide")}
          onClick={() => navigate("/style-guide")}
        />

        <SidebarNavItem
          collapsed={usesCompactLayout}
          item={themeToggleItem}
          onClick={() => onThemeChange(themeMode === "dark" ? "light" : "dark")}
        />

        {utilityNavigation.map((item) => (
          <SidebarNavItem
            key={item.label}
            collapsed={usesCompactLayout}
            item={item}
            current={item.label === "Settings" && location.pathname.startsWith("/surveys/settings")}
            onClick={item.label === "Settings" ? () => navigate("/surveys/settings") : undefined}
          />
        ))}
      </div>
    </aside>
  );
}
