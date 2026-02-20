import { CSSProperties, ReactNode } from 'react'

export type TimePickerValue = Date | string | number

export interface DisabledTimeProps {
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
}

export interface TimePickerProps {
  style?: CSSProperties
  className?: string | string[]
  disabled?: boolean
  /** 选中值 */
  value?: TimePickerValue
  /** 默认值 */
  defaultValue?: TimePickerValue
  /** 格式化，默认 'HH:mm:ss' */
  format?: string
  /** 是否使用12小时制 */
  use12Hours?: boolean
  /** 步长 */
  step?: { hour?: number; minute?: number; second?: number }
  /** 禁用小时 */
  disabledHours?: () => number[]
  /** 禁用分钟 */
  disabledMinutes?: (selectedHour: number) => number[]
  /** 禁用秒 */
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
  /** 隐藏禁用选项 */
  hideDisabledOptions?: boolean
  /** 弹出框位置 */
  position?: 'top' | 'bottom'
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 占位提示 */
  placeholder?: string
  /** 允许清除 */
  allowClear?: boolean
  /** 弹出层样式 */
  popupStyle?: CSSProperties
  /** 是否显示此刻按钮 */
  showNowBtn?: boolean
  /** 选中变化回调 */
  onChange?: (timeString: string, date: Date) => void
  /** 面板选择回调 */
  onSelect?: (timeString: string, date: Date) => void
  /** 弹出层显示变化回调 */
  onVisibleChange?: (visible: boolean) => void
  /** 弹出层挂载节点 */
  getPopupContainer?: (node: HTMLElement) => Element
  /** 自定义触发元素 */
  triggerElement?: ReactNode
  /** 额外底部内容 */
  extra?: ReactNode
  /** 不需要确认直接生效 */
  disableConfirm?: boolean
  /** 是否在隐藏后销毁 DOM */
  unmountOnExit?: boolean
}

export interface RangePickerProps extends Omit<
  TimePickerProps,
  'value' | 'defaultValue' | 'onChange' | 'onSelect' | 'placeholder'
> {
  value?: TimePickerValue[]
  defaultValue?: TimePickerValue[]
  onChange?: (timeString: string[], date: Date[]) => void
  onSelect?: (timeString: string[], date: Date[]) => void
  order?: boolean
  placeholder?: string[]
}
