import { CSSProperties, ReactNode } from 'react'

export type DatePickerValue = Date | string | number

export type DatePickerMode = 'date' | 'month' | 'year' | 'week' | 'quarter'

export interface ShortcutType {
  text: ReactNode
  value: () => Date | Date[]
}

export interface DisabledTimeProps {
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
}

export interface DatePickerProps {
  style?: CSSProperties
  className?: string | string[]
  disabled?: boolean
  /** 选中值 */
  value?: DatePickerValue
  /** 默认选中值 */
  defaultValue?: DatePickerValue
  /** 格式化 */
  format?: string
  /** 是否显示时间选择 */
  showTime?: boolean
  /** 时间选择器的 props */
  timepickerProps?: any
  /** 选择器模式 */
  mode?: DatePickerMode
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 占位提示 */
  placeholder?: string
  /** 弹出框位置 */
  position?: 'top' | 'bottom'
  /** 是否允许清除 */
  allowClear?: boolean
  /** 禁用日期 */
  disabledDate?: (current: Date) => boolean
  /** 每周起始日 */
  dayStartOfWeek?: 0 | 1
  /** 快捷方式 */
  shortcuts?: ShortcutType[]
  /** 是否显示快捷方式面板 */
  shortcutsPlacementLeft?: boolean
  /** 是否在隐藏后销毁 DOM */
  unmountOnExit?: boolean
  /** 额外底部 */
  extra?: ReactNode
  /** 弹出层挂载节点 */
  getPopupContainer?: (node: HTMLElement) => Element
  /** 自定义触发元素 */
  triggerElement?: ReactNode
  /** 选中回调 */
  onChange?: (dateString: string, date: Date) => void
  /** 面板选择回调 */
  onSelect?: (dateString: string, date: Date) => void
  /** 确定回调 */
  onOk?: (dateString: string, date: Date) => void
  /** 弹出层显示变化回调 */
  onVisibleChange?: (visible: boolean) => void
  /** 清除回调 */
  onClear?: () => void
  /** 自定义日期渲染 */
  dateRender?: (currentDate: Date) => ReactNode
  /** 面板日期变化回调 */
  onPickerValueChange?: (dateString: string, value: Date) => void
}

export interface RangePickerProps extends Omit<
  DatePickerProps,
  'value' | 'defaultValue' | 'onChange' | 'onSelect' | 'onOk' | 'placeholder'
> {
  value?: DatePickerValue[]
  defaultValue?: DatePickerValue[]
  placeholder?: string[]
  onChange?: (dateString: string[], date: Date[]) => void
  onSelect?: (dateString: string[], date: Date[]) => void
  onOk?: (dateString: string[], date: Date[]) => void
  /** 分隔符 */
  separator?: ReactNode
}
