import { action } from 'storybook/actions'
import type Point from '../../../packages/js-utils/src/Point'

const edgeCaseDemo = () => {
  // Point 是接口类型，不是运行时函数
  const origin: Point = { x: 0, y: 0 }
  const negative: Point = { x: -1, y: -1 }

  action('Point - 边界情况')({
    说明: 'Point 是纯类型定义，编译时生效',
    原点: origin,
    负坐标: negative,
  })
}

export default edgeCaseDemo
