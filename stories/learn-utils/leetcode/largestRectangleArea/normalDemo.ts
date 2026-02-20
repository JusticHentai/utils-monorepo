import largestRectangleArea from '../../../../packages/learn-utils/src/leetcode/largestRectangleArea'

export default () => {
  const heights = [2, 1, 5, 6, 2, 3]

  const result = largestRectangleArea(heights)

  console.log('柱状图高度:', heights)
  console.log('最大矩形面积:', result)

  return result
}
