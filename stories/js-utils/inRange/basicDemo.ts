import { action } from 'storybook/actions'
import inRange from '../../../packages/js-utils/src/inRange'

const basicDemo = () => {
  // 只传 end（start 默认为 0）
  action('inRange - 只传 end')({
    'inRange(3, 5)': inRange(3, 5),
    'inRange(5, 5)': inRange(5, 5),
    'inRange(6, 5)': inRange(6, 5),
  })

  // start 和 end
  action('inRange - start 和 end')({
    'inRange(1, 1, 5)': inRange(1, 1, 5),
    'inRange(3, 1, 5)': inRange(3, 1, 5),
    'inRange(0, 1, 5)': inRange(0, 1, 5),
    'inRange(5, 1, 5)': inRange(5, 1, 5),
  })

  // start > end 时自动交换
  action('inRange - 自动交换 start/end')({
    'inRange(2, 5, 1)': inRange(2, 5, 1),
    'inRange(-3, -2, -6)': inRange(-3, -2, -6),
  })

  // 浮点数
  action('inRange - 浮点数')({
    'inRange(0.5, 5)': inRange(0.5, 5),
    'inRange(1.2, 1, 5)': inRange(1.2, 1, 5),
    'inRange(5.2, 5)': inRange(5.2, 5),
    'inRange(0.5, 1, 5)': inRange(0.5, 1, 5),
  })
}

export default basicDemo
