import { action } from 'storybook/actions'
import flatMapDeep from '../../../packages/js-utils/src/flatMapDeep'

const flatMapDeepDemo = () => {
  action('flatMapDeep')(flatMapDeep([1, 2], (n) => [[n, [n * 2]]]))
}

export default flatMapDeepDemo
