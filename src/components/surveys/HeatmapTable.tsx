import { useState } from "react";
import { getHeatmapTone } from "../../data/heatmapScale";
import { getSurveyById, type SurveyCellSelection } from "../../data/surveysData";

function formatValue(value: number | null) {
  return value === null ? "-" : value.toFixed(1);
}

function cellLabel(row: string, column: string, value: number | null) {
  return `${row} / ${column}: ${formatValue(value)}`;
}

function cellStyle(value: number | null, isSelected: boolean) {
  const tone = getHeatmapTone(value);
  const backgroundColor = isSelected && "selectedBackground" in tone ? tone.selectedBackground : tone.background;

  return {
    backgroundColor,
    color: tone.text
  };
}

export function HeatmapTable({
  surveyId,
  selectedCell,
  onSelectCell
}: {
  surveyId: string;
  selectedCell: SurveyCellSelection | null;
  onSelectCell: (selection: SurveyCellSelection | null) => void;
}) {
  const survey = getSurveyById(surveyId);
  const heatmapColumns = survey.columns;
  const heatmapRows = survey.rows;
  const [averageColumn, ...teamColumns] = heatmapColumns;
  const [averageRow, ...questionRows] = heatmapRows;
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

  function setHoverState(row: string | null, column: string | null) {
    setHoveredRow(row);
    setHoveredColumn(column);
  }

  function hoveredRowClass(row: string) {
    return hoveredRow === row ? "heatmap-hovered" : "";
  }

  function hoveredColumnClass(column: string) {
    return hoveredColumn === column ? "heatmap-hovered" : "";
  }

  function selectedRowClass(row: string) {
    return selectedCell?.rowLabel === row ? "heatmap-selected-axis" : "";
  }

  function selectedColumnClass(column: string) {
    return selectedCell?.columnLabel === column ? "heatmap-selected-axis" : "";
  }

  function selectedCellClass(row: string, column: string) {
    return selectedCell?.rowLabel === row && selectedCell?.columnLabel === column ? "heatmap-cell-selected" : "";
  }

  function isSelectedCell(row: string, column: string) {
    return selectedCell?.rowLabel === row && selectedCell?.columnLabel === column;
  }

  function handleCellClick(selection: SurveyCellSelection) {
    if (isSelectedCell(selection.rowLabel, selection.columnLabel)) {
      onSelectCell(null);
      return;
    }

    onSelectCell(selection);
  }

  function hasHoverFocus() {
    return hoveredRow !== null || hoveredColumn !== null;
  }

  function rowDimmedClass(row: string) {
    if (hasHoverFocus()) {
      return hoveredRow === row ? "" : "heatmap-dimmed";
    }

    if (!selectedCell) {
      return "";
    }

    if (selectedCell.rowLabel === row) {
      return "";
    }

    return "heatmap-dimmed";
  }

  function columnDimmedClass(column: string) {
    if (hasHoverFocus()) {
      return hoveredColumn === column ? "" : "heatmap-dimmed";
    }

    if (!selectedCell) {
      return "";
    }

    if (selectedCell.columnLabel === column) {
      return "";
    }

    return "heatmap-dimmed";
  }

  function dimmedClass(row: string, column: string) {
    if (isSelectedCell(row, column)) {
      return "";
    }

    if (hasHoverFocus()) {
      if (hoveredRow !== null && hoveredColumn !== null) {
        if (hoveredRow === row && hoveredColumn === column) {
          return "";
        }

        return "heatmap-dimmed";
      }

      if (hoveredRow === row || hoveredColumn === column) {
        return "";
      }

      return "heatmap-dimmed";
    }

    if (!selectedCell) {
      return "";
    }

    if (selectedCell.rowLabel === row && selectedCell.columnLabel === column) {
      return "";
    }

    return "heatmap-dimmed";
  }

  return (
    <section
      className={`heatmap-panel ${selectedCell ? "heatmap-panel-with-selection" : ""}`.trim()}
      aria-label="Survey results heatmap"
      onMouseLeave={() => setHoverState(null, null)}
    >
      <div className="heatmap-header-row">
        <div className="heatmap-row-label-spacer" />
        <div
          className={`heatmap-average-column-header heatmap-column-edge-top ${hoveredColumnClass(averageColumn)} ${selectedColumnClass(averageColumn)} ${columnDimmedClass(averageColumn)}`.trim()}
          onMouseEnter={() => setHoverState(null, averageColumn)}
        >
          {averageColumn}
        </div>
        <div className="heatmap-header-gap" aria-hidden="true" />
        <div className="heatmap-team-column-headers">
          {teamColumns.map((column) => (
            <div
              key={column}
              className={`heatmap-column-header heatmap-column-edge-top ${column === "Product Engineering" ? "heatmap-column-header-wrap" : ""} ${hoveredColumnClass(column)} ${selectedColumnClass(column)} ${columnDimmedClass(column)}`.trim()}
              onMouseEnter={() => setHoverState(null, column)}
            >
              {column}
            </div>
          ))}
        </div>
      </div>

      <div className="heatmap-body">
        <div className="heatmap-row-labels">
          <div
            className={`heatmap-average-label-row heatmap-row-edge-left ${hoveredRowClass(averageRow.label)} ${selectedRowClass(averageRow.label)} ${rowDimmedClass(averageRow.label)}`.trim()}
            onMouseEnter={() => setHoverState(averageRow.label, null)}
          >
            {averageRow.label}
          </div>
          <div className="heatmap-question-labels">
            {questionRows.map((row) => (
              <div
                key={row.label}
                className={`heatmap-row-label heatmap-row-edge-left ${hoveredRowClass(row.label)} ${selectedRowClass(row.label)} ${rowDimmedClass(row.label)}`.trim()}
                onMouseEnter={() => setHoverState(row.label, null)}
              >
                {row.label}
              </div>
            ))}
          </div>
        </div>

        <div className="heatmap-values-columns">
          <div
            className={`heatmap-cell heatmap-column-edge-bottom ${hoveredRowClass(averageRow.label)} ${hoveredColumnClass(averageColumn)} ${selectedRowClass(averageRow.label)} ${selectedColumnClass(averageColumn)} ${selectedCellClass(averageRow.label, averageColumn)} ${dimmedClass(averageRow.label, averageColumn)}`.trim()}
            aria-label={cellLabel(averageRow.label, averageColumn, averageRow.values[0])}
            style={cellStyle(averageRow.values[0], isSelectedCell(averageRow.label, averageColumn))}
            onMouseEnter={() => setHoverState(averageRow.label, averageColumn)}
            onClick={() =>
              handleCellClick({
                rowLabel: averageRow.label,
                columnLabel: averageColumn,
                value: averageRow.values[0],
                rowValues: averageRow.values
              })
            }
          >
            {formatValue(averageRow.values[0])}
          </div>
          <div className="heatmap-average-column-grid">
            {questionRows.map((row) => (
              <div
                key={row.label}
                className={`heatmap-cell ${row.label === questionRows[questionRows.length - 1].label ? "heatmap-column-edge-bottom" : ""} ${hoveredRowClass(row.label)} ${hoveredColumnClass(averageColumn)} ${selectedRowClass(row.label)} ${selectedColumnClass(averageColumn)} ${selectedCellClass(row.label, averageColumn)} ${dimmedClass(row.label, averageColumn)}`.trim()}
                aria-label={cellLabel(row.label, averageColumn, row.values[0])}
                style={cellStyle(row.values[0], isSelectedCell(row.label, averageColumn))}
                onMouseEnter={() => setHoverState(row.label, averageColumn)}
                onClick={() =>
                  handleCellClick({
                    rowLabel: row.label,
                    columnLabel: averageColumn,
                    value: row.values[0],
                    rowValues: row.values
                  })
                }
              >
                {formatValue(row.values[0])}
              </div>
            ))}
          </div>
        </div>

        <div className="heatmap-body-gap" aria-hidden="true" />

        <div className="heatmap-team-grid-area">
          <div className="heatmap-team-row-average">
            {averageRow.values.slice(1).map((value, index) => (
              <div
                key={`${teamColumns[index]}-${value}`}
                className={`heatmap-cell ${index === teamColumns.length - 1 ? "heatmap-row-edge-right" : ""} ${hoveredRowClass(averageRow.label)} ${hoveredColumnClass(teamColumns[index])} ${selectedRowClass(averageRow.label)} ${selectedColumnClass(teamColumns[index])} ${selectedCellClass(averageRow.label, teamColumns[index])} ${dimmedClass(averageRow.label, teamColumns[index])}`.trim()}
                aria-label={cellLabel(averageRow.label, teamColumns[index], value)}
                style={cellStyle(value, isSelectedCell(averageRow.label, teamColumns[index]))}
                onMouseEnter={() => setHoverState(averageRow.label, teamColumns[index])}
                onClick={() =>
                  handleCellClick({
                    rowLabel: averageRow.label,
                    columnLabel: teamColumns[index],
                    value,
                    rowValues: averageRow.values
                  })
                }
              >
                {formatValue(value)}
              </div>
            ))}
          </div>
          <div className="heatmap-team-grid">
            {questionRows.map((row) =>
              row.values.slice(1).map((value, index) => (
                <div
                  key={`${row.label}-${teamColumns[index]}`}
                  className={`heatmap-cell ${index === teamColumns.length - 1 ? "heatmap-row-edge-right" : ""} ${row.label === questionRows[questionRows.length - 1].label ? "heatmap-column-edge-bottom" : ""} ${hoveredRowClass(row.label)} ${hoveredColumnClass(teamColumns[index])} ${selectedRowClass(row.label)} ${selectedColumnClass(teamColumns[index])} ${selectedCellClass(row.label, teamColumns[index])} ${dimmedClass(row.label, teamColumns[index])}`.trim()}
                  aria-label={cellLabel(row.label, teamColumns[index], value)}
                  style={cellStyle(value, isSelectedCell(row.label, teamColumns[index]))}
                  onMouseEnter={() => setHoverState(row.label, teamColumns[index])}
                  onClick={() =>
                    handleCellClick({
                      rowLabel: row.label,
                      columnLabel: teamColumns[index],
                      value,
                      rowValues: row.values
                    })
                  }
                >
                  {formatValue(value)}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
