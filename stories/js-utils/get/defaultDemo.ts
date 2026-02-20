import { action } from 'storybook/actions'
import get from '../../../packages/js-utils/src/get'

const defaultDemo = () => {
  // 路径不存在返回默认值
  action('get - 路径不存在返回默认值')(
    get({ a: { b: 2 } }, 'a.b.c', 'default'),
  )

  // undefined 值返回默认值
  action('get - undefined 值返回默认值')(
    get({ a: { b: undefined } }, 'a.b', 'default'),
  )

  // null 对象返回默认值
  action('get - null 对象返回默认值')(
    get(null, 'a', 'default'),
  )

  // 数组 path 不会被拼接为字符串
  const obj = { 'a,b,c': 3, a: { b: { c: 4 } } }
  action('get - 数组路径不拼接为字符串')({
    'get(obj, ["a","b","c"])': get(obj, ['a', 'b', 'c']),
    说明: '返回 4 而非 3',
  })
}

export default defaultDemo
