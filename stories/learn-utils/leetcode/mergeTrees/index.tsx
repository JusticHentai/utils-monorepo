import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MergeTreesDemo() {
  return (
    <DemoBlock
      title="合并二叉树"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
