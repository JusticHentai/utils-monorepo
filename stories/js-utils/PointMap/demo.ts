import PointMap from '../../../packages/js-utils/src/PointMap'

const pointMap = new PointMap<string>()

export const setDemo = () => {
  pointMap.set({ x: 1, y: 2 }, 'value')

  return pointMap
}

export const getDemo = () => {
  return pointMap.get({ x: 1, y: 2 })
}
