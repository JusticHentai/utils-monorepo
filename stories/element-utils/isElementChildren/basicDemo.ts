import isElementChildren from '../../../packages/element-utils/src/isElementChildren'

const basicDemo = () => {
  const parent = document.body
  const child = document.createElement('div')
  parent.appendChild(child)

  const result = isElementChildren(parent, child)

  parent.removeChild(child)

  return { isChildren: result }
}

export default basicDemo
