/**
 * 检查当前环境是否支持全局 Fetch API
 *
 * @returns 是否支持 fetch
 */
const supportFetch = (): boolean => {
  return typeof fetch === 'function'
}

export default supportFetch
