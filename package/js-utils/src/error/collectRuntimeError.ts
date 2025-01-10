import { ErrorCallback } from '../types'

/**
 * 处理 JS 运行时错误和资源加载错误
 */
export default function collectRuntimeError(cb: ErrorCallback) {
  window.addEventListener<'error'>(
    'error',
    (errorEvent: ErrorEvent) => {
      const { error, target } = errorEvent

      let res = ''

      if ((target as Element).outerHTML) {
        // dom 元素报错 例如图片加载失败
        res = `${JSON.stringify((target as Element).outerHTML)}`
      } else {
        // 普通 js 报错 限制最大字数
        res = `${error?.stack?.substr(0, 300)}`
      }

      cb(`[runtimeError]: ${res}`)
    },
    // 捕获阶段抓报错
    true
  )
}
