import { action } from 'storybook/actions'
import { createIntersectionObserver } from '../../../packages/element-utils/src/observer'

let stopIntersectionObserver: (() => void) | null = null

const intersectionDemo = () => {
  const initIntersection = () => {
    // 先清理旧的
    if (stopIntersectionObserver) {
      stopIntersectionObserver()
    }

    const target = document.querySelector('#observer-target')
    if (!target) {
      action('错误')('未找到目标元素')
      return
    }

    const { stop, isActive } = createIntersectionObserver(
      target,
      ({ isIntersecting, intersectionRatio, target: el }) => {
        action('IntersectionObserver 回调')({
          isIntersecting,
          intersectionRatio: intersectionRatio.toFixed(2),
          targetId: (el as HTMLElement).id,
        })
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px',
      }
    )

    stopIntersectionObserver = stop
    action('IntersectionObserver')({
      status: '已开始监听',
      isActive,
      说明: '滚动页面使目标元素进出视口，观察回调触发',
    })
  }

  const stopIntersection = () => {
    if (stopIntersectionObserver) {
      stopIntersectionObserver()
      stopIntersectionObserver = null
      action('IntersectionObserver')('已停止监听')
    }
  }

  return {
    initIntersection,
    stopIntersection,
  }
}

export default intersectionDemo
