import countBits from '../../../../packages/learn-utils/src/leetcode/countBits'

export default () => {
  const n = 5

  const result = countBits(n)

  console.log('输入 n:', n)
  console.log('0 到 n 每个数的二进制 1 的个数:', result)
  console.log('解释: 0->0, 1->1, 2->1, 3->2, 4->1, 5->2')

  return result
}
