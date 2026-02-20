import { action } from 'storybook/actions'
import fill from '../../../packages/js-utils/src/fill'

const basicDemo = () => {
  // 默认填充全部
  action('fill - 默认填充全部')({
    结果: fill([1, 2, 3], 'a'),
  })

  // 指定 start
  action('fill - 正数 start')({
    'fill([1,2,3], "a", 1)': fill([1, 2, 3], 'a', 1),
  })

  // start >= length 不填充
  action('fill - start >= length')({
    'start=3': fill([1, 2, 3], 'a', 3),
    'start=4': fill([1, 2, 3], 'a', 4),
    'start=Infinity': fill([1, 2, 3], 'a', Infinity),
  })

  // 负数 start
  action('fill - 负数 start')({
    'fill([1,2,3], "a", -1)': fill([1, 2, 3], 'a', -1),
    'fill([1,2,3], "a", -3)': fill([1, 2, 3], 'a', -3),
    'fill([1,2,3], "a", -Infinity)': fill([1, 2, 3], 'a', -Infinity),
  })
}

export default basicDemo
