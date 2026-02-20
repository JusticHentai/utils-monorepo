import { action } from 'storybook/actions'
import head from '../../../packages/js-utils/src/head'

const headDemo = () => {
  // 基础：获取第一个元素
  action('head - 获取第一个元素')(
    head([1, 2, 3, 4]),
  )

  // 空数组返回 undefined
  action('head - 空数组返回 undefined')(
    head([]),
  )

  // 可作为 map 迭代器
  action('head - 作为 map 迭代器')(
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]].map(head),
  )
}

export default headDemo
