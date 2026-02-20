import { action } from 'storybook/actions'
import createBatch from '../../../packages/js-utils/src/createBatch'

const batchOverflowDemo = () => {
  const { add } = createBatch<number>(
    (items) => {
      action('批次回调触发')(items)
    },
    { batchSize: 3, batchDelay: 60000 }
  )

  action('一次性添加 5 条数据')('batchSize 为 3，超过阈值立即触发回调')

  add([1, 2, 3, 4, 5])
}

export default batchOverflowDemo
