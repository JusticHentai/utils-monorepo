import { action } from 'storybook/actions'
import pick from '../../../packages/js-utils/src/pick'

const basicDemo = () => {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  // 基本选取
  action('pick - 选取 a,c')(pick(object, ['a', 'c']))

  // 选取单个属性
  action('pick - 选取单个 a')(pick(object, ['a']))

  // 不存在的 key 被忽略
  action('pick - 含不存在的key')(pick(object, ['a', 'x' as any]))
}

export default basicDemo
