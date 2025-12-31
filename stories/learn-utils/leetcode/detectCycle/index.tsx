import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function DetectCycleDemo() {
  return (
    <DemoBlock
      title="环形链表 II"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
