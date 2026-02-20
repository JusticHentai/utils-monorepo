import { CSSProperties, ReactNode } from 'react'

/**
 * 基础类型
 * 组件 props 的基础约束，只保留通用属性
 */
type BaseProps = {
  children?: ReactNode // 子元素
  className?: string | string[] // 类名（支持数组）
  style?: CSSProperties // 样式
  ignoreGlobalComponentProps?: boolean // 是否忽略全局 props
}

export default BaseProps
