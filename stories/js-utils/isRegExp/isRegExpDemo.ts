import { action } from 'storybook/actions'
import isRegExp from '../../../packages/js-utils/src/isRegExp'

const isRegExpDemo = () => {
  action('isRegExp 演示')({
    '/abc/': isRegExp(/abc/),
    'new RegExp("abc")': isRegExp(new RegExp('abc')),
    '"abc"': isRegExp('abc'),
    '{}': isRegExp({}),
  })
}

export default isRegExpDemo
