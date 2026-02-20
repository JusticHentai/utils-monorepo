import { action } from 'storybook/actions'
import mapKeys from '../../../packages/js-utils/src/mapKeys'

const mapKeysDemo = () => {
  // lodash 测试: 使用 String 转换键
  const obj = { a: 1, b: 2 }
  action('mapKeys - 基础')({
    输入: obj,
    'mapKeys(obj, String)': mapKeys(obj, (value) => String(value)),
    期望: { '1': 1, '2': 2 },
  })

  // 自定义转换
  action('mapKeys - 拼接键值')({
    结果: mapKeys(obj, (value, key) => key + value),
    期望: { a1: 1, b2: 2 },
  })

  // null/undefined 安全
  action('mapKeys - null 安全')({
    'mapKeys(null)': mapKeys(null as any, (v) => v),
    说明: '返回空对象 {}',
  })

  // 只遍历自身属性 (lodash 测试)
  action('mapKeys - 说明')({
    说明: 'mapKeys 只遍历对象自身的字符串键属性，不包含原型链',
  })
}

export default mapKeysDemo