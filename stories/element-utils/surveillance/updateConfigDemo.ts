import { action } from 'storybook/actions'
import { Surveillance } from '../../../packages/element-utils/src/Surveillance'

const updateConfigDemo = () => {
  // 创建最小配置实例
  const surveillance = new Surveillance({
    appId: 'storybook-demo',
    performance: {
      webVitals: false,
      resource: false,
      longTask: false,
      fps: false,
      jank: false,
      navigation: false,
    },
    error: { enabled: false },
    request: { enabled: false },
    behavior: { enabled: false },
    lifecycle: { enabled: false },
  })

  action('初始配置')({
    performance: surveillance.config.performance,
    error: surveillance.config.error?.enabled,
    request: surveillance.config.request?.enabled,
  })

  // 动态启用性能监控
  surveillance.updateConfig({
    performance: {
      webVitals: true,
      fps: true,
    },
  })

  action('更新后配置')({
    webVitals: surveillance.config.performance?.webVitals,
    fps: surveillance.config.performance?.fps,
    resource: surveillance.config.performance?.resource,
  })

  // 动态修改采样率和上报方式
  surveillance.updateConfig({
    sampleRate: 0.5,
    reportMethod: 'fetch',
    batchSize: 20,
  })

  action('再次更新配置')({
    sampleRate: surveillance.config.sampleRate,
    reportMethod: surveillance.config.reportMethod,
    batchSize: surveillance.config.batchSize,
  })

  action('updateConfig 说明')('updateConfig 使用 deepMerge 进行深度合并，只更新传入的字段，不影响其他配置')
}

export default updateConfigDemo
