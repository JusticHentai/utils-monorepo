import { action } from 'storybook/actions'
import dropRightWhile from '../../../packages/js-utils/src/dropRightWhile'

const dropRightWhileDemo = () => {
  const result = dropRightWhile
  action('dropRightWhile 演示')(result)
}

export default dropRightWhileDemo
