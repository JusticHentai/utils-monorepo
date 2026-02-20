import { action } from 'storybook/actions'
import propertyOf from '../../../packages/js-utils/src/propertyOf'

const propertyOfDemo = () => {
  // 基本使用 (lodash: propertyOf({a:1})('a') => 1)
  const obj = { a: { b: 1 }, c: { d: 2 }, e: 3 }
  const getFrom = propertyOf(obj)

  action('propertyOf - a.b')(getFrom('a.b'))
  action('propertyOf - c.d')(getFrom('c.d'))
  action('propertyOf - e')(getFrom('e'))

  // 数组路径
  action('propertyOf - 数组路径')(getFrom(['a', 'b']))

  // 深层路径缺失返回 undefined
  action('propertyOf - 路径缺失')(getFrom('x.y.z'))

  // 数组对象
  const arr = [1, 2, 3]
  const getFromArr = propertyOf(arr)
  action('propertyOf - 数组索引1')(getFromArr('1'))
}

export default propertyOfDemo