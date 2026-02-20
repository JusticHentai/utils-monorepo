import { action } from 'storybook/actions'
import last from '../../../packages/js-utils/src/last'

const basicDemo = () => {
  // 基础用法
  action('last - 获取最后一个元素')({
    'last([1, 2, 3, 4])': last([1, 2, 3, 4]),
    期望: 4,
  })

  // 空数组返回 undefined
  action('last - 空数组')({
    'last([])': last([]),
    期望: undefined,
  })

  // 作为 map 的迭代器 (lodash 测试)
  const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  action('last - 作为 map 迭代器')({
    输入: arrays,
    'arrays.map(last)': arrays.map((arr) => last(arr)),
    期望: [3, 6, 9],
  })

  // 单元素数组
  action('last - 单元素')({
    'last([42])': last([42]),
    期望: 42,
  })
}

export default basicDemo