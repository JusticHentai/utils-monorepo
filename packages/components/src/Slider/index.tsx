import { CSSProperties, forwardRef, useCallback, useContext, useRef } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { SliderProps } from './interface'

const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    style,
    className,
    defaultValue = 0,
    value: propValue,
    min = 0,
    max = 100,
    step = 1,
    disabled,
    vertical,
    range,
    reverse,
    marks,
    onlyMarkValue: _onlyMarkValue,
    tooltipVisible,
    formatTooltip,
    onChange,
    onAfterChange,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('slider')

  const [value, setValue] = useMergeValue(defaultValue, { value: propValue })
  const trackRef = useRef<HTMLDivElement>(null)

  const getPercent = useCallback(
    (val: number) => ((val - min) / (max - min)) * 100,
    [min, max]
  )

  const getValueFromPercent = useCallback(
    (percent: number) => {
      let val = min + (percent / 100) * (max - min)
      if (step) {
        val = Math.round(val / step) * step
      }
      return Math.max(min, Math.min(max, Number(val.toFixed(10))))
    },
    [min, max, step]
  )

  const handleTrackClick = (e: React.MouseEvent) => {
    if (disabled || !trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const percent = vertical
      ? ((rect.bottom - e.clientY) / rect.height) * 100
      : ((e.clientX - rect.left) / rect.width) * 100

    const newVal = getValueFromPercent(reverse ? 100 - percent : percent)

    if (range && Array.isArray(value)) {
      const [start, end] = value
      const distToStart = Math.abs(newVal - start)
      const distToEnd = Math.abs(newVal - end)
      const newValue: [number, number] =
        distToStart < distToEnd ? [newVal, end] : [start, newVal]
      newValue.sort((a, b) => a - b)
      setValue(newValue)
      onChange?.(newValue)
      onAfterChange?.(newValue)
    } else {
      setValue(newVal)
      onChange?.(newVal)
      onAfterChange?.(newVal)
    }
  }

  const classString = cs(
    prefixCls,
    {
      [`${prefixCls}-vertical`]: vertical,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-reverse`]: reverse,
    },
    className
  )

  const renderTrack = () => {
    if (range && Array.isArray(value)) {
      const [start, end] = value
      const startPercent = getPercent(start)
      const endPercent = getPercent(end)
      const trackStyle: CSSProperties = vertical
        ? {
            bottom: `${startPercent}%`,
            height: `${endPercent - startPercent}%`,
          }
        : { left: `${startPercent}%`, width: `${endPercent - startPercent}%` }
      return <div className={`${prefixCls}-track`} style={trackStyle} />
    }
    const percent = getPercent(value as number)
    const trackStyle: CSSProperties = vertical
      ? { bottom: 0, height: `${percent}%` }
      : { left: 0, width: `${percent}%` }
    return <div className={`${prefixCls}-track`} style={trackStyle} />
  }

  const renderHandle = (val: number, index?: number) => {
    const percent = getPercent(val)
    const handleStyle: CSSProperties = vertical
      ? { bottom: `${percent}%` }
      : { left: `${percent}%` }
    return (
      <div
        key={index}
        className={`${prefixCls}-handle`}
        style={handleStyle}
        role="slider"
        aria-valuenow={val}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        {tooltipVisible !== false && (
          <div className={`${prefixCls}-handle-tooltip`}>
            {formatTooltip ? formatTooltip(val) : val}
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      <div
        ref={trackRef}
        className={`${prefixCls}-rail`}
        onClick={handleTrackClick}
      >
        {renderTrack()}
      </div>
      {range && Array.isArray(value)
        ? value.map((v, i) => renderHandle(v, i))
        : renderHandle(value as number)}
      {marks && (
        <div className={`${prefixCls}-marks`}>
          {Object.entries(marks).map(([key, label]) => {
            const percent = getPercent(Number(key))
            const markStyle: CSSProperties = vertical
              ? { bottom: `${percent}%` }
              : { left: `${percent}%` }
            return (
              <span key={key} className={`${prefixCls}-mark`} style={markStyle}>
                {label}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
})

Slider.displayName = 'Slider'
export default Slider
export type { SliderProps }
