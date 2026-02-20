import { createContext, forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { RadioGroupProps, RadioProps } from './interface'

interface RadioGroupContextType {
  value?: string | number
  disabled?: boolean
  type?: 'radio' | 'button'
  onChange?: (value: string | number) => void
}

const RadioGroupContext = createContext<RadioGroupContextType>({})

const Radio = forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const {
    style,
    className,
    children,
    checked: propChecked,
    defaultChecked = false,
    disabled: propDisabled,
    value: radioValue,
    onChange,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('radio')
  const groupContext = useContext(RadioGroupContext)

  const isInGroup = groupContext.onChange !== undefined
  const disabled = propDisabled ?? groupContext.disabled
  const checked = isInGroup ? groupContext.value === radioValue : propChecked
  const type = groupContext.type || 'radio'

  const [mergedChecked] = useMergeValue(defaultChecked, {
    value: checked,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    onChange?.(true, e)
    if (isInGroup && radioValue !== undefined) {
      groupContext.onChange?.(radioValue)
    }
  }

  const classString = cs(
    prefixCls,
    {
      [`${prefixCls}-checked`]: mergedChecked,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-button`]: type === 'button',
    },
    className
  )

  return (
    <label ref={ref} className={classString} style={style} {...rest}>
      <input
        type="radio"
        className={`${prefixCls}-input`}
        checked={mergedChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      {type === 'radio' && <span className={`${prefixCls}-icon`} />}
      {children && <span className={`${prefixCls}-label`}>{children}</span>}
    </label>
  )
})
Radio.displayName = 'Radio'

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const {
    style,
    className,
    children,
    value: propValue,
    defaultValue,
    options,
    direction = 'horizontal',
    type = 'radio',
    size = 'default',
    disabled,
    onChange,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('radio-group')

  const [value, setValue] = useMergeValue<string | number | undefined>(
    undefined,
    {
      defaultValue,
      value: propValue,
    }
  )

  const handleChange = (v: string | number) => {
    setValue(v)
    onChange?.(v)
  }

  const classString = cs(
    prefixCls,
    `${prefixCls}-direction-${direction}`,
    `${prefixCls}-type-${type}`,
    `${prefixCls}-size-${size}`,
    className
  )

  return (
    <RadioGroupContext.Provider
      value={{ value, disabled, type, onChange: handleChange }}
    >
      <div ref={ref} className={classString} style={style} {...rest}>
        {options
          ? options.map((opt) => {
              const option =
                typeof opt === 'object' ? opt : { label: opt, value: opt }
              return (
                <Radio
                  key={String(option.value)}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </Radio>
              )
            })
          : children}
      </div>
    </RadioGroupContext.Provider>
  )
})
RadioGroup.displayName = 'RadioGroup'

type RadioComponentType = typeof Radio & {
  Group: typeof RadioGroup
}

const RadioComponent = Radio as RadioComponentType
RadioComponent.Group = RadioGroup

export default RadioComponent
export { RadioGroup }
export type { RadioGroupProps, RadioProps }
