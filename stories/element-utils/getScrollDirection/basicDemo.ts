import { action } from 'storybook/actions'
import getScrollDirection from '../../../packages/element-utils/src/getScrollDirection'

const basicDemo = () => {
  // 模拟向下滚动：从 (0, 0) 到 (0, 100)
  const downParams = { x: 0, y: 100, lastX: 0, lastY: 0 }
  const downDirection = getScrollDirection(downParams)
  action('向下滚动方向')({ params: downParams, direction: downDirection })

  // 模拟向上滚动：从 (0, 100) 到 (0, 50)
  const upParams = { x: 0, y: 50, lastX: 0, lastY: 100 }
  const upDirection = getScrollDirection(upParams)
  action('向上滚动方向')({ params: upParams, direction: upDirection })

  // 模拟向右滚动：从 (0, 0) 到 (100, 0)
  const rightParams = { x: 100, y: 0, lastX: 0, lastY: 0 }
  const rightDirection = getScrollDirection(rightParams)
  action('向右滚动方向')({ params: rightParams, direction: rightDirection })

  // 模拟向左滚动：从 (100, 0) 到 (50, 0)
  const leftParams = { x: 50, y: 0, lastX: 100, lastY: 0 }
  const leftDirection = getScrollDirection(leftParams)
  action('向左滚动方向')({ params: leftParams, direction: leftDirection })

  // 没有滚动：位置不变
  const noneParams = { x: 100, y: 100, lastX: 100, lastY: 100 }
  const noneDirection = getScrollDirection(noneParams)
  action('无滚动方向')({ params: noneParams, direction: noneDirection })
}

export default basicDemo
