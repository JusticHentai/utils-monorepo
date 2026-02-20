import { action } from 'storybook/actions'
import map from '../../../packages/js-utils/src/map'

const mapObjectDemo = () => {
  // 对象映射 (lodash 测试)
  const obj = { a: 1, b: 2 }

  action('map - 对象映射')({
    'map({ a: 1, b: 2 }, String)': map(obj, String),
    期望: ['1', '2'],
  })

  // iteratee 接收 (value, key, collection)
  action('map - iteratee 参数')({
    结果: map(obj, (value, key) => `${key}=${value}`),
    说明: 'iteratee 接收 value, key, collection 三个参数',
  })

  // 非数字 length 属性的对象 (lodash 测试)
  const withLength = { length: { value: 'x' } }
  action('map - 非数字 length 属性')({
    输入: withLength,
    结果: map(withLength, (v) => v),
    说明: '对象的 length 属性为非数字时正常处理',
  })
}

export default mapObjectDemo