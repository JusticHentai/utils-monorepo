import { action } from 'storybook/actions'
import indexOf from '../../../packages/js-utils/src/indexOf'
import lastIndexOf from '../../../packages/js-utils/src/lastIndexOf'

const basicDemo = () => {
  const array = [1, 2, 1, 2]

  // 基础查找
  action('indexOf - 基础查找')({
    'indexOf(2)': indexOf(array, 2),
    'indexOf(2, 2)': indexOf(array, 2, 2),
    '找不到': indexOf(array, 3),
  })

  // lastIndexOf 从右查找
  action('lastIndexOf - 从右查找')({
    'lastIndexOf(2)': lastIndexOf(array, 2),
    'lastIndexOf(2, 2)': lastIndexOf(array, 2, 2),
  })

  // 负数 fromIndex
  action('indexOf - 负数 fromIndex')({
    'indexOf([1,2,1,2], 1, -2)': indexOf(array, 1, -2),
  })

  // 空数组
  action('indexOf - 空数组')(indexOf([], 1))
}

export default basicDemo
