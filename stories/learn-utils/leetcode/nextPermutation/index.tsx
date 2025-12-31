import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function NextPermutationDemo() {
  return (
    <DemoBlock
      title="下一个排列"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
