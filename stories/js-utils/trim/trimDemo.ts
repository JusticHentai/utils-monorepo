import { action } from 'storybook/actions'
import trim from '../../../packages/js-utils/src/trim'
import { trimStart, trimEnd } from '../../../packages/js-utils/src/trim'

const trimDemo = () => {
  action('trim - 默认空白')(trim('  hello  '))
  action('trim - 自定义字符')(trim('-_-hello-_-', '_-'))
  action('trimStart - 仅开头')(trimStart('  hello  '))
  action('trimStart - 自定义')(trimStart('-_-hello-_-', '_-'))
  action('trimEnd - 仅结尾')(trimEnd('  hello  '))
  action('trimEnd - 自定义')(trimEnd('-_-hello-_-', '_-'))
}

export default trimDemo
