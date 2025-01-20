import { isPureElement } from '@justichentai/element-utils'
import React, { ReactNode } from 'react'

/**
 * 合并子元素中的纯元素
 * 并给最终 string 类型加上 span
 */
const mergeChildren = (children?: ReactNode) => {
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

export default mergeChildren
