import { action } from 'storybook/actions'
import formatNumber from '../../../packages/js-utils/src/formatNumber'

const magnitudeDemo = () => {
  const magnitudes = [
    { label: '百', value: 532, description: '< 1000，不缩写' },
    { label: '千 (K)', value: 1500, description: '1K = 1,000' },
    { label: '万', value: 15000, description: '15K = 15,000' },
    { label: '十万', value: 150000, description: '150K = 150,000' },
    { label: '百万 (M)', value: 1500000, description: '1M = 1,000,000' },
    { label: '千万', value: 15000000, description: '15M = 15,000,000' },
    { label: '亿', value: 150000000, description: '150M = 150,000,000' },
    { label: '十亿 (B)', value: 1500000000, description: '1B = 1,000,000,000' },
    { label: '百亿', value: 15000000000, description: '15B = 15,000,000,000' },
    {
      label: '万亿 (T)',
      value: 1500000000000,
      description: '1T = 1,000,000,000,000',
    },
  ]

  const results = magnitudes.map(({ label, value, description }) => ({
    数量级: label,
    原始值: value.toLocaleString(),
    格式化: formatNumber({ value }),
    说明: description,
  }))

  action('各数量级演示')(results)
}

export default magnitudeDemo
