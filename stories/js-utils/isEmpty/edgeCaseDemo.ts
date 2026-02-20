import { action } from 'storybook/actions'
import isEmpty from '../../../packages/js-utils/src/isEmpty'

const edgeCaseDemo = () => {
  const results = {
    '空对象{}': isEmpty({}),
    '空数组[]': isEmpty([]),
    '空字符串': isEmpty(''),
    '非空数组': isEmpty([1]),
    '非空对象': isEmpty({ a: 1 }),
    'null': isEmpty(null),
    '0': isEmpty(0),
  }

  action('isEmpty - 边界情况')(results)
}

export default edgeCaseDemo
