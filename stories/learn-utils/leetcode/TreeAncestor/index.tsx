import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function TreeAncestorDemo() {
  return (
    <DemoBlock
      title="树节点的第 K 个祖先"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
