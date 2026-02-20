import { action } from 'storybook/actions'
import rest from '../../../packages/js-utils/src/rest'

const restDemo = () => {
  // 默认从 func.length-1 开始收集 (lodash: rest(fn)(1,2,3,4) => [1,2,[3,4]])
  const fn1 = rest((...args: unknown[]) => args)
  action('rest - 默认收集')(fn1(1, 2, 3, 4))

  // 指定 start=1 (lodash: rest(fn, 1)(1,2,3,4) => [1,[2,3,4]])
  const fn2 = rest((first: unknown, others: unknown[]) => ({ first, others }), 1)
  action('rest - start=1')(fn2('a', 'b', 'c', 'd'))

  // start=0 时所有参数收集为数组
  const fn3 = rest((args: unknown[]) => args, 0)
  action('rest - start=0')(fn3(1, 2, 3))

  // 参数不足时使用空数组 (lodash: rest(fn)(1) => [1, undefined, []])
  const fn4 = rest((...args: unknown[]) => args)
  action('rest - 参数不足')(fn4(1))
}

export default restDemo