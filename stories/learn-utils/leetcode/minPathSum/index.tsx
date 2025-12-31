import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MinPathSumDemo() {
  return (
    <DemoBlock
      title="最小路径和"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
