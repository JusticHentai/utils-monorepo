/**
 * 时间差的返回值
 */
export interface TimeDifference {
  time: number // 时间戳
  timeDifference: number // 与上一段时间差
  timeAllDifference: number // 与首次记录的时间差
}

/**
 * Date相关时间操作的简化
 * 计算时间差
 * 获取本地 or 服务器时间
 */
export default class Timer {
  constructor() {}

  timeList!: TimeDifference[] // 时间缓存列表
  timePeriods!: number // 时间段

  /**
   * 刷新时间状态
   */
  refresh = () => {
    this.timeList = []
    this.timePeriods = 0
  }

  /**
   * 开始计时
   */
  start = (): TimeDifference => {
    this.refresh()

    const initialTime = new Date().getTime()

    const res = {
      time: initialTime,
      timeDifference: 0,
      timeAllDifference: 0,
    }

    this.timeList.push(res)
    return res
  }

  /**
   * 设置时间节点
   */
  set = (): TimeDifference => {
    const time = new Date().getTime()
    const timeDifference = time - this.timeList[this.timePeriods].time
    const timeAllDifference = time - this.timeList[0].time

    const res = {
      time,
      timeDifference,
      timeAllDifference,
    }

    this.timePeriods++
    this.timeList.push(res)

    return res
  }
}
