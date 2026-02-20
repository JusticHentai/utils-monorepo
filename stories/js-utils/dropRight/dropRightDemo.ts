import { action } from 'storybook/actions'
import dropRight from '../../../packages/js-utils/src/dropRight'

const dropRightDemo = () => {
  action('dropRight 演示')({
    '默认去掉最后 1 个': dropRight([1, 2, 3]),
    '去掉最后 2 个': dropRight([1, 2, 3], 2),
    '去掉最后 5 个（超出长度）': dropRight([1, 2, 3], 5),
  })
}

export default dropRightDemo
