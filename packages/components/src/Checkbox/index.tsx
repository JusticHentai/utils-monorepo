import { createContext, forwardRef, useCallback, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { CheckboxGroupProps, CheckboxProps } from './interface'

interface CheckboxGroupContextType {
  value?: (string | number)[]
  disabled?: boolean
  onChange?: (value: string | number, checked: boolean) => void
}

const CheckboxGroupContext = createContext<CheckboxGroupContextType>({})

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const {
    style,
    className,
    children,
    checked: propChecked,
    defaultChecked = false,
    disabled: propDisabled,
    indeterminate,
    value: checkboxValue,
    onChange,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('checkbox')
  const groupContext = useContext(CheckboxGroupContext)

  const isInGroup = groupContext.onChange !== undefined
  const disabled = propDisabled ?? groupContext.disabled
  const checked = isInGroup
    ? checkboxValue !== undefined &&
      (groupContext.value || []).includes(checkboxValue)
    : undefined

  const [mergedChecked, setMergedChecked] = useMergeValue(defaultChecked, {
    value: checked ?? propChecked,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    const newChecked = e.target.checked
    setMergedChecked(newChecked)
    onChange?.(newChecked, e)
    if (isInGroup && checkboxValue !== undefined) {
      groupContext.onChange?.(checkboxValue, newChecked)
    }
  }

  const classString = cs(
    prefixCls,
    {
      [`${prefixCls}-checked`]: mergedChecked,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-indeterminate`]: indeterminate,
    },
    className
  )

  return (
    <label ref={ref} className={classString} style={style} {...rest}>
      <input
        type="checkbox"
        className={`${prefixCls}-input`}
        checked={mergedChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={`${prefixCls}-icon`} />
      {children && <span className={`${prefixCls}-label`}>{children}</span>}
    </label>
  )
})
Checkbox.displayName = 'Checkbox'

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    const {
      style,
      className,
      children,
      value: propValue,
      defaultValue = [],
      options,
      direction = 'horizontal',
      disabled,
      onChange,
      ...rest
    } = props

    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('checkbox-group')

    const [value, setValue] = useMergeValue<(string | number)[]>([], {
      defaultValue,
      value: propValue,
    })

    const handleChange = useCallback(
      (v: string | number, checked: boolean) => {
        const newValue = checked
          ? [...value, v]
          : value.filter((item) => item !== v)
        setValue(newValue)
        onChange?.(newValue)
      },
      [value, setValue, onChange]
    )

    const classString = cs(
      prefixCls,
      `${prefixCls}-direction-${direction}`,
      className
    )

    return (
      <CheckboxGroupContext.Provider
        value={{ value, disabled, onChange: handleChange }}
      >
        <div ref={ref} className={classString} style={style} {...rest}>
          {options
            ? options.map((opt) => {
                const option =
                  typeof opt === 'object' ? opt : { label: opt, value: opt }
                return (
                  <Checkbox
                    key={String(option.value)}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </Checkbox>
                )
              })
            : children}
        </div>
      </CheckboxGroupContext.Provider>
    )
  }
)
CheckboxGroup.displayName = 'CheckboxGroup'

type CheckboxComponentType = typeof Checkbox & {
  Group: typeof CheckboxGroup
}

const CheckboxComponent = Checkbox as CheckboxComponentType
CheckboxComponent.Group = CheckboxGroup

export default CheckboxComponent
export { CheckboxGroup }
export type { CheckboxGroupProps, CheckboxProps }
