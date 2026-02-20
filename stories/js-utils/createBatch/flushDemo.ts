import { action } from 'storybook/actions'
import createBatch from '../../../packages/js-utils/src/createBatch'

const flushDemo = () => {
  const { add, flush } = createBatch<string>(
    (items) => {
      action('手动刷新回调触发')(items)
    },
    { batchSize: 100, batchDelay: 60000 }
  )

  add(['task-1', 'task-2'])
  action('已添加 2 条数据')('未达到阈值且延迟 60 秒，手动调用 flush 立即触发')

  flush()
}

export default flushDemo
