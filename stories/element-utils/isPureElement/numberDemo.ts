import { action } from 'storybook/actions'
import isPureElement from '../../../packages/element-utils/src/isPureElement'

const numberDemo = () => {
  const result = isPureElement(123)
  action('数字是纯元素')({ isPure: result, type: 'number' })
}

export default numberDemo
