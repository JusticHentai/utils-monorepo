import Point from '../Point'

export interface Options {
  index: number // index 从 0 开始
  column: number // 列数
}

/**
 * 行列 转 2d 坐标系
 */
const getPosition = (options: Options): Point => {
  const { column, index } = options

  const y = Math.floor(index / column)
  const x = Math.floor(index % column)

  return {
    x,
    y,
  }
}

export default getPosition
