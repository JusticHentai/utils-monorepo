import { action } from 'storybook/actions'
import isHeaders from '../../../packages/element-utils/src/isHeaders'

const objectDemo = () => {
  const testCases = [
    { input: { 'Content-Type': 'application/json' }, type: 'plain object' },
    { input: [['Content-Type', 'application/json']], type: 'array' },
    { input: 'Content-Type: application/json', type: 'string' },
    { input: null, type: 'null' },
  ]

  const results = testCases.map(({ input, type }) => ({
    type,
    isHeaders: isHeaders(input),
  }))

  action('isHeaders 检测非 Headers 类型')(results)
}

export default objectDemo
