import createEventListener from '../createEventListener'
import isBrowser from '../isBrowser'
import type { CleanupFn, OnClickOutsideOptions } from './interface'

/**
 * 监听点击外部区域
 *
 * @param target - 目标元素或元素数组
 * @param callback - 点击外部时的回调
 * @param options - 配置选项
 * @returns 清理函数
 *
 * @example
 * ```ts
 * const dropdown = document.querySelector('.dropdown')
 *
 * const stop = onClickOutside(dropdown, () => {
 *   console.log('点击了下拉框外部')
 *   // 关闭下拉框
 * })
 *
 * // 停止监听
 * stop()
 * ```
 *
 * @example
 * ```ts
 * // 忽略特定元素
 * const stop = onClickOutside(
 *   modal,
 *   () => closeModal(),
 *   { ignore: ['.modal-trigger', toggleButton] }
 * )
 * ```
 */
const onClickOutside = (
  target: Element | Element[] | null,
  callback: (event: MouseEvent) => void,
  options?: OnClickOutsideOptions
): CleanupFn => {
  if (!isBrowser() || !target) return () => {}

  const { ignore = [], capture = true } = options || {}
  const targets = Array.isArray(target) ? target : [target]

  const handler = (event: MouseEvent) => {
    const composedPath = event.composedPath()

    // 检查是否点击在目标元素内
    const isInTarget = targets.some(
      (el) => el === event.target || composedPath.includes(el)
    )
    if (isInTarget) return

    // 检查是否点击在忽略元素内
    const isInIgnore = ignore.some((item) => {
      if (typeof item === 'string') {
        return (event.target as Element)?.closest?.(item)
      }
      return item === event.target || composedPath.includes(item)
    })
    if (isInIgnore) return

    callback(event)
  }

  return createEventListener(
    document,
    'click',
    handler as (event: WindowEventMap['click']) => void,
    { capture }
  )
}

export default onClickOutside
