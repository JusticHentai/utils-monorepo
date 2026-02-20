import { CSSProperties, ReactNode } from 'react'

export interface VerificationCodeProps {
  className?: string | string[]
  style?: CSSProperties
  /** 默认值 */
  defaultValue?: string
  /** 验证码输入框的值，受控模式 */
  value?: string
  /** 验证码的长度 */
  length?: number
  /** 尺寸 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 是否是密码模式 */
  masked?: boolean
  /** 禁用 */
  disabled?: boolean
  /** 只读 */
  readOnly?: boolean
  /** 状态 */
  status?: 'error'
  /** 校验函数 */
  validate?: (data: {
    inputValue: string
    value: string
    index: number
  }) => boolean | string
  /** 分隔符 */
  separator?: (data: { index: number; character: string }) => ReactNode
  /** 输入值改变时触发的回调 */
  onChange?: (value: string) => void
  /** 输入框都被填充后触发的回调 */
  onFinish?: (value: string) => void
}
