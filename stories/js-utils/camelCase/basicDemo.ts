import { action } from 'storybook/actions'
import camelCase from '../../../packages/js-utils/src/camelCase'

const basicDemo = () => {
  action('camelCase - 各种格式转换')({
    'foo bar': camelCase('foo bar'),
    'Foo Bar': camelCase('Foo Bar'),
    'FOO BAR': camelCase('FOO BAR'),
    '--foo-bar--': camelCase('--foo-bar--'),
    '__foo_bar__': camelCase('__foo_bar__'),
    'fooBar': camelCase('fooBar'),
  })

  action('camelCase - 双重转换幂等性')({
    原始: 'foo bar',
    第一次: camelCase('foo bar'),
    第二次: camelCase(camelCase('foo bar')),
    说明: '连续两次转换结果相同',
  })
}

export default basicDemo
