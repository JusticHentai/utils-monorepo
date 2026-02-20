import { action } from 'storybook/actions'
import zipWith from '../../../packages/js-utils/src/zipWith'

const edgeCaseDemo = () => {
  action('zipWith - 边界情况')({
    '求和': zipWith([1,2], [10,20], (a,b) => a+b), '空数组': zipWith([], [], (a,b) => a+b)
  })
}

export default edgeCaseDemo
