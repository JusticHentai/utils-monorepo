import { action } from 'storybook/actions'
import padStart from '../../../packages/js-utils/src/padStart'

const edgeCaseDemo = () => {
  action('padStart - 边界情况')({
    'abc长度6': padStart('abc', 6), '已超长度': padStart('abcdef', 3), '自定义填充': padStart('abc', 6, '_-'), '空字符串': padStart('', 3)
  })
}

export default edgeCaseDemo
