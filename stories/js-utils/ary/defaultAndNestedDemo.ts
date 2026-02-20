import { action } from 'storybook/actions'
import ary from '../../../packages/js-utils/src/ary'

const defaultAndNestedDemo = () => {
  // 默认使用 func.length
  const fn3 = (a: unknown, b: unknown, c: unknown) => [a, b, c]
  const capped = ary(fn3)

  action('ary - 默认使用 func.length')({
    'func.length': fn3.length,
    '传4个参数的结果': capped('a', 'b', 'c', 'd'),
    说明: '未指定 n 时，使用 func.length (3) 作为限制',
  })

  // 嵌套 ary：使用更小的 cap
  const fn = (...args: unknown[]) => args
  const innerCap = ary(fn, 1)
  const outerCap = ary(innerCap, 2)

  action('ary - 嵌套使用更小的 cap')({
    'ary(fn, 1) 传3个参数': innerCap('a', 'b', 'c'),
    'ary(ary(fn, 1), 2) 传3个参数': outerCap('a', 'b', 'c'),
    说明: '内层限制为 1，外层限制为 2，实际只取 1 个参数',
  })
}

export default defaultAndNestedDemo
