import { action } from 'storybook/actions'
import isNil from '../../../packages/js-utils/src/isNil'

const isNilDemo = () => {
  // null 和 undefined 返回 true
  action('isNil - 返回 true')({
    'null': isNil(null),
    'undefined': isNil(undefined),
    'void 0': isNil(void 0),
  })

  // 其他 falsey 值返回 false
  action('isNil - falsey 值返回 false')({
    'NaN': isNil(NaN),
    '0': isNil(0),
    "''": isNil(''),
    'false': isNil(false),
  })
}

export default isNilDemo
