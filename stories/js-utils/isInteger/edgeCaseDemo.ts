import { action } from 'storybook/actions'
import isInteger from '../../../packages/js-utils/src/isInteger'

const edgeCaseDemo = () => {
  const results = {
    '3': isInteger(3),
    '3.0': isInteger(3.0),
    '3.1': isInteger(3.1),
    'Infinity': isInteger(Infinity),
    '"3"字符串': isInteger('3'),
    'null': isInteger(null),
  }

  action('isInteger - 边界情况')(results)
}

export default edgeCaseDemo
