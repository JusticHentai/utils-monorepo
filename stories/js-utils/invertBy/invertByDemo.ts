import { action } from 'storybook/actions'
import invertBy from '../../../packages/js-utils/src/invertBy'

const invertByDemo = () => {
  action('invertBy 演示')({
    '基础反转': invertBy({ a: 1, b: 2, c: 1 }),
    '带迭代器': invertBy({ a: 1, b: 2, c: 1 }, (value) => 'group_' + value),
  })
}

export default invertByDemo
