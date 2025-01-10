test('测试', () => {
  const quickSort = (array: any[]) => {
    const length = array.length

    if (length <= 1) {
      return array
    }

    const midIndex = Math.floor(length / 2)

    // 已经把中间值 拿出来了
    const midValue = array.splice(midIndex, 1)[0]
    const leftArray = []
    const rightArray = []

    // 排序因为少了 1 个中间 所以长度减一
    for (let i = 0; i < length - 1; i++) {
      const curValue = array[i]

      if (curValue <= midValue) {
        leftArray.push(curValue)
      } else {
        rightArray.push(curValue)
      }
    }

    return quickSort(leftArray).concat(midValue, quickSort(rightArray))
  }

  const arr = [-10, 10, 1, 34, 5, 1]

  expect(quickSort(arr)).toStrictEqual([-10, 1, 1, 5, 10, 34])
})
