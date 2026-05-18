import isBrowser from '../isBrowser'

/**
 * 检查当前浏览器环境是否支持 sendBeacon
 *
 * @returns 是否支持 navigator.sendBeacon
 */
const supportSendBeacon = (): boolean => {
  return isBrowser() && typeof window.navigator.sendBeacon === 'function'
}

export default supportSendBeacon
