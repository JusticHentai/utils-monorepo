import { action } from 'storybook/actions'
import defaults from '../../../packages/js-utils/src/defaults'

const defaultsDemo = () => {
  // 基础：不覆盖已有属性
  action('defaults - 不覆盖已有属性')(
    defaults({ a: 1 }, { a: 2, b: 2 }),
  )

  // 多个源对象，第一个源优先
  action('defaults - 多源对象')(
    defaults({ a: 1, b: 2 }, { b: 3 }, { c: 3 }),
  )

  // null 不会被覆盖
  action('defaults - null 不被覆盖')(
    defaults({ a: null }, { a: 1 }),
  )

  // undefined 会被覆盖
  action('defaults - undefined 被覆盖')(
    defaults({ a: undefined }, { a: 1 }),
  )

  // 源中的 undefined 也会被赋值
  action('defaults - 源的 undefined 会赋值')(
    defaults({}, { a: undefined, b: 1 }),
  )
}

export default defaultsDemo
