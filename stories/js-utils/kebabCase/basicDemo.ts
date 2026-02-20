import { action } from 'storybook/actions'
import kebabCase from '../../../packages/js-utils/src/kebabCase'

const basicDemo = () => {
  action('kebabCase 转换')({
    'Foo Bar': kebabCase('Foo Bar'),
    fooBar: kebabCase('fooBar'),
    __FOO_BAR__: kebabCase('__FOO_BAR__'),
    'hello world': kebabCase('hello world'),
  })
}

export default basicDemo
