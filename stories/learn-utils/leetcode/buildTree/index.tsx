import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function BuildTreeDemo() {
  return (
    <DemoBlock
      title="从前序与中序遍历序列构造二叉树"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
