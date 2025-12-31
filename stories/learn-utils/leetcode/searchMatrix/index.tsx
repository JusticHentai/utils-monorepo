import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function SearchMatrixDemo() {
  return (
    <DemoBlock
      title="搜索二维矩阵 II"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
