import { action } from 'storybook/actions'
import flowRight from '../../../packages/js-utils/src/flowRight'

const flowRightDemo = () => {
  const add = (x) => x + 1
  const square = (x) => x * x
  const fn = flowRight([square, add])
  action('flowRight 演示')({
    '先 +1 再平方，输入 2': fn(2),
    说明: '从右到左执行: square(add(2)) = square(3) = 9',
  })
}

export default flowRightDemo
