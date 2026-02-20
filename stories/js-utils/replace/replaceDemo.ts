import { action } from 'storybook/actions'
import replace from '../../../packages/js-utils/src/replace'

const replaceDemo = () => {
  // 字符串模式 (lodash: replace('abcde', 'de', '123') => 'abc123')
  action('replace - 字符串模式')(replace('abcde', 'de', '123'))

  // 正则全局替换 (lodash: replace('abcde', /[bd]/g, '-') => 'a-c-e')
  action('replace - 正则全局替换')(replace('abcde', /[bd]/g, '-'))

  // 替换函数
  action('replace - 回调函数')(replace('abc', /[a-c]/g, (m) => m.toUpperCase()))

  // 仅替换第一个匹配
  action('replace - 仅首次')(replace('foo-bar-foo', 'foo', 'baz'))

  // 正则全局替换所有匹配
  action('replace - 全局替换')(replace('foo-bar-foo', /foo/g, 'baz'))
}

export default replaceDemo