import { action } from 'storybook/actions'
import formatNumber from '../../../packages/js-utils/src/formatNumber'

const customDemo = () => {
  const value = 1234567

  // 不同小数位配置
  const decimalExamples = [
    { decimals: 0, result: formatNumber({ value, decimals: 0 }) },
    { decimals: 1, result: formatNumber({ value, decimals: 1 }) },
    { decimals: 2, result: formatNumber({ value, decimals: 2 }) },
  ]

  // 是否去除尾零
  const trimZeroExamples = [
    {
      value: 1000000,
      trimZeros: true,
      result: formatNumber({ value: 1000000, trimZeros: true }),
    },
    {
      value: 1000000,
      trimZeros: false,
      result: formatNumber({ value: 1000000, trimZeros: false }),
    },
  ]

  action('小数位配置')({
    原始值: value.toLocaleString(),
    结果: decimalExamples,
  })

  action('尾零处理配置')({
    结果: trimZeroExamples,
  })
}

export default customDemo
