import { forwardRef, useCallback, useContext, useMemo } from 'react'
import { cs } from '../_util'
import {
  addDate,
  getDaysInMonth,
  getFirstDayOfMonth,
  getWeekDayNames,
  isSameDay,
  isSameMonth,
  startOfMonth,
  toDate,
} from '../_util/date'
import { useMergeValue } from '../_util/hooks'
import { ConfigContext } from '../ConfigProvider/context'
import { CalendarMode, CalendarProps, CalendarValue } from './interface'

const MONTH_NAMES = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
]

function toDateSafe(val: CalendarValue | undefined): Date {
  if (!val) return new Date()
  return toDate(val)
}

const Calendar = forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('calendar')

  const {
    style,
    className,
    panel,
    panelWidth = 265,
    panelTodayBtn,
    panelOperations = ['double-left', 'left', 'right', 'double-right'],
    dayStartOfWeek = 0,
    allowSelect = true,
    disabledDate,
    onChange,
    onPanelChange,
    dateRender,
    monthRender,
    dateInnerContent,
    headerRender,
  } = props

  const [mode, setMode] = useMergeValue<CalendarMode>('month', {
    defaultValue: props.defaultMode,
    value: props.mode,
  })

  const [value, setValue] = useMergeValue<Date>(new Date(), {
    defaultValue: props.defaultValue
      ? toDateSafe(props.defaultValue)
      : undefined,
    value: props.value ? toDateSafe(props.value) : undefined,
  })

  const [pageShowDate, setPageShowDate] = useMergeValue<Date>(new Date(), {
    defaultValue: props.defaultPageShowDate
      ? toDateSafe(props.defaultPageShowDate)
      : undefined,
    value: props.pageShowDate ? toDateSafe(props.pageShowDate) : undefined,
  })

  const handleChangePageDate = useCallback(
    (date: Date) => {
      setPageShowDate(date)
      onPanelChange?.(date)
    },
    [onPanelChange, setPageShowDate]
  )

  const handleSelect = useCallback(
    (date: Date) => {
      if (!allowSelect) return
      if (disabledDate?.(date)) return
      setValue(date)
      onChange?.(date)
    },
    [allowSelect, disabledDate, onChange, setValue]
  )

  // Generate calendar grid (6 rows x 7 cols)
  const calendarDays = useMemo(() => {
    const firstDay = startOfMonth(pageShowDate)
    const daysInMonth = getDaysInMonth(
      pageShowDate.getFullYear(),
      pageShowDate.getMonth()
    )
    const startWeekday = getFirstDayOfMonth(
      pageShowDate.getFullYear(),
      pageShowDate.getMonth()
    )

    // Offset based on week start
    let offset = startWeekday - dayStartOfWeek
    if (offset < 0) offset += 7

    const days: Date[] = []
    // Previous month days
    for (let i = offset - 1; i >= 0; i--) {
      days.push(addDate(firstDay, -i - 1, 'day'))
    }
    // Current month days
    for (let i = 0; i < daysInMonth; i++) {
      days.push(addDate(firstDay, i, 'day'))
    }
    // Next month days (fill to 42)
    const remaining = 42 - days.length
    const lastDay = addDate(firstDay, daysInMonth - 1, 'day')
    for (let i = 1; i <= remaining; i++) {
      days.push(addDate(lastDay, i, 'day'))
    }

    return days
  }, [pageShowDate, dayStartOfWeek])

  const weekDays = useMemo(
    () => getWeekDayNames(dayStartOfWeek),
    [dayStartOfWeek]
  )
  const today = useMemo(() => new Date(), [])

  // Navigation
  const goMonth = useCallback(
    (delta: number) => {
      handleChangePageDate(addDate(pageShowDate, delta, 'month'))
    },
    [pageShowDate, handleChangePageDate]
  )

  const goYear = useCallback(
    (delta: number) => {
      handleChangePageDate(addDate(pageShowDate, delta, 'year'))
    },
    [pageShowDate, handleChangePageDate]
  )

  const goToday = useCallback(() => {
    const now = new Date()
    handleChangePageDate(now)
    handleSelect(now)
  }, [handleChangePageDate, handleSelect])

  // Render header
  const renderHeader = () => {
    if (headerRender) {
      return headerRender({
        value,
        pageShowDate,
        mode,
        onChange: handleSelect,
        onChangePageDate: handleChangePageDate,
        onChangeMode: setMode,
      })
    }

    return (
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-header-left`}>
          {panelOperations.includes('double-left') && (
            <button
              className={`${prefixCls}-header-btn`}
              onClick={() => goYear(-1)}
            >
              «
            </button>
          )}
          {mode === 'month' && panelOperations.includes('left') && (
            <button
              className={`${prefixCls}-header-btn`}
              onClick={() => goMonth(-1)}
            >
              ‹
            </button>
          )}
        </div>
        <div className={`${prefixCls}-header-title`}>
          <span
            className={`${prefixCls}-header-title-year`}
            onClick={() => setMode('year')}
          >
            {pageShowDate.getFullYear()}年
          </span>
          {mode === 'month' && (
            <span className={`${prefixCls}-header-title-month`}>
              {pageShowDate.getMonth() + 1}月
            </span>
          )}
        </div>
        <div className={`${prefixCls}-header-right`}>
          {mode === 'month' && panelOperations.includes('right') && (
            <button
              className={`${prefixCls}-header-btn`}
              onClick={() => goMonth(1)}
            >
              ›
            </button>
          )}
          {panelOperations.includes('double-right') && (
            <button
              className={`${prefixCls}-header-btn`}
              onClick={() => goYear(1)}
            >
              »
            </button>
          )}
        </div>
      </div>
    )
  }

  // Render month view (day grid)
  const renderMonthView = () => {
    return (
      <div className={`${prefixCls}-body`}>
        <div className={`${prefixCls}-week-list`}>
          {weekDays.map((day) => (
            <div key={day} className={`${prefixCls}-week-list-item`}>
              {day}
            </div>
          ))}
        </div>
        <div className={`${prefixCls}-month-grid`}>
          {Array.from({ length: 6 }, (_, rowIdx) => (
            <div key={rowIdx} className={`${prefixCls}-month-row`}>
              {calendarDays
                .slice(rowIdx * 7, rowIdx * 7 + 7)
                .map((date, colIdx) => {
                  const isCurrentMonth = isSameMonth(date, pageShowDate)
                  const isToday = isSameDay(date, today)
                  const isSelected = isSameDay(date, value)
                  const isDisabled = disabledDate?.(date)

                  if (dateRender) {
                    return (
                      <div
                        key={colIdx}
                        className={cs(`${prefixCls}-cell`, {
                          [`${prefixCls}-cell-selected`]: isSelected,
                          [`${prefixCls}-cell-disabled`]: isDisabled,
                        })}
                        onClick={() => !isDisabled && handleSelect(date)}
                      >
                        {dateRender(date)}
                      </div>
                    )
                  }

                  return (
                    <div
                      key={colIdx}
                      className={cs(`${prefixCls}-cell`, {
                        [`${prefixCls}-cell-in-view`]: isCurrentMonth,
                        [`${prefixCls}-cell-today`]: isToday,
                        [`${prefixCls}-cell-selected`]: isSelected,
                        [`${prefixCls}-cell-disabled`]: isDisabled,
                      })}
                      onClick={() => !isDisabled && handleSelect(date)}
                    >
                      <div className={`${prefixCls}-date`}>
                        <div className={`${prefixCls}-date-value`}>
                          {date.getDate()}
                        </div>
                        {dateInnerContent && (
                          <div className={`${prefixCls}-date-content`}>
                            {dateInnerContent(date)}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Render year view (month grid)
  const renderYearView = () => {
    const months = Array.from({ length: 12 }, (_, i) => {
      const d = new Date(pageShowDate.getFullYear(), i, 1)
      return d
    })

    return (
      <div className={`${prefixCls}-body ${prefixCls}-body-year`}>
        <div className={`${prefixCls}-year-grid`}>
          {Array.from({ length: 4 }, (_, rowIdx) => (
            <div key={rowIdx} className={`${prefixCls}-year-row`}>
              {months.slice(rowIdx * 3, rowIdx * 3 + 3).map((date, colIdx) => {
                const isCurrentMonth =
                  date.getMonth() === new Date().getMonth() &&
                  date.getFullYear() === new Date().getFullYear()
                const isSelected = isSameMonth(date, value)

                if (monthRender) {
                  return (
                    <div
                      key={colIdx}
                      className={cs(`${prefixCls}-cell`, {
                        [`${prefixCls}-cell-selected`]: isSelected,
                      })}
                      onClick={() => {
                        handleChangePageDate(date)
                        setMode('month')
                      }}
                    >
                      {monthRender(date)}
                    </div>
                  )
                }

                return (
                  <div
                    key={colIdx}
                    className={cs(`${prefixCls}-cell`, {
                      [`${prefixCls}-cell-today`]: isCurrentMonth,
                      [`${prefixCls}-cell-selected`]: isSelected,
                    })}
                    onClick={() => {
                      handleChangePageDate(date)
                      setMode('month')
                    }}
                  >
                    <div className={`${prefixCls}-date`}>
                      <div className={`${prefixCls}-date-value`}>
                        {MONTH_NAMES[date.getMonth()]}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const calendarStyle = panel ? { ...style, width: panelWidth } : style

  return (
    <div
      ref={ref}
      className={cs(prefixCls, { [`${prefixCls}-panel`]: panel }, className)}
      style={calendarStyle}
    >
      {renderHeader()}
      {mode === 'month' ? renderMonthView() : renderYearView()}
      {panelTodayBtn && (
        <div className={`${prefixCls}-footer`}>
          <button className={`${prefixCls}-footer-btn-today`} onClick={goToday}>
            今天
          </button>
        </div>
      )}
    </div>
  )
})

Calendar.displayName = 'Calendar'

export default Calendar
export type { CalendarMode, CalendarProps, CalendarValue } from './interface'
