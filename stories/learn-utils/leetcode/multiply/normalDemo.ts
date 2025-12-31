import multiply from '@jqxon/learn-utils/leetcode/multiply'

export default () => {
  const num1 = '123'
  const num2 = '456'

  const result = multiply(num1, num2)

  console.log('num1:', num1)
  console.log('num2:', num2)
  console.log('乘积:', result)

  return result
}
