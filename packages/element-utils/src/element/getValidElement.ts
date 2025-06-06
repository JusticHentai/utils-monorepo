import { Children, isValidElement, ReactNode } from 'react'

/**
 * 过滤掉无效的元素 确保只有 react 组件，比如 字符串 数字 空值 布尔值 等
 * @param element react 组件如 children
 * @returns
 */
const getValidElement = (element: ReactNode[]): ReactNode[] => {
  return Children.toArray(element).filter(isValidElement)
}

export default getValidElement
