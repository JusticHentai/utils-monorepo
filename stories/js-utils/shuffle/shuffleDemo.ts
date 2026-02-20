import { action } from 'storybook/actions'
import shuffle from '../../../packages/js-utils/src/shuffle'

const shuffleDemo = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  // 基本洗牌 (lodash: shuffle(arr) !== arr, sort same)
  const s1 = shuffle(arr)
  action('shuffle - 第一次')(s1)
  action('shuffle - 第二次')(shuffle(arr))

  // 验证返回新数组（不修改原数组）
  action('shuffle - 不同引用')(s1 !== arr)
  action('shuffle - 原数组不变')(arr)

  // 包含相同元素 (lodash: shuffle(arr).sort() => arr)
  action('shuffle - 排序后相同')(shuffle(arr).sort((a, b) => a - b))

  // 小数组洗牌产生不同排列
  const results = Array.from({ length: 5 }, () => shuffle([1, 2]).join(','))
  action('shuffle - 小数组多次')(results)

  // 空数组
  action('shuffle - 空数组')(shuffle([]))
}

export default shuffleDemo