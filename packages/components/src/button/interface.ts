import { HTMLProps, MouseEvent, ReactNode } from 'react'
import BaseProps from '../types/BaseProps'

/** 按钮类型 */
export enum BtnType {
  Primary = 'primary',
  Secondary = 'secondary',
  Dashed = 'dashed',
  Text = 'text',
  Outline = 'outline',
  Default = 'default',
}

/** 按钮尺寸 */
export enum BtnSize {
  Mini = 'mini',
  Small = 'small',
  Default = 'default',
  Large = 'large',
}

/** 按钮状态 */
export enum BtnStatus {
  Default = 'default',
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
}

/** 按钮形状 */
export enum BtnShape {
  Circle = 'circle',
  Round = 'round',
  Square = 'square',
  Default = 'default',
}

export interface ButtonProps extends BaseProps {
  // 按钮尺寸 迷你 小 大 默认
  size?: BtnSize | `${BtnSize}`
  // 按钮形状 圆形 全圆角 方形 默认 square
  shape?: BtnShape | `${BtnShape}`
  // 是否禁用
  disabled?: boolean
  // 自定义的按钮类型 主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮
  type?: BtnType | `${BtnType}`
  // 按钮原生 html 类型
  htmlType?: 'button'
  // 按钮状态 警告 危险 成功 默认
  status?: BtnStatus | `${BtnStatus}`
  // 点击回调函数
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  // 设置按钮的图标
  icon?: ReactNode
  // 只有图标，按钮宽高相等。如果指定 `icon` 且没有 children，`iconOnly` 默认为 true
  iconOnly?: boolean
  // 跳转链接 加了后点击会跳转
  href?: string
  // 跳转目标框架 href 存在时生效
  target?: string
  // 锚点 href 存在时生效
  anchorProps?: HTMLProps<HTMLAnchorElement>
  // 按钮是否是加载状态
  loading?: boolean
  // 当 loading 的时候不改变按钮的宽度
  loadingFixedWidth?: boolean
  // 按钮宽度随容器自适应
  long?: boolean
}
