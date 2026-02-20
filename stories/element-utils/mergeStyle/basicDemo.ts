import { action } from 'storybook/actions'
import mergeStyle from '../../../packages/element-utils/src/mergeStyle'

const basicDemo = () => {
  const style1 = { width: '100px', height: '100px' }
  const style2 = { width: '200px', position: 'absolute' as const }

  const result = mergeStyle(style1, style2)

  action('样式1')(style1)
  action('样式2')(style2)
  action('合并结果（后者覆盖前者）')(result)
}

export default basicDemo
