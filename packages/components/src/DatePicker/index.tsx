import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { cs } from '../_util'
import {
  addDate,
  formatDate,
  getDaysInMonth,
  getFirstDayOfMonth,
  getWeekDayNames,
  isAfter,
  isSameDay,
  isSameMonth,
  parseDate,
  startOfMonth,
} from '../_util/date'
import { useMergeValue } from '../_util/hooks'
import { ConfigContext } from '../ConfigProvider/context'
import Input from '../Input'
import Trigger from '../Trigger'
import {
  DatePickerMode,
  DatePickerProps,
  DatePickerValue,
  RangePickerProps,
  ShortcutType,
} from './interface'

function toDateSafe(
  val: DatePickerValue | undefined,
  format?: string
): Date | undefined {
  if (!val) return undefined
  if (val instanceof Date) return val
  if (typeof val === 'number') return new Date(val)
  if (typeof val === 'string')
    return parseDate(val, format || 'YYYY-MM-DD') || new Date(val)
  return undefined
}

function getDefaultFormat(mode: DatePickerMode, showTime?: boolean): string {
  switch (mode) {
    case 'month':
      return 'YYYY-MM'
    case 'year':
      return 'YYYY'
    case 'week':
      return 'YYYY-wo'
    case 'quarter':
      return 'YYYY-[Q]Q'
    default:
      return showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
  }
}

const MONTH_NAMES_SHORT = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
]

// Date panel component
function DatePanel(props: {
  prefixCls: string
  value?: Date
  pageDate: Date
  dayStartOfWeek: number
  disabledDate?: (d: Date) => boolean
  dateRender?: (d: Date) => React.ReactNode
  onSelect: (d: Date) => void
  onChangePageDate: (d: Date) => void
}) {
  const {
    prefixCls,
    value,
    pageDate,
    dayStartOfWeek,
    disabledDate,
    dateRender,
    onSelect,
    onChangePageDate,
  } = props

  const weekDays = useMemo(
    () => getWeekDayNames(dayStartOfWeek as 0 | 1),
    [dayStartOfWeek]
  )
  const today = useMemo(() => new Date(), [])

  const calendarDays = useMemo(() => {
    const firstDay = startOfMonth(pageDate)
    const daysInMonth = getDaysInMonth(
      pageDate.getFullYear(),
      pageDate.getMonth()
    )
    const startWeekday = getFirstDayOfMonth(
      pageDate.getFullYear(),
      pageDate.getMonth()
    )

    let offset = startWeekday - dayStartOfWeek
    if (offset < 0) offset += 7

    const days: Date[] = []
    for (let i = offset - 1; i >= 0; i--)
      days.push(addDate(firstDay, -i - 1, 'day'))
    for (let i = 0; i < daysInMonth; i++) days.push(addDate(firstDay, i, 'day'))
    const remaining = 42 - days.length
    const lastDay = addDate(firstDay, daysInMonth - 1, 'day')
    for (let i = 1; i <= remaining; i++) days.push(addDate(lastDay, i, 'day'))
    return days
  }, [pageDate, dayStartOfWeek])

  return (
    <div className={`${prefixCls}-date-panel`}>
      <div className={`${prefixCls}-header`}>
        <button
          className={`${prefixCls}-header-btn`}
          onClick={() => onChangePageDate(addDate(pageDate, -1, 'year'))}
        >
          «
        </button>
        <button
          className={`${prefixCls}-header-btn`}
          onClick={() => onChangePageDate(addDate(pageDate, -1, 'month'))}
        >
          ‹
        </button>
        <span className={`${prefixCls}-header-title`}>
          {pageDate.getFullYear()}年 {pageDate.getMonth() + 1}月
        </span>
        <button
          className={`${prefixCls}-header-btn`}
          onClick={() => onChangePageDate(addDate(pageDate, 1, 'month'))}
        >
          ›
        </button>
        <button
          className={`${prefixCls}-header-btn`}
          onClick={() => onChangePageDate(addDate(pageDate, 1, 'year'))}
        >
          »
        </button>
      </div>
      <div className={`${prefixCls}-body`}>
        <div className={`${prefixCls}-week-list`}>
          {weekDays.map((d) => (
            <div key={d} className={`${prefixCls}-week-item`}>
              {d}
            </div>
          ))}
        </div>
        <div className={`${prefixCls}-date-grid`}>
          {Array.from({ length: 6 }, (_, row) => (
            <div key={row} className={`${prefixCls}-date-row`}>
              {calendarDays.slice(row * 7, row * 7 + 7).map((date, col) => {
                const inView = isSameMonth(date, pageDate)
                const isToday = isSameDay(date, today)
                const isSelected = value && isSameDay(date, value)
                const isDisabled = disabledDate?.(date)

                return (
                  <div
                    key={col}
                    className={cs(`${prefixCls}-cell`, {
                      [`${prefixCls}-cell-in-view`]: inView,
                      [`${prefixCls}-cell-today`]: isToday,
                      [`${prefixCls}-cell-selected`]: isSelected,
                      [`${prefixCls}-cell-disabled`]: isDisabled,
                    })}
                    onClick={() => !isDisabled && onSelect(date)}
                  >
                    {dateRender ? (
                      dateRender(date)
                    ) : (
                      <div className={`${prefixCls}-cell-inner`}>
                        {date.getDate()}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Month panel
function MonthPanel(props: {
  prefixCls: string
  value?: Date
  pageDate: Date
  onSelect: (d: Date) => void
  onChangePageDate: (d: Date) => void
}) {
  const { prefixCls, value, pageDate, onSelect, onChangePageDate } = props
  const today = new Date()

  return (
    <div className={`${prefixCls}-month-panel`}>
      <div className={`${prefixCls}-header`}>
        <button
          className={`${prefixCls}-header-btn`}
          onClick={() => onChangePageDate(addDate(pageDate, -1, 'year'))}
        >
          «
        </button>
        <span className={`${prefixCls}-header-title`}>
          {pageDate.getFullYear()}年
        </span>
        <button
          className={`${prefixCls}-header-btn`}
          onClick={() => onChangePageDate(addDate(pageDate, 1, 'year'))}
        >
          »
        </button>
      </div>
      <div className={`${prefixCls}-body`}>
        <div className={`${prefixCls}-month-grid`}>
          {Array.from({ length: 4 }, (_, row) => (
            <div key={row} className={`${prefixCls}-month-row`}>
              {[0, 1, 2].map((col) => {
                const month = row * 3 + col
                const d = new Date(pageDate.getFullYear(), month, 1)
                const isSelected =
                  value &&
                  value.getFullYear() === d.getFullYear() &&
                  value.getMonth() === month
                const isCurrent =
                  today.getFullYear() === d.getFullYear() &&
                  today.getMonth() === month

                return (
                  <div
                    key={col}
                    className={cs(`${prefixCls}-cell`, {
                      [`${prefixCls}-cell-selected`]: isSelected,
                      [`${prefixCls}-cell-today`]: isCurrent,
                    })}
                    onClick={() => onSelect(d)}
                  >
                    <div className={`${prefixCls}-cell-inner`}>
                      {MONTH_NAMES_SHORT[month]}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Year panel
function YearPanel(props: {
  prefixCls: string
  value?: Date
  pageDate: Date
  onSelect: (d: Date) => void
  onChangePageDate: (d: Date) => void
}) {
  const { prefixCls, value, pageDate, onSelect, onChangePageDate } = props
  const startYear = Math.floor(pageDate.getFullYear() / 10) * 10
  const years = Array.from({ length: 12 }, (_, i) => startYear - 1 + i)
  const today = new Date()

  return (
    <div className={`${prefixCls}-year-panel`}>
      <div className={`${prefixCls}-header`}>
        <button
          className={`${prefixCls}-header-btn`}
          onClick={() => onChangePageDate(addDate(pageDate, -10, 'year'))}
        >
          «
        </button>
        <span className={`${prefixCls}-header-title`}>
          {startYear} - {startYear + 9}
        </span>
        <button
          className={`${prefixCls}-header-btn`}
          onClick={() => onChangePageDate(addDate(pageDate, 10, 'year'))}
        >
          »
        </button>
      </div>
      <div className={`${prefixCls}-body`}>
        <div className={`${prefixCls}-year-grid`}>
          {Array.from({ length: 4 }, (_, row) => (
            <div key={row} className={`${prefixCls}-year-row`}>
              {[0, 1, 2].map((col) => {
                const year = years[row * 3 + col]
                const isSelected = value && value.getFullYear() === year
                const isCurrent = today.getFullYear() === year
                const isInRange = year >= startYear && year <= startYear + 9

                return (
                  <div
                    key={col}
                    className={cs(`${prefixCls}-cell`, {
                      [`${prefixCls}-cell-selected`]: isSelected,
                      [`${prefixCls}-cell-today`]: isCurrent,
                      [`${prefixCls}-cell-in-view`]: isInRange,
                    })}
                    onClick={() => onSelect(new Date(year, 0, 1))}
                  >
                    <div className={`${prefixCls}-cell-inner`}>{year}</div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('datepicker')

  const {
    style,
    className,
    disabled,
    mode = 'date',
    format: propFormat,
    showTime,
    size = 'default',
    placeholder: propPlaceholder,
    position = 'bottom',
    allowClear = true,
    disabledDate,
    dayStartOfWeek = 0,
    shortcuts,
    shortcutsPlacementLeft,
    unmountOnExit = true,
    extra,
    getPopupContainer,
    triggerElement,
    onChange,
    onSelect,
    onOk,
    onVisibleChange,
    onClear,
    dateRender,
    onPickerValueChange,
  } = props

  const format = propFormat || getDefaultFormat(mode, showTime)
  const placeholder =
    propPlaceholder ||
    (showTime
      ? '请选择日期和时间'
      : mode === 'month'
        ? '请选择月份'
        : mode === 'year'
          ? '请选择年份'
          : '请选择日期')

  const [popupVisible, setPopupVisible] = useState(false)
  const [value, setValue] = useMergeValue<Date | undefined>(undefined, {
    defaultValue: toDateSafe(props.defaultValue, format),
    value:
      props.value !== undefined ? toDateSafe(props.value, format) : undefined,
  })

  const [pageDate, setPageDate] = useState<Date>(value || new Date())
  const [panelMode, setPanelMode] = useState<DatePickerMode>(mode)

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (popupVisible) {
      setPageDate(value || new Date())
      setPanelMode(mode)
    }
  }, [popupVisible])
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleSelect = useCallback(
    (date: Date) => {
      // For month picker, if in year panel, switch to month panel
      if (panelMode === 'year' && mode !== 'year') {
        setPageDate(date)
        setPanelMode(mode === 'month' ? 'month' : 'date')
        return
      }
      if (panelMode === 'month' && mode === 'date') {
        setPageDate(date)
        setPanelMode('date')
        return
      }

      const dateStr = formatDate(date, format)
      onSelect?.(dateStr, date)

      if (!showTime) {
        setValue(date)
        onChange?.(dateStr, date)
        setPopupVisible(false)
        onVisibleChange?.(false)
      } else {
        setValue(date)
      }
    },
    [
      panelMode,
      mode,
      format,
      showTime,
      onSelect,
      onChange,
      onVisibleChange,
      setValue,
    ]
  )

  const handleOk = useCallback(() => {
    if (value) {
      const dateStr = formatDate(value, format)
      onChange?.(dateStr, value)
      onOk?.(dateStr, value)
    }
    setPopupVisible(false)
    onVisibleChange?.(false)
  }, [value, format, onChange, onOk, onVisibleChange])

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setValue(undefined)
      onChange?.('', new Date())
      onClear?.()
    },
    [onChange, onClear, setValue]
  )

  const handleVisibleChange = useCallback(
    (visible: boolean) => {
      setPopupVisible(visible)
      onVisibleChange?.(visible)
    },
    [onVisibleChange]
  )

  const handleChangePageDate = useCallback(
    (date: Date) => {
      setPageDate(date)
      onPickerValueChange?.(formatDate(date, format), date)
    },
    [format, onPickerValueChange]
  )

  const handleShortcut = useCallback(
    (shortcut: ShortcutType) => {
      const result = shortcut.value()
      const date = Array.isArray(result) ? result[0] : result
      setValue(date)
      const dateStr = formatDate(date, format)
      onChange?.(dateStr, date)
      setPopupVisible(false)
    },
    [format, onChange, setValue]
  )

  const displayValue = value ? formatDate(value, format) : ''

  const renderPanel = () => {
    if (panelMode === 'year' || mode === 'year') {
      return (
        <YearPanel
          prefixCls={prefixCls}
          value={value}
          pageDate={pageDate}
          onSelect={handleSelect}
          onChangePageDate={handleChangePageDate}
        />
      )
    }
    if (panelMode === 'month' || mode === 'month') {
      return (
        <MonthPanel
          prefixCls={prefixCls}
          value={value}
          pageDate={pageDate}
          onSelect={handleSelect}
          onChangePageDate={handleChangePageDate}
        />
      )
    }
    return (
      <DatePanel
        prefixCls={prefixCls}
        value={value}
        pageDate={pageDate}
        dayStartOfWeek={dayStartOfWeek}
        disabledDate={disabledDate}
        dateRender={dateRender}
        onSelect={handleSelect}
        onChangePageDate={handleChangePageDate}
      />
    )
  }

  const renderPopup = () => (
    <div
      className={cs(`${prefixCls}-popup`, {
        [`${prefixCls}-popup-shortcuts-left`]: shortcutsPlacementLeft,
      })}
    >
      {shortcutsPlacementLeft && shortcuts && (
        <div className={`${prefixCls}-shortcuts`}>
          {shortcuts.map((s, i) => (
            <div
              key={i}
              className={`${prefixCls}-shortcut`}
              onClick={() => handleShortcut(s)}
            >
              {s.text}
            </div>
          ))}
        </div>
      )}
      <div className={`${prefixCls}-panel-wrapper`}>
        {renderPanel()}
        {(showTime || extra || (shortcuts && !shortcutsPlacementLeft)) && (
          <div className={`${prefixCls}-footer`}>
            {shortcuts && !shortcutsPlacementLeft && (
              <div className={`${prefixCls}-shortcuts`}>
                {shortcuts.map((s, i) => (
                  <span
                    key={i}
                    className={`${prefixCls}-shortcut`}
                    onClick={() => handleShortcut(s)}
                  >
                    {s.text}
                  </span>
                ))}
              </div>
            )}
            {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
            {showTime && (
              <div className={`${prefixCls}-footer-btns`}>
                <button
                  className={`${prefixCls}-btn-today`}
                  onClick={() => {
                    const now = new Date()
                    setValue(now)
                    setPageDate(now)
                  }}
                >
                  此刻
                </button>
                <button
                  className={`${prefixCls}-btn-confirm`}
                  onClick={handleOk}
                >
                  确定
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )

  const selector =
    triggerElement !== undefined ? (
      triggerElement
    ) : (
      <div
        ref={ref}
        className={cs(
          prefixCls,
          `${prefixCls}-size-${size}`,
          {
            [`${prefixCls}-disabled`]: disabled,
          },
          className
        )}
        style={style}
      >
        <Input
          size={size}
          disabled={disabled}
          placeholder={placeholder}
          value={displayValue}
          readOnly
          suffix={<span className={`${prefixCls}-icon`}>📅</span>}
        />
        {allowClear && displayValue && !disabled && (
          <span className={`${prefixCls}-clear`} onClick={handleClear}>
            ×
          </span>
        )}
      </div>
    )

  return (
    <Trigger
      trigger="click"
      position={position}
      disabled={disabled}
      popupVisible={popupVisible}
      onVisibleChange={handleVisibleChange}
      getPopupContainer={getPopupContainer}
      unmountOnExit={unmountOnExit}
      popup={renderPopup}
    >
      {selector}
    </Trigger>
  )
})

DatePicker.displayName = 'DatePicker'

// MonthPicker
const MonthPicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    return <DatePicker ref={ref} {...props} mode="month" />
  }
)
MonthPicker.displayName = 'MonthPicker'

// YearPicker
const YearPicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  return <DatePicker ref={ref} {...props} mode="year" />
})
YearPicker.displayName = 'YearPicker'

// WeekPicker
const WeekPicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  return <DatePicker ref={ref} {...props} mode="week" />
})
WeekPicker.displayName = 'WeekPicker'

// QuarterPicker
const QuarterPicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    return <DatePicker ref={ref} {...props} mode="quarter" />
  }
)
QuarterPicker.displayName = 'QuarterPicker'

// RangePicker
const RangePicker = forwardRef<HTMLDivElement, RangePickerProps>(
  (props, ref) => {
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('datepicker')

    const {
      style,
      className,
      disabled,
      format: propFormat,
      showTime,
      mode = 'date',
      size = 'default',
      placeholder: placeholderProp,
      position = 'bottom',
      allowClear = true,
      disabledDate,
      dayStartOfWeek = 0,
      separator = '~',
      unmountOnExit = true,
      getPopupContainer,
      onChange,
      onVisibleChange,
    } = props

    const format = propFormat || getDefaultFormat(mode, showTime)
    const placeholder = Array.isArray(placeholderProp)
      ? placeholderProp
      : ['开始日期', '结束日期']

    const [popupVisible, setPopupVisible] = useState(false)
    const [value, setValue] = useMergeValue<
      [Date | undefined, Date | undefined]
    >([undefined, undefined], {
      defaultValue: props.defaultValue
        ? [
            toDateSafe(props.defaultValue[0], format),
            toDateSafe(props.defaultValue[1], format),
          ]
        : undefined,
      value: props.value
        ? [
            toDateSafe(props.value[0], format),
            toDateSafe(props.value[1], format),
          ]
        : undefined,
    })

    const [pageDate, setPageDate] = useState<[Date, Date]>(() => {
      const d1 = value[0] || new Date()
      const d2 = value[1] || addDate(d1, 1, 'month')
      return [d1, d2]
    })

    const [focusedIndex, setFocusedIndex] = useState<0 | 1>(0)

    /* eslint-disable react-hooks/set-state-in-effect */
    useEffect(() => {
      if (popupVisible) {
        const d1 = value[0] || new Date()
        const d2 = value[1] || addDate(d1, 1, 'month')
        setPageDate([d1, d2])
        setFocusedIndex(0)
      }
    }, [popupVisible])
    /* eslint-enable react-hooks/set-state-in-effect */

    const handleSelectDate = useCallback(
      (date: Date) => {
        const newValue: [Date | undefined, Date | undefined] = [...value] as any
        newValue[focusedIndex] = date

        // Auto sort
        if (newValue[0] && newValue[1] && isAfter(newValue[0], newValue[1])) {
          ;[newValue[0], newValue[1]] = [newValue[1], newValue[0]]
        }

        setValue(newValue)

        if (focusedIndex === 0) {
          setFocusedIndex(1)
        } else if (newValue[0] && newValue[1]) {
          const strs = [
            formatDate(newValue[0], format),
            formatDate(newValue[1], format),
          ]
          onChange?.(strs, [newValue[0], newValue[1]])
          if (!showTime) {
            setPopupVisible(false)
            onVisibleChange?.(false)
          }
        }
      },
      [
        value,
        focusedIndex,
        format,
        showTime,
        onChange,
        onVisibleChange,
        setValue,
      ]
    )

    const handleVisibleChange = useCallback(
      (visible: boolean) => {
        setPopupVisible(visible)
        onVisibleChange?.(visible)
      },
      [onVisibleChange]
    )

    const handleClear = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation()
        setValue([undefined, undefined])
        onChange?.(['', ''], [new Date(), new Date()])
      },
      [onChange, setValue]
    )

    const startStr = value[0] ? formatDate(value[0], format) : ''
    const endStr = value[1] ? formatDate(value[1], format) : ''

    const renderPopup = () => (
      <div className={`${prefixCls}-range-popup`}>
        <div className={`${prefixCls}-range-panels`}>
          <DatePanel
            prefixCls={prefixCls}
            value={focusedIndex === 0 ? value[0] : value[1]}
            pageDate={pageDate[0]}
            dayStartOfWeek={dayStartOfWeek}
            disabledDate={disabledDate}
            onSelect={handleSelectDate}
            onChangePageDate={(d) => setPageDate([d, pageDate[1]])}
          />
          <DatePanel
            prefixCls={prefixCls}
            value={focusedIndex === 0 ? value[0] : value[1]}
            pageDate={pageDate[1]}
            dayStartOfWeek={dayStartOfWeek}
            disabledDate={disabledDate}
            onSelect={handleSelectDate}
            onChangePageDate={(d) => setPageDate([pageDate[0], d])}
          />
        </div>
      </div>
    )

    return (
      <Trigger
        trigger="click"
        position={position}
        disabled={disabled}
        popupVisible={popupVisible}
        onVisibleChange={handleVisibleChange}
        getPopupContainer={getPopupContainer}
        unmountOnExit={unmountOnExit}
        popup={renderPopup}
      >
        <div
          ref={ref}
          className={cs(
            `${prefixCls}-range`,
            `${prefixCls}-size-${size}`,
            {
              [`${prefixCls}-disabled`]: disabled,
            },
            className
          )}
          style={style}
        >
          <span
            className={cs(`${prefixCls}-range-input`, {
              [`${prefixCls}-range-input-active`]: focusedIndex === 0,
            })}
            onClick={() => setFocusedIndex(0)}
          >
            {startStr || (
              <span className={`${prefixCls}-placeholder`}>
                {placeholder[0]}
              </span>
            )}
          </span>
          <span className={`${prefixCls}-range-separator`}>{separator}</span>
          <span
            className={cs(`${prefixCls}-range-input`, {
              [`${prefixCls}-range-input-active`]: focusedIndex === 1,
            })}
            onClick={() => setFocusedIndex(1)}
          >
            {endStr || (
              <span className={`${prefixCls}-placeholder`}>
                {placeholder[1]}
              </span>
            )}
          </span>
          {allowClear && (startStr || endStr) && !disabled && (
            <span className={`${prefixCls}-clear`} onClick={handleClear}>
              ×
            </span>
          )}
          <span className={`${prefixCls}-icon`}>📅</span>
        </div>
      </Trigger>
    )
  }
)

RangePicker.displayName = 'DatePickerRangePicker'

type DatePickerComponentType = typeof DatePicker & {
  MonthPicker: typeof MonthPicker
  YearPicker: typeof YearPicker
  WeekPicker: typeof WeekPicker
  QuarterPicker: typeof QuarterPicker
  RangePicker: typeof RangePicker
}

const DatePickerComponent = DatePicker as DatePickerComponentType
DatePickerComponent.MonthPicker = MonthPicker
DatePickerComponent.YearPicker = YearPicker
DatePickerComponent.WeekPicker = WeekPicker
DatePickerComponent.QuarterPicker = QuarterPicker
DatePickerComponent.RangePicker = RangePicker

export default DatePickerComponent
export type {
  DatePickerMode,
  DatePickerProps,
  DatePickerValue,
  RangePickerProps,
  ShortcutType,
} from './interface'
