import { action } from 'storybook/actions'
import deburr from '../../../packages/js-utils/src/deburr'

const extendedDemo = () => {
  // 拉丁扩展 A 字符
  action('deburr - 拉丁扩展字符')({
    'Łódź (波兰城市)': deburr('Łódź'),
    'Zürich (瑞士城市)': deburr('Zürich'),
    'Ğüneş (土耳其语)': deburr('Ğüneş'),
    'Česká (捷克语)': deburr('Česká'),
    'Ōsaka (日本罗马字)': deburr('Ōsaka'),
  })

  // 实际应用：搜索标准化
  const cities = ['São Paulo', 'Zürich', 'Malmö', 'Kraków']
  const normalized = cities.map(city => ({
    original: city,
    normalized: deburr(city),
  }))

  action('deburr - 搜索标准化应用')({
    城市列表: normalized,
    说明: '去除变音符号后方便进行不敏感搜索',
  })
}

export default extendedDemo
