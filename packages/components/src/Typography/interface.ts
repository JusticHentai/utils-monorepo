import { CSSProperties, ReactNode } from 'react'

export interface TypographyProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface TypographyTitleProps extends TypographyProps {
  /** 标题级别 1-6 */
  heading?: 1 | 2 | 3 | 4 | 5 | 6
  /** 是否加粗 */
  bold?: boolean
}

export interface TypographyTextProps extends TypographyProps {
  /** 文本类型 */
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** 是否加粗 */
  bold?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 标记样式 */
  mark?: boolean | { color: string }
  /** 是否下划线 */
  underline?: boolean
  /** 是否删除线 */
  delete?: boolean
  /** 是否代码样式 */
  code?: boolean
}

export interface TypographyParagraphProps extends TypographyProps {
  /** 文本类型 */
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** 是否加粗 */
  bold?: boolean
  /** 段落间距 */
  spacing?: 'default' | 'close'
}
