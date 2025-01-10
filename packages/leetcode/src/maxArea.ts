export default function maxArea(height: number[]): number {
  let lowIndex = 0,
    highIndex = height.length - 1,
    res = 0

  while (lowIndex < highIndex) {
    if (height[lowIndex] < height[highIndex]) {
      res = Math.max(res, (highIndex - lowIndex) * height[lowIndex])
      lowIndex++
    } else {
      res = Math.max(res, (highIndex - lowIndex) * height[highIndex])
      highIndex--
    }
  }

  return res
}
