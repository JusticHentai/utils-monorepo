import replaceSpace from '@jqxon/learn-utils/leetcode/replaceSpace'

export default () => {
  const s = 'We are happy.'

  const result = replaceSpace(s)

  console.log('原字符串:', s)
  console.log('替换后:', result)

  return result
}
