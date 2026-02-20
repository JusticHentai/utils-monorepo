import { action } from 'storybook/actions'
import { isValidUrl } from '../../../packages/element-utils/src/parseUrl'

const isValidUrlDemo = () => {
  const validUrl = 'https://example.com/path?query=1'
  const invalidUrl = 'not-a-valid-url'

  action('验证有效 URL')(validUrl)
  action('isValidUrl 结果')(isValidUrl(validUrl))

  action('验证无效 URL')(invalidUrl)
  action('isValidUrl 结果')(isValidUrl(invalidUrl))
}

export default isValidUrlDemo
