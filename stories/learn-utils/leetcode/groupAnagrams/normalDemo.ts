import groupAnagrams from '../../../../packages/learn-utils/src/leetcode/groupAnagrams'

const normalDemo = () => {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
  const result = groupAnagrams(strs)

  return {
    input: strs,
    output: result,
    explanation: '字母异位词分组',
  }
}

export default normalDemo
