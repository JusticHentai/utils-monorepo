import combinationSum from '../../../../packages/learn-utils/src/leetcode/combinationSum'

const normalDemo = () => {
  const candidates = [2, 3, 6, 7]
  const target = 7
  const result = combinationSum(candidates, target)

  return {
    candidates,
    target,
    output: result, // [[2,2,3], [7]]
    explanation: '2 + 2 + 3 = 7，7 = 7',
  }
}

export default normalDemo
