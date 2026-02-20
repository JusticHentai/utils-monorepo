import { action } from 'storybook/actions'
import has from '../../../packages/js-utils/src/has'

const basicDemo = () => {
  const obj = { a: { b: { c: 3 } } }
  action('has')({
    'a.b.c': has(obj, 'a.b.c'),
    'a.b.d': has(obj, 'a.b.d'),
    '["a", "b"]': has(obj, ['a', 'b']),
  })
}

export default basicDemo
