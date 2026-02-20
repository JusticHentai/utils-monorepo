import type { PageInfo } from './interface'

/**
 * 获取页面信息
 * @returns 页面信息对象，包含 URL、标题、用户代理等
 */
const getPageInfo = (): PageInfo => {
  if (typeof window === 'undefined') {
    return {
      url: '',
      title: '',
      referrer: '',
      userAgent: '',
      screenResolution: '',
      viewport: '',
      devicePixelRatio: 1,
      language: '',
      platform: '',
      timezone: '',
    }
  }

  const { navigator, screen, document, location } = window

  const pageInfo: PageInfo = {
    url: location.href,
    title: document.title,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    screenResolution: `${screen.width}x${screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    devicePixelRatio: window.devicePixelRatio || 1,
    language: navigator.language,
    platform: navigator.platform || '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }

  // 网络信息
  if (navigator.connection) {
    pageInfo.networkType = navigator.connection.type
    pageInfo.effectiveType = navigator.connection.effectiveType
  }

  // 内存信息
  if (performance.memory) {
    pageInfo.memory = {
      jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
      totalJSHeapSize: performance.memory.totalJSHeapSize,
      usedJSHeapSize: performance.memory.usedJSHeapSize,
    }
  }

  return pageInfo
}

export default getPageInfo
