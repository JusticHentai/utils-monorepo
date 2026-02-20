import { action } from 'storybook/actions'
import overArgs from '../../../packages/js-utils/src/overArgs'

const overArgsDemo = () => {
  const fn = (...args: unknown[]) => args
  const doubled = (n: number) => n * 2
  const square = (n: number) => n * n

  // lodash 测试: 转换每个参数
  const over = overArgs(fn, [doubled, square])
  action('overArgs - 基础转换')({
    'overArgs(fn, [doubled, square])(5, 10)': over(5, 10),
    期望: [10, 100],
  })

  // lodash 测试: 多于 transforms 的参数不被转换
  action('overArgs - 多余参数不转换')({
    'over(5, 10, 18)': over(5, 10, 18),
    期望: [10, 100, 18],
    说明: '第三个参数 18 没有对应的 transform，直接传递',
  })

  // lodash 测试: 没有 transforms
  const noTransform = overArgs(fn, [])
  action('overArgs - 无 transforms')({
    'overArgs(fn, [])(5, 10)': noTransform(5, 10),
    期望: [5, 10],
  })
}

export default overArgsDemo