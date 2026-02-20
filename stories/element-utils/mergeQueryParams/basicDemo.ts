import { action } from 'storybook/actions'
import mergeQueryParams from '../../../packages/element-utils/src/mergeQueryParams'

const basicDemo = () => {
  const sourceUrl = 'https://source.com?a=1&b=2'
  const targetUrl = 'https://target.com/path?c=3'

  const result = mergeQueryParams(sourceUrl, targetUrl)

  action('源 URL')(sourceUrl)
  action('目标 URL')(targetUrl)
  action('合并结果')(result)
  // 结果: https://target.com/path?c=3&a=1&b=2
}

export default basicDemo
