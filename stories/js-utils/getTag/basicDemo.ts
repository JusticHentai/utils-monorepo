import { action } from 'storybook/actions'
import getTag from '../../../packages/js-utils/src/getTag'

const basicDemo = () => {
  action('字符串')(getTag('hello'))
  action('数字')(getTag(123))
  action('布尔值')(getTag(true))
  action('null')(getTag(null))
  action('undefined')(getTag(undefined))
  action('数组')(getTag([1, 2, 3]))
  action('普通对象')(getTag({ a: 1 }))
}

export default basicDemo
