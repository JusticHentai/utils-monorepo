import { action } from 'storybook/actions'
import pickBy from '../../../packages/js-utils/src/pickBy'

const pickByDemo = () => {
  // 基本谓词筛选 (lodash: pickBy({a:1,b:2,c:3,d:4}, n => n==1||n==3) => {a:1,c:3})
  const object = { a: 1, b: 2, c: 3, d: 4 }
  action('pickBy - 选取1和3')(pickBy(object, (v) => v === 1 || v === 3))

  // 类型筛选
  const mixed = { a: 1, b: null, c: 3, d: undefined, e: '' } as Record<string, unknown>
  action('pickBy - 过滤空值')(pickBy(mixed, (v) => v != null))
  action('pickBy - 仅数字')(pickBy(mixed, (v) => typeof v === 'number'))

  // 带点号的键不作为深层路径 (lodash: pickBy({'a.b.c': 1}, stubTrue) => {'a.b.c': 1})
  const dotObj = { 'a.b.c': 1 } as Record<string, unknown>
  action('pickBy - 带点号的键')(pickBy(dotObj, () => true))

  // 使用 key 参数进行筛选
  action('pickBy - 按key筛选')(pickBy(object, (_v, k) => k === 'a' || k === 'd'))
}

export default pickByDemo