import { action } from 'storybook/actions'
import overEvery from '../../../packages/js-utils/src/overEvery'

const overEveryDemo = () => {
  const result = overEvery
  action('overEvery 演示')(result)
}

export default overEveryDemo
