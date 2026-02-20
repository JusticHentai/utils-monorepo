/** 测量结果 */
export interface MeasureResult {
  /** 测量名称 */
  name: string
  /** 耗时（毫秒） */
  duration: number
  /** 开始时间（相对于 performance.timeOrigin） */
  startTime: number
  /** 结束时间（相对于 performance.timeOrigin） */
  endTime: number
}

/** performanceMark 返回的实例 */
export interface PerformanceMarkInstance {
  /**
   * 打标记点
   * @param name - 标记名称
   */
  mark: (name: string) => void
  /**
   * 测量两个标记点之间的耗时
   * @param name - 测量名称
   * @param startMark - 开始标记名称
   * @param endMark - 结束标记名称（可选，默认为当前时间）
   * @returns 测量结果，如果标记不存在则返回 null
   */
  measure: (
    name: string,
    startMark: string,
    endMark?: string
  ) => MeasureResult | null
  /**
   * 清除指定标记
   * @param name - 标记名称（可选，不传则清除所有标记）
   */
  clearMarks: (name?: string) => void
  /**
   * 清除指定测量
   * @param name - 测量名称（可选，不传则清除所有测量）
   */
  clearMeasures: (name?: string) => void
  /**
   * 获取所有标记
   * @param name - 标记名称（可选，不传则返回所有标记）
   */
  getMarks: (name?: string) => PerformanceMark[]
  /**
   * 获取所有测量
   * @param name - 测量名称（可选，不传则返回所有测量）
   */
  getMeasures: (name?: string) => PerformanceMeasure[]
}
