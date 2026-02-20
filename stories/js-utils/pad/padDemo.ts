import { action } from 'storybook/actions'
import pad from '../../../packages/js-utils/src/pad'

const padDemo = () => {
  // 基本空格填充 (lodash: pad('abc', 8) => '  abc   ')
  action('pad - 空格填充到8')(pad('abc', 8))

  // 自定义填充字符，截断多余字符 (lodash: pad('abc', 8, '_-') => '_-abc_-_')
  action('pad - 自定义字符 _-')(pad('abc', 8, '_-'))

  // 字符串已达目标长度，不需要填充
  action('pad - 长度不足，不填充')(pad('abc', 2))
  action('pad - 长度相等，不填充')(pad('abc', 3))

  // 负数长度视为0，返回原字符串
  action('pad - 负数长度')(pad('abc', -2))

  // pad('abc', 6) => ' abc  ' (左侧1空格，右侧2空格)
  action('pad - 长度6')(pad('abc', 6))
}

export default padDemo