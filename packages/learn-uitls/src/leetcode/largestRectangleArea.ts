export default function largestRectangleArea(heights: number[]): number {
  let maxArea = 0

  const stack: number[] = []

  // 两个 0 方便解决边界判断
  heights = [0, ...heights, 0]

  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const stackTopIndex = stack.pop() as number

      maxArea = Math.max(
        maxArea,
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
      )
    }

    stack.push(i)
  }

  return maxArea
}
