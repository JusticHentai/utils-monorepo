import { action } from 'storybook/actions'
import get from '../../../packages/js-utils/src/get'

const basicDemo = () => {
  // 字符串 key
  action('get - 字符串 key')(
    get({ a: 1 }, 'a'),
  )

  // 数组 path
  action('get - 数组路径')(
    get({ a: 1 }, ['a']),
  )

  // 深层路径
  const obj = { a: { b: 2 } }
  action('get - 深层路径')({
    'get(obj, "a.b")': get(obj, 'a.b'),
    'get(obj, ["a","b"])': get(obj, ['a', 'b']),
  })

  // 数组索引路径
  const arr = { a: [{ b: { c: 3 } }] }
  action('get - 数组索引路径')({
    'get(arr, "a[0].b.c")': get(arr, 'a[0].b.c'),
    'get(arr, ["a","0","b","c"])': get(arr, ['a', '0', 'b', 'c']),
  })
}

export default basicDemo
