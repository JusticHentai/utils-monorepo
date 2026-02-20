import { action } from 'storybook/actions'
import kebabCase from '../../../packages/js-utils/src/kebabCase'

const edgeCaseDemo = () => {
  action('kebabCase - 边界情况')({
    'Hello World': kebabCase('Hello World'), 'camelCase': kebabCase('camelCase'), '空字符串': kebabCase(''), 'snake_case': kebabCase('snake_case')
  })
}

export default edgeCaseDemo
