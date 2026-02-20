import { action } from 'storybook/actions'
import { defaultsDeep } from '../../../packages/js-utils/src/defaults'

const defaultsDeepDemo = () => {
  // 深层合并：不覆盖已有嵌套属性
  action('defaultsDeep - 深层合并')(
    defaultsDeep(
      { a: { b: 2 }, d: 4 },
      { a: { b: 3, c: 3 }, e: 5 },
    ),
  )

  // 多源深层合并
  action('defaultsDeep - 多源深层合并')(
    defaultsDeep(
      { a: { b: 2 } },
      { a: { b: 3 } },
      { a: { c: 3 } },
    ),
  )

  // 不覆盖 null
  action('defaultsDeep - 不覆盖 null')(
    defaultsDeep({ a: { b: null } }, { a: { b: 2 } }),
  )

  // 覆盖 undefined
  action('defaultsDeep - 覆盖 undefined')(
    defaultsDeep({ a: { b: undefined } }, { a: { b: 2 } }),
  )
}

export default defaultsDeepDemo
