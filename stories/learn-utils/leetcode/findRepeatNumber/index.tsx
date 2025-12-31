import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function FindRepeatNumberDemo() {
  return (
    <DemoBlock
      title="数组中重复的数字"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
