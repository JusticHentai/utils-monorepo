import { action } from 'storybook/actions'
import lowerCase from '../../../packages/js-utils/src/lowerCase'
import { upperCase } from '../../../packages/js-utils/src/lowerCase'

const lowerCaseDemo = () => {
  // lodash 测试: 各种分隔符形式转为空格分隔小写
  action('lowerCase - lodash 测试用例')({
    '--Foo-Bar--': lowerCase('--Foo-Bar--'),
    'fooBar': lowerCase('fooBar'),
    '__FOO_BAR__': lowerCase('__FOO_BAR__'),
    说明: '所有形式都转为 "foo bar"',
  })

  action('lowerCase - 更多用例')({
    'Foo Bar': lowerCase('Foo Bar'),
    'HELLO WORLD': lowerCase('HELLO WORLD'),
    'XMLParser': lowerCase('XMLParser'),
  })

  // upperCase
  action('upperCase')({
    'foo bar': upperCase('foo bar'),
    'fooBar': upperCase('fooBar'),
    '--foo-bar--': upperCase('--foo-bar--'),
  })
}

export default lowerCaseDemo