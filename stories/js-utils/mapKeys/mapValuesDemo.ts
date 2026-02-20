import { action } from 'storybook/actions'
import mapValues from '../../../packages/js-utils/src/mapValues'

const mapValuesDemo = () => {
  // lodash 测试: 使用 String 转换值
  const obj = { a: 1, b: 2 }
  action('mapValues - 基础')({
    输入: obj,
    'mapValues(obj, String)': mapValues(obj, (value) => String(value)),
    期望: { a: '1', b: '2' },
  })

  // 提取嵌套属性
  const users = { alice: { age: 25 }, bob: { age: 30 } }
  action('mapValues - 提取嵌套属性')({
    输入: users,
    结果: mapValues(users, (u: any) => u.age),
    期望: { alice: 25, bob: 30 },
  })
}

export default mapValuesDemo