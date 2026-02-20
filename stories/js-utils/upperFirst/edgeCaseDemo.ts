import { action } from 'storybook/actions'
import upperFirst from '../../../packages/js-utils/src/upperFirst'

const edgeCaseDemo = () => {
  action('upperFirst - 边界情况')({
    'hello': upperFirst('hello'), '空字符串': upperFirst(''), '单字符': upperFirst('a'), '已是大写': upperFirst('ABC')
  })
}

export default edgeCaseDemo
