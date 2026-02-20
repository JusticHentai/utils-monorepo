import { action } from 'storybook/actions'
import formatStack from '../../../packages/element-utils/src/formatStack'

const basicDemo = () => {
  // 模拟一个错误堆栈
  const error = new Error('测试错误')
  const stack = error.stack

  action('原始堆栈')(stack)

  const formattedStack = formatStack(stack)

  action('格式化后的堆栈')(formattedStack)
}

export default basicDemo
