import { createMutationObserver } from '../observer'
import type { OnAttributeChangeCallback } from './interface'

/**
 * 监听属性变化
 *
 * @param target - 要观察的目标元素
 * @param callback - 属性变化时的回调
 * @param attributeFilter - 要监听的属性名列表，不传则监听所有
 * @returns 清理函数
 */
const onAttributeChange = (
  target: Element | null,
  callback: OnAttributeChangeCallback,
  attributeFilter?: string[]
): (() => void) => {
  if (!target) return () => {}

  const { stop } = createMutationObserver(
    target,
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type !== 'attributes') return

        const newValue = mutation.attributeName
          ? (mutation.target as Element).getAttribute(mutation.attributeName)
          : null

        callback(
          mutation.attributeName,
          mutation.oldValue,
          newValue,
          mutation.target as Element
        )
      })
    },
    {
      attributes: true,
      attributeOldValue: true,
      childList: false,
      subtree: false,
      ...(attributeFilter && { attributeFilter }),
    }
  )

  return stop
}

export default onAttributeChange
