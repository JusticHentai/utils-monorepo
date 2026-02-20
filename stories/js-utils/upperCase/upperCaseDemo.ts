import { action } from 'storybook/actions'
import upperCase from '../../../packages/js-utils/src/upperCase'

const upperCaseDemo = () => {
  action('upperCase 演示')({
    '"Foo Bar"': upperCase('Foo Bar'),
    '"fooBar"': upperCase('fooBar'),
    '"--foo-bar--"': upperCase('--foo-bar--'),
  })
}

export default upperCaseDemo
