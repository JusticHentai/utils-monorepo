import { action } from 'storybook/actions'
import size from '../../../packages/js-utils/src/size'

const sizeDemo = () => {
  // 数组长度 (lodash: size([1,2,3]) => 3)
  action('size - 数组')(size([1, 2, 3]))

  // 对象键数量 (lodash: size({one:1,two:2,three:3}) => 3)
  action('size - 对象')(size({ one: 1, two: 2, three: 3 }))

  // 字符串长度 (lodash: size('pebbles') => 7)
  action('size - 字符串')(size('pebbles'))

  // null/undefined 返回 0 (lodash: size(falsey) => 0)
  action('size - null')(size(null))
  action('size - undefined')(size(undefined))

  // 空集合
  action('size - 空数组')(size([]))
  action('size - 空对象')(size({}))
  action('size - 空字符串')(size(''))

  // 带length属性的对象不被当作array-like (lodash: size({length:-1}) => 1)
  action('size - 对象有length属性')(size({ length: -1 } as any))
}

export default sizeDemo