import Point from '../Point'

// 内容列表
type ContentList<T> = Record<string | number, Record<string | number, T>>

/**
 * 2d坐标轴
 * 每个坐标都能用来存放信息
 * 接收范型 T 代表存放信息的类型
 */
export default class Axis2D<T> {
  constructor() {}

  // 内容列表
  contentList: ContentList<T> = {}

  // 设置位置
  set = ({ x, y }: Point, data: T): Axis2D<T> => {
    if (this.contentList[x] === undefined) {
      this.contentList[x] = {}
    }

    this.contentList[x][y] = data

    return this
  }

  get = ({ x, y }: Point): T | undefined => {
    if (this.contentList[x] === undefined) {
      return undefined
    }

    return this.contentList[x][y]
  }
}
