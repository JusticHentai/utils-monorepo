import { action } from 'storybook/actions'
import safeStringify from '../../../packages/element-utils/src/safeStringify'

const primitiveDemo = () => {
  const values = [
    'hello',
    1024,
    true,
    null,
    undefined,
    BigInt(9007199254740991),
  ]

  const results = values.map((value) => ({
    type: typeof value,
    output: safeStringify(value),
  }))

  action('基础值序列化结果')(results)
}

export default primitiveDemo
