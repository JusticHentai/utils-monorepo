import { action } from 'storybook/actions'
import uniqWith from '../../../packages/js-utils/src/uniqWith'

const edgeCaseDemo = () => {
  action('uniqWith - 边界情况')({
    '深度比较': uniqWith([{ x: 1 }, { x: 2 }, { x: 1 }], (a, b) => a.x === b.x), '空数组': uniqWith([], (a, b) => a === b)
  })
}

export default edgeCaseDemo
