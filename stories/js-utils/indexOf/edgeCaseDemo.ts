import { action } from 'storybook/actions'
import indexOf from '../../../packages/js-utils/src/indexOf'

const edgeCaseDemo = () => {
  action('indexOf - 边界情况')({
    '找到': indexOf([1,2,1,2], 2), '未找到': indexOf([1,2,3], 4), '指定起始': indexOf([1,2,1,2], 1, 2), '空数组': indexOf([], 1)
  })
}

export default edgeCaseDemo
