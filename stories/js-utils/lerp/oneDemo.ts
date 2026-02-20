import { action } from 'storybook/actions'
import lerp from '../../../packages/js-utils/src/lerp'

const oneDemo = () => {
  const res = lerp(1, 5, 1)
  action('线性插值 1 和 5 之间进度为 1 位置')(res)
}

export default oneDemo
