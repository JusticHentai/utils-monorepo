import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { SwitchProps } from './interface'

const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const {
    style,
    className,
    checked: propChecked,
    defaultChecked = false,
    disabled,
    loading,
    size = 'default',
    type = 'circle',
    checkedText,
    uncheckedText,
    checkedIcon,
    uncheckedIcon,
    onChange,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('switch')

  const [checked, setChecked] = useMergeValue(defaultChecked, {
    value: propChecked,
  })

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || loading) return
    const newChecked = !checked
    setChecked(newChecked)
    onChange?.(newChecked, e)
  }

  const classString = cs(
    prefixCls,
    `${prefixCls}-type-${type}`,
    `${prefixCls}-size-${size}`,
    {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
    },
    className
  )

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      className={classString}
      style={style}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      <span className={`${prefixCls}-dot`}>
        {loading && <span className={`${prefixCls}-dot-loading`}>⟳</span>}
        {!loading && (checked ? checkedIcon : uncheckedIcon)}
      </span>
      {(checkedText || uncheckedText) && (
        <span className={`${prefixCls}-text`}>
          {checked ? checkedText : uncheckedText}
        </span>
      )}
    </button>
  )
})

Switch.displayName = 'Switch'
export default Switch
export type { SwitchProps }
