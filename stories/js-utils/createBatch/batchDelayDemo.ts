import { action } from 'storybook/actions'
import createBatch from '../../../packages/js-utils/src/createBatch'

const batchDelayDemo = () => {
  const { add } = createBatch<string>(
    (items) => {
      action('延迟批次回调触发')(items)
    },
    { batchSize: 100, batchDelay: 2000 }
  )

  add(['apple', 'banana'])

  action('已添加 2 条数据')('batchSize 为 100 未达到阈值，将在 2 秒后自动刷新')
}

export default batchDelayDemo
