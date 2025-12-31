import { DemoBlock } from '@jqxon/storybook-utils'
import normalDemo from './normalDemo'

export default function MaxProfit2Demo() {
  return (
    <DemoBlock
      title="买卖股票的最佳时机含冷冻期"
      demos={[{ title: '基础示例', fn: normalDemo }]}
    />
  )
}
