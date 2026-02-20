import { forwardRef, useCallback, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs, isUndefined } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { InputNumberProps } from './interface'

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const {
      style,
      className,
      defaultValue,
      value: propValue,
      min = -Infinity,
      max = Infinity,
      step = 1,
      precision,
      size = 'default',
      disabled,
      hideControl,
      mode = 'embed',
      prefix,
      suffix,
      formatter,
      parser,
      onChange,
      error,
      status,
      ...rest
    } = props

    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('input-number')

    const [value, setValue] = useMergeValue<number | undefined>(undefined, {
      defaultValue,
      value: propValue,
    })

    const clamp = useCallback(
      (val: number) => {
        let result = Math.max(min, Math.min(max, val))
        if (precision !== undefined) {
          result = Number(result.toFixed(precision))
        }
        return result
      },
      [min, max, precision]
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value
      if (raw === '' || raw === '-') {
        setValue(undefined as unknown as number)
        onChange?.(undefined)
        return
      }
      const parsed = parser ? Number(parser(raw)) : Number(raw)
      if (!isNaN(parsed)) {
        const clamped = clamp(parsed)
        setValue(clamped)
        onChange?.(clamped)
      }
    }

    const handleStep = (direction: 'up' | 'down') => {
      if (disabled) return
      const current = value ?? 0
      const newVal = direction === 'up' ? current + step : current - step
      const clamped = clamp(newVal)
      setValue(clamped)
      onChange?.(clamped)
    }

    const displayValue = (() => {
      if (isUndefined(value)) return ''
      if (formatter) return formatter(value)
      if (precision !== undefined) return value.toFixed(precision)
      return String(value)
    })()

    const classString = cs(
      prefixCls,
      `${prefixCls}-size-${size}`,
      `${prefixCls}-mode-${mode}`,
      {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-error`]: error || status === 'error',
        [`${prefixCls}-warning`]: status === 'warning',
      },
      className
    )

    return (
      <div className={classString} style={style}>
        {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
        {!hideControl && mode === 'button' && (
          <span
            className={cs(`${prefixCls}-step`, `${prefixCls}-step-down`)}
            onClick={() => handleStep('down')}
          >
            −
          </span>
        )}
        <input
          ref={ref}
          className={`${prefixCls}-input`}
          disabled={disabled}
          value={displayValue}
          onChange={handleChange}
          {...rest}
        />
        {!hideControl && mode === 'embed' && (
          <div className={`${prefixCls}-step-actions`}>
            <span
              className={`${prefixCls}-step-up`}
              onClick={() => handleStep('up')}
            >
              ▲
            </span>
            <span
              className={`${prefixCls}-step-down`}
              onClick={() => handleStep('down')}
            >
              ▼
            </span>
          </div>
        )}
        {!hideControl && mode === 'button' && (
          <span
            className={cs(`${prefixCls}-step`, `${prefixCls}-step-up`)}
            onClick={() => handleStep('up')}
          >
            +
          </span>
        )}
        {suffix && <span className={`${prefixCls}-suffix`}>{suffix}</span>}
      </div>
    )
  }
)

InputNumber.displayName = 'InputNumber'
export default InputNumber
export type { InputNumberProps }
