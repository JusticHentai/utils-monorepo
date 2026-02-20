import minWindow from '../../../../packages/learn-utils/src/leetcode/minWindow'

export default () => {
  const s = 'ADOBECODEBANC'
  const t = 'ABC'

  const result = minWindow(s, t)

  console.log('字符串 s:', s)
  console.log('字符串 t:', t)
  console.log('最小覆盖子串:', result)

  return result
}
