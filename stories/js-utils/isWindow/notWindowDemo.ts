import { action } from 'storybook/actions'
import isWindow from '../../../packages/js-utils/src/isWindow'

const notWindowDemo = () => {
  const res = isWindow({})
  action('检测普通对象 {}')(res)
}

export default notWindowDemo
