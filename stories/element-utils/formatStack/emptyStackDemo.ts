import { action } from 'storybook/actions'
import formatStack from '../../../packages/element-utils/src/formatStack'

const emptyStackDemo = () => {
  // 测试空堆栈
  const result1 = formatStack(undefined)
  const result2 = formatStack('')

  action('undefined 堆栈结果')(result1)
  action('空字符串堆栈结果')(result2)
}

export default emptyStackDemo
