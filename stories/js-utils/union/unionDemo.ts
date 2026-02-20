import { action } from 'storybook/actions'
import union from '../../../packages/js-utils/src/union'

const unionDemo = () => {
  action('union - 基础')(union([1, 2], [2, 3], [3, 4]))
}

export default unionDemo
