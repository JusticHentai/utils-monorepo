import { TimeElapsedReturn } from './interface'

/**
 * 时间差计算
 */
export default class TimeElapsed {
  timeList: TimeElapsedReturn[] = [] // 时间记录列表

  /**
   * 刷新时间状态
   */
  private refresh = () => {
    this.timeList = []
  }

  /**
   * 开始计时
   */
  start = (): TimeElapsedReturn => {
    this.refresh()

    const initialTime = new Date().getTime()

    const timeElapsed = {
      initialTime,
      currentTime: initialTime,
      elapsed: 0,
      totalElapsed: 0,
    }

    this.timeList.push(timeElapsed)

    return timeElapsed
  }

  /**
   * 设置时间节点
   */
  set = (): TimeElapsedReturn => {
    const prevTime = this.timeList[this.timeList.length - 1]

    // 没有第一次记录当作第一次来处理
    if (!prevTime) {
      return this.start()
    }

    const initialTime = prevTime.initialTime
    const currentTime = new Date().getTime()
    const elapsed = currentTime - prevTime.currentTime
    const totalElapsed = currentTime - prevTime.initialTime

    const timeElapsed = {
      initialTime,
      currentTime,
      elapsed,
      totalElapsed,
    }

    this.timeList.push(timeElapsed)

    return timeElapsed
  }
}
