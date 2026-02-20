import { action } from 'storybook/actions'
import curry from '../../../packages/js-utils/src/curry'

const edgeCaseDemo = () => {
  // 0 参数函数柯里化
  const noArgs = curry(() => 'no args', 0)

  // 1 参数函数柯里化（直接执行）
  const identity = curry((x: unknown) => x)

  // 柯里化后返回的函数可复用
  const add = curry((a: number, b: number, c: number) => a + b + c)
  const add10 = add(10)
  const add10and20 = add10(20)

  action('curry - 边界情况')({
    '0参数柯里化': noArgs(),
    '1参数直接执行': identity('hello'),
    '复用中间函数 add10(20)(30)': add10(20)(30),
    '复用中间函数 add10(5)(5)': add10(5)(5),
    '复用 add10and20(1)': add10and20(1),
    '复用 add10and20(100)': add10and20(100),
  })
}

export default edgeCaseDemo
