import Point from '../Point'
import { ContentList } from './interface'

/**
 * 2d坐标轴
 * 每个坐标都能用来存放信息
 * 接收范型 T 代表存放信息的类型
 */
export default class PointMap<T> {
  constructor() {}

  /* 内部内容列表 */
  contentList: ContentList<T> = {}

  /* 设置位置 */
  set = ({ x, y }: Point, data: T) => {
    const key = `${x}-${y}`

    this.contentList[key] = data
  }

  get = ({ x, y }: Point): T | undefined => {
    const key = `${x}-${y}`

    return this.contentList[key]
  }
}
