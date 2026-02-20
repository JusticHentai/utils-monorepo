import { action } from 'storybook/actions'
import isMatchWith from '../../../packages/js-utils/src/isMatchWith'

const edgeCaseDemo = () => {
  const customizer = (objVal, srcVal) => typeof objVal === 'string' ? objVal.includes(srcVal) : undefined
  const results = {
    '自定义匹配': isMatchWith({ a: 'hello world' }, { a: 'hello' }, customizer),
    '不匹配': isMatchWith({ a: 'hello' }, { a: 'xyz' }, customizer),
    '空 source': isMatchWith({ a: 1 }, {}, customizer),
  }

  action('isMatchWith - 边界情况')(results)
}

export default edgeCaseDemo
