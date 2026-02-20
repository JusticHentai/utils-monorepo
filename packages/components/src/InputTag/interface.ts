import { CSSProperties, ReactNode } from 'react'

export type ObjectValueType = {
  value?: string
  label?: ReactNode
  closable?: boolean
}

export type ValueChangeReason = 'add' | 'remove' | 'clear' | 'sort'

export interface InputTagProps<T extends ObjectValueType | string = string> {
  className?: string | string[]
  style?: CSSProperties
  /** 尺寸 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 输入框提示 */
  placeholder?: string
  /** 是否错误状态（已废弃） */
  error?: boolean
  /** 状态 */
  status?: 'error' | 'warning'
  /** 是否禁用 */
  disabled?: boolean
  /** 自动聚焦 */
  autoFocus?: boolean
  /** 只读 */
  readOnly?: boolean
  /** 是否允许清除 */
  allowClear?: boolean
  /** 是否显示动画 */
  animation?: boolean
  /** 失焦时自动保存 */
  saveOnBlur?: boolean
  /** 设置传入和回调值的格式 */
  labelInValue?: boolean
  /** 是否可通过拖拽排序 */
  dragToSort?: boolean
  /** 是否禁用输入框 */
  disableInput?: boolean
  /** 默认值 */
  defaultValue?: T[]
  /** 控件值 */
  value?: T[]
  /** 控件的输入框值 */
  inputValue?: string
  /** 默认输入框值 */
  defaultInputValue?: string
  /** 最多显示的标签数量 */
  maxTagCount?:
    | number
    | 'responsive'
    | {
        count: number | 'responsive'
        render?: (invisibleTagCount: number) => ReactNode
      }
  /** 前缀 */
  prefix?: ReactNode
  /** 后缀 */
  suffix?: ReactNode
  /** 前附加 */
  addBefore?: ReactNode
  /** 后附加 */
  addAfter?: ReactNode
  /** 自定义图标 */
  icon?: { removeIcon?: ReactNode; clearIcon?: ReactNode }
  /** 分词分隔符 */
  tokenSeparators?: string[]
  /** 校验函数 */
  validate?: (inputValue: string, values: T[]) => boolean | Promise<boolean>
  /** 自定义标签渲染 */
  renderTag?: (
    props: {
      value: T
      label: ReactNode
      closable: boolean
      onClose: (e: React.MouseEvent) => void
    },
    index: number,
    values: ObjectValueType[]
  ) => ReactNode
  /** 标签类名 */
  tagClassName?: string | string[]
  /** 删除标签时的回调 */
  onRemove?: (value: T, index: number, e: React.MouseEvent) => void
  /** 值改变时的回调 */
  onChange?: (value: T[], reason: ValueChangeReason) => void
  /** 失焦时的回调 */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  /** 聚焦时的回调 */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  /** 按下 Enter 键时的回调 */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** 输入框值改变时的回调 */
  onInputChange?: (
    inputValue: string,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => void
  /** 键盘事件回调 */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** 粘贴事件回调 */
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void
  /** 清除时的回调 */
  onClear?: () => void
  /** 点击时的回调 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
