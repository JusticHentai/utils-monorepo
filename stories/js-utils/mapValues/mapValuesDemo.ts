import { action } from 'storybook/actions'
import mapValues from '../../../packages/js-utils/src/mapValues'

const mapValuesDemo = () => {
  const result = mapValues
  action('mapValues 演示')(result)
}

export default mapValuesDemo
