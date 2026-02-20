import { action } from 'storybook/actions'
import { buildUrl } from '../../../packages/element-utils/src/parseUrl'

const buildUrlDemo = () => {
  const options = {
    baseUrl: 'https://example.com',
    pathname: '/api/users',
    pathSegments: ['123', 'profile'],
    query: { name: 'test', tags: ['a', 'b'] },
    hash: 'section',
  }

  const result = buildUrl(options)

  action('构建配置')(options)
  action('构建结果')(result)
}

export default buildUrlDemo
