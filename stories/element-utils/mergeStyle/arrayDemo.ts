import { action } from 'storybook/actions'
import mergeStyle from '../../../packages/element-utils/src/mergeStyle'

const arrayDemo = () => {
  const style1 = { width: '100px' }
  const styleArray = [{ height: '100px' }, { color: 'red' }]

  const result = mergeStyle(style1, styleArray, null, undefined)

  action('样式1')(style1)
  action('样式数组')(styleArray)
  action('null 和 undefined')('会被忽略')
  action('合并结果')(result)
}

export default arrayDemo
