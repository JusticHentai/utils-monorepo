import { action } from 'storybook/actions'
import pick from '../../../packages/js-utils/src/pick'

const pickDemo = () => {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  // 基本选取 (lodash: pick(object, ['a', 'c']) => { a: 1, c: 3 })
  action('pick - 选取 a,c')(pick(object, ['a', 'c']))

  // 选取单个属性
  action('pick - 选取单个 a')(pick(object, ['a']))

  // 不存在的 key 被忽略
  action('pick - 含不存在的key')(pick(object, ['a', 'x' as any]))

  // 不改变原对象
  const result = pick(object, ['a'])
  action('pick - 原对象不变')({ original: object, picked: result })

  // 数字键 (lodash: pick({ '0': 'a', '1': 'b' }, 0) => { '0': 'a' })
  const numObj = { 0: 'a', 1: 'b' } as Record<string, any>
  action('pick - 数字键')(pick(numObj, ['0']))
}

export default pickDemo