import { action } from 'storybook/actions'
import ary from '../../../packages/js-utils/src/ary'

const aryDemo = () => {
  const withoutAry = ['6', '8', '10'].map(parseInt)
  const withAry = ['6', '8', '10'].map(ary(parseInt, 1))

  action('ary - 修复 map + parseInt')({
    '直接使用 parseInt': withoutAry,
    '使用 ary(parseInt, 1)': withAry,
  })

  const fn = (...args: unknown[]) => args
  action('ary - 限制参数数量')({
    '原函数接收所有参数': fn('a', 'b', 'c', 'd'),
    'ary(fn, 2) 只取前2个': ary(fn, 2)('a', 'b', 'c', 'd'),
    'ary(fn, 0) 不取参数': ary(fn, 0)('a', 'b'),
  })
}

export default aryDemo
