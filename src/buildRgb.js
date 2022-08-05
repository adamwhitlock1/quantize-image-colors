export function buildRgb(rgbDecimal) {
  const joinMainRgb =
    typeof rgbDecimal === "string"
      ? rgbDecimal.toString().replaceAll(".", ",")
      : "";
  return `rgb(${joinMainRgb})`;
}
