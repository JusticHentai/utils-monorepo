import { action } from 'storybook/actions'
import escapeRegExp from '../../../packages/js-utils/src/escapeRegExp'

const edgeCaseDemo = () => {
  action('escapeRegExp - 边界情况')({
    '特殊字符': escapeRegExp('[lodash](https://lodash.com/)'), '无特殊字符': escapeRegExp('hello'), '空字符串': escapeRegExp('')
  })
}

export default edgeCaseDemo
