import { CSSProperties, ReactNode } from 'react'

export interface ResultProps {
  style?: CSSProperties
  className?: string
  /** 状态 */
  status?:
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | '404'
    | '403'
    | '500'
    | null
  /** 标题 */
  title?: ReactNode
  /** 副标题 */
  subTitle?: ReactNode
  /** 自定义图标 */
  icon?: ReactNode
  /** 操作区域 */
  extra?: ReactNode
  children?: ReactNode
}
