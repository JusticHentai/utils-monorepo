import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function IsSymmetricDemo() {
  return (
    <DemoBlock
      title="对称二叉树"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
