import { action } from 'storybook/actions'
import escapeRegExp from '../../../packages/js-utils/src/escapeRegExp'

const escapeRegExpDemo = () => {
  action('escapeRegExp 演示')({
    '转义 "[lodash](https://lodash.com/)"': escapeRegExp('[lodash](https://lodash.com/)'),
  })
}

export default escapeRegExpDemo
