import { action } from 'storybook/actions'
import attempt from '../../../packages/js-utils/src/attempt'

const successDemo = () => {
  // 成功执行返回结果
  const result1 = attempt(() => JSON.parse('{"name":"Alice","age":25}'))
  action('attempt - JSON 解析成功')({
    结果: result1,
    是Error: result1 instanceof Error,
  })

  // 传递额外参数
  const result2 = attempt((a: number, b: number) => a + b, 10, 20)
  action('attempt - 传递额外参数')({
    参数: [10, 20],
    结果: result2,
    说明: '将额外参数传递给目标函数',
  })

  // 返回简单值
  const result3 = attempt(() => 'hello')
  action('attempt - 返回简单值')({
    结果: result3,
  })
}

export default successDemo
