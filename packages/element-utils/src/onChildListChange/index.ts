import { createMutationObserver } from '../observer'
import type { OnChildListChangeCallback } from './interface'

/**
 * 监听子节点变化
 *
 * @param target - 要观察的目标元素
 * @param callback - 子节点变化时的回调
 * @param subtree - 是否监听整个子树
 * @returns 清理函数
 */
const onChildListChange = (
  target: Element | null,
  callback: OnChildListChangeCallback,
  subtree = false
): (() => void) => {
  if (!target) return () => {}

  const { stop } = createMutationObserver(
    target,
    (mutations) => {
      const addedNodes: Node[] = []
      const removedNodes: Node[] = []

      mutations.forEach((mutation) => {
        if (mutation.type !== 'childList') return

        addedNodes.push(...Array.from(mutation.addedNodes))
        removedNodes.push(...Array.from(mutation.removedNodes))
      })

      if (!addedNodes.length && !removedNodes.length) return

      callback(addedNodes, removedNodes)
    },
    {
      childList: true,
      attributes: false,
      subtree,
    }
  )

  return stop
}

export default onChildListChange
