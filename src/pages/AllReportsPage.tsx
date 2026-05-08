import { CanvasSidebarToggle } from "../components/surveys/CanvasSidebarToggle";
import { Button } from "../components/ui/Button";
import { IconButton } from "../components/ui/IconButton";
import { Select } from "../components/ui/Select";
import { SurveyIcon } from "../components/surveys/SurveyIcons";

const REPORT_ROWS = [
  {
    name: "DORA metrics",
    description: "Deployment and delivery performance",
    updatedAt: "Yesterday",
    icon: "sparkle",
    accent: "green",
    pinned: true
  },
  {
    name: "Estimation accuracy",
    description: "Planned vs actual delivery trends",
    updatedAt: "3 days ago",
    icon: "hash",
    accent: "pink",
    pinned: true
  },
  {
    name: "Bug resolution",
    description: "How quickly issues are resolved",
    updatedAt: "2 weeks ago",
    icon: "fire",
    accent: "orange",
    pinned: false
  },
  {
    name: "KPI report",
    description: "High-level view of team health",
    updatedAt: "2 hours ago",
    icon: "hash",
    accent: "indigo",
    pinned: true
  },
  {
    name: "Cycle time deep dive",
    description: "Breakdown of delivery speed across teams",
    updatedAt: "1 week ago",
    icon: "target",
    accent: "danger",
    pinned: false
  },
  {
    name: "Investment allocation",
    description: "Where engineering time is spent",
    updatedAt: "1 month ago",
    icon: "pie",
    accent: "cyan",
    pinned: false
  }
] as const;

function ReportNameCell({
  accent,
  icon,
  name,
  pinned
}: {
  accent: string;
  icon: string;
  name: string;
  pinned: boolean;
}) {
  return (
    <div className="survey-all-reports-name-cell">
      <span className={`survey-all-reports-row-icon survey-all-reports-row-icon-${accent}`}>
        <SurveyIcon name={icon} />
      </span>
      <div className="survey-all-reports-name-copy">
        <span className="survey-all-reports-name-text">{name}</span>
        {pinned ? (
          <button
            type="button"
            className="survey-all-reports-favorite"
            aria-label={`${name} is pinned`}
          >
            <SurveyIcon name="sparkle" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function AllReportsPage({
  onSidebarToggle,
  showSidebarToggle
}: {
  onSidebarToggle: () => void;
  showSidebarToggle: boolean;
}) {
  return (
    <section
      className="survey-main-canvas survey-all-reports-shell survey-all-reports-page"
      aria-label="All reports page"
    >
      <header className="survey-all-reports-header">
        <div className="survey-canvas-header-leading">
          {showSidebarToggle ? <CanvasSidebarToggle onToggle={onSidebarToggle} /> : null}
          <h1 className="survey-all-reports-title">All reports</h1>
        </div>

        <div className="survey-all-reports-actions" aria-label="All reports actions">
          <IconButton aria-label="Search reports" className="survey-all-reports-search-button">
            <SurveyIcon name="search" />
          </IconButton>

          <Select
            id="reports-owner-filter"
            label="Created by"
            defaultValue="created-by-me"
            className="survey-all-reports-filter-field"
            labelClassName="survey-visually-hidden"
            selectClassName="survey-all-reports-filter-select"
          >
            <option value="created-by-me">Created by me</option>
          </Select>

          <Button variant="secondary" className="survey-all-reports-new-button">
            New report
          </Button>
        </div>
      </header>

      <div className="survey-all-reports-table-shell">
        <div className="survey-all-reports-table">
          <div className="survey-all-reports-table-header" role="row">
            <div className="survey-all-reports-header-cell survey-all-reports-column-name">Report</div>
            <div className="survey-all-reports-header-cell survey-all-reports-column-description">Description</div>
            <div className="survey-all-reports-header-cell survey-all-reports-column-updated">
              <span>Last updated</span>
              <SurveyIcon name="chevron" />
            </div>
            <div className="survey-all-reports-header-action" aria-hidden="true" />
          </div>

          {REPORT_ROWS.map((report) => (
            <div key={report.name} className="survey-all-reports-row" role="row">
              <div className="survey-all-reports-cell survey-all-reports-column-name">
                <ReportNameCell {...report} />
              </div>
              <div className="survey-all-reports-cell survey-all-reports-column-description">
                {report.description}
              </div>
              <div className="survey-all-reports-cell survey-all-reports-column-updated">
                {report.updatedAt}
              </div>
              <div className="survey-all-reports-row-action">
                <IconButton aria-label={`Open actions for ${report.name}`} className="survey-all-reports-menu-button">
                  <SurveyIcon name="ellipsis" />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
