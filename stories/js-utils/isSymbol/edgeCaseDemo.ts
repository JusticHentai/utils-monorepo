import { action } from 'storybook/actions'
import isSymbol from '../../../packages/js-utils/src/isSymbol'

const edgeCaseDemo = () => {
  const results = {
    'Symbol()': isSymbol(Symbol()),
    'Symbol.iterator': isSymbol(Symbol.iterator),
    '"symbol"字符串': isSymbol('symbol'),
    'null': isSymbol(null),
  }

  action('isSymbol - 边界情况')(results)
}

export default edgeCaseDemo
