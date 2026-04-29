import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowTrendUp,
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
  faComment,
  faCog,
  faCodeBranch,
  faDownload,
  faHashtag,
  faLayerGroup,
  faLock,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faPlug,
  faPlus,
  faMoon,
  faStar,
  faSun,
  faTableCells,
  faUserGroup,
  faUserPlus,
  faWindowMaximize
} from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  name: string;
  className?: string;
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
  check: faCheck,
  caret: faCaretRight,
  "section-chevron": faChevronRight,
  lock: faLock,
  close: faClose,
  download: faDownload,
  plus: faPlus,
  "arrow-up": faLongArrowAltUp,
  "arrow-down": faLongArrowAltDown
};

export function SurveyIcon({ name, ...props }: IconProps) {
  const icon = iconMap[name] ?? faTableCells;
  return <FontAwesomeIcon icon={icon} {...props} />;
}
