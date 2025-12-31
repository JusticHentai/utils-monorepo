import maxProduct from '@jqxon/learn-utils/leetcode/maxProduct'

export default () => {
  const nums = [2, 3, -2, 4]

  const result = maxProduct(nums)

  console.log('输入数组:', nums)
  console.log('最大乘积子数组:', result)
  console.log('子数组 [2, 3] 的乘积最大为 6')

  return result
}
