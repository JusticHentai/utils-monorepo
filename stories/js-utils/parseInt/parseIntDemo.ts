import { action } from 'storybook/actions'
import parseIntFunc from '../../../packages/js-utils/src/parseInt'

const parseIntDemo = () => {
  // 默认基数10 (lodash: parseInt('10') => 10)
  action('parseInt - 默认十进制')(parseIntFunc('10'))

  // 不同基数 '10' (lodash: parseInt('10', radix) => radix)
  action('parseInt - 基数2')(parseIntFunc('10', 2))
  action('parseInt - 基数8')(parseIntFunc('10', 8))
  action('parseInt - 基数16')(parseIntFunc('10', 16))

  // 前导零字符串 (lodash: parseInt('08') => 8)
  action('parseInt - 前导零08')(parseIntFunc('08'))

  // 十六进制自动检测 (lodash: parseInt('0x20') => 32)
  action('parseInt - 0x20 十六进制')(parseIntFunc('0x20'))
  action('parseInt - 0X20 十六进制')(parseIntFunc('0X20'))

  // 前导空白 (lodash: parseInt('  10') => 10)
  action('parseInt - 前导空白')(parseIntFunc('  42  '))

  // 作为 map 迭代器不受索引影响 (lodash: ['6','08','10'].map(parseInt) => [6,8,10])
  const result = ['6', '08', '10'].map(parseIntFunc)
  action('parseInt - map迭代器')(result)

  // 对比原生 parseInt 的 map 问题
  const nativeResult = ['6', '08', '10'].map(Number.parseInt)
  action('parseInt - 原生map对比(有问题)')(nativeResult)
}

export default parseIntDemo