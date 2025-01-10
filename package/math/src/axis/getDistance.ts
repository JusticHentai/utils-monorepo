import Point from './Point'

/**
 * 获取两点间的距离
 */
export default function getDistance(start: Point, end: Point): number {
  const x = end['x'] - start['x']
  const y = end['y'] - start['y']

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}
