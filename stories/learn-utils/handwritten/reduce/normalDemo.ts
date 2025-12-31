import reduce from '../../../../packages/learn-utils/src/handwritten/reduce'

const normalDemo = () => {
  const arr = [1, 2, 3, 4, 5]

  // 求和
  const sum = reduce(arr, (acc, curr) => acc + curr, 0)

  // 求最大值
  const max = reduce(arr, (acc, curr) => Math.max(acc, curr))

  // 数组转对象
  const obj = reduce(
    arr,
    (acc, curr, index) => {
      acc[`key${index}`] = curr
      return acc
    },
    {} as Record<string, number>
  )

  return {
    original: arr,
    sum, // 15
    max, // 5
    obj, // {key0: 1, key1: 2, ...}
  }
}

export default normalDemo
