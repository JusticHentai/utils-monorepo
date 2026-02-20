import { action } from 'storybook/actions'
import lastIndexOf from '../../../packages/js-utils/src/lastIndexOf'

const edgeCaseDemo = () => {
  action('lastIndexOf - 边界情况')({
    '找到': lastIndexOf([1,2,1,2], 2), '未找到': lastIndexOf([1,2,3], 4), '指定起始': lastIndexOf([1,2,1,2], 1, 2), '空数组': lastIndexOf([], 1)
  })
}

export default edgeCaseDemo
