import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function SearchRangeDemo() {
  return (
    <DemoBlock
      title="在排序数组中查找元素的第一个和最后一个位置"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
