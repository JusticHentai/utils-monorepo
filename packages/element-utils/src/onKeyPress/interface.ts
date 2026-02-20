/** 清理函数 */
export type CleanupFn = () => void

/** 按键类型 */
export type KeyType = number | string

/** 按键判断函数 */
export type KeyPredicate = (
  event: KeyboardEvent,
) => KeyType | boolean | undefined

/** 按键过滤器 */
export type KeyFilter =
  | KeyType
  | KeyType[]
  | ((event: KeyboardEvent) => boolean)

/** 键盘事件类型 */
export type KeyboardEventType = 'keydown' | 'keyup' | 'keypress'

/** 修饰键配置 */
export interface KeyModifiers {
  /** 是否需要按住 Ctrl 键 */
  ctrl?: boolean
  /** 是否需要按住 Alt 键 */
  alt?: boolean
  /** 是否需要按住 Shift 键 */
  shift?: boolean
  /** 是否需要按住 Meta 键（Mac 上的 Command 键） */
  meta?: boolean
}

/** onKeyPress 配置选项 */
export interface OnKeyPressOptions {
  /** 键盘事件类型，默认 'keydown' */
  type?: KeyboardEventType
  /** 事件目标，默认 window */
  target?: EventTarget
  /** 修饰键配置 */
  modifiers?: KeyModifiers
}
