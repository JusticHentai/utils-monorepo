import { action } from 'storybook/actions'
import startsWith from '../../../packages/js-utils/src/startsWith'

const startsWithDemo = () => {
  action('startsWith 演示')(startsWith([1, 2, 3]))
}

export default startsWithDemo
