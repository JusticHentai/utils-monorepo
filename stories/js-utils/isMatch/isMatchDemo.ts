import { action } from 'storybook/actions'
import isMatch from '../../../packages/js-utils/src/isMatch'

const isMatchDemo = () => {
  const obj = { a: 1, b: 2, c: 3 }

  action('isMatch - 匹配子集')({
    对象: obj,
    模式: { a: 1, b: 2 },
    结果: isMatch(obj, { a: 1, b: 2 }),
  })

  action('isMatch - 不匹配')({
    对象: obj,
    模式: { a: 1, b: 99 },
    结果: isMatch(obj, { a: 1, b: 99 }),
  })
}

export default isMatchDemo
