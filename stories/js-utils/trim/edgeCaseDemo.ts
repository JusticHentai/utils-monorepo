import { action } from 'storybook/actions'
import trim from '../../../packages/js-utils/src/trim'

const edgeCaseDemo = () => {
  action('trim - 边界情况')({
    '" abc "': trim(' abc '), '自定义字符': trim('-_-abc-_-', '_-'), '空字符串': trim(''), '无需trim': trim('abc')
  })
}

export default edgeCaseDemo
