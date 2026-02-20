import { action } from 'storybook/actions'
import RequestMonitor from '../../../packages/element-utils/src/RequestMonitor'

export const monitor = new RequestMonitor({
  onRequest: (request) => {
    action('onRequest 回调')({
      url: request.url,
      method: request.method,
      status: request.status,
      duration: Math.round(request.duration || 0) + 'ms',
      success: request.success,
    })
  },
  onError: (error) => {
    action('onError 回调')({
      type: error.type,
      message: error.message,
      requestUrl: error.requestUrl,
    })
  },
  ignoreUrls: [/hot-update/],
})

export const createObserveAllDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = monitor.observeAll()
    setStopFn(stop)

    action('开启监控')('已开始监控 XHR + Fetch 请求')
  }
}
