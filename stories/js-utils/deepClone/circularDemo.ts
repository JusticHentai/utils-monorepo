import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const circularDemo = () => {
  const obj: any = { a: 1 }
  obj.self = obj

  const cloned = deepClone(obj)

  action('深拷贝循环引用对象')({
    original: obj,
    cloned,
    isDeep: cloned.self === cloned,
  })
}

export default circularDemo
