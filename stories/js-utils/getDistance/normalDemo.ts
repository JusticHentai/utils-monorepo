import { action } from 'storybook/actions'
import getDistance from '../../../packages/js-utils/src/getDistance'

const normalDemo = () => {
  const res = getDistance({ x: 0, y: 0 }, { x: 3, y: 4 })
  action('起点')({ x: 0, y: 0 })
  action('终点')({ x: 3, y: 4 })
  action('计算两点间距离')(res)
}

export default normalDemo
