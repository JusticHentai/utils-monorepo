import { action } from 'storybook/actions'
import initial from '../../../packages/js-utils/src/initial'

const basicDemo = () => {
  // 排除最后一个元素
  action('initial - 排除最后一个元素')(
    initial([1, 2, 3]),
  )

  // 空数组
  action('initial - 空数组')(
    initial([]),
  )

  // 作为 map 迭代器
  action('initial - 作为 map 迭代器')(
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]].map(initial),
  )
}

export default basicDemo
