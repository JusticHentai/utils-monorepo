import { action } from 'storybook/actions'
import lowerFirst from '../../../packages/js-utils/src/lowerFirst'

const edgeCaseDemo = () => {
  action('lowerFirst - 边界情况')({
    'HELLO': lowerFirst('HELLO'), '空字符串': lowerFirst(''), '单字符': lowerFirst('A'), '已是小写': lowerFirst('abc')
  })
}

export default edgeCaseDemo
