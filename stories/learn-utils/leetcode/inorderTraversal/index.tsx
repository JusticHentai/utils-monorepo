import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function InorderTraversalDemo() {
  return (
    <DemoBlock
      title="二叉树的中序遍历"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
