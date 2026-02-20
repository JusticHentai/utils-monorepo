import { action } from 'storybook/actions'
import isNumber from '../../../packages/js-utils/src/isNumber'

const edgeCaseDemo = () => {
  const results = {
    '3': isNumber(3),
    'NaN': isNumber(NaN),
    'Infinity': isNumber(Infinity),
    '"3"字符串': isNumber('3'),
    'null': isNumber(null),
  }

  action('isNumber - 边界情况')(results)
}

export default edgeCaseDemo
