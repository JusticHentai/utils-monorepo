import { action } from 'storybook/actions'
import isMatchWith from '../../../packages/js-utils/src/isMatchWith'

const isMatchWithDemo = () => {
  const object = { greeting: 'hello' }
  const source = { greeting: 'HELLO' }

  const result = isMatchWith(object, source, (objVal, srcVal) => {
    if (typeof objVal === 'string' && typeof srcVal === 'string') {
      return objVal.toLowerCase() === srcVal.toLowerCase()
    }
    return undefined
  })

  action('isMatchWith 演示')({
    对象: object,
    匹配源: source,
    '忽略大小写匹配': result,
  })
}

export default isMatchWithDemo
