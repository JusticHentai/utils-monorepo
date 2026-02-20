import { action } from 'storybook/actions'
import createBatch from '../../../packages/js-utils/src/createBatch'

const batchSizeDemo = () => {
  const { add } = createBatch<number>(
    (items) => {
      action('批次回调触发')(items)
    },
    { batchSize: 3, batchDelay: 5000 }
  )

  action('逐条添加数据')('依次添加 1, 2, 3，当第 3 条添加时触发批次回调')

  add([1])
  add([2])
  add([3])
}

export default batchSizeDemo
