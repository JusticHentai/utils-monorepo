import { action } from 'storybook/actions'
import isBoolean from '../../../packages/js-utils/src/isBoolean'

const edgeCaseDemo = () => {
  const results = {
    'true': isBoolean(true),
    'false': isBoolean(false),
    'Boolean(false)': isBoolean(Boolean(false)),
    '0': isBoolean(0),
    'null': isBoolean(null),
    '"true"字符串': isBoolean('true'),
  }

  action('isBoolean - 边界情况')(results)
}

export default edgeCaseDemo
