import rotate from '../../../../packages/learn-utils/src/leetcode/rotate'

const normalDemo = () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const matrixCopy = matrix.map((row) => [...row])
  rotate(matrixCopy)

  return {
    input: matrix,
    output: matrixCopy,
    // [[7,4,1],[8,5,2],[9,6,3]]
    explanation: '顺时针旋转 90 度',
  }
}

export default normalDemo
