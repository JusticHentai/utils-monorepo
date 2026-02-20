import { action } from 'storybook/actions'
import words from '../../../packages/js-utils/src/words'

const edgeCaseDemo = () => {
  action('words - 边界情况')({
    '正常分词': words('fred, barney, & pebbles'), 'camelCase': words('camelCase'), '空字符串': words(''), '含数字': words('hello123world')
  })
}

export default edgeCaseDemo
