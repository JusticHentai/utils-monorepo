import { action } from 'storybook/actions'
import toLower from '../../../packages/js-utils/src/toLower'

const edgeCaseDemo = () => {
  action('toLower - 边界情况')({
    'Hello WORLD': toLower('Hello WORLD'), '空字符串': toLower(''), '全大写': toLower('ABC'), '含数字': toLower('A1B2')
  })
}

export default edgeCaseDemo
