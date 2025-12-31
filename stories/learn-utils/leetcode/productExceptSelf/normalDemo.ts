import productExceptSelf from '../../../../packages/learn-utils/src/leetcode/productExceptSelf'

const normalDemo = () => {
  const nums = [1, 2, 3, 4]
  const result = productExceptSelf(nums)

  return {
    input: nums,
    output: result, // [24, 12, 8, 6]
    explanation: '每个位置的值是除自身外其他元素的乘积',
  }
}

export default normalDemo
