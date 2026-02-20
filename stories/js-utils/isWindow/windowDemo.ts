import { action } from 'storybook/actions'
import isWindow from '../../../packages/js-utils/src/isWindow'

const windowDemo = () => {
  const res = isWindow(window)
  action('检测 window 对象')(res)
}

export default windowDemo
