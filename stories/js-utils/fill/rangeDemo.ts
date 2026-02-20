import { action } from 'storybook/actions'
import fill from '../../../packages/js-utils/src/fill'

const rangeDemo = () => {
  // 指定 end
  action('fill - 正数 end')({
    'fill([1,2,3], "a", 0, 1)': fill([1, 2, 3], 'a', 0, 1),
  })

  // end >= length 填充到末尾
  action('fill - end >= length')({
    'end=3': fill([1, 2, 3], 'a', 0, 3),
    'end=4': fill([1, 2, 3], 'a', 0, 4),
    'end=Infinity': fill([1, 2, 3], 'a', 0, Infinity),
  })

  // 负数 end
  action('fill - 负数 end')({
    'fill([1,2,3], "a", 0, -1)': fill([1, 2, 3], 'a', 0, -1),
  })

  // start >= end 不填充
  action('fill - start >= end 不填充')({
    'start=2, end=2': fill([1, 2, 3], 'a', 2, 2),
    'start=3, end=2': fill([1, 2, 3], 'a', 3, 2),
  })

  // 浮点数会被截断
  action('fill - 浮点数截断')({
    'fill([1,2,3], "a", 0.1, 1.6)': fill([1, 2, 3], 'a', 0.1, 1.6),
  })
}

export default rangeDemo
