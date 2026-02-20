import { action } from 'storybook/actions'
import replace from '../../../packages/js-utils/src/replace'

const edgeCaseDemo = () => {
  action('replace - 边界情况')({
    '正常替换': replace('Hi Fred', 'Fred', 'Barney'), '无匹配': replace('abc', 'xyz', '123'), '空字符串': replace('', 'a', 'b')
  })
}

export default edgeCaseDemo
