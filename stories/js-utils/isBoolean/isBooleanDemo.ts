import { action } from 'storybook/actions'
import isBoolean from '../../../packages/js-utils/src/isBoolean'

const isBooleanDemo = () => {
  action('isBoolean 演示')({
    'true': isBoolean(true),
    'false': isBoolean(false),
    '0': isBoolean(0),
    'null': isBoolean(null),
    '"true"': isBoolean('true'),
  })
}

export default isBooleanDemo
