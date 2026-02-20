import { CSSProperties, ReactNode } from 'react'

export interface CommentProps {
  style?: CSSProperties
  className?: string | string[]
  /** 操作列表 */
  actions?: ReactNode
  /** 作者名 */
  author?: ReactNode
  /** 头像 */
  avatar?: ReactNode
  /** 评论内容 */
  content?: ReactNode
  /** 时间描述 */
  datetime?: ReactNode
  /** 靠左/靠右展示 datetime 和 actions */
  align?:
    | 'left'
    | 'right'
    | {
        datetime?: 'left' | 'right'
        actions?: 'left' | 'right'
      }
  children?: ReactNode
}
