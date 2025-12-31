import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function IsPalindromeDemo() {
  return (
    <DemoBlock
      title="回文链表"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
