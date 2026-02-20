import { action } from 'storybook/actions'
import { some } from '../../../packages/js-utils/src/every'

const someDemo = () => {
  action('some')({
    '存在偶数': some([1, 3, 4], (n) => n % 2 === 0),
    '不存在偶数': some([1, 3, 5], (n) => n % 2 === 0),
  })
}

export default someDemo
