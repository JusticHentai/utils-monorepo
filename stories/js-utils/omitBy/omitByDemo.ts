import { action } from 'storybook/actions'
import omitBy from '../../../packages/js-utils/src/omitBy'

const omitByDemo = () => {
  action('omitBy 演示')({
    '省略值为数字的属性': omitBy({ a: 1, b: '2', c: 3 }, (value) => typeof value === 'number'),
  })
}

export default omitByDemo
