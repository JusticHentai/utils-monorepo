import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MergeArrayDemo() {
  return (
    <DemoBlock
      title="合并两个有序数组"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
