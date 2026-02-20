import { action } from 'storybook/actions'
import chunk from '../../../packages/js-utils/src/chunk'

const basicDemo = () => {
  action('chunk - 均匀分块')({
    输入: [0, 1, 2, 3, 4, 5],
    size: 3,
    结果: chunk([0, 1, 2, 3, 4, 5], 3),
  })

  action('chunk - 最后一组为剩余元素')({
    输入: [0, 1, 2, 3, 4, 5],
    size: 4,
    结果: chunk([0, 1, 2, 3, 4, 5], 4),
    说明: '不能整除时，最后一组包含剩余元素',
  })

  // 默认 size 为 1
  action('chunk - 默认 size 为 1')({
    输入: ['a', 'b', 'c'],
    结果: chunk(['a', 'b', 'c']),
    说明: '不传 size 时默认为 1，每个元素独立成组',
  })
}

export default basicDemo
