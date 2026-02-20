import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const preCollectDemo = () => {
  // 1. 模拟提前收集（实际场景中 preCollectErrors.ts 的代码已内联在 <head> 中）
  // 这里手动模拟预收集逻辑
  const errors: { type: string; message: string; timestamp: number }[] = []
  ;(window as any).__PRE_COLLECTED_ERRORS__ = errors

  const onError = (event: ErrorEvent | Event) => {
    if (event instanceof ErrorEvent && event.message) {
      errors.push({
        type: 'JS',
        message: event.message,
        timestamp: Date.now(),
      })
    }
  }

  const onUnhandledRejection = (event: PromiseRejectionEvent) => {
    errors.push({
      type: 'PROMISE',
      message:
        event.reason instanceof Error
          ? event.reason.message
          : String(event.reason),
      timestamp: Date.now(),
    })
  }

  window.addEventListener('error', onError, true)
  window.addEventListener('unhandledrejection', onUnhandledRejection)

  action('预收集')('已启动提前错误收集')

  // 2. 模拟在 script 加载前发生的错误
  setTimeout(() => {
    throw new Error('script 加载前的错误')
  }, 100)

  // 3. 模拟 script 加载完成后，取出已收集的错误并上报
  setTimeout(() => {
    const preErrors = (window as any).__PRE_COLLECTED_ERRORS__ || []
    action('预收集结果')(`共收集到 ${preErrors.length} 个错误`)

    preErrors.forEach((error: any) => {
      action('预收集的错误')({
        type: error.type,
        message: error.message,
        timestamp: error.timestamp,
      })
    })

    // 4. 停止预收集，切换到正式监控
    window.removeEventListener('error', onError, true)
    window.removeEventListener('unhandledrejection', onUnhandledRejection)
    ;(window as any).__PRE_COLLECTED_ERRORS__ = []

    const monitor = new ErrorMonitor()
    monitor.observe((error) => {
      action('正式监控捕获')({
        type: error.type,
        message: error.message,
      })
    })

    action('监控状态')('已从预收集切换到正式监控')

    setTimeout(() => {
      monitor.stop()
      action('监控状态')('已停止')
    }, 5000)
  }, 1000)
}

export default preCollectDemo
