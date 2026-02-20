import { action } from 'storybook/actions'
import matchPattern from '../../../packages/element-utils/src/matchPattern'

const stringDemo = () => {
  const patterns = ['api', 'cdn', 'static']

  // 测试不同的 URL
  const urls = [
    'https://api.example.com/users',
    'https://cdn.example.com/image.png',
    'https://www.example.com/page',
    'https://static.example.com/file.js',
  ]

  const results = urls.map((url) => ({
    url,
    matched: matchPattern(url, patterns),
  }))

  action('字符串匹配规则')(patterns)
  action('测试 URL 列表')(urls)
  action('匹配结果')(results)
  // 输出:
  // api.example.com -> true (包含 'api')
  // cdn.example.com -> true (包含 'cdn')
  // www.example.com -> false (不包含任何规则)
  // static.example.com -> true (包含 'static')
}

export default stringDemo
