import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function LongestValidParenthesesDemo() {
  return (
    <DemoBlock
      title="最长有效括号"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
