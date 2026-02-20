import { action } from 'storybook/actions'
import parseUrl from '../../../packages/element-utils/src/parseUrl'

const parseUrlDemo = () => {
  const url = 'https://example.com:8080/path/to/page?name=test&id=123#section'

  const result = parseUrl(url)

  action('原始 URL')(url)
  action('解析结果')(result)
}

export default parseUrlDemo
