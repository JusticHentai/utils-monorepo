import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function CanFinishDemo() {
  return (
    <DemoBlock
      title="课程表"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
