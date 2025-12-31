import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function Rob2Demo() {
  return (
    <DemoBlock
      title="打家劫舍 III"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
