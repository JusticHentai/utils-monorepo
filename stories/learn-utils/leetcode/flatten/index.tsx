import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function FlattenDemo() {
  return (
    <DemoBlock
      title="二叉树展开为链表"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
