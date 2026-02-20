import { action } from 'storybook/actions'
import snakeCase from '../../../packages/js-utils/src/snakeCase'

const edgeCaseDemo = () => {
  action('snakeCase - 边界情况')({
    'Hello World': snakeCase('Hello World'), 'camelCase': snakeCase('camelCase'), '空字符串': snakeCase(''), 'kebab-case': snakeCase('kebab-case')
  })
}

export default edgeCaseDemo
