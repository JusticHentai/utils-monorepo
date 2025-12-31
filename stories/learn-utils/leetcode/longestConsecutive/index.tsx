import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function LongestConsecutiveDemo() {
  return (
    <DemoBlock
      title="最长连续序列"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
