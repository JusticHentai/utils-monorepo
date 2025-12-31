import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function ReplaceSpaceDemo() {
  return (
    <DemoBlock
      title="替换空格"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
