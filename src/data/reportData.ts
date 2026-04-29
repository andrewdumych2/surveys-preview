import {
  getSurveyById,
  getSurveyCellDetails,
  type SurveyCellSelection,
  type SurveyDataset
} from "./surveysData";

export type ReportImprovement = {
  title: string;
  currentScore: number;
  previousScore: number;
};

export type ReportCommentFocus = {
  title: string;
  score: number;
  commentCount: number;
};

export type ReportRankedItem = {
  title: string;
  score: number;
};

export interface SurveyReportData {
  surveyLabel: string;
  surveyDate: string;
  experienceScore: number;
  scoreDelta: number;
  experienceSummary: string;
  topImprovements: ReportImprovement[];
  legendCurrent: string;
  legendPrevious: string;
  commentFocus: ReportCommentFocus[];
  highestRated: ReportRankedItem[];
  opportunities: ReportRankedItem[];
}

function average(values: Array<number | null>) {
  const scoredValues = values.filter((value): value is number => value !== null);

  if (scoredValues.length === 0) {
    return 0;
  }

  return Number((scoredValues.reduce((sum, value) => sum + value, 0) / scoredValues.length).toFixed(1));
}

function roundToTenth(value: number) {
  return Number(value.toFixed(1));
}

function buildAverageSelection(rowLabel: string, rowValues: Array<number | null>): SurveyCellSelection {
  return {
    rowLabel,
    columnLabel: "Average",
    value: rowValues[0],
    rowValues
  };
}

function buildSyntheticPreviousScore(label: string, currentScore: number) {
  const seed = Array.from(label).reduce((sum, character) => sum + character.charCodeAt(0), 0);
  const delta = 0.2 + ((seed % 6) * 0.1 + (seed % 3) * 0.05);
  return Math.max(1, roundToTenth(currentScore - delta));
}

function buildTopicAverages(survey: SurveyDataset) {
  return survey.rows
    .slice(1)
    .map((row) => ({
      title: row.label,
      score: row.values[0] ?? average(row.values.slice(1)),
      rowValues: row.values
    }))
    .filter((row) => row.score !== null);
}

export function getReportTopicSelection(title: string, surveyId: string): SurveyCellSelection | null {
  const survey = getSurveyById(surveyId);
  const topic = buildTopicAverages(survey).find((item) => item.title === title);

  if (!topic) {
    return null;
  }

  return buildAverageSelection(topic.title, topic.rowValues);
}

export function getSurveyReportData(surveyId: string): SurveyReportData {
  const survey = getSurveyById(surveyId);
  const topicAverages = buildTopicAverages(survey);
  const allTeamTopicValues = survey.rows.slice(1).flatMap((row) => row.values.slice(1));
  const experienceScore = average(allTeamTopicValues);
  const previousTopicScores = topicAverages.map((row) => buildSyntheticPreviousScore(row.title, row.score));
  const previousExperienceScore = average(previousTopicScores);
  const scoreDelta = roundToTenth(experienceScore - previousExperienceScore);

  const topImprovements = topicAverages
    .map((row) => ({
      title: row.title,
      currentScore: row.score,
      previousScore: buildSyntheticPreviousScore(row.title, row.score)
    }))
    .map(({ title, currentScore, previousScore }) => ({
      title,
      currentScore,
      previousScore,
      delta: roundToTenth(currentScore - previousScore)
    }))
    .sort((left, right) => right.delta - left.delta)
    .slice(0, 3)
    .map(({ title, currentScore, previousScore }) => ({
      title,
      currentScore,
      previousScore
    }));

  const commentFocus = topicAverages
    .map((row) => {
      const details = getSurveyCellDetails(buildAverageSelection(row.title, row.rowValues), surveyId);

      return {
        title: row.title,
        score: row.score,
        commentCount: details.commentCount
      };
    })
    .sort((left, right) => right.commentCount - left.commentCount || right.score - left.score)
    .slice(0, 4);

  const highestRated = [...topicAverages]
    .sort((left, right) => right.score - left.score)
    .slice(0, 3)
    .map(({ title, score }) => ({ title, score }));

  const opportunities = [...topicAverages]
    .sort((left, right) => left.score - right.score)
    .slice(0, 3)
    .map(({ title, score }) => ({ title, score }));

  const previousSurvey = survey.status === "completed" ? "Previous survey" : "Latest completed survey";

  return {
    surveyLabel: survey.status === "scheduled" ? "Scheduled survey" : "Survey results",
    surveyDate: survey.reportDate,
    experienceScore,
    scoreDelta,
    experienceSummary:
      "Average number of all topic scores across teams. Indicates the overall quality of developer experience in the company.",
    topImprovements,
    legendCurrent: `This survey (${survey.menuLabel})`,
    legendPrevious: `${previousSurvey} benchmark`,
    commentFocus,
    highestRated,
    opportunities
  };
}
