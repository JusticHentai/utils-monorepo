import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MergeKListsDemo() {
  return (
    <DemoBlock
      title="合并K个升序链表"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
