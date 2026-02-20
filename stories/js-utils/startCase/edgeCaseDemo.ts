import { action } from 'storybook/actions'
import startCase from '../../../packages/js-utils/src/startCase'

const edgeCaseDemo = () => {
  action('startCase - 边界情况')({
    'hello world': startCase('hello world'), 'camelCase': startCase('camelCase'), '空字符串': startCase(''), 'snake_case': startCase('snake_case')
  })
}

export default edgeCaseDemo
