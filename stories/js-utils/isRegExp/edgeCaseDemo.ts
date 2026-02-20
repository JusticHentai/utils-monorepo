import { action } from 'storybook/actions'
import isRegExp from '../../../packages/js-utils/src/isRegExp'

const edgeCaseDemo = () => {
  const results = {
    '/abc/': isRegExp(/abc/),
    'new RegExp': isRegExp(new RegExp('abc')),
    '字符串/abc/': isRegExp('/abc/'),
    'null': isRegExp(null),
  }

  action('isRegExp - 边界情况')(results)
}

export default edgeCaseDemo
