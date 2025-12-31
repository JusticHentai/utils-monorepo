import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MinMeetingRoomsDemo() {
  return (
    <DemoBlock
      title="会议室 II"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
