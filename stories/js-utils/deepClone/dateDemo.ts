import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const dateDemo = () => {
  const original = {
    a: new Date('2023-01-01'),
  }

  const cloned = deepClone(original)

  action('深拷贝 Date 对象')({
    original,
    cloned,
    isDate: cloned.a instanceof Date,
    isEqual: original.a.getTime() === cloned.a.getTime(),
    isDeep: original.a !== cloned.a,
  })
}

export default dateDemo
