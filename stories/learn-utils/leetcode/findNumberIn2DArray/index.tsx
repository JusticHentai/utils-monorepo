import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function FindNumberIn2DArrayDemo() {
  return (
    <DemoBlock
      title="二维数组中的查找"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
