import { action } from 'storybook/actions'
import isEmptyObject from '../../../packages/js-utils/src/isEmptyObject'

const notEmptyDemo = () => {
  const res = isEmptyObject({ a: 1 })
  action('检测非空对象 { a: 1 }')(res)
}

export default notEmptyDemo
