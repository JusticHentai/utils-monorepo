import { action } from 'storybook/actions'
import formatNumber from '../../../packages/js-utils/src/formatNumber'

const basicDemo = () => {
  const examples = [
    { value: 532, expected: '532' },
    { value: 1234, expected: '1.2K' },
    { value: 9999, expected: '10K' },
    { value: 12345, expected: '12.3K' },
    { value: 999999, expected: '1M' },
  ]

  const results = examples.map(({ value, expected }) => ({
    input: value,
    output: formatNumber({ value }),
    expected,
  }))

  action('基础用法示例')(results)
}

export default basicDemo
