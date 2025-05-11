import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

/**
 * 基础类型
 */
type BaseProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  'className' | 'ref'
> & {
  children?: ReactNode // 子元素
  className?: string | string[] // 类名
  ignoreGlobalComponentProps?: boolean // 是否忽略全局 props
}

export default BaseProps
