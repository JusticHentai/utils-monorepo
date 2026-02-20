import { action } from 'storybook/actions'
import isUrl from '../../../packages/element-utils/src/isUrl'

const basicDemo = () => {
  const url = new URL('https://example.com/path?query=1')
  const result = isUrl(url)

  action('isUrl 检测 URL 实例')({
    input: url.toString(),
    isUrl: result,
  })
}

export default basicDemo
