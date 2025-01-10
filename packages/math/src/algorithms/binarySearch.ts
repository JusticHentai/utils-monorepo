/**
 * 长度
 * 外部判断；1 代表目标小于中间； 2代表目标大于中间；3代表找到了
 */
export interface Options {
  length: number
  cb: (midIndex: number) => 1 | 2 | 3
}

/**
 * 二分法
 */
export default function binarySearch({ length, cb }: Options): number {
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
