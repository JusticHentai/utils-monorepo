import { action } from 'storybook/actions'
import { invertBy } from '../../../packages/js-utils/src/invert'

const invertByDemo = () => {
  const obj = { a: 1, b: 2, c: 1 }

  // 默认分组
  action('invertBy - 默认分组')(
    invertBy(obj),
  )

  // 自定义迭代器
  action('invertBy - 自定义迭代器')(
    invertBy(obj, (value) => 'group' + value),
  )

  // hasOwnProperty / constructor 作为值
  action('invertBy - 特殊值')(
    invertBy({ a: 'hasOwnProperty', b: 'constructor' } as any),
  )
}

export default invertByDemo
