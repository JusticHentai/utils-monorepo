import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function NumSquaresDemo() {
  return (
    <DemoBlock
      title="完全平方数"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
