import { createElement } from 'react'
import { action } from 'storybook/actions'
import isPureElement from '../../../packages/element-utils/src/isPureElement'

const reactElementDemo = () => {
  const element = createElement('div', null, 'Hello')
  const result = isPureElement(element)
  action('React 元素不是纯元素')({ isPure: result, type: 'ReactElement' })
}

export default reactElementDemo
