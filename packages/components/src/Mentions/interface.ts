import { CSSProperties, ReactNode } from 'react'
import { TextAreaProps } from '../Input/interface'

export interface MentionsProps extends Omit<
  TextAreaProps,
  'prefix' | 'maxLength' | 'className'
> {
  className?: string | string[]
  style?: CSSProperties
  /** 输入框的值 */
  value?: string
  /** 输入框默认值 */
  defaultValue?: string
  /** 下拉框可选项 */
  options?: (
    | string
    | number
    | { label: ReactNode; value: string | number; disabled?: boolean }
  )[]
  /** 触发关键字 */
  prefix?: string | string[]
  /** 选中项前后分隔符 */
  split?: string
  /** 弹出框是否与输入框对齐 */
  alignTextarea?: boolean
  /** 下拉框弹出位置 */
  position?: 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'
  /** 无数据时显示的内容 */
  notFoundContent?: ReactNode
  /** 弹出框挂载容器 */
  getPopupContainer?: (node: HTMLElement) => HTMLElement
  /** 自定义过滤逻辑 */
  filterOption?:
    | false
    | ((
        inputValue: string,
        option: { label: ReactNode; value: string | number }
      ) => boolean)
  /** 输入改变时的回调 */
  onChange?: (value: string) => void
  /** 搜索时的回调 */
  onSearch?: (text: string, prefix: string) => void
  /** 聚焦时的回调 */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  /** 失焦时的回调 */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}
