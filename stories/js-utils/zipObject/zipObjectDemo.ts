import { action } from 'storybook/actions'
import zipObject from '../../../packages/js-utils/src/zipObject'

const zipObjectDemo = () => {
  action('zipObject 演示')({
    '键值配对': zipObject(['a', 'b'], [1, 2]),
  })
}

export default zipObjectDemo
