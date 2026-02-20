import { action } from 'storybook/actions'
import conformsTo from '../../../packages/js-utils/src/conformsTo'

const conformsToDemo = () => {
  const obj = { a: 1, b: 'hello' }

  action('conformsTo - 满足约束')(
    conformsTo(obj, {
      a: (v: unknown) => typeof v === 'number' && (v as number) > 0,
      b: (v: unknown) => typeof v === 'string',
    }),
  )

  action('conformsTo - 不满足约束')(
    conformsTo(obj, {
      a: (v: unknown) => (v as number) > 10,
    }),
  )
}

export default conformsToDemo
