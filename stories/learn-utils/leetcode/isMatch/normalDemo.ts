import isMatch from '../../../../packages/learn-utils/src/leetcode/isMatch'

export default () => {
  const testCases = [
    { s: 'aa', p: 'a' },
    { s: 'aa', p: 'a*' },
    { s: 'ab', p: '.*' },
  ]

  const results = testCases.map(({ s, p }) => ({
    s,
    p,
    result: isMatch(s, p),
  }))

  console.log('正则表达式匹配测试:')
  results.forEach(({ s, p, result }) => {
    console.log(`s="${s}", p="${p}" => ${result}`)
  })

  return results
}
