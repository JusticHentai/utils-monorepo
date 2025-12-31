import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function FindMedianSortedArraysDemo() {
  return (
    <DemoBlock
      title="寻找两个正序数组的中位数"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
