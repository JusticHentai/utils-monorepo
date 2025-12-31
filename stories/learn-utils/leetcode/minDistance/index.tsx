import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MinDistanceDemo() {
  return (
    <DemoBlock
      title="编辑距离"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
