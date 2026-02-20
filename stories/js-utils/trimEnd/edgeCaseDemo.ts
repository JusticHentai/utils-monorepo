import { action } from 'storybook/actions'
import trimEnd from '../../../packages/js-utils/src/trimEnd'

const edgeCaseDemo = () => {
  action('trimEnd - 边界情况')({
    '" abc "': trimEnd(' abc '), '自定义字符': trimEnd('-_-abc-_-', '_-'), '空字符串': trimEnd(''), '无需trim': trimEnd('abc')
  })
}

export default edgeCaseDemo
