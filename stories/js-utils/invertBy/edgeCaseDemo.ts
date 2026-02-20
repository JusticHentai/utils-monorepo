import { action } from 'storybook/actions'
import invertBy from '../../../packages/js-utils/src/invertBy'

const edgeCaseDemo = () => {
  action('invertBy - 边界情况')({
    '自定义分组': invertBy({ a: 1, b: 2, c: 1 }, v => 'group_' + v), '空对象': invertBy({})
  })
}

export default edgeCaseDemo
