import type {
  ErrorCallback,
  ResourceErrorInfo,
  StopListening,
} from '../interface'
import { ERROR_TYPE, RESOURCE_TAG } from '../interface'

/**
 * 监控资源加载错误
 * @param callback - 错误回调函数
 * @returns 停止监听函数
 */
const observeResourceError = (
  callback: ErrorCallback<ResourceErrorInfo>
): StopListening => {
  const handler = (event: Event) => {
    const target = event.target as HTMLElement

    const resourceTags: string[] = Object.values(RESOURCE_TAG)

    const isResourceElement = target && resourceTags.includes(target.tagName)

    if (!isResourceElement) return

    const resourceUrl =
      (target as HTMLScriptElement).src ||
      (target as HTMLLinkElement).href ||
      ''

    const message = `Failed to load ${target.tagName.toLowerCase()}: ${resourceUrl}`

    const errorInfo: ResourceErrorInfo = {
      type: ERROR_TYPE.RESOURCE,
      message,
      timestamp: Date.now(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      resourceUrl,
      resourceType: target.tagName.toLowerCase(),
    }

    callback(errorInfo)
  }

  // 使用捕获阶段监听，因为资源加载错误不会冒泡
  window.addEventListener('error', handler, true)

  return () => {
    window.removeEventListener('error', handler, true)
  }
}

export default observeResourceError
