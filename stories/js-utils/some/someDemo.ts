import { action } from 'storybook/actions'
import some from '../../../packages/js-utils/src/some'

const someDemo = () => {
  action('some 演示')({
    '有偶数?': some([1, 2, 3], (n) => n % 2 === 0),
    '全是奇数?': some([1, 3, 5], (n) => n % 2 === 0),
  })
}

export default someDemo
