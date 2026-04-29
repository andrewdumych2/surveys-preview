export type HeatmapTone = {
  max: number;
  background: string;
  text: string;
  selectedBackground: string;
};

export const HEATMAP_SCALE: HeatmapTone[] = [
  { max: 1.0, background: "#f05252", text: "#111928", selectedBackground: "#f26f63" },
  { max: 1.5, background: "#f67e53", text: "#111928", selectedBackground: "#f79463" },
  { max: 2.0, background: "#f8a562", text: "#111928", selectedBackground: "#f8a562" },
  { max: 2.5, background: "#f8c87d", text: "#111928", selectedBackground: "#f8c87d" },
  { max: 3.3, background: "#fae8a3", text: "#111928", selectedBackground: "#fae8a3" },
  { max: 3.5, background: "#c4cd86", text: "#111928", selectedBackground: "#ccd48b" },
  { max: 4.0, background: "#8eb270", text: "#111928", selectedBackground: "#96b879" },
  { max: 4.5, background: "#579660", text: "#111928", selectedBackground: "#63a068" },
  { max: Number.POSITIVE_INFINITY, background: "#057a55", text: "#f3f4f6", selectedBackground: "#11835d" }
];

export const HEATMAP_EMPTY_TONE: HeatmapTone = {
  max: Number.NaN,
  background: "var(--theme-surface-hover, rgba(17, 25, 40, 0.04))",
  text: "var(--theme-text-secondary, rgba(0, 0, 0, 0.56))",
  selectedBackground: "var(--theme-surface-hover, rgba(17, 25, 40, 0.04))"
};

export function getHeatmapTone(value: number | null) {
  if (value === null) {
    return HEATMAP_EMPTY_TONE;
  }

  return HEATMAP_SCALE.find((tone) => value <= tone.max) ?? HEATMAP_SCALE[HEATMAP_SCALE.length - 1];
}
