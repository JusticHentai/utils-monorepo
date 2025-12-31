import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function FindDuplicateDemo() {
  return (
    <DemoBlock
      title="寻找重复数"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
