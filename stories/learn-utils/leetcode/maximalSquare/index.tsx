import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MaximalSquareDemo() {
  return (
    <DemoBlock
      title="最大正方形"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
