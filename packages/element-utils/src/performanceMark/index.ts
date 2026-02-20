import isBrowser from '../isBrowser'
import type { MeasureResult, PerformanceMarkInstance } from './interface'

/**
 * 性能标记和测量工具
 *
 * 封装 Performance API 的 mark 和 measure 功能，用于精确测量代码执行时间。
 *
 * @returns 性能标记实例
 */
const performanceMark = (): PerformanceMarkInstance => {
  const noop: PerformanceMarkInstance = {
    mark: () => {},
    measure: () => null,
    clearMarks: () => {},
    clearMeasures: () => {},
    getMarks: () => [],
    getMeasures: () => [],
  }

  if (!isBrowser()) return noop

  if (
    typeof performance === 'undefined' ||
    !performance.mark ||
    !performance.measure
  ) {
    console.warn('[performanceMark] Performance API is not supported')
    return noop
  }

  const mark = (name: string): void => {
    performance.mark(name)
  }

  const measure = (
    name: string,
    startMark: string,
    endMark?: string
  ): MeasureResult | null => {
    try {
      // 如果没有提供 endMark，先打一个临时标记
      const actualEndMark = endMark || `__temp_end_${Date.now()}`
      if (!endMark) {
        performance.mark(actualEndMark)
      }

      const measureEntry = performance.measure(name, startMark, actualEndMark)

      // 清除临时标记
      if (!endMark) {
        performance.clearMarks(actualEndMark)
      }

      return {
        name: measureEntry.name,
        duration: measureEntry.duration,
        startTime: measureEntry.startTime,
        endTime: measureEntry.startTime + measureEntry.duration,
      }
    } catch (error) {
      console.warn(`[performanceMark] Failed to measure "${name}":`, error)
      return null
    }
  }

  const clearMarks = (name?: string): void => {
    if (name) {
      performance.clearMarks(name)
    } else {
      performance.clearMarks()
    }
  }

  const clearMeasures = (name?: string): void => {
    if (name) {
      performance.clearMeasures(name)
    } else {
      performance.clearMeasures()
    }
  }

  const getMarks = (name?: string): PerformanceMark[] => {
    if (name) {
      return performance.getEntriesByName(name, 'mark') as PerformanceMark[]
    }
    return performance.getEntriesByType('mark') as PerformanceMark[]
  }

  const getMeasures = (name?: string): PerformanceMeasure[] => {
    if (name) {
      return performance.getEntriesByName(
        name,
        'measure'
      ) as PerformanceMeasure[]
    }
    return performance.getEntriesByType('measure') as PerformanceMeasure[]
  }

  return {
    mark,
    measure,
    clearMarks,
    clearMeasures,
    getMarks,
    getMeasures,
  }
}

export default performanceMark
