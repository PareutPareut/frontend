export const hexToRgb = hex => {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}

const interpolateColor = (colorStart, colorEnd, steps, step) => {
  var stepFactor = step / steps,
    color = []
  for (var i = 0; i < 3; i++) {
    color[i] = Math.round(colorStart[i] + stepFactor * (colorEnd[i] - colorStart[i]))
  }
  return "bg-[rgb(" + color.join(",") + ")]"
}

export const generateColors = (colorStart, colorEnd, steps) => {
  var colors = []
  for (var i = 0; i < steps; i++) {
    colors.push(interpolateColor(colorStart, colorEnd, steps, i))
  }
  return colors
}
