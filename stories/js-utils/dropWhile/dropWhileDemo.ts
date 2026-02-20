import { action } from 'storybook/actions'
import dropWhile from '../../../packages/js-utils/src/dropWhile'

const dropWhileDemo = () => {
  const result = dropWhile
  action('dropWhile 演示')(result)
}

export default dropWhileDemo
