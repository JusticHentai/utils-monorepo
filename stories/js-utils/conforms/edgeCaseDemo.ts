import { action } from 'storybook/actions'
import conforms from '../../../packages/js-utils/src/conforms'

const edgeCaseDemo = () => {
  const check = conforms({ b: (n: number) => n > 1 })

  action('conforms - 边界情况')({
    '满足': check({ a: 1, b: 2 }),
    '不满足': check({ a: 1, b: 0 }),
  })
}

export default edgeCaseDemo
