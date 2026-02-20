import { action } from 'storybook/actions'
import { createResizeObserver } from '../../../packages/element-utils/src/observer'
import getElementSize from '../../../packages/element-utils/src/getElementSize'

let stopResizeObserver: (() => void) | null = null

const resizeDemo = () => {
  const initResize = () => {
    // 先清理旧的
    if (stopResizeObserver) {
      stopResizeObserver()
    }

    const target = document.querySelector('#observer-target')
    if (!target) {
      action('错误')('未找到目标元素')
      return
    }

    // 获取初始尺寸
    const initialSize = getElementSize(target)
    action('初始尺寸')(initialSize)

    const { stop, isActive } = createResizeObserver(
      target,
      ({
        width,
        height,
        borderBoxWidth,
        borderBoxHeight,
        devicePixelContentBoxWidth,
        devicePixelContentBoxHeight,
      }) => {
        action('ResizeObserver 回调')({
          contentBox: { width: Math.round(width), height: Math.round(height) },
          borderBox: {
            width: Math.round(borderBoxWidth),
            height: Math.round(borderBoxHeight),
          },
          devicePixelContentBox: {
            width: Math.round(devicePixelContentBoxWidth),
            height: Math.round(devicePixelContentBoxHeight),
          },
        })
      }
    )

    stopResizeObserver = stop
    action('ResizeObserver')({
      status: '已开始监听',
      isActive,
      tip: '拖动目标元素右下角调整大小',
    })
  }

  const stopResize = () => {
    if (stopResizeObserver) {
      stopResizeObserver()
      stopResizeObserver = null
      action('ResizeObserver')('已停止监听')
    }
  }

  return {
    initResize,
    stopResize,
  }
}

export default resizeDemo
