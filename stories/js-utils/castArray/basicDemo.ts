import { action } from 'storybook/actions'
import castArray from '../../../packages/js-utils/src/castArray'

const basicDemo = () => {
  action('castArray - 各种类型包装为数组')({
    数字: castArray(1),
    字符串: castArray('abc'),
    对象: castArray({ a: 1 }),
    布尔值: castArray(true),
    null: castArray(null),
    undefined: castArray(undefined),
    0: castArray(0),
    空字符串: castArray(''),
    false: castArray(false),
  })
}

export default basicDemo
