import { action } from 'storybook/actions'
import reduce from '../../../packages/js-utils/src/reduce'

const reduceDemo = () => {
  // 数组求和 (lodash: reduce([1,2,3], (sum,n) => sum+n, 0) => 6)
  action('reduce - 数组求和')(reduce([1, 2, 3], (sum, n) => sum + n, 0))

  // 字符串拼接 (lodash: reduce(['a','b','c'], (acc,v) => acc+v, '') => 'abc')
  action('reduce - 字符串拼接')(reduce(['a', 'b', 'c'], (acc, v) => acc + v, ''))

  // 对象迭代 (lodash: reduce({a:1,b:2,c:1}, ...))
  const grouped = reduce(
    { a: 1, b: 2, c: 1 } as Record<string, number>,
    (result: Record<string, string[]>, value, key) => {
      const k = String(value)
      ;(result[k] || (result[k] = [])).push(String(key))
      return result
    },
    {} as Record<string, string[]>,
  )
  action('reduce - 对象按值分组')(grouped)

  // iteratee 参数验证: (accumulator, value, index/key, collection)
  const args: unknown[] = []
  reduce([10, 20, 30], (acc, value, index, coll) => {
    if (args.length === 0) args.push({ acc, value, index, collLength: (coll as number[]).length })
    return acc + value
  }, 0)
  action('reduce - 迭代器参数')(args[0])

  // 空集合返回初始值
  action('reduce - 空数组返回初始值')(reduce([] as number[], (a, b) => a + b, 42))
}

export default reduceDemo