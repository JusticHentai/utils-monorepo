import { action } from 'storybook/actions'
import estimateBytes from '../../../packages/element-utils/src/estimateBytes'

interface PayloadExample {
  type: string
  message: string
  count: number
  self?: PayloadExample
}

const objectDemo = () => {
  const payload: PayloadExample = {
    type: 'js',
    message: 'Cannot read properties of undefined',
    count: 1,
  }

  payload.self = payload

  action('对象字节估算结果')({
    bytes: estimateBytes(payload),
    payload,
  })
}

export default objectDemo
