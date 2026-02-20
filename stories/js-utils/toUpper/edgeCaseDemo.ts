import { action } from 'storybook/actions'
import toUpper from '../../../packages/js-utils/src/toUpper'

const edgeCaseDemo = () => {
  action('toUpper - 边界情况')({
    'hello world': toUpper('hello world'), '空字符串': toUpper(''), '全小写': toUpper('abc'), '含数字': toUpper('a1b2')
  })
}

export default edgeCaseDemo
