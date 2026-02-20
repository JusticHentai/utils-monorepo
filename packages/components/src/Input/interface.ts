import {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react'

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'prefix' | 'onChange' | 'className'
> {
  style?: CSSProperties
  className?: string
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 是否允许清除 */
  allowClear?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readOnly?: boolean
  /** 是否错误状态 */
  error?: boolean
  /** 状态 */
  status?: 'error' | 'warning'
  /** 前缀 */
  prefix?: ReactNode
  /** 后缀 */
  suffix?: ReactNode
  /** 前置标签 */
  addBefore?: ReactNode
  /** 后置标签 */
  addAfter?: ReactNode
  /** 默认值 */
  defaultValue?: string
  /** 值 */
  value?: string
  /** 变化回调 */
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void
  /** 按下Enter回调 */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** 清除回调 */
  onClear?: () => void
  /** 最大长度 */
  maxLength?: number
  /** 是否显示字数统计 */
  showWordLimit?: boolean
}

export interface TextAreaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange' | 'className'
> {
  style?: CSSProperties
  className?: string
  /** 默认值 */
  defaultValue?: string
  /** 值 */
  value?: string
  /** 变化回调 */
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void
  /** 是否禁用 */
  disabled?: boolean
  /** 最大长度 */
  maxLength?: number
  /** 是否显示字数统计 */
  showWordLimit?: boolean
  /** 是否允许清除 */
  allowClear?: boolean
  /** 是否自动调整高度 */
  autoSize?: boolean | { minRows?: number; maxRows?: number }
  /** 状态 */
  status?: 'error' | 'warning'
}

export interface InputSearchProps extends InputProps {
  /** 搜索图标 */
  searchButton?: ReactNode | boolean
  /** 搜索回调 */
  onSearch?: (value: string) => void
  /** 是否加载中 */
  loading?: boolean
}

export interface InputPasswordProps extends InputProps {
  /** 默认是否可见 */
  defaultVisibility?: boolean
  /** 受控是否可见 */
  visibility?: boolean
  /** 切换密码可见状态 */
  onVisibilityChange?: (visibility: boolean) => void
  /** 可见时的图标 */
  visibilityToggle?: boolean
}

export interface InputGroupProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 是否紧凑模式 */
  compact?: boolean
}
