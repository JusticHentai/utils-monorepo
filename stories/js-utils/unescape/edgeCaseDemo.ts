import { action } from 'storybook/actions'
import unescape from '../../../packages/js-utils/src/unescape'

const edgeCaseDemo = () => {
  action('unescape - 边界情况')({
    'HTML实体': unescape('fred, barney, &amp; pebbles'), '无需转义': unescape('hello'), '空字符串': unescape('')
  })
}

export default edgeCaseDemo
