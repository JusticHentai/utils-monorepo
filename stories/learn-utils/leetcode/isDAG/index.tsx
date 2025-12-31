import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function IsDAGDemo() {
  return (
    <DemoBlock
      title="判断有向无环图"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
