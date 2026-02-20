import { action } from 'storybook/actions'
import isDate from '../../../packages/js-utils/src/isDate'

const isDateDemo = () => {
  action('isDate 演示')({
    'new Date()': isDate(new Date()),
    '"2024-01-01"': isDate('2024-01-01'),
    'Date.now()': isDate(Date.now()),
    'null': isDate(null),
  })
}

export default isDateDemo
