import { action } from 'storybook/actions'
import attempt from '../../../packages/js-utils/src/attempt'

const errorDemo = () => {
  // 捕获 JSON 解析错误
  const result1 = attempt(() => JSON.parse('invalid json'))
  action('attempt - 捕获 JSON 解析错误')({
    是Error: result1 instanceof Error,
    错误信息: result1 instanceof Error ? result1.message : result1,
  })

  // 非 Error 抛出值被转换为 Error 对象
  const result2 = attempt(() => { throw 'string error' })
  action('attempt - 非 Error 值被转换为 Error')({
    是Error: result2 instanceof Error,
    错误信息: result2 instanceof Error ? result2.message : result2,
    说明: '抛出的字符串被包装为 Error 对象',
  })

  // 自定义 Error 类型被保留
  class CustomError extends Error {
    code = 'CUSTOM_001'
  }
  const result3 = attempt(() => { throw new CustomError('自定义错误') })
  action('attempt - 保留自定义 Error 类型')({
    是Error: result3 instanceof Error,
    是CustomError: result3 instanceof CustomError,
    错误信息: result3 instanceof Error ? result3.message : result3,
  })
}

export default errorDemo
