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

const interpolateColor2 = (colorStart, colorEnd, steps, step) => {
  var stepFactor = step / steps,
    color = []
  for (var i = 0; i < 3; i++) {
    color[i] = Math.round(colorStart[i] + stepFactor * (colorEnd[i] - colorStart[i]))
  }
  return "rgb(" + color.join(",") + ")"
}

export const getColor = (colorStart, colorEnd, steps) => {
  var colors = []
  for (var i = 0; i < steps; i++) {
    colors.push(interpolateColor2(colorStart, colorEnd, steps, i))
  }
  return colors
}

export const generateColors = (colorStart, colorEnd, steps) => {
  var colors = []
  for (var i = 0; i < steps; i++) {
    colors.push(interpolateColor(colorStart, colorEnd, steps, i))
  }
  return colors
}

const tailwindEmeraldColors = {
  0: "bg-emerald-50",
  1: "bg-emerald-100",
  2: "bg-emerald-200",
  3: "bg-emerald-300",
  4: "bg-emerald-400",
  5: "bg-emerald-500",
  6: "bg-emerald-600",
  7: "bg-emerald-700",
}

const interpolateTailwindColor = (start, end, steps, step) => {
  // Calculate the index for the color array based on the step
  const index = Math.round((step / (steps - 1)) * (end - start)) + start
  return tailwindEmeraldColors[index]
}

export const generateTailwindColors = (start, end, steps) => {
  var colors = []
  for (var i = 0; i < steps; i++) {
    colors.push(interpolateTailwindColor(start, end, steps, i))
  }
  return colors
}
