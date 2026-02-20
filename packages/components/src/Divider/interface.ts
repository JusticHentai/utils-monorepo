import { CSSProperties, ReactNode } from 'react'

export interface DividerProps {
  children?: ReactNode
  style?: CSSProperties
  className?: string
  /** 分割线方向 horizontal | vertical */
  type?: 'horizontal' | 'vertical'
  /** 文字位置 left | right | center */
  orientation?: 'left' | 'right' | 'center'
}
