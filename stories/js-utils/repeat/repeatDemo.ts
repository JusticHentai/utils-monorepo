import { action } from 'storybook/actions'
import repeat from '../../../packages/js-utils/src/repeat'

const repeatDemo = () => {
  // 基本重复 (lodash: repeat('*', 3) => '***')
  action('repeat - 星号3次')(repeat('*', 3))

  // 字符串重复 (lodash: repeat('abc', 2) => 'abcabc')
  action('repeat - abc重复2次')(repeat('abc', 2))

  // 默认1次
  action('repeat - 默认1次')(repeat('ha'))

  // 0次返回空字符串 (lodash: repeat('abc', 0) => '')
  action('repeat - 0次')(repeat('abc', 0))

  // 负数返回空字符串 (lodash: repeat('abc', -2) => '')
  action('repeat - 负数')(repeat('abc', -2))

  // 小数会被取整 (lodash: repeat('abc', 2.6) => 'abcabc')
  action('repeat - 小数2.6')(repeat('abc', 2.6))

  // 分隔线生成
  action('repeat - 分隔线')(repeat('-', 20))

  // 作为map迭代器 (lodash: ['a','b','c'].map(repeat) => ['a','b','c'])
  action('repeat - map迭代器')(['a', 'b', 'c'].map((s) => repeat(s)))
}

export default repeatDemo