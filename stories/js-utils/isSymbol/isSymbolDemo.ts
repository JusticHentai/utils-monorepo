import { action } from 'storybook/actions'
import isSymbol from '../../../packages/js-utils/src/isSymbol'

const isSymbolDemo = () => {
  action('isSymbol 演示')({
    'Symbol("a")': isSymbol(Symbol('a')),
    'Symbol.iterator': isSymbol(Symbol.iterator),
    '"abc"': isSymbol('abc'),
    '123': isSymbol(123),
  })
}

export default isSymbolDemo
