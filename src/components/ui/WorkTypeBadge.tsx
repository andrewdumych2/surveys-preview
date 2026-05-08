type WorkType = "Features" | "Bugs" | "Maintenance";

const WORK_TYPE_BADGE_CLASS_NAMES: Record<WorkType, string> = {
  Features: "work-type-badge-features",
  Bugs: "work-type-badge-bugs",
  Maintenance: "work-type-badge-maintenance"
};

export function isWorkType(value: string): value is WorkType {
  return value === "Features" || value === "Bugs" || value === "Maintenance";
}

export function WorkTypeBadge({ workType }: { workType: WorkType }) {
  return (
    <span className={`work-type-badge ${WORK_TYPE_BADGE_CLASS_NAMES[workType]}`.trim()}>
      {workType}
    </span>
  );
}

