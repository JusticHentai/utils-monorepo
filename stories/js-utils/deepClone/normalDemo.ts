import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const normalDemo = () => {
  const obj = { a: 1, b: { c: 2 } }
  const cloned = deepClone(obj)
  cloned.b.c = 3

  action('深拷贝普通对象')({
    original: obj,
    cloned,
    isDeep: obj.b.c !== cloned.b.c,
  })
}

export default normalDemo
