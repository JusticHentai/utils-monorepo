import { action } from 'storybook/actions'
import formatCode from '../../../packages/element-utils/src/formatCode'

export const runTypescriptDemo = async () => {
  const code = `interface User{name:string;age:number}const getUser=(id:number):User=>({name:'test',age:18})`

  action('原始代码')(code)

  const result = await formatCode(code, { language: 'typescript' })

  if (result.success) {
    action('格式化成功')(result.code)
  } else {
    action('格式化失败')(result.error)
  }
}
