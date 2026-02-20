import { action } from 'storybook/actions'
import upperCase from '../../../packages/js-utils/src/upperCase'

const edgeCaseDemo = () => {
  action('upperCase - 边界情况')({
    'hello world': upperCase('hello world'), 'camelCase': upperCase('camelCase'), '空字符串': upperCase(''), '含特殊字符': upperCase('foo-bar')
  })
}

export default edgeCaseDemo
