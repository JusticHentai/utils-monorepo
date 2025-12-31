import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MaxProductDemo() {
  return (
    <DemoBlock
      title="乘积最大子数组"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
