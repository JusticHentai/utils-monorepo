import { action } from 'storybook/actions'
import toUpper from '../../../packages/js-utils/src/toUpper'

const toUpperDemo = () => {
  action('toUpper 演示')({
    '"hello"': toUpper('hello'),
    '"Hello World"': toUpper('Hello World'),
    '"--foo-bar--"': toUpper('--foo-bar--'),
  })
}

export default toUpperDemo
