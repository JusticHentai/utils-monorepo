import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function SortListDemo() {
  return (
    <DemoBlock
      title="排序链表"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
