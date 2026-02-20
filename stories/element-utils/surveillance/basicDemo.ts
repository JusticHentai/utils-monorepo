import { action } from 'storybook/actions'
import { Surveillance } from '../../../packages/element-utils/src/Surveillance'

const basicDemo = () => {
  // 创建监控实例
  const surveillance = new Surveillance({
    appId: 'storybook-demo',
    sampleRate: 1,

    // 性能监控配置
    performance: {
      webVitals: true,
      resource: true,
      longTask: true,
      longTaskThreshold: 50,
    },

    // 错误监控配置
    error: {
      jsError: true,
      resourceError: true,
      promiseError: true,
      ignoreErrors: [/Script error/],
    },

    // 请求监控配置
    request: {
      xhr: true,
      fetch: true,
      ignoreUrls: [/analytics/, /report/],
    },

    // 用户行为监控配置
    behavior: {
      enabled: true,
      click: true,
      scroll: true,
      input: true,
      routeChange: true,
    },

    // 钩子函数
    hooks: {
      onMetric: (metric) => {
        action('Web Vitals 指标')({
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
        })
      },
      onError: (error) => {
        action('捕获错误')({
          type: error.type,
          message: error.message,
        })
      },
    },
  })

  // 启动监控
  surveillance.start()
  action('监控状态')('已启动')

  // 获取性能数据
  const navMetrics = surveillance.getNavigationMetrics()
  const resourceMetrics = surveillance.resourceMonitor.getMetrics()
  const longTaskStats = surveillance.longTaskMonitor.getStats()
  const pageInfo = surveillance.getPageInfo()

  action('导航性能指标')(navMetrics)
  action('资源性能指标')(resourceMetrics.slice(0, 5))
  action('长任务统计')(longTaskStats)
  action('页面信息')(pageInfo)

  // 手动上报自定义事件
  surveillance.reporter.report('custom', {
    event: 'button_click',
    buttonId: 'demo-button',
    timestamp: Date.now(),
  })
  action('自定义事件')('已上报 button_click 事件')

  // 停止监控
  setTimeout(() => {
    surveillance.stop()
    action('监控状态')('已停止')
  }, 5000)
}

export default basicDemo
