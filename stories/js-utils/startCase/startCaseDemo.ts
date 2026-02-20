import { action } from 'storybook/actions'
import startCase from '../../../packages/js-utils/src/startCase'

const startCaseDemo = () => {
  action('startCase 演示')({
    '"--foo-bar--"': startCase('--foo-bar--'),
    '"fooBar"': startCase('fooBar'),
    '"__FOO_BAR__"': startCase('__FOO_BAR__'),
  })
}

export default startCaseDemo
