import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function IsMatchDemo() {
  return (
    <DemoBlock
      title="正则表达式匹配"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
