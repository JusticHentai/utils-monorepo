import { action } from 'storybook/actions'
import Point from '../../../packages/js-utils/src/Point'

const normalDemo = () => {
  const point: Point = { x: 10, y: 20 }
  action('创建 Point 对象')(point)
}

export default normalDemo
