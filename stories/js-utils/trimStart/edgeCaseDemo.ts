import { action } from 'storybook/actions'
import trimStart from '../../../packages/js-utils/src/trimStart'

const edgeCaseDemo = () => {
  action('trimStart - 边界情况')({
    '" abc "': trimStart(' abc '), '自定义字符': trimStart('-_-abc-_-', '_-'), '空字符串': trimStart(''), '无需trim': trimStart('abc')
  })
}

export default edgeCaseDemo
