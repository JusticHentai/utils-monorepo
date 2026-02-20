import { action } from 'storybook/actions'
import join from '../../../packages/js-utils/src/join'

const edgeCaseDemo = () => {
  action('join - 边界情况')({
    '逗号': join([1, 2, 3], ', '), '自定义': join(['a', 'b', 'c'], '~'), '空数组': join([], '-'), '单元素': join([1], '-')
  })
}

export default edgeCaseDemo
