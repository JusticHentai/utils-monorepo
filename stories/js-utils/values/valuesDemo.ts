import { action } from 'storybook/actions'
import values from '../../../packages/js-utils/src/values'

const valuesDemo = () => {
  action('values 演示')({
    '对象值': values({ a: 1, b: 2, c: 3 }),
    '字符串': values('hi'),
  })
}

export default valuesDemo
