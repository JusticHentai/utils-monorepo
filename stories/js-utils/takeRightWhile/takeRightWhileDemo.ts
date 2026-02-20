import { action } from 'storybook/actions'
import takeRightWhile from '../../../packages/js-utils/src/takeRightWhile'

const takeRightWhileDemo = () => {
  const result = takeRightWhile
  action('takeRightWhile 演示')(result)
}

export default takeRightWhileDemo
