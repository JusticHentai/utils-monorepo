import { action } from 'storybook/actions'
import isPlainObject from '../../../packages/js-utils/src/isPlainObject'

const isPlainObjectDemo = () => {
  // 普通对象
  action('isPlainObject - 普通对象')({
    '{}': isPlainObject({}),
    '{ a: 1 }': isPlainObject({ a: 1 }),
    'Object.create(null)': isPlainObject(Object.create(null)),
    'new Object()': isPlainObject(new Object()),
  })

  // 非普通对象
  class Foo { a = 1 }
  action('isPlainObject - 非普通对象')({
    '[]': isPlainObject([]),
    'new Date()': isPlainObject(new Date()),
    'new Foo()': isPlainObject(new Foo()),
    'null': isPlainObject(null),
    '"string"': isPlainObject('string'),
    '1': isPlainObject(1),
    'function': isPlainObject(() => {}),
  })
}

export default isPlainObjectDemo
