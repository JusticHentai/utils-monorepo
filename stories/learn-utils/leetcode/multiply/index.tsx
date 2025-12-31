import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MultiplyDemo() {
  return (
    <DemoBlock
      title="字符串相乘"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
