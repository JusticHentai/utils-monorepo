import { action } from 'storybook/actions'
import isEmptyObject from '../../../packages/js-utils/src/isEmptyObject'

const emptyDemo = () => {
  const res = isEmptyObject({})
  action('检测空对象 {}')(res)
}

export default emptyDemo
