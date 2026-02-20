import { forwardRef, ReactNode, useContext, useState } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { RateProps } from './interface'

const Rate = forwardRef<HTMLDivElement, RateProps>((props, ref) => {
  const {
    style,
    className,
    defaultValue = 0,
    value: propValue,
    count = 5,
    allowHalf,
    allowClear = true,
    disabled,
    readonly: readOnly,
    character,
    grading: _grading,
    tooltips,
    onChange,
    onHoverChange,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('rate')

  const [value, setValue] = useMergeValue(defaultValue, { value: propValue })
  const [hoverIndex, setHoverIndex] = useState(0)

  const handleClick = (index: number) => {
    if (disabled || readOnly) return
    let newValue = index
    if (allowClear && value === index) {
      newValue = 0
    }
    setValue(newValue)
    onChange?.(newValue)
  }

  const handleMouseEnter = (index: number) => {
    if (disabled || readOnly) return
    setHoverIndex(index)
    onHoverChange?.(index)
  }

  const handleMouseLeave = () => {
    setHoverIndex(0)
    onHoverChange?.(0)
  }

  const displayValue = hoverIndex || value

  const classString = cs(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-readonly`]: readOnly,
    },
    className
  )

  const renderChar = (index: number): ReactNode => {
    if (typeof character === 'function')
      return character(index)
    return character || '★'
  }

  return (
    <div
      ref={ref}
      className={classString}
      style={style}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {Array.from({ length: count }).map((_, i) => {
        const index = i + 1
        const halfIndex = i + 0.5
        const isActive = displayValue >= index
        const isHalf =
          allowHalf && displayValue >= halfIndex && displayValue < index

        return (
          <div
            key={i}
            className={cs(`${prefixCls}-character`, {
              [`${prefixCls}-character-full`]: isActive,
              [`${prefixCls}-character-half`]: isHalf,
            })}
            title={tooltips?.[i]}
          >
            {allowHalf && (
              <span
                className={`${prefixCls}-character-left`}
                onClick={() => handleClick(halfIndex)}
                onMouseEnter={() => handleMouseEnter(halfIndex)}
              >
                {renderChar(i)}
              </span>
            )}
            <span
              className={allowHalf ? `${prefixCls}-character-right` : undefined}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              {renderChar(i)}
            </span>
          </div>
        )
      })}
    </div>
  )
})

Rate.displayName = 'Rate'
export default Rate
export type { RateProps }
