import { action } from 'storybook/actions'
import conforms from '../../../packages/js-utils/src/conforms'

const conformsDemo = () => {
  const objects = [{ a: 2, b: 1 }, { a: 1, b: 2 }]
  action('conforms 演示')({
    'b > 1 的对象': objects.filter(conforms({ b: (n) => n > 1 })),
  })
}

export default conformsDemo
