import { action } from 'storybook/actions'
import trimEnd from '../../../packages/js-utils/src/trimEnd'

const trimEndDemo = () => {
  action('trimEnd 演示')({
    '去除右空白': trimEnd('  abc  '),
    '去除指定字符': trimEnd('-_-abc-_-', '_-'),
  })
}

export default trimEndDemo
