import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function LowestCommonAncestorDemo() {
  return (
    <DemoBlock
      title="二叉树的最近公共祖先"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
