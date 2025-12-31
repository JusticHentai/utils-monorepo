import sortColors from '../../../../packages/learn-utils/src/leetcode/sortColors'

const normalDemo = () => {
  const nums = [2, 0, 2, 1, 1, 0]
  const numsCopy = [...nums]
  sortColors(numsCopy)

  return {
    input: nums,
    output: numsCopy, // [0, 0, 1, 1, 2, 2]
    explanation: '原地排序，0 代表红色，1 代表白色，2 代表蓝色',
  }
}

export default normalDemo
