import { action } from 'storybook/actions'
import mergeWith from '../../../packages/js-utils/src/mergeWith'

const mergeWithDemo = () => {
  action('mergeWith 演示')({
    '数组合并': mergeWith({ a: [1] }, { a: [2] }, (objValue, srcValue) => {
      if (Array.isArray(objValue)) return objValue.concat(srcValue)
    }),
  })
}

export default mergeWithDemo
