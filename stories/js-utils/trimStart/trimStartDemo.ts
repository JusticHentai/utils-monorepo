import { action } from 'storybook/actions'
import trimStart from '../../../packages/js-utils/src/trimStart'

const trimStartDemo = () => {
  action('trimStart 演示')({
    '去除左空白': trimStart('  abc  '),
    '去除指定字符': trimStart('-_-abc-_-', '_-'),
  })
}

export default trimStartDemo
