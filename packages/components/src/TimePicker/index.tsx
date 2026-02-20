import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cs } from '../_util'
import { formatDate, parseDate } from '../_util/date'
import { useMergeValue } from '../_util/hooks'
import { raf } from '../_util/raf'
import { ConfigContext } from '../ConfigProvider/context'
import Input from '../Input'
import Trigger from '../Trigger'
import { RangePickerProps, TimePickerProps, TimePickerValue } from './interface'

function toTimeSafe(
  val: TimePickerValue | undefined,
  format: string
): Date | undefined {
  if (!val) return undefined
  if (val instanceof Date) return val
  if (typeof val === 'number') return new Date(val)
  if (typeof val === 'string') {
    const parsed = parseDate(val, format)
    return parsed || new Date()
  }
  return new Date()
}

function padNum(n: number): string {
  return n < 10 ? `0${n}` : `${n}`
}

function formatTime(date: Date, format: string): string {
  return formatDate(date, format)
}

// Smooth scroll animation using raf
function smoothScrollTo(el: HTMLElement, to: number, duration = 200) {
  const from = el.scrollTop
  const diff = to - from
  if (!diff) return
  const startTime = Date.now()

  const step = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3) // easeOutCubic
    el.scrollTop = from + diff * ease
    if (progress < 1) raf(step)
  }
  raf(step)
}

// Time column component
function TimeColumn(props: {
  prefixCls: string
  list: number[]
  value: number
  disabled?: (n: number) => boolean
  hidden?: boolean
  onSelect: (n: number) => void
  itemHeight?: number
}) {
  const {
    prefixCls,
    list,
    value,
    disabled,
    hidden,
    onSelect,
    itemHeight = 32,
  } = props
  const ulRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (ulRef.current) {
      const idx = list.indexOf(value)
      if (idx >= 0) {
        smoothScrollTo(ulRef.current, idx * itemHeight)
      }
    }
  }, [value, list, itemHeight])

  if (hidden) return null

  return (
    <div className={`${prefixCls}-column`}>
      <ul ref={ulRef} className={`${prefixCls}-column-list`}>
        {list.map((n) => {
          const isDisabled = disabled?.(n)
          return (
            <li
              key={n}
              className={cs(`${prefixCls}-column-item`, {
                [`${prefixCls}-column-item-selected`]: n === value,
                [`${prefixCls}-column-item-disabled`]: isDisabled,
              })}
              onClick={() => !isDisabled && onSelect(n)}
            >
              {padNum(n)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>((props, ref) => {
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('timepicker')

  const {
    style,
    className,
    disabled,
    format = 'HH:mm:ss',
    use12Hours,
    step = {},
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    hideDisabledOptions,
    position = 'bottom',
    size = 'default',
    placeholder = '请选择时间',
    allowClear = true,
    showNowBtn = true,
    onChange,
    onSelect,
    onVisibleChange,
    getPopupContainer,
    triggerElement,
    extra,
    disableConfirm,
    unmountOnExit = true,
  } = props

  const actualFormat =
    use12Hours && !format.includes('h') ? 'hh:mm:ss A' : format
  const showHour = actualFormat.includes('H') || actualFormat.includes('h')
  const showMinute = actualFormat.includes('m')
  const showSecond = actualFormat.includes('s')

  const [popupVisible, setPopupVisible] = useState(false)
  const [value, setValue] = useMergeValue<Date | undefined>(undefined, {
    defaultValue: toTimeSafe(props.defaultValue, actualFormat),
    value:
      props.value !== undefined
        ? toTimeSafe(props.value, actualFormat)
        : undefined,
  })

  const [tempValue, setTempValue] = useState<Date | undefined>(value)

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (popupVisible) setTempValue(value)
  }, [popupVisible])
  /* eslint-enable react-hooks/set-state-in-effect */

  const hours = useMemo(() => {
    const stepH = step.hour || 1
    const max = use12Hours ? 12 : 24
    const start = use12Hours ? 1 : 0
    const list: number[] = []
    for (let i = start; i < (use12Hours ? max + 1 : max); i += stepH)
      list.push(i)
    if (hideDisabledOptions && disabledHours) {
      const disabled = disabledHours()
      return list.filter((h) => !disabled.includes(h))
    }
    return list
  }, [step.hour, use12Hours, hideDisabledOptions, disabledHours])

  const minutes = useMemo(() => {
    const stepM = step.minute || 1
    const list: number[] = []
    for (let i = 0; i < 60; i += stepM) list.push(i)
    if (hideDisabledOptions && disabledMinutes) {
      const disabled = disabledMinutes(tempValue?.getHours() || 0)
      return list.filter((m) => !disabled.includes(m))
    }
    return list
  }, [step.minute, hideDisabledOptions, disabledMinutes, tempValue])

  const seconds = useMemo(() => {
    const stepS = step.second || 1
    const list: number[] = []
    for (let i = 0; i < 60; i += stepS) list.push(i)
    if (hideDisabledOptions && disabledSeconds) {
      const disabled = disabledSeconds(
        tempValue?.getHours() || 0,
        tempValue?.getMinutes() || 0
      )
      return list.filter((s) => !disabled.includes(s))
    }
    return list
  }, [step.second, hideDisabledOptions, disabledSeconds, tempValue])

  const handleSelectTime = useCallback(
    (unit: 'hour' | 'minute' | 'second', val: number) => {
      const base = tempValue || new Date()
      const newDate = new Date(base)
      if (unit === 'hour') newDate.setHours(val)
      else if (unit === 'minute') newDate.setMinutes(val)
      else newDate.setSeconds(val)

      setTempValue(newDate)
      onSelect?.(formatTime(newDate, actualFormat), newDate)

      if (disableConfirm) {
        setValue(newDate)
        onChange?.(formatTime(newDate, actualFormat), newDate)
      }
    },
    [tempValue, actualFormat, onSelect, disableConfirm, onChange, setValue]
  )

  const handleConfirm = useCallback(() => {
    if (tempValue) {
      setValue(tempValue)
      onChange?.(formatTime(tempValue, actualFormat), tempValue)
    }
    setPopupVisible(false)
    onVisibleChange?.(false)
  }, [tempValue, actualFormat, onChange, setValue, onVisibleChange])

  const handleNow = useCallback(() => {
    const now = new Date()
    setTempValue(now)
    if (disableConfirm) {
      setValue(now)
      onChange?.(formatTime(now, actualFormat), now)
    }
  }, [actualFormat, disableConfirm, onChange, setValue])

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setValue(undefined)
      onChange?.('', new Date())
    },
    [onChange, setValue]
  )

  const handleVisibleChange = useCallback(
    (visible: boolean) => {
      setPopupVisible(visible)
      onVisibleChange?.(visible)
    },
    [onVisibleChange]
  )

  const displayValue = value ? formatTime(value, actualFormat) : ''
  const currentHour = tempValue?.getHours() || 0
  const currentMinute = tempValue?.getMinutes() || 0
  const currentSecond = tempValue?.getSeconds() || 0

  const renderPopup = () => (
    <div className={`${prefixCls}-popup`}>
      <div className={`${prefixCls}-panel`}>
        <div className={`${prefixCls}-columns`}>
          {showHour && (
            <TimeColumn
              prefixCls={prefixCls}
              list={hours}
              value={use12Hours ? currentHour % 12 || 12 : currentHour}
              disabled={
                disabledHours ? (h) => disabledHours().includes(h) : undefined
              }
              onSelect={(h) =>
                handleSelectTime('hour', use12Hours ? (h === 12 ? 0 : h) : h)
              }
            />
          )}
          {showMinute && (
            <TimeColumn
              prefixCls={prefixCls}
              list={minutes}
              value={currentMinute}
              disabled={
                disabledMinutes
                  ? (m) => disabledMinutes(currentHour).includes(m)
                  : undefined
              }
              onSelect={(m) => handleSelectTime('minute', m)}
            />
          )}
          {showSecond && (
            <TimeColumn
              prefixCls={prefixCls}
              list={seconds}
              value={currentSecond}
              disabled={
                disabledSeconds
                  ? (s) =>
                      disabledSeconds(currentHour, currentMinute).includes(s)
                  : undefined
              }
              onSelect={(s) => handleSelectTime('second', s)}
            />
          )}
          {use12Hours && (
            <div className={`${prefixCls}-column`}>
              <ul className={`${prefixCls}-column-list`}>
                {['AM', 'PM'].map((ampm) => (
                  <li
                    key={ampm}
                    className={cs(`${prefixCls}-column-item`, {
                      [`${prefixCls}-column-item-selected`]:
                        ampm === (currentHour >= 12 ? 'PM' : 'AM'),
                    })}
                    onClick={() => {
                      const base = tempValue || new Date()
                      const newDate = new Date(base)
                      const h = newDate.getHours()
                      if (ampm === 'AM' && h >= 12) newDate.setHours(h - 12)
                      if (ampm === 'PM' && h < 12) newDate.setHours(h + 12)
                      setTempValue(newDate)
                      if (disableConfirm) {
                        setValue(newDate)
                        onChange?.(formatTime(newDate, actualFormat), newDate)
                      }
                    }}
                  >
                    {ampm}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
        {!disableConfirm && (
          <div className={`${prefixCls}-footer`}>
            {showNowBtn && (
              <button className={`${prefixCls}-btn-now`} onClick={handleNow}>
                此刻
              </button>
            )}
            <button
              className={`${prefixCls}-btn-confirm`}
              onClick={handleConfirm}
            >
              确定
            </button>
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
          suffix={<span className={`${prefixCls}-icon`}>🕐</span>}
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

TimePicker.displayName = 'TimePicker'

// RangePicker
const RangePicker = forwardRef<HTMLDivElement, RangePickerProps>(
  (props, ref) => {
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('timepicker')

    const {
      style,
      className,
      disabled,
      format = 'HH:mm:ss',
      size = 'default',
      placeholder: placeholderProp,
      onChange,
      onVisibleChange: _onVisibleChange,
      getPopupContainer: _getPopupContainer,
      position: _position = 'bottom',
      unmountOnExit: _unmountOnExit = true,
      order = true,
    } = props

    const placeholder = Array.isArray(placeholderProp)
      ? placeholderProp
      : [placeholderProp || '开始时间', '结束时间']

    const [_popupVisible, _setPopupVisible] = useState(false)
    const [value, setValue] = useMergeValue<
      [Date | undefined, Date | undefined]
    >([undefined, undefined], {
      defaultValue: props.defaultValue
        ? [
            toTimeSafe(props.defaultValue[0], format),
            toTimeSafe(props.defaultValue[1], format),
          ]
        : undefined,
      value: props.value
        ? [
            toTimeSafe(props.value[0], format),
            toTimeSafe(props.value[1], format),
          ]
        : undefined,
    })

    const handleChange = useCallback(
      (idx: number, timeString: string, date: Date) => {
        const newValue: [Date | undefined, Date | undefined] = [...value] as any
        newValue[idx] = date
        if (order && newValue[0] && newValue[1] && newValue[0] > newValue[1]) {
          ;[newValue[0], newValue[1]] = [newValue[1], newValue[0]]
        }
        setValue(newValue)
        if (newValue[0] && newValue[1]) {
          onChange?.(
            [formatTime(newValue[0], format), formatTime(newValue[1], format)],
            [newValue[0], newValue[1]]
          )
        }
      },
      [value, format, onChange, order, setValue]
    )

    return (
      <div
        ref={ref}
        className={cs(
          `${prefixCls}-range`,
          `${prefixCls}-size-${size}`,
          { [`${prefixCls}-disabled`]: disabled },
          className
        )}
        style={style}
      >
        <TimePicker
          {...(props as any)}
          placeholder={placeholder[0]}
          value={value[0]}
          onChange={(ts, d) => handleChange(0, ts, d)}
          triggerElement={undefined}
        />
        <span className={`${prefixCls}-range-separator`}>~</span>
        <TimePicker
          {...(props as any)}
          placeholder={placeholder[1]}
          value={value[1]}
          onChange={(ts, d) => handleChange(1, ts, d)}
          triggerElement={undefined}
        />
      </div>
    )
  }
)

RangePicker.displayName = 'TimePickerRangePicker'

type TimePickerComponentType = typeof TimePicker & {
  RangePicker: typeof RangePicker
}

const TimePickerComponent = TimePicker as TimePickerComponentType
TimePickerComponent.RangePicker = RangePicker

export default TimePickerComponent
export type {
  RangePickerProps,
  TimePickerProps,
  TimePickerValue,
} from './interface'
