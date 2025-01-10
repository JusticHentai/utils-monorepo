import { CSSProperties, ReactNode } from 'react'

/**
 * 基础类型
 */
export default interface BaseProps {
  style?: CSSProperties // css 类型
  className?: string // 类名
  children?: ReactNode // 子元素
  ignoreGlobalComponentProps?: boolean // 是否忽略全局 props
}
