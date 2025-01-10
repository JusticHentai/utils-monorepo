import React, { ReactNode } from 'react'
import isPureElement from './isPureElement'

/**
 * 合并子元素中的纯元素
 * 并给最终 string 类型加上 span
 * @param children
 */
export default function mergeChildren(children?: ReactNode) {
  const childrenList: ReactNode[] = []

  let isPrevChildPure = false

  React.Children.forEach(children, (child) => {
    const isCurrentChildPure = isPureElement(child)

    if (isCurrentChildPure && isPrevChildPure) {
      const lastIndex = childrenList.length - 1
      const lastChild = childrenList[lastIndex]

      childrenList[lastIndex] = `${lastChild}${child}`
    } else {
      childrenList.push(child)
    }

    isPrevChildPure = isCurrentChildPure
  })

  return React.Children.map(childrenList, (child) =>
    typeof child === 'string' ? <span>{child}</span> : child
  )
}
