import { action } from 'storybook/actions'
import unzipWith from '../../../packages/js-utils/src/unzipWith'

const edgeCaseDemo = () => {
  action('unzipWith - 边界情况')({
    '求和': unzipWith([[1,10],[2,20]], (...g) => g.reduce((a,b)=>a+b,0)), '空数组': unzipWith([], (a,b) => a+b)
  })
}

export default edgeCaseDemo
