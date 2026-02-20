import { action } from 'storybook/actions'
import isEqual from '../../../packages/js-utils/src/isEqual'

const objectDemo = () => {
  // 深层对象
  action('isEqual - 深层对象')({
    '相等': isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }),
    '不等': isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }),
  })

  // 数组
  action('isEqual - 数组')({
    '相等': isEqual([1, 2, 3], [1, 2, 3]),
    '长度不同': isEqual([1, 2], [1, 2, 3]),
    '嵌套相等': isEqual([[1], [2]], [[1], [2]]),
  })

  // Map
  const map1 = new Map([['a', 1]])
  const map2 = new Map([['a', 1]])
  const map3 = new Map([['a', 2]])
  action('isEqual - Map')({
    '相等': isEqual(map1, map2),
    '不等': isEqual(map1, map3),
  })

  // Set
  const set1 = new Set([1, 2, 3])
  const set2 = new Set([1, 2, 3])
  const set3 = new Set([1, 2])
  action('isEqual - Set')({
    '相等': isEqual(set1, set2),
    '不等': isEqual(set1, set3),
  })
}

export default objectDemo
