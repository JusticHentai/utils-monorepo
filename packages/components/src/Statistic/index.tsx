import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { isFunction, isNumber } from '../_util/is'
import omit from '../_util/omit'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import Skeleton from '../Skeleton'
import Countdown from './countdown'
import { CountdownProps, StatisticProps } from './interface'

const defaultProps: Partial<StatisticProps> = {
  countFrom: 0,
  countDuration: 2000,
}

function Statistic(baseProps: StatisticProps, ref: React.Ref<unknown>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<StatisticProps>(
    baseProps,
    defaultProps as StatisticProps,
    (componentConfig?.Statistic ?? {}) as StatisticProps
  )
  const {
    className,
    style,
    title,
    extra,
    groupSeparator,
    precision,
    prefix,
    suffix,
    renderFormat,
    styleValue,
    styleDecimal,
    loading,
    ...rest
  } = props

  const wrapperRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState<string | number | Date>(
    'value' in props ? props.value! : undefined!
  )

  const prefixCls = getPrefixCls('statistic')

  // Simple count up animation using requestAnimationFrame (no external dependency)
  const countUp = (from = props.countFrom ?? 0, to = props.value) => {
    const duration = props.countDuration ?? 2000
    const numTo = Number(to)
    if (from === numTo || !isNumber(numTo)) return

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // quartOut easing
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = from + (numTo - from) * eased
      setValue(
        precision !== undefined ? Number(current.toFixed(precision)) : current
      )
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setValue(numTo)
      }
    }
    requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (props.countUp) {
      countUp(Number(value) || props.countFrom, props.value)
    } else {
      setValue(props.value!)
    }
  }, [props.value])

  useImperativeHandle(ref, () => ({
    countUp,
    getRootDOMNode: () => wrapperRef.current,
  }))

  const { int, decimal } = useMemo(() => {
    let _value: string | number | Date = value
    if (isNumber(precision) && precision >= 0) {
      _value = Number(value).toFixed(precision)
    }
    let int = String(_value).split('.')[0]
    const decimal = String(_value).split('.')[1]
    if (groupSeparator && isNumber(Number(value))) {
      int = Number(int).toLocaleString('en-US')
    }
    return { int, decimal }
  }, [groupSeparator, precision, value])

  const valueFormatted = isFunction(renderFormat)
    ? renderFormat
    : (_: StatisticProps['value'], formattedValue: string) => formattedValue

  const isNumberValue = isNumber(Number(value))
  const eleValueWithPrefix = (
    <>
      {prefix !== null && prefix !== undefined ? (
        <span className={`${prefixCls}-value-prefix`}>{prefix}</span>
      ) : null}
      {valueFormatted(value, isNumberValue ? int : String(value))}
    </>
  )

  return (
    <div
      className={cs(prefixCls, className)}
      style={style}
      {...omit(rest, [
        'value',
        'countUp',
        'countFrom',
        'countDuration',
      ] as (keyof typeof rest)[])}
      ref={wrapperRef}
    >
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      <div className={`${prefixCls}-content`}>
        <Skeleton
          animation
          loading={!!loading}
          text={{ rows: 1, width: '100%' }}
        >
          <div className={`${prefixCls}-value`} style={styleValue}>
            {isNumberValue ? (
              <span className={`${prefixCls}-value-int`}>
                {eleValueWithPrefix}
              </span>
            ) : (
              eleValueWithPrefix
            )}
            {decimal !== undefined || suffix ? (
              <span
                className={`${prefixCls}-value-decimal`}
                style={styleDecimal}
              >
                {isNumber(Number(value)) &&
                  decimal !== undefined &&
                  `.${decimal}`}
                {suffix !== null && suffix !== undefined ? (
                  <span className={`${prefixCls}-value-suffix`}>{suffix}</span>
                ) : null}
              </span>
            ) : null}
          </div>
        </Skeleton>
        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </div>
    </div>
  )
}

const ForwardRefStatistic = forwardRef(Statistic)

const StatisticComponent = ForwardRefStatistic as typeof ForwardRefStatistic & {
  Countdown: typeof Countdown
}

StatisticComponent.displayName = 'Statistic'
StatisticComponent.Countdown = Countdown

export default StatisticComponent
export type { CountdownProps, StatisticProps }
