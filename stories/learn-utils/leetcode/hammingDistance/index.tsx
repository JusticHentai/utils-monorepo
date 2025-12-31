import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function HammingDistanceDemo() {
  return (
    <DemoBlock
      title="汉明距离"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
