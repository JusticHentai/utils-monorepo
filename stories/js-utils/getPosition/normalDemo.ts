import { action } from 'storybook/actions'
import getPosition from '../../../packages/js-utils/src/getPosition'

const normalDemo = () => {
  const res = getPosition({ index: 5, column: 3 })
  action('索引')({ index: 5 })
  action('列数')({ column: 3 })
  action('行列转 2d 坐标系')(res)
}

export default normalDemo
