import { action } from 'storybook/actions'
import { createPerformanceObserver } from '../../../packages/element-utils/src/observer'
import { supportEntryType } from '../../../packages/element-utils/src/supportPerformanceObserver'

const stopFunctions: Array<() => void> = []

const performanceDemo = () => {
  const initPerformance = () => {
    // 先清理旧的
    stopFunctions.forEach((stop) => stop())
    stopFunctions.length = 0

    // 监听 LCP
    if (supportEntryType('largest-contentful-paint')) {
      const { stop: stopLCP } = createPerformanceObserver(
        'largest-contentful-paint',
        (entries) => {
          const entry = entries[entries.length - 1]
          if (entry) {
            action('LCP (最大内容绘制)')({
              time: Math.round(entry.startTime) + 'ms',
              size: (entry as any).size,
              element: (entry as any).element?.tagName,
              说明: 'Largest Contentful Paint - 最大内容元素渲染时间',
            })
          }
        }
      )
      stopFunctions.push(stopLCP)
    }

    // 监听长任务
    if (supportEntryType('longtask')) {
      const { stop: stopLongTask } = createPerformanceObserver(
        'longtask',
        (entries) => {
          entries.forEach((entry) => {
            action('长任务')({
              duration: Math.round(entry.duration) + 'ms',
              startTime: Math.round(entry.startTime) + 'ms',
              说明: '超过 50ms 的任务会阻塞主线程',
            })
          })
        }
      )
      stopFunctions.push(stopLongTask)
    }

    // 监听资源加载
    if (supportEntryType('resource')) {
      const { stop: stopResource } = createPerformanceObserver(
        'resource',
        (entries) => {
          entries.forEach((entry) => {
            const resourceEntry = entry as PerformanceResourceTiming
            if (
              ['img', 'script', 'css', 'fetch', 'xmlhttprequest'].includes(
                resourceEntry.initiatorType
              )
            ) {
              action('资源加载')({
                name: resourceEntry.name.split('/').pop(),
                type: resourceEntry.initiatorType,
                duration: Math.round(resourceEntry.duration) + 'ms',
                transferSize: resourceEntry.transferSize + ' bytes',
              })
            }
          })
        }
      )
      stopFunctions.push(stopResource)
    }

    action('PerformanceObserver')({
      status: '已开始监听',
      listeners: stopFunctions.length,
      监听项: [
        supportEntryType('largest-contentful-paint') && 'LCP',
        supportEntryType('longtask') && '长任务',
        supportEntryType('resource') && '资源加载',
      ].filter(Boolean),
    })
  }

  const initCustomPerformance = () => {
    // 演示 createPerformanceObserver 的自定义用法
    stopFunctions.forEach((stop) => stop())
    stopFunctions.length = 0

    // 监听 mark 和 measure
    if (supportEntryType('mark')) {
      const { stop: stopMark } = createPerformanceObserver(
        'mark',
        (entries) => {
          entries.forEach((entry) => {
            action('Performance Mark')({
              name: entry.name,
              startTime: Math.round(entry.startTime) + 'ms',
            })
          })
        }
      )
      stopFunctions.push(stopMark)
    }

    if (supportEntryType('measure')) {
      const { stop: stopMeasure } = createPerformanceObserver(
        'measure',
        (entries) => {
          entries.forEach((entry) => {
            action('Performance Measure')({
              name: entry.name,
              duration: Math.round(entry.duration) + 'ms',
              startTime: Math.round(entry.startTime) + 'ms',
            })
          })
        }
      )
      stopFunctions.push(stopMeasure)
    }

    // 创建一些测试 mark 和 measure
    performance.mark('demo-start')
    setTimeout(() => {
      performance.mark('demo-end')
      performance.measure('demo-duration', 'demo-start', 'demo-end')
    }, 100)

    action('自定义性能监控')({
      status: '已开始监听 mark 和 measure',
      说明: '可以用于自定义性能打点',
    })
  }

  const stopPerformance = () => {
    stopFunctions.forEach((stop) => stop())
    stopFunctions.length = 0
    action('PerformanceObserver')('已停止所有监听')
  }

  return {
    initPerformance,
    initCustomPerformance,
    stopPerformance,
  }
}

export default performanceDemo
