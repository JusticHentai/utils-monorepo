import { action } from 'storybook/actions'
import takeRight from '../../../packages/js-utils/src/takeRight'

const takeRightDemo = () => {
  action('takeRight 演示')({
    '默认取最后 1 个': takeRight([1, 2, 3]),
    '取最后 2 个': takeRight([1, 2, 3], 2),
    '取最后 5 个（超出长度）': takeRight([1, 2, 3], 5),
  })
}

export default takeRightDemo
