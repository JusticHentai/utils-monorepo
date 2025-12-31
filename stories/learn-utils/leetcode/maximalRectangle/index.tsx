import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MaximalRectangleDemo() {
  return (
    <DemoBlock
      title="最大矩形"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
