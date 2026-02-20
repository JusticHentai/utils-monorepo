import { action } from 'storybook/actions'
import lerp from '../../../packages/js-utils/src/lerp'

const normalDemo = () => {
  const res = lerp(1, 5, 0.5)
  action('线性插值 1 和 5 之间 0.5 位置')(res)
}

export default normalDemo
