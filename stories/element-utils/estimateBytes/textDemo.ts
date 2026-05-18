import { action } from 'storybook/actions'
import estimateBytes from '../../../packages/element-utils/src/estimateBytes'

const textDemo = () => {
  const values = ['hello', '中文', '😀', 'hello 中文 😀']

  const results = values.map((value) => ({
    value,
    length: value.length,
    bytes: estimateBytes(value),
  }))

  action('文本字节估算结果')(results)
}

export default textDemo
