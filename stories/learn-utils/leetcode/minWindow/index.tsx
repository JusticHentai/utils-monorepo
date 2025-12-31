import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MinWindowDemo() {
  return (
    <DemoBlock
      title="最小覆盖子串"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
