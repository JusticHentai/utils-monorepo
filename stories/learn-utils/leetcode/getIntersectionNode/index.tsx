import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function GetIntersectionNodeDemo() {
  return (
    <DemoBlock
      title="相交链表"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
