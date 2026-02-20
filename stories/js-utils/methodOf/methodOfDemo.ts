import { action } from 'storybook/actions'
import methodOf from '../../../packages/js-utils/src/methodOf'

const methodOfDemo = () => {
  const object = { a: { b: (x) => x + 1 } }
  const fn = methodOf(object, 5)
  action('methodOf 演示')({ '调用 a.b(5)': fn('a.b') })
}

export default methodOfDemo
