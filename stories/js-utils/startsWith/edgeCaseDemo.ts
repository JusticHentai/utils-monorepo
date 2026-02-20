import { action } from 'storybook/actions'
import startsWith from '../../../packages/js-utils/src/startsWith'

const edgeCaseDemo = () => {
  action('startsWith - 边界情况')({
    '正常匹配': startsWith('abc', 'a'), '偏移': startsWith('abc', 'b', 1), '不匹配': startsWith('abc', 'b'), '空字符串': startsWith('', '')
  })
}

export default edgeCaseDemo
