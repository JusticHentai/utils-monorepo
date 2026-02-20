import { action } from 'storybook/actions'
import formatNumber from '../../../packages/js-utils/src/formatNumber'

const negativeDemo = () => {
  const negativeExamples = [
    { value: -532, description: '负小数' },
    { value: -1234, description: '负千' },
    { value: -1234567, description: '负百万' },
    { value: -1234567890, description: '负十亿' },
  ]

  const results = negativeExamples.map(({ value, description }) => ({
    描述: description,
    原始值: value.toLocaleString(),
    格式化: formatNumber({ value }),
  }))

  action('负数处理演示')(results)
}

export default negativeDemo
