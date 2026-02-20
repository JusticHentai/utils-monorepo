import { action } from 'storybook/actions'
import getScrollDirection from '../../../packages/element-utils/src/getScrollDirection'

const scrollContainerDemo = () => {
  // 模拟斜向滚动：垂直方向变化大于水平方向
  const diagonalDownParams = { x: 50, y: 150, lastX: 0, lastY: 0 }
  const diagonalDownDirection = getScrollDirection(diagonalDownParams)
  action('斜向滚动（垂直优先）')({
    params: diagonalDownParams,
    direction: diagonalDownDirection,
  })

  // 模拟斜向滚动：水平方向变化大于垂直方向
  const diagonalRightParams = { x: 150, y: 50, lastX: 0, lastY: 0 }
  const diagonalRightDirection = getScrollDirection(diagonalRightParams)
  action('斜向滚动（水平优先）')({
    params: diagonalRightParams,
    direction: diagonalRightDirection,
  })

  // 模拟快速滚动：大幅度位置变化
  const fastScrollParams = { x: 0, y: 1000, lastX: 0, lastY: 0 }
  const fastScrollDirection = getScrollDirection(fastScrollParams)
  action('快速向下滚动')({
    params: fastScrollParams,
    direction: fastScrollDirection,
  })

  // 模拟微小滚动：判断边界情况
  const tinyScrollParams = { x: 1, y: 1, lastX: 0, lastY: 0 }
  const tinyScrollDirection = getScrollDirection(tinyScrollParams)
  action('微小滚动（相等时返回水平方向）')({
    params: tinyScrollParams,
    direction: tinyScrollDirection,
  })
}

export default scrollContainerDemo
