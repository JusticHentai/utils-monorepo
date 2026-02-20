import isBrowser from '../isBrowser'

/**
 * 检查是否支持 MutationObserver API
 * 用于监听 DOM 树的变化，如节点添加、删除、属性变化等
 *
 * @returns 是否支持 MutationObserver
 *
 * @example
 * ```ts
 * if (supportMutationObserver()) {
 *   const observer = new MutationObserver(callback)
 *   observer.observe(element, { childList: true, attributes: true })
 * }
 * ```
 */
const supportMutationObserver = (): boolean => {
  return isBrowser() && typeof MutationObserver !== 'undefined'
}

export default supportMutationObserver
