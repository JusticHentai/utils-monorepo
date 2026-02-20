import { action } from 'storybook/actions'
import { createMutationObserver } from '../../../packages/element-utils/src/observer'

let stopMutationObserver: (() => void) | null = null
let mutationCount = 0

const mutationDemo = () => {
  const initMutation = () => {
    // 先清理旧的
    if (stopMutationObserver) {
      stopMutationObserver()
    }

    const target = document.querySelector('#mutation-target')
    if (!target) {
      action('错误')('未找到目标元素')
      return
    }

    const { stop, isActive } = createMutationObserver(
      target,
      (mutations) => {
        mutations.forEach((mutation) => {
          action('MutationObserver 回调')({
            type: mutation.type,
            addedNodes: mutation.addedNodes.length,
            removedNodes: mutation.removedNodes.length,
            attributeName: mutation.attributeName,
            oldValue: mutation.oldValue,
          })
        })
      },
      {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
        attributeOldValue: true,
      }
    )

    stopMutationObserver = stop
    action('MutationObserver')({
      status: '已开始监听',
      isActive,
      说明: '点击触发 DOM 变化按钮查看效果',
    })
  }

  const stopMutation = () => {
    if (stopMutationObserver) {
      stopMutationObserver()
      stopMutationObserver = null
      action('MutationObserver')('已停止监听')
    }
  }

  const triggerMutation = () => {
    const target = document.querySelector('#mutation-target')
    if (!target) {
      action('错误')('未找到目标元素')
      return
    }

    mutationCount++

    // 触发属性变化
    target.setAttribute('data-count', String(mutationCount))

    // 触发子节点变化
    const newChild = document.createElement('span')
    newChild.textContent = ` [新增内容 ${mutationCount}]`
    newChild.style.color = '#007bff'
    target.appendChild(newChild)

    action('触发变化')({
      attributeChange: `data-count = ${mutationCount}`,
      childAdded: true,
    })
  }

  return {
    initMutation,
    stopMutation,
    triggerMutation,
  }
}

export default mutationDemo
