import { CSSProperties, ReactNode } from 'react'

export interface RadioProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 是否选中 */
  checked?: boolean
  /** 默认是否选中 */
  defaultChecked?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 值(在 Group 中使用) */
  value?: string | number
  /** 变化回调 */
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface RadioGroupProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 选中的值 */
  value?: string | number
  /** 默认选中的值 */
  defaultValue?: string | number
  /** 选项列表 */
  options?: (
    | string
    | number
    | { label: ReactNode; value: string | number; disabled?: boolean }
  )[]
  /** 方向 */
  direction?: 'horizontal' | 'vertical'
  /** 类型 */
  type?: 'radio' | 'button'
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 是否禁用 */
  disabled?: boolean
  /** 变化回调 */
  onChange?: (value: string | number) => void
}
