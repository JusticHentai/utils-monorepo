import { action } from 'storybook/actions'
import escape from '../../../packages/js-utils/src/escape'
import unescape from '../../../packages/js-utils/src/unescape'

const escapeDemo = () => {
  const unescapedChars = '&<>"\'/'
  const doubled = unescapedChars + unescapedChars

  // 转义 HTML 特殊字符
  action('escape - 转义 HTML 特殊字符')({
    原始: doubled,
    转义后: escape(doubled),
  })

  // 不转义普通字符串
  action('escape - 普通字符串不变')({
    'escape("abc")': escape('abc'),
  })

  // escape 和 unescape 互逆
  const escaped = escape(doubled)
  action('escape / unescape 互逆')({
    escaped,
    'unescape(escaped)': unescape(escaped),
    '再 escape': escape(unescape(escaped)),
    '互逆相等': escape(unescape(escaped)) === escaped,
  })

  // 反引号和斜杠不会被转义
  action('escape - 不转义 ` 和 /')({
    'escape("`")': escape('`'),
    'escape("/")': escape('/'),
  })
}

export default escapeDemo