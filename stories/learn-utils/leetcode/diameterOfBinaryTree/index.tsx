import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function DiameterOfBinaryTreeDemo() {
  return (
    <DemoBlock
      title="二叉树的直径"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
