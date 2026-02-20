import { action } from 'storybook/actions'
import isUrl from '../../../packages/element-utils/src/isUrl'

const stringDemo = () => {
  const testCases = [
    { input: 'https://example.com', type: 'string' },
    { input: 123, type: 'number' },
    { input: null, type: 'null' },
    { input: { url: 'https://example.com' }, type: 'object' },
  ]

  const results = testCases.map(({ input, type }) => ({
    type,
    isUrl: isUrl(input),
  }))

  action('isUrl 检测非 URL 类型')(results)
}

export default stringDemo
