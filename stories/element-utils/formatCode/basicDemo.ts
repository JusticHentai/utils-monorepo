import { action } from 'storybook/actions'
import formatCode from '../../../packages/element-utils/src/formatCode'

export const runBasicDemo = async () => {
  const code = `const foo={a:1,b:2,c:3};function bar(x,y){return x+y}`

  action('原始代码')(code)

  const result = await formatCode(code)

  if (result.success) {
    action('格式化成功')(result.code)
  } else {
    action('格式化失败')(result.error)
  }
}
