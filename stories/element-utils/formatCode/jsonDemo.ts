import { action } from 'storybook/actions'
import formatCode from '../../../packages/element-utils/src/formatCode'

export const runJsonDemo = async () => {
  const code = `{"name":"test","age":18,"address":{"city":"Beijing","street":"xxx"}}`

  action('原始代码')(code)

  const result = await formatCode(code, { language: 'json' })

  if (result.success) {
    action('格式化成功')(result.code)
  } else {
    action('格式化失败')(result.error)
  }
}
