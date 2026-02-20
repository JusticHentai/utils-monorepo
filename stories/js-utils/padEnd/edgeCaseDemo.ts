import { action } from 'storybook/actions'
import padEnd from '../../../packages/js-utils/src/padEnd'

const edgeCaseDemo = () => {
  action('padEnd - 边界情况')({
    'abc长度6': padEnd('abc', 6), '已超长度': padEnd('abcdef', 3), '自定义填充': padEnd('abc', 6, '_-'), '空字符串': padEnd('', 3)
  })
}

export default edgeCaseDemo
