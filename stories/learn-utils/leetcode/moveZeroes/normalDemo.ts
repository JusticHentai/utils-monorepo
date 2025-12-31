import moveZeroes from '../../../../packages/learn-utils/src/leetcode/moveZeroes'

const normalDemo = () => {
  const nums = [0, 1, 0, 3, 12]
  const numsCopy = [...nums]
  moveZeroes(numsCopy)

  return {
    input: nums,
    output: numsCopy, // [1, 3, 12, 0, 0]
    explanation: '将所有 0 移动到数组末尾，保持非零元素相对顺序',
  }
}

export default normalDemo
