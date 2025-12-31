import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function WordDistanceDemo() {
  return (
    <DemoBlock
      title="最短单词距离 II"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
