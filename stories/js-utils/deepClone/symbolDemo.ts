import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const symbolDemo = () => {
  const sym = Symbol('key')
  const obj = {
    name: 'test',
    [sym]: 'symbol value',
  }
  const cloned = deepClone(obj)

  action('深拷贝 Symbol 键')({
    original: obj,
    cloned,
    hasSymbol: sym in cloned,
    symbolValue: cloned[sym],
  })
}

export default symbolDemo
