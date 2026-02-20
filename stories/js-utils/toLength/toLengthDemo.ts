import { action } from 'storybook/actions'
import toLength from '../../../packages/js-utils/src/toLength'

const toLengthDemo = () => {
  action('toLength 演示')({
    '3.2': toLength(3.2),
    '-1': toLength(-1),
    'Number.MAX_SAFE_INTEGER + 1': toLength(Number.MAX_SAFE_INTEGER + 1),
    '0': toLength(0),
    '"3"': toLength('3'),
  })
}

export default toLengthDemo
