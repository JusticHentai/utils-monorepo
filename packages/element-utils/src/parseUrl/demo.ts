import parseUrl, {
  buildUrl,
  getQueryParam,
  getQueryParams,
  setQueryParam,
  removeQueryParam,
  isValidUrl,
} from '.'

// 解析 URL
const parsed = parseUrl(
  'https://user:pass@example.com:8080/path/to/page?name=张三&age=25&tags=a&tags=b#section'
)
console.log('解析结果:', parsed)
// {
//   href: 'https://user:pass@example.com:8080/path/to/page?name=%E5%BC%A0%E4%B8%89&age=25&tags=a&tags=b#section',
//   protocol: 'https',
//   hostname: 'example.com',
//   port: '8080',
//   host: 'example.com:8080',
//   pathname: '/path/to/page',
//   pathSegments: ['path', 'to', 'page'],
//   search: '?name=%E5%BC%A0%E4%B8%89&age=25&tags=a&tags=b',
//   query: { name: '张三', age: '25', tags: ['a', 'b'] },
//   hash: '#section',
//   hashValue: 'section',
//   username: 'user',
//   password: 'pass',
//   origin: 'https://example.com:8080'
// }

// 构建 URL
const builtUrl = buildUrl({
  baseUrl: 'https://example.com',
  pathname: '/api',
  pathSegments: ['users', '123'],
  query: { page: 1, limit: 10, tags: ['a', 'b'] },
  hash: 'top',
})
console.log('构建的 URL:', builtUrl)
// https://example.com/api/users/123?page=1&limit=10&tags=a&tags=b#top

// 获取单个查询参数
const name = getQueryParam(
  'https://example.com?name=张三&age=25',
  'name'
)
console.log('name:', name) // 张三

// 获取所有同名查询参数
const tags = getQueryParams(
  'https://example.com?tags=a&tags=b&tags=c',
  'tags'
)
console.log('tags:', tags) // ['a', 'b', 'c']

// 设置查询参数
const newUrl = setQueryParam(
  'https://example.com?name=张三',
  'age',
  25
)
console.log('新 URL:', newUrl) // https://example.com/?name=%E5%BC%A0%E4%B8%89&age=25

// 删除查询参数
const urlWithoutAge = removeQueryParam(
  'https://example.com?name=张三&age=25',
  'age'
)
console.log('删除 age 后:', urlWithoutAge) // https://example.com/?name=%E5%BC%A0%E4%B8%89

// 验证 URL
console.log('是否有效:', isValidUrl('https://example.com')) // true
console.log('是否有效:', isValidUrl('not a url')) // false
