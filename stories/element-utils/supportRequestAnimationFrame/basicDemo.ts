import { action } from 'storybook/actions'
import supportRequestAnimationFrame from '../../../packages/element-utils/src/supportRequestAnimationFrame'

const basicDemo = () => {
  const result = supportRequestAnimationFrame()

  action('supportRequestAnimationFrame 检测结果')({
    supported: result,
    message: result
      ? 'requestAnimationFrame 可用，可以实现流畅动画'
      : 'requestAnimationFrame 不可用，需要使用 setTimeout 降级',
  })

  // 如果支持，演示使用
  if (result) {
    let frameCount = 0
    const maxFrames = 5

    const animate = () => {
      frameCount++
      action('动画帧')({
        frame: frameCount,
        timestamp: performance.now().toFixed(2) + 'ms',
      })

      if (frameCount < maxFrames) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }
}

export default basicDemo
