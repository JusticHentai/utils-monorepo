import { action } from 'storybook/actions'
import tail from '../../../packages/js-utils/src/tail'

const tailDemo = () => {
  // 基础：排除首元素
  action('tail - 排除首元素')({
    输入: [1, 2, 3],
    结果: tail([1, 2, 3]),
  })

  // 空数组返回空
  action('tail - 空数组')({
    输入: [],
    结果: tail([]),
  })

  // 单元素 => 空数组
  action('tail - 单元素')({
    输入: [1],
    结果: tail([1]),
  })

  // 作为 map 的迭代器
  const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  action('tail - 用于 map 迭代')({
    输入: arrays,
    结果: arrays.map((arr) => tail(arr)),
  })

  // 返回新数组引用
  const original = [1, 2, 3]
  const result = tail(original)
  action('tail - 返回新数组（不修改原数组）')({
    原数组: original,
    结果: result,
    是否新引用: result !== original,
  })
}

export default tailDemo
