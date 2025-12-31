import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function FindDisappearedNumbersDemo() {
  return (
    <DemoBlock
      title="找到所有数组中消失的数字"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
