import { action } from 'storybook/actions'
import isDate from '../../../packages/js-utils/src/isDate'

const edgeCaseDemo = () => {
  const results = {
    'new Date()': isDate(new Date()),
    '时间戳': isDate(Date.now()),
    '日期字符串': isDate('2024-01-01'),
    'null': isDate(null),
  }

  action('isDate - 边界情况')(results)
}

export default edgeCaseDemo
