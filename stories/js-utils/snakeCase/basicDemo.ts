import { action } from 'storybook/actions'
import snakeCase from '../../../packages/js-utils/src/snakeCase'

const basicDemo = () => {
  action('snakeCase 转换')({
    'Foo Bar': snakeCase('Foo Bar'),
    fooBar: snakeCase('fooBar'),
    '--FOO-BAR--': snakeCase('--FOO-BAR--'),
    'hello world': snakeCase('hello world'),
  })
}

export default basicDemo
