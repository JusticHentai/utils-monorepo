import { action } from 'storybook/actions'
import spread from '../../../packages/js-utils/src/spread'

const spreadDemo = () => {
  // 展开数组参数
  const add = spread((a: number, b: number, c: number) => a + b + c)
  action('spread - 展开数组')(add([1, 2, 3]))

  // 多个参数
  const join = spread((...args: string[]) => args.join(', '))
  action('spread - 字符串拼接')(join(['hello', 'world', '!']))
}

export default spreadDemo