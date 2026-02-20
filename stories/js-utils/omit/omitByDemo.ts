import { action } from 'storybook/actions'
import { omitBy } from '../../../packages/js-utils/src/omit'

const omitByDemo = () => {
  // lodash 测试: 根据谓词排除
  const object = { a: 1, b: 2, c: 3, d: 4 }

  action('omitBy - 排除非偶数')({
    输入: object,
    结果: omitBy(object, (n) => (n as number) !== 2 && (n as number) !== 4),
    期望: { b: 2, d: 4 },
    说明: '排除值不等于2和4的属性',
  })

  // 按类型排除
  const mixed = { a: 1, b: '2', c: 3, d: 'hello' }
  action('omitBy - 排除数字类型')({
    输入: mixed,
    结果: omitBy(mixed, (value) => typeof value === 'number'),
    说明: '只保留非数字属性',
  })
}

export default omitByDemo