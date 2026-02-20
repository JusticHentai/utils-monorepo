import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { ProgressProps } from './interface'

const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const {
    style,
    className,
    type = 'line',
    percent = 0,
    status,
    size = 'default',
    showText = true,
    formatText,
    color,
    trailColor,
    strokeWidth,
    width: circleWidth = 64,
    animation,
    steps,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('progress')

  const mergedStatus = status || (percent >= 100 ? 'success' : 'normal')

  const classString = cs(
    prefixCls,
    `${prefixCls}-${type}`,
    `${prefixCls}-size-${size}`,
    `${prefixCls}-status-${mergedStatus}`,
    className
  )

  const renderText = () => {
    if (!showText) return null
    const text = formatText ? formatText(percent) : `${Math.round(percent)}%`
    return <span className={`${prefixCls}-text`}>{text}</span>
  }

  const getColor = () => {
    if (typeof color === 'string') return color
    return undefined
  }

  if (type === 'circle') {
    const sw = strokeWidth || 4
    const radius = (circleWidth - sw) / 2
    const perimeter = 2 * Math.PI * radius
    const dashOffset = perimeter - (percent / 100) * perimeter

    return (
      <div
        ref={ref}
        className={classString}
        style={{ width: circleWidth, height: circleWidth, ...style }}
        {...rest}
      >
        <svg
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
          className={`${prefixCls}-circle-svg`}
        >
          <circle
            className={`${prefixCls}-circle-trail`}
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            r={radius}
            fill="none"
            stroke={trailColor || '#f0f0f0'}
            strokeWidth={sw}
          />
          <circle
            className={`${prefixCls}-circle-path`}
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            r={radius}
            fill="none"
            stroke={getColor()}
            strokeWidth={sw}
            strokeDasharray={perimeter}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
        </svg>
        {renderText()}
      </div>
    )
  }

  // line type
  if (steps) {
    return (
      <div ref={ref} className={classString} style={style} {...rest}>
        <div className={`${prefixCls}-steps`}>
          {Array.from({ length: steps }).map((_, i) => {
            const isActive = ((i + 1) / steps) * 100 <= percent
            return (
              <div
                key={i}
                className={cs(`${prefixCls}-step`, {
                  [`${prefixCls}-step-active`]: isActive,
                })}
                style={
                  isActive
                    ? { backgroundColor: getColor() }
                    : { backgroundColor: trailColor }
                }
              />
            )
          })}
        </div>
        {renderText()}
      </div>
    )
  }

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      <div className={`${prefixCls}-bar`}>
        <div
          className={`${prefixCls}-bar-outer`}
          style={{ backgroundColor: trailColor, height: strokeWidth }}
        >
          <div
            className={cs(`${prefixCls}-bar-inner`, {
              [`${prefixCls}-bar-animate`]: animation,
            })}
            style={{
              width: `${Math.min(100, percent)}%`,
              backgroundColor: getColor(),
              height: strokeWidth,
            }}
          />
        </div>
      </div>
      {renderText()}
    </div>
  )
})

Progress.displayName = 'Progress'
export default Progress
export type { ProgressProps }
