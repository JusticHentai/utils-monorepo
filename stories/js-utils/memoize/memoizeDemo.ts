import { action } from 'storybook/actions'
import memoize from '../../../packages/js-utils/src/memoize'

const memoizeDemo = () => {
  // lodash 测试: 基于第一个参数缓存
  let callCount = 0
  const add = memoize((a: number, b: number, c: number) => {
    callCount++
    return a + b + c
  })

  const first = add(1, 2, 3)
  const second = add(1, 3, 5) // 第一个参数相同，返回缓存

  action('memoize - 基于首参缓存')({
    'add(1,2,3)': first,
    'add(1,3,5)': second,
    调用次数: callCount,
    说明: '第一个参数都是1，第二次返回缓存值6而非9',
  })

  // lodash 测试: 缓存 prototype 上的属性名
  const identity = memoize((v: string) => v)
  const protoKeys = [
    'constructor', 'hasOwnProperty', 'isPrototypeOf',
    'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf',
  ]
  const results = protoKeys.map((k) => identity(k))

  action('memoize - prototype 属性名作为缓存键')({
    输入: protoKeys,
    结果: results,
    正确: JSON.stringify(results) === JSON.stringify(protoKeys),
    说明: '使用 Map 存储缓存，不受原型链影响',
  })

  // cache 属性
  action('memoize - cache 属性')({
    缓存大小: identity.cache.size,
    缓存类型: identity.cache instanceof Map,
  })
}

export default memoizeDemo