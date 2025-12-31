import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function LengthOfLISDemo() {
  return (
    <DemoBlock
      title="最长递增子序列"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
