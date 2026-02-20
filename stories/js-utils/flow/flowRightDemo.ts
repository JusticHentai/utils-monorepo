import { action } from 'storybook/actions'
import flowRight from '../../../packages/js-utils/src/flowRight'

const flowRightDemo = () => {
  const add10 = (n: number) => n + 10
  const multiply2 = (n: number) => n * 2
  const compose = flowRight([add10, multiply2])

  action('flowRight - 5 * 2 + 10')(compose(5))
}

export default flowRightDemo
