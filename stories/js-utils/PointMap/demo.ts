import { action } from 'storybook/actions'
import PointMap from '../../../packages/js-utils/src/PointMap'

const pointMap = new PointMap<string>()

export const setDemo = () => {
  pointMap.set({ x: 1, y: 2 }, 'value')
  action('设置坐标值 1 2 值为 value, 当前内容列表')(pointMap.contentList)
}

export const getDemo = () => {
  const res = pointMap.get({ x: 1, y: 2 })
  action('获取坐标值 1 2 的值')(res)
}
