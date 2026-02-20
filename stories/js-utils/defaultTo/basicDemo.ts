import { action } from 'storybook/actions'
import defaultTo from '../../../packages/js-utils/src/defaultTo'

const basicDemo = () => {
  // 基础用法：null/undefined/NaN 返回默认值
  action('defaultTo - nullish 值返回默认值')({
    'defaultTo(1, 10)': defaultTo(1, 10),
    'defaultTo(null, 10)': defaultTo(null, 10),
    'defaultTo(undefined, 10)': defaultTo(undefined, 10),
    'defaultTo(NaN, 10)': defaultTo(NaN, 10),
  })

  // 关键：与 || 运算符的区别 — falsey 值 0, false, '' 不会被替换
  action('defaultTo - falsey 值保留（与 || 的区别）')({
    'defaultTo(0, 10)': defaultTo(0, 10),
    'defaultTo(false, true)': defaultTo(false, true),
    'defaultTo(\'\', \'default\')': defaultTo('', 'default'),
  })
}

export default basicDemo
