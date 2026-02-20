import { action } from 'storybook/actions'
import isPureElement from '../../../packages/element-utils/src/isPureElement'

const stringDemo = () => {
  const result = isPureElement('Hello World')
  action('字符串是纯元素')({ isPure: result, type: 'string' })
}

export default stringDemo
