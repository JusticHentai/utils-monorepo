import { action } from 'storybook/actions'
import {
  getQueryParam,
  getQueryParams,
  setQueryParam,
  removeQueryParam,
} from '../../../packages/element-utils/src/parseUrl'

const queryParamDemo = () => {
  const url = 'https://example.com/page?name=test&tags=a&tags=b&id=123'

  action('原始 URL')(url)

  // 获取单个参数
  const name = getQueryParam(url, 'name')
  action('getQueryParam(url, "name")')(name)

  // 获取所有同名参数
  const tags = getQueryParams(url, 'tags')
  action('getQueryParams(url, "tags")')(tags)

  // 设置参数
  const newUrl = setQueryParam(url, 'page', 1)
  action('setQueryParam(url, "page", 1)')(newUrl)

  // 删除参数
  const removedUrl = removeQueryParam(url, 'id')
  action('removeQueryParam(url, "id")')(removedUrl)
}

export default queryParamDemo
