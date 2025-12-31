import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function ReversePrintDemo() {
  return (
    <DemoBlock
      title="从尾到头打印链表"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
