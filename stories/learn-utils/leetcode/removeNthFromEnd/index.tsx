import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function RemoveNthFromEndDemo() {
  return (
    <DemoBlock
      title="删除链表的倒数第 N 个结点"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
