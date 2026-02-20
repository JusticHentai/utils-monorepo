/**
 * 检查是否在浏览器环境
 * @returns 是否在浏览器环境中运行
 */
const isBrowser = (): boolean => {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export default isBrowser
