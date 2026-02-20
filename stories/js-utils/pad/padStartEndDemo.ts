import { action } from 'storybook/actions'
import { padStart, padEnd } from '../../../packages/js-utils/src/pad'

const padStartEndDemo = () => {
  // padStart: 左侧填充 (lodash: padStart('abc', 6) => '   abc')
  action('padStart - 默认空格')(padStart('abc', 6))

  // 截断填充字符 (lodash: padStart('abc', 6, '_-') => '_-_abc')
  action('padStart - 自定义字符')(padStart('abc', 6, '_-'))

  // 补零场景
  action('padStart - 补零')(padStart('5', 3, '0'))

  // padEnd: 右侧填充 (lodash: padEnd('abc', 6) => 'abc   ')
  action('padEnd - 默认空格')(padEnd('abc', 6))

  // 截断填充字符 (lodash: padEnd('abc', 6, '_-') => 'abc_-_')
  action('padEnd - 自定义字符')(padEnd('abc', 6, '_-'))

  // 长度不足不填充
  action('padStart - 不填充')(padStart('abc', 2))
  action('padEnd - 不填充')(padEnd('abc', 2))
}

export default padStartEndDemo