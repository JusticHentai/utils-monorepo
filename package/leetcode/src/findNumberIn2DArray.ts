/**
 * 二维数组中的查找
 */
export default function findNumberIn2DArray(
  matrix: number[][],
  target: number
): boolean {
  const m = matrix?.length || 0
  const n = matrix[0]?.length || 0

  for (let i = 0; i < m; i++) {
    const res = binarySearch(n, (midIndex: number) => {
      if (matrix[i][midIndex] > target) {
        return 1
      } else if (matrix[i][midIndex] < target) {
        return 2
      }

      return 3
    })

    if (res !== -1) {
      return true
    }
  }

  return false
}

function binarySearch(
  length: number,
  cb: (midIndex: number) => 1 | 2 | 3
): number {
  if (length <= 0) return -1

  let lowIndex = 0
  let highIndex = length - 1

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2)

    const res = cb(midIndex)

    if (res === 1) {
      highIndex = midIndex - 1
    } else if (res === 2) {
      lowIndex = midIndex + 1
    } else {
      return midIndex
    }
  }

  return -1
}
