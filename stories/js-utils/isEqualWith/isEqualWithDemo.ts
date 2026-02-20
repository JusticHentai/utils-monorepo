import { action } from 'storybook/actions'
import isEqualWith from '../../../packages/js-utils/src/isEqualWith'

const isEqualWithDemo = () => {
  // 忽略大小写比较字符串
  const caseInsensitive = (a: unknown, b: unknown) => {
    if (typeof a === 'string' && typeof b === 'string') {
      return a.toLowerCase() === b.toLowerCase()
    }
    return undefined
  }

  const result1 = isEqualWith({ name: 'Hello' }, { name: 'hello' }, caseInsensitive)

  action('isEqualWith - 忽略大小写')({
    值1: { name: 'Hello' },
    值2: { name: 'hello' },
    结果: result1,
  })

  // 近似浮点数比较
  const approxEqual = (a: unknown, b: unknown) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return Math.abs(a - b) < 0.01
    }
    return undefined
  }

  const result2 = isEqualWith({ val: 0.1 + 0.2 }, { val: 0.3 }, approxEqual)

  action('isEqualWith - 浮点近似')({
    值1: { val: 0.1 + 0.2 },
    值2: { val: 0.3 },
    结果: result2,
  })
}

export default isEqualWithDemo
