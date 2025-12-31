import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function NumTreesDemo() {
  return (
    <DemoBlock
      title="不同的二叉搜索树"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
