const PARTICIPATION_RING_RADIUS = 6;

export function SurveyParticipationLabel({
  percentage
}: {
  percentage: number;
}) {
  const clampedPercentage = Math.max(0, Math.min(100, Math.round(percentage)));

  return (
    <span className="survey-participation-label">
      <span className="survey-participation-ring" aria-hidden="true">
        <svg viewBox="0 0 16 16" role="presentation">
          <circle
            className="survey-participation-ring-track"
            cx="8"
            cy="8"
            r={PARTICIPATION_RING_RADIUS}
            pathLength="100"
          />
          <circle
            className="survey-participation-ring-progress"
            cx="8"
            cy="8"
            r={PARTICIPATION_RING_RADIUS}
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset={100 - clampedPercentage}
          />
        </svg>
      </span>
      <span className="survey-participation-text">{clampedPercentage}% Participation</span>
    </span>
  );
}
