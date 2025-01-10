/**
 * children 是是否是 element 的子元素
 */
const isElementChildren = (element: Element, children: Element): boolean => {
  if (!element || !children) {
    return false
  }

  let parentNode = null

  parentNode = children.parentNode

  while (parentNode) {
    if (element === parentNode) {
      return true
    }

    parentNode = element.parentNode
  }

  return false
}

export default isElementChildren
