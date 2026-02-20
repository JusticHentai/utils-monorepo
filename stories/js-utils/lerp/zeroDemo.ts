import { action } from 'storybook/actions'
import lerp from '../../../packages/js-utils/src/lerp'

const zeroDemo = () => {
  const res = lerp(1, 5, 0)
  action('线性插值 1 和 5 之间进度为 0 位置')(res)
}

export default zeroDemo
