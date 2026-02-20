import { action } from 'storybook/actions'
import formatStack from '../../../packages/element-utils/src/formatStack'

const maxLinesDemo = () => {
  // 创建一个多层调用的堆栈
  const error = new Error('测试错误')
  const stack = error.stack

  action('原始堆栈')(stack)

  // 限制为 3 行
  const formattedStack = formatStack(stack, { maxLines: 3 })

  action('限制为 3 行后')(formattedStack)
}

export default maxLinesDemo
