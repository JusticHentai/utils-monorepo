import { action } from 'storybook/actions'
import isNumber from '../../../packages/js-utils/src/isNumber'

const numberDemo = () => {
  // 数字返回 true
  action('isNumber - 数字类型')({
    '3': isNumber(3),
    'Number.MIN_VALUE': isNumber(Number.MIN_VALUE),
    'Infinity': isNumber(Infinity),
  })

  // NaN 被排除（此实现与 lodash 不同）
  action('isNumber - NaN 被排除')({
    'NaN': isNumber(NaN),
    说明: '此实现排除 NaN，lodash 的 isNumber(NaN) 返回 true',
  })

  // 非数字返回 false
  action('isNumber - 非数字类型')({
    '"3"': isNumber('3'),
    'null': isNumber(null),
    'undefined': isNumber(undefined),
    '{}': isNumber({}),
  })
}

export default numberDemo
