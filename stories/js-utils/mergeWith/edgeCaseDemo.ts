import { action } from 'storybook/actions'
import mergeWith from '../../../packages/js-utils/src/mergeWith'

const edgeCaseDemo = () => {
  action('mergeWith - 边界情况')({
    '自定义合并': mergeWith({ a: [1] }, { a: [2] }, (objVal, srcVal) => Array.isArray(objVal) ? objVal.concat(srcVal) : undefined)
  })
}

export default edgeCaseDemo
