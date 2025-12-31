import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function ExistDemo() {
  return (
    <DemoBlock
      title="单词搜索"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
