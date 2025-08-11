/**
 * 判断 children 是否是 element 的子元素
 * @param element 父元素
 * @param children 子元素
 * @returns 是否是子元素
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
