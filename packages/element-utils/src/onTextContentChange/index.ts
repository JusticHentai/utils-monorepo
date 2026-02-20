import { createMutationObserver } from '../observer'
import type { OnTextContentChangeCallback } from './interface'

/**
 * 监听文本内容变化
 *
 * @param target - 要观察的目标元素
 * @param callback - 文本变化时的回调
 * @returns 清理函数
 */
const onTextContentChange = (
  target: Element | null,
  callback: OnTextContentChangeCallback
): (() => void) => {
  if (!target) return () => {}

  const { stop } = createMutationObserver(
    target,
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type !== 'characterData') return

        callback(
          mutation.oldValue,
          (mutation.target as CharacterData).data || ''
        )
      })
    },
    {
      characterData: true,
      characterDataOldValue: true,
      childList: false,
      attributes: false,
      subtree: true,
    }
  )

  return stop
}

export default onTextContentChange
