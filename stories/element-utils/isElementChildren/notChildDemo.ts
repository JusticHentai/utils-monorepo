import { action } from 'storybook/actions'
import isElementChildren from '../../../packages/element-utils/src/isElementChildren'

const notChildDemo = () => {
  const element1 = document.createElement('div')
  const element2 = document.createElement('span')

  const result = isElementChildren(element1, element2)

  action('不是子元素')({ isChildren: result })
}

export default notChildDemo
