import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const mixedDemo = () => {
  const sym = Symbol('id')
  const obj = {
    name: 'mixed',
    date: new Date('2025-01-06'),
    pattern: /test/gi,
    items: [1, { nested: true }],
    [sym]: [
      'symbol value',
      {
        a: 'symbol value',
      },
    ],
  }
  const cloned = deepClone(obj)
  cloned[sym][1].a = 'symbol value 2'

  action('深拷贝混合类型')({
    original: obj,
    cloned,
    isDeep: (obj[sym] as any[])?.[1]?.a !== (cloned[sym] as any[])?.[1]?.a,
    hasSymbol: sym in cloned,
  })
}

export default mixedDemo
