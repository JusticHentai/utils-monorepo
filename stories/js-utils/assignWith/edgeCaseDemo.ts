import { action } from 'storybook/actions'
import assignWith from '../../../packages/js-utils/src/assignWith'

const edgeCaseDemo = () => {
  action('assignWith - 边界情况')({
    '自定义': assignWith({ a: 1 }, { a: 2, b: 3 }, (objVal, srcVal) => objVal !== undefined ? objVal : srcVal), '空对象': assignWith({}, {}, (o,s) => s)
  })
}

export default edgeCaseDemo
