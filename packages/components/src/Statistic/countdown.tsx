import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { isFunction } from '../_util/is'
import { ConfigContext } from '../ConfigProvider/context'
import { CountdownProps } from './interface'
import { getDateString } from './util'

function Countdown(props: CountdownProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls } = useContext(ConfigContext)
  const {
    className,
    style,
    title,
    styleValue,
    value,
    onFinish,
    renderFormat,
    format = 'HH:mm:ss',
    start = true,
  } = props

  const targetTime =
    value instanceof Date ? value.getTime() : Number(value) || 0
  /* eslint-disable react-hooks/purity */
  const nowTime = props.now
    ? props.now instanceof Date
      ? props.now.getTime()
      : Number(props.now) || Date.now()
    : Date.now()
  /* eslint-enable react-hooks/purity */

  const prefixCls = getPrefixCls('statistic')

  const [valueDiff, setValueDiff] = useState(targetTime - nowTime)
  const [valueShow, setValueShow] = useState(
    getDateString(Math.max(targetTime - nowTime, 0), format)
  )
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      const _valueDiff = targetTime - Date.now()
      if (_valueDiff <= 0) {
        stopTimer()
        setValueShow(getDateString(0, format))
        setValueDiff(0)
        onFinish?.()
        return
      }
      setValueShow(getDateString(_valueDiff, format))
      setValueDiff(_valueDiff)
    }, 1000 / 30)
  }

  useEffect(() => {
    if (!timerRef.current && start) {
      if (targetTime >= Date.now()) {
        startTimer()
      }
    }
    return () => {
      stopTimer()
    }
  }, [start])

  const valueShowNode = isFunction(renderFormat)
    ? renderFormat(valueDiff, valueShow)
    : valueShow

  return (
    <div
      ref={ref}
      className={cs(prefixCls, `${prefixCls}-countdown`, className)}
      style={style}
    >
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-value`} style={styleValue}>
          {valueShowNode}
        </div>
      </div>
    </div>
  )
}

const CountdownComponent = forwardRef<HTMLDivElement, CountdownProps>(Countdown)
CountdownComponent.displayName = 'StatisticCountdown'

export default CountdownComponent
