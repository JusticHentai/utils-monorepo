import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function IsValidBSTDemo() {
  return (
    <DemoBlock
      title="验证二叉搜索树"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
