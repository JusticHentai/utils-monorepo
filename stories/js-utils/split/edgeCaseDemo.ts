import { action } from 'storybook/actions'
import split from '../../../packages/js-utils/src/split'

const edgeCaseDemo = () => {
  action('split - 边界情况')({
    '逗号分割': split('a-b-c', '-'), '限制数量': split('a-b-c', '-', 2), '空字符串': split('', '-'), '无匹配': split('abc', '-')
  })
}

export default edgeCaseDemo
