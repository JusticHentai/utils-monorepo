import map from '../../../../packages/learn-utils/src/handwritten/map'

const normalDemo = () => {
  const arr = [1, 2, 3, 4, 5]

  // 每个元素乘以2
  const doubled = map(arr, (item) => item * 2)

  // 每个元素转为对象
  const objects = map(arr, (item, index) => ({ id: index, value: item }))

  return {
    original: arr,
    doubled, // [2, 4, 6, 8, 10]
    objects, // [{id: 0, value: 1}, ...]
  }
}

export default normalDemo
