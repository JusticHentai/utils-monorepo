import { action } from 'storybook/actions'
import mergeQueryParams from '../../../packages/element-utils/src/mergeQueryParams'

const overrideDemo = () => {
  const sourceUrl = 'https://source.com?a=new&b=2'
  const targetUrl = 'https://target.com/path?a=old&c=3'

  const result = mergeQueryParams(sourceUrl, targetUrl)

  action('源 URL')(sourceUrl)
  action('目标 URL')(targetUrl)
  action('合并结果（a 被覆盖）')(result)
  // 结果: https://target.com/path?a=new&c=3&b=2
}

export default overrideDemo
