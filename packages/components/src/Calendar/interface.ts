import { CSSProperties, ReactNode } from 'react'

export type CalendarValue = Date | string | number

export type CalendarMode = 'month' | 'year'

export interface CalendarProps {
  style?: CSSProperties
  className?: string | string[]
  /** 选中日期 */
  value?: CalendarValue
  /** 默认选中日期 */
  defaultValue?: CalendarValue
  /** 当前面板展示的日期 */
  pageShowDate?: CalendarValue
  /** 默认面板展示日期 */
  defaultPageShowDate?: CalendarValue
  /** 显示模式 */
  mode?: CalendarMode
  /** 默认显示模式 */
  defaultMode?: CalendarMode
  /** 是否面板模式（卡片式） */
  panel?: boolean
  /** 面板宽度 */
  panelWidth?: number | string
  /** 是否显示「今天」按钮 */
  panelTodayBtn?: boolean
  /** 面板操作按钮 */
  panelOperations?: ('left' | 'double-left' | 'right' | 'double-right')[]
  /** 每周起始日: 0=周日, 1=周一 */
  dayStartOfWeek?: 0 | 1
  /** 是否允许选中 */
  allowSelect?: boolean
  /** 禁用日期 */
  disabledDate?: (current: Date) => boolean
  /** 选中日期变化回调 */
  onChange?: (date: Date) => void
  /** 面板日期变化回调 */
  onPanelChange?: (date: Date) => void
  /** 自定义日期渲染 */
  dateRender?: (currentDate: Date) => ReactNode
  /** 自定义月份渲染 */
  monthRender?: (currentDate: Date) => ReactNode
  /** 日期单元格内追加内容 */
  dateInnerContent?: (currentDate: Date) => ReactNode
  /** 自定义头部渲染 */
  headerRender?: (props: {
    value: Date
    pageShowDate: Date
    mode: CalendarMode
    onChange: (date: Date) => void
    onChangePageDate: (date: Date) => void
    onChangeMode: (mode: CalendarMode) => void
  }) => ReactNode
}
