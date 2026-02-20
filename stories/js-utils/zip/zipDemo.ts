import { action } from 'storybook/actions'
import zip from '../../../packages/js-utils/src/zip'

const zipDemo = () => {
  // 基础：2个数组
  action('zip - 2个数组')(zip(['a', 'b', 'c'], [1, 2, 3]))

  // 3个数组
  action('zip - 3个数组')(zip(['a', 'b'], [1, 2], [true, false]))

  // 不等长数组
  action('zip - 不等长数组')(zip(['a', 'b', 'c'], [1, 2]))

  // 空数组
  action('zip - 空数组')(zip())

  // 0-tuples
  action('zip - 0-tuples')(zip([], []))

  // zip 是可逆的（zip(zip(...)) 还原）
  const original = zip(['barney', 'fred'], [36, 40])
  const reversed = zip(...original)
  action('zip - 可逆性')({
    'zip后': original,
    '再zip还原': reversed,
  })
}

export default zipDemo
