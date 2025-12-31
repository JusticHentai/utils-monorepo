import filter from '../../../../packages/learn-utils/src/handwritten/filter'

const normalDemo = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // 过滤出偶数
  const evenNumbers = filter(arr, (item) => item % 2 === 0)

  // 过滤出大于5的数
  const greaterThan5 = filter(arr, (item) => item > 5)

  return {
    original: arr,
    evenNumbers, // [2, 4, 6, 8, 10]
    greaterThan5, // [6, 7, 8, 9, 10]
  }
}

export default normalDemo
