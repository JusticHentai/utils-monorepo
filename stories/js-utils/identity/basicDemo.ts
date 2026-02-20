import { action } from 'storybook/actions'
import identity from '../../../packages/js-utils/src/identity'

const basicDemo = () => {
  const object = { name: 'fred' }

  // 返回相同引用
  action('identity - 返回相同引用')({
    'identity(object) === object': identity(object) === object,
  })

  // 常用作默认 iteratee
  action('identity - 各种类型')({
    数字: identity(42),
    字符串: identity('hello'),
    布尔: identity(true),
    null: identity(null),
    undefined: identity(undefined),
  })

  // 实际用途：作为默认迭代器
  action('identity - 作为 filter 迭代器')(
    [0, 1, false, 2, '', 3].filter(identity as any),
  )
}

export default basicDemo
