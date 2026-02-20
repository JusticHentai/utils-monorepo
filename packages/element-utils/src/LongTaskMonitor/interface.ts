/** 默认长任务阈值（毫秒） */
export const DEFAULT_LONG_TASK_THRESHOLD = 50

/** 任务归因信息 */
export interface TaskAttribution {
  /** 容器类型 */
  containerType: string
  /** 容器 ID */
  containerId: string
  /** 容器名称 */
  containerName: string
  /** 容器源 */
  containerSrc: string
}

/** 长任务指标 */
export interface LongTaskMetrics {
  /** 任务名称 */
  name: string
  /** 任务开始时间 */
  startTime: number
  /** 任务持续时间 */
  duration: number
  /** 任务归因信息 */
  attribution: TaskAttribution[]
}

/** 长任务统计结果 */
export interface LongTaskStats {
  /** 长任务数量 */
  count: number
  /** 总持续时间 */
  totalDuration: number
  /** 最大持续时间 */
  maxDuration: number
  /** 平均持续时间 */
  avgDuration: number
  /** 长任务条目列表 */
  entries: LongTaskMetrics[]
}

/** 长任务回调函数类型 */
export type LongTaskCallback = (task: LongTaskMetrics) => void

/** observeLongTask 配置选项 */
export interface ObserveLongTaskOptions {
  /** 持续时间阈值（ms），默认 50ms */
  threshold?: number
  /** 是否上报已存在的长任务，默认 true */
  reportExisting?: boolean
}

/** 停止监听函数类型 */
export type StopListening = () => void

/** TaskAttributionTiming 扩展 */
export interface TaskAttributionTimingExt extends PerformanceEntry {
  readonly containerType: string
  readonly containerSrc: string
  readonly containerId: string
  readonly containerName: string
}

/** PerformanceLongTaskTiming 扩展 */
export interface PerformanceLongTaskTimingExt extends PerformanceEntry {
  readonly attribution: TaskAttributionTimingExt[]
}

/** 长任务观察器实例 */
export interface LongTaskMonitorInstance {
  /** 监控长任务（主流程） */
  observe: (
    callback?: LongTaskCallback,
    options?: ObserveLongTaskOptions
  ) => StopListening
  /** 停止观察器 */
  stop: () => void
  /** 清空记录 */
  clear: () => void
  /** 获取所有记录的长任务 */
  getEntries: () => LongTaskMetrics[]
  /** 获取统计信息 */
  getStats: () => LongTaskStats
  /** 计算总阻塞时间 */
  calculateTBT: (fcpTime?: number, ttiTime?: number) => number
}
