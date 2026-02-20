import { action } from 'storybook/actions'
import keyBy from '../../../packages/js-utils/src/keyBy'

const edgeCaseDemo = () => {
  // 特殊键名: constructor, hasOwnProperty (lodash 测试)
  const result = keyBy([6.1, 4.2, 6.3], (n) =>
    Math.floor(n) > 4 ? 'hasOwnProperty' : 'constructor'
  )
  action('keyBy - 特殊键名')({
    结果: result,
    constructor: result['constructor'],
    hasOwnProperty: result['hasOwnProperty'],
    说明: '使用 constructor/hasOwnProperty 作为键不会出错',
  })

  // 空集合
  action('keyBy - 空数组')({
    结果: keyBy([], 'id'),
  })
}

export default edgeCaseDemo