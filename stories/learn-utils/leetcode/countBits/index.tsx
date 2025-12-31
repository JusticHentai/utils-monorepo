import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function CountBitsDemo() {
  return (
    <DemoBlock
      title="比特位计数"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
