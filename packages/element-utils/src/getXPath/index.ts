/**
 * 获取元素的 XPath
 *
 * XPath 是一种在 DOM 树中定位元素的路径表达式，
 * 常用于前端监控、元素定位、自动化测试等场景。
 *
 * @param element - 目标元素
 * @returns XPath 字符串
 */
const getXPath = (element: Element): string => {
  if (!element) return ''

  // 如果元素有 id，直接返回 id 选择器（最简路径）
  if (element.id) {
    return `//*[@id="${element.id}"]`
  }

  // body 元素返回固定路径
  if (element === document.body) {
    return '/html/body'
  }

  let ix = 0
  const siblings = element.parentNode?.children || []

  // 遍历同级元素，计算当前元素在同名标签中的索引
  for (let i = 0; i < siblings.length; i++) {
    const sibling = siblings[i]
    if (sibling === element) {
      // 递归获取父元素路径，拼接当前元素路径
      const parentPath = element.parentElement
        ? getXPath(element.parentElement)
        : ''
      return `${parentPath}/${element.tagName.toLowerCase()}[${ix + 1}]`
    }
    if (sibling.tagName === element.tagName) {
      ix++
    }
  }

  return ''
}

export default getXPath
