import { CSSProperties, ReactNode } from 'react'

export interface HSV {
  h: number
  s: number
  v: number
}

export interface RGB {
  r: number
  g: number
  b: number
}

export interface ColorPickerProps {
  className?: string | string[]
  style?: CSSProperties
  /** 默认值 */
  defaultValue?: string
  /** 颜色值（受控） */
  value?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否禁用 alpha 通道 */
  disabledAlpha?: boolean
  /** 格式 */
  format?: 'hex' | 'rgb'
  /** 尺寸 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 是否显示文本 */
  showText?: boolean
  /** 是否显示历史颜色 */
  showHistory?: boolean
  /** 历史颜色列表 */
  historyColors?: string[]
  /** 预设颜色 */
  presetColors?: string[]
  /** 触发方式 */
  trigger?: 'click' | 'hover'
  /** 弹出框挂载容器 */
  getPopupContainer?: (node: HTMLElement) => HTMLElement
  /** 颜色变化回调 */
  onChange?: (value: string) => void
  /** 弹出层显隐回调 */
  onVisibleChange?: (visible: boolean) => void
  /** 触发元素 */
  children?: ReactNode
  /** 未选择颜色时的文案 */
  unmountOnExit?: boolean
}
