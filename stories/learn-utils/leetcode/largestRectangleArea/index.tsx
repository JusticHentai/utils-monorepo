import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function LargestRectangleAreaDemo() {
  return (
    <DemoBlock
      title="柱状图中最大的矩形"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
