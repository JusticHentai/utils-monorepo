import { action } from 'storybook/actions'
import overSome from '../../../packages/js-utils/src/overSome'

const overSomeDemo = () => {
  const result = overSome
  action('overSome 演示')(result)
}

export default overSomeDemo
