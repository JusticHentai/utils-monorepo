import { action } from 'storybook/actions'
import isFiniteNum from '../../../packages/js-utils/src/isFiniteNum'

const edgeCaseDemo = () => {
  const results = {
    '1': isFiniteNum(1),
    'Infinity': isFiniteNum(Infinity),
    '-Infinity': isFiniteNum(-Infinity),
    'NaN': isFiniteNum(NaN),
    '"1"字符串': isFiniteNum('1'),
    'null': isFiniteNum(null),
  }

  action('isFiniteNum - 边界情况')(results)
}

export default edgeCaseDemo
