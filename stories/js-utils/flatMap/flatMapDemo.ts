import { action } from 'storybook/actions'
import flatMap from '../../../packages/js-utils/src/flatMap'

const flatMapDemo = () => {
  action('flatMap')(flatMap([1, 2, 3], (n) => [n, n * 2]))
}

export default flatMapDemo
