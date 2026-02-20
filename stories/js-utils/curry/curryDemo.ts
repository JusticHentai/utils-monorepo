import { action } from 'storybook/actions'
import curry from '../../../packages/js-utils/src/curry'

const curryDemo = () => {
  const fn = (a: number, b: number, c: number, d: number) => [a, b, c, d]
  const curried = curry(fn)

  action('curry - 各种传参方式')({
    'curried(1)(2)(3)(4)': curried(1)(2)(3)(4),
    'curried(1, 2)(3, 4)': curried(1, 2)(3, 4),
    'curried(1, 2, 3, 4)': curried(1, 2, 3, 4),
    说明: '所有方式最终结果相同',
  })

  // 指定 arity
  const curried3 = curry(fn, 3)
  action('curry - 指定 arity')({
    'curry(fn, 3)(1)(2, 3)': curried3(1)(2, 3),
    'curry(fn, 3)(1, 2)(3)': curried3(1, 2)(3),
    说明: '只需 3 个参数即可调用，第 4 个参数为 undefined',
  })

  // 超出 arity 的额外参数
  action('curry - 超出 arity 的额外参数')({
    'curry(fn, 3)(1)(2, 3, 4)': curried3(1)(2, 3, 4),
    说明: '达到 arity 后额外参数也会传递给原函数',
  })
}

export default curryDemo
