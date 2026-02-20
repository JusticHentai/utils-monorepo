import { action } from 'storybook/actions'
import isObject from '../../../packages/js-utils/src/isObject'

const objectDemo = () => {
  // 普通对象返回 true
  action('isObject - 对象类型')({
    '{}': isObject({}),
    '{ a: 1 }': isObject({ a: 1 }),
  })

  // 非普通对象返回 false（注意：此实现只匹配 [object Object]）
  action('isObject - 非 [object Object] 返回 false')({
    '[]': isObject([1, 2]),
    'new Date()': isObject(new Date()),
    '/x/': isObject(/x/),
    'function': isObject(() => {}),
    'null': isObject(null),
    '1': isObject(1),
    '"string"': isObject('string'),
  })
}

export default objectDemo
