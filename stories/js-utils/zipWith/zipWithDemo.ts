import { action } from 'storybook/actions'
import zipWith from '../../../packages/js-utils/src/zipWith'

const zipWithDemo = () => {
  action('zipWith 演示')(zipWith([1, 2, 3]))
}

export default zipWithDemo
