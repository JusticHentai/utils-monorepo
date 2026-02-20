import { action } from 'storybook/actions'
import chunk from '../../../packages/js-utils/src/chunk'

const edgeCaseDemo = () => {
  // size 为浮点数时向下取整
  action('chunk - 浮点数 size 向下取整')({
    输入: [0, 1, 2, 3, 4, 5],
    size: 1.5,
    结果: chunk([0, 1, 2, 3, 4, 5], 1.5),
    说明: 'Math.floor(1.5) = 1，每个元素独立成组',
  })

  // 空数组
  action('chunk - 空数组')({
    结果: chunk([], 2),
    说明: '空数组返回空数组',
  })

  // size 为 0 或负数
  action('chunk - size <= 0 的处理')({
    'size=0': chunk([1, 2, 3], 0),
    'size=-1': chunk([1, 2, 3], -1),
    说明: '当前实现将 size <= 0 钳位为 1（注意：与 lodash 返回空数组的行为不同）',
  })
}

export default edgeCaseDemo
