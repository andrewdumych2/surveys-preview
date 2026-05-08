import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faAnglesDown,
  faAnglesUp,
  faArrowDown,
  faArrowUp,
  faArrowTrendUp,
  faArrowDownWideShort,
  faArrowUpShortWide,
  faBullseye,
  faBars,
  faCalendarDays,
  faCaretDown,
  faCaretRight,
  faCheck,
  faChartPie,
  faChartSimple,
  faChevronRight,
  faClose,
  faBook,
  faCat,
  faCoffee,
  faComment,
  faCog,
  faCodeBranch,
  faDog,
  faEllipsis,
  faEquals,
  faDownload,
  faFire,
  faGripLinesVertical,
  faFileCsv,
  faFilter,
  faHashtag,
  faLayerGroup,
  faLock,
  faPen,
  faPlug,
  faPlus,
  faMoon,
  faMagnifyingGlass,
  faQuestion,
  faStar,
  faSun,
  faTableCells,
  faTrash,
  faTree,
  faUserGroup,
  faUserPlus,
  faVideo,
  faWindowMaximize
} from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  name: string;
  className?: string;
  fixedWidth?: boolean;
}

function SidebarExpandedIcon({ className }: Pick<IconProps, "className">) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M14.0117 3.75C16.0828 3.75 17.7617 5.42893 17.7617 7.5V12.5C17.7617 14.5711 16.0828 16.25 14.0117 16.25H6.01172C3.94065 16.25 2.26172 14.5711 2.26172 12.5V7.5C2.26172 5.42893 3.94065 3.75 6.01172 3.75H14.0117ZM6.01172 5.25C4.76908 5.25 3.76172 6.25736 3.76172 7.5V12.5C3.76172 13.7426 4.76908 14.75 6.01172 14.75H14.0117C15.2544 14.75 16.2617 13.7426 16.2617 12.5V7.5C16.2617 6.25736 15.2544 5.25 14.0117 5.25H6.01172ZM5.74414 6.5C6.15835 6.5 6.49414 6.83579 6.49414 7.25V12.75C6.49414 13.1642 6.15835 13.5 5.74414 13.5C5.32993 13.5 4.99414 13.1642 4.99414 12.75V7.25C4.99414 6.83579 5.32993 6.5 5.74414 6.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SidebarCollapsedIcon({ className }: Pick<IconProps, "className">) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: "scale(1.2)" }}
    >
      <path
        d="M14.0156 3.75C16.0867 3.75 17.7656 5.42893 17.7656 7.5V12.5C17.7656 14.5711 16.0867 16.25 14.0156 16.25H6.01562C3.94456 16.25 2.26562 14.5711 2.26562 12.5V7.5C2.26562 5.42893 3.94456 3.75 6.01562 3.75H14.0156ZM8.49805 14.75H14.0156C15.2583 14.75 16.2656 13.7426 16.2656 12.5V7.5C16.2656 6.25736 15.2583 5.25 14.0156 5.25H8.49805V14.75ZM6.01562 5.25C4.77298 5.25 3.76562 6.25736 3.76562 7.5V12.5C3.76562 13.7426 4.77298 14.75 6.01562 14.75H6.99805V5.25H6.01562Z"
        fill="currentColor"
      />
    </svg>
  );
}

const iconMap: Record<string, IconDefinition> = {
  menu: faBars,
  bars: faChartSimple,
  pie: faChartPie,
  target: faBullseye,
  comment: faComment,
  calendar: faCalendarDays,
  grid: faTableCells,
  trend: faArrowTrendUp,
  layers: faLayerGroup,
  window: faWindowMaximize,
  plug: faPlug,
  sparkle: faStar,
  sun: faSun,
  moon: faMoon,
  shield: faCodeBranch,
  hash: faHashtag,
  "user-plus": faUserPlus,
  users: faUserGroup,
  gear: faCog,
  chevron: faCaretDown,
  search: faMagnifyingGlass,
  check: faCheck,
  caret: faCaretRight,
  "section-chevron": faChevronRight,
  lock: faLock,
  close: faClose,
  drag: faGripLinesVertical,
  ellipsis: faEllipsis,
  download: faDownload,
  edit: faPen,
  "file-csv": faFileCsv,
  filter: faFilter,
  plus: faPlus,
  timeline: faChartSimple,
  video: faVideo,
  cat: faCat,
  dog: faDog,
  book: faBook,
  coffee: faCoffee,
  tree: faTree,
  fire: faFire,
  question: faQuestion,
  "arrow-up": faArrowUp,
  "arrow-down": faArrowDown,
  "sort-desc": faArrowDownWideShort,
  "sort-asc": faArrowUpShortWide,
  "star-outline": faStarRegular,
  delete: faTrash,
  "priority-highest": faAnglesUp,
  "priority-high": faAngleUp,
  "priority-medium": faEquals,
  "priority-low": faAngleDown,
  "priority-lowest": faAnglesDown
};

export function SurveyIcon({ name, ...props }: IconProps) {
  if (name === "sidebar-expanded") {
    return <SidebarExpandedIcon {...props} />;
  }

  if (name === "sidebar-collapsed") {
    return <SidebarCollapsedIcon {...props} />;
  }

  const icon = iconMap[name] ?? faTableCells;
  return <FontAwesomeIcon icon={icon} {...props} />;
}
