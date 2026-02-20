import { action } from 'storybook/actions'
import matchPattern from '../../../packages/element-utils/src/matchPattern'

const regexDemo = () => {
  // 混合使用字符串和正则表达式
  const patterns = [
    'localhost', // 字符串匹配
    /^https:\/\/api\./, // 以 https://api. 开头
    /\.(jpg|png|gif)$/, // 以图片扩展名结尾
  ]

  const urls = [
    'http://localhost:3000/api',
    'https://api.example.com/data',
    'https://cdn.example.com/image.png',
    'https://www.example.com/page.html',
  ]

  const results = urls.map((url) => ({
    url,
    matched: matchPattern(url, patterns),
  }))

  action('混合匹配规则')([
    'localhost',
    '/^https:\\/\\/api\\./',
    '/\\.(jpg|png|gif)$/',
  ])
  action('测试 URL 列表')(urls)
  action('匹配结果')(results)
  // 输出:
  // localhost:3000 -> true (包含 'localhost')
  // api.example.com -> true (匹配正则 ^https://api.)
  // image.png -> true (匹配正则 .(jpg|png|gif)$)
  // page.html -> false (不匹配任何规则)
}

export default regexDemo
