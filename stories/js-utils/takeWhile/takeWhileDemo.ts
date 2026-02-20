import { action } from 'storybook/actions'
import takeWhile from '../../../packages/js-utils/src/takeWhile'

const takeWhileDemo = () => {
  const result = takeWhile
  action('takeWhile 演示')(result)
}

export default takeWhileDemo
