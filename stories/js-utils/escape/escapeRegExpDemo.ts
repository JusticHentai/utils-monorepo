import { action } from 'storybook/actions'
import escapeRegExp from '../../../packages/js-utils/src/escapeRegExp'

const escapeRegExpDemo = () => {
  action('escapeRegExp')({
    '[lodash](https://lodash.com/)': escapeRegExp('[lodash](https://lodash.com/)'),
    'a.b*c': escapeRegExp('a.b*c'),
  })
}

export default escapeRegExpDemo
