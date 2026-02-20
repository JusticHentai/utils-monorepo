import { action } from 'storybook/actions'
import isEmptyObject from '../../../packages/js-utils/src/isEmptyObject'

const notObjectDemo = () => {
  const res = isEmptyObject([])
  action('检测数组 []')(res)
}

export default notObjectDemo
