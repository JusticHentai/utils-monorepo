import { action } from 'storybook/actions'
import isElementChildren from '../../../packages/element-utils/src/isElementChildren'

const basicDemo = () => {
  const parent = document.body
  const child = document.createElement('div')
  parent.appendChild(child)

  const result = isElementChildren(parent, child)

  parent.removeChild(child)

  action('是子元素')({ isChildren: result })
}

export default basicDemo
