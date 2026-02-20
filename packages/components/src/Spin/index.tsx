import { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { SpinProps } from './interface'

const DotLoading = ({
  size = 20,
  prefixCls,
}: {
  size?: number
  prefixCls: string
}) => (
  <div className={`${prefixCls}-dot`} style={{ width: size, height: size }}>
    {[0, 1, 2, 3].map((i) => (
      <div key={i} className={`${prefixCls}-dot-item`} />
    ))}
  </div>
)

const Spin = forwardRef<HTMLDivElement, SpinProps>((props, ref) => {
  const {
    style,
    className,
    children,
    loading = true,
    size,
    icon,
    element,
    tip,
    delay,
    block,
    dot: _dot,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('spin')

  const [shouldShow, setShouldShow] = useState(!delay ? loading : false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (delay) {
      if (loading) {
        timerRef.current = setTimeout(() => setShouldShow(true), delay)
      } else {
        clearTimeout(timerRef.current)
        setShouldShow(false)
      }
    } else {
      setShouldShow(loading)
    }
    return () => clearTimeout(timerRef.current)
  }, [loading, delay])
  /* eslint-enable react-hooks/set-state-in-effect */

  const renderIndicator = () => {
    if (icon) return <span className={`${prefixCls}-icon`}>{icon}</span>
    if (element) return element
    return <DotLoading size={size} prefixCls={prefixCls} />
  }

  const spinElement = (
    <div className={`${prefixCls}-loading`}>
      {renderIndicator()}
      {tip && <div className={`${prefixCls}-tip`}>{tip}</div>}
    </div>
  )

  if (children) {
    return (
      <div
        ref={ref}
        className={cs(
          prefixCls,
          `${prefixCls}-with-children`,
          { [`${prefixCls}-block`]: block },
          className
        )}
        style={style}
        {...rest}
      >
        {children}
        {shouldShow && (
          <div className={`${prefixCls}-overlay`}>{spinElement}</div>
        )}
      </div>
    )
  }

  if (!shouldShow) return null

  return (
    <div ref={ref} className={cs(prefixCls, className)} style={style} {...rest}>
      {spinElement}
    </div>
  )
})

Spin.displayName = 'Spin'
export default Spin
export type { SpinProps }
