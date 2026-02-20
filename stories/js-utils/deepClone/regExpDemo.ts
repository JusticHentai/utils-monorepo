import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const regExpDemo = () => {
  const obj = {
    pattern: /hello\s+world/gi,
    validate: /^[a-z]+$/,
  }
  const cloned = deepClone(obj)

  action('深拷贝 RegExp 对象')({
    original: obj,
    cloned,
    isDeep: obj.pattern !== cloned.pattern,
  })
}

export default regExpDemo
