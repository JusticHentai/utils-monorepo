import React, {
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { useMergeValue } from '../_util/hooks'
import { isFunction, isString } from '../_util/is'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import Input from '../Input'
import { OptGroup, Option } from '../Select'
import Trigger from '../Trigger'
import { AutoCompleteProps } from './interface'

const defaultProps: Partial<AutoCompleteProps> = {
  defaultActiveFirstOption: true,
  triggerElement: <Input />,
}

function AutoComplete(
  baseProps: AutoCompleteProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<AutoCompleteProps>(
    baseProps,
    defaultProps as AutoCompleteProps,
    (componentConfig?.AutoComplete ?? {}) as AutoCompleteProps
  )

  const {
    className,
    style,
    children: _children,
    data,
    placeholder,
    disabled,
    allowClear,
    strict,
    loading: _loading,
    status,
    error,
    triggerElement,
    filterOption,
    dropdownRender,
    getPopupContainer,
    inputProps,
    defaultActiveFirstOption: _defaultActiveFirstOption,
    onSearch,
    onSelect,
    onChange,
    onPressEnter,
    onFocus,
    onBlur,
    ...rest
  } = props

  const prefixCls = getPrefixCls('auto-complete')

  const [value, setValue] = useMergeValue('', {
    defaultValue: props.defaultValue,
    value: props.value,
  })

  const [popupVisible, setPopupVisible] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // 构建选项列表
  const options = useMemo(() => {
    if (data) {
      return data
        .map((item) => {
          if (isString(item)) {
            return { value: item, label: item }
          }
          if (
            item &&
            typeof item === 'object' &&
            'value' in (item as Record<string, unknown>)
          ) {
            const obj = item as { value: string; name?: string }
            return { value: obj.value, label: obj.name || obj.value }
          }
          return null
        })
        .filter(Boolean) as { value: string; label: React.ReactNode }[]
    }
    return []
  }, [data])

  // 过滤选项
  const filteredOptions = useMemo(() => {
    if (!value || filterOption === false) return options
    return options.filter((opt) => {
      if (isFunction(filterOption)) {
        return (
          filterOption as (
            v: string,
            o: { value: string; label: React.ReactNode }
          ) => boolean
        )(value, opt)
      }
      const label = String(opt.label || opt.value)
      const v = value || ''
      return strict
        ? label.includes(v)
        : label.toLowerCase().includes(v.toLowerCase())
    })
  }, [options, value, filterOption, strict])

  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue)
      onChange?.(newValue)
      onSearch?.(newValue)
    },
    [setValue, onChange, onSearch]
  )

  const handleSelect = useCallback(
    (optValue: string) => {
      setValue(optValue)
      const opt = options.find((o) => o.value === optValue)
      onChange?.(optValue, opt)
      onSelect?.(optValue, opt)
      setPopupVisible(false)
    },
    [setValue, onChange, onSelect, options]
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter?.(e)
    }
    if (e.key === 'Escape') {
      inputRef.current?.blur()
      setPopupVisible(false)
    }
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setPopupVisible(true)
    onFocus?.(e)
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // 延迟关闭，让 option click 有机会触发
    setTimeout(() => setPopupVisible(false), 150)
    onBlur?.(e)
  }

  const classString = cs(prefixCls, className)

  const dropdownMenu = (
    <div className={`${prefixCls}-popup`}>
      {filteredOptions.length === 0 ? (
        <div className={`${prefixCls}-popup-empty`}>暂无数据</div>
      ) : (
        <ul className={`${prefixCls}-popup-list`}>
          {filteredOptions.map((opt) => (
            <li
              key={opt.value}
              className={cs(`${prefixCls}-option`, {
                [`${prefixCls}-option-selected`]: opt.value === value,
              })}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  const triggerContent = triggerElement
    ? isFunction(triggerElement)
      ? (triggerElement as (props: { value: string }) => React.ReactElement)({
          value,
        })
      : // eslint-disable-next-line react-hooks/refs
        React.cloneElement(triggerElement as React.ReactElement<Record<string, unknown>>, {
          ...inputProps,
          ref: inputRef,
          value,
          placeholder,
          disabled,
          allowClear,
          status: error ? 'error' : status,
          onChange: (v: string) => handleChange(v),
          onKeyDown: handleKeyDown,
          onFocus: handleInputFocus,
          onBlur: handleInputBlur,
        })
    : null

  return (
    <Trigger
      trigger="click"
      position="bottom"
      disabled={disabled}
      popupVisible={popupVisible && filteredOptions.length > 0}
      onVisibleChange={setPopupVisible}
      autoAlignPopupWidth
      getPopupContainer={getPopupContainer}
      unmountOnExit
      popup={() =>
        dropdownRender ? dropdownRender(dropdownMenu) : dropdownMenu
      }
    >
      <div ref={ref} className={classString} style={style} {...rest}>
        {triggerContent}
      </div>
    </Trigger>
  )
}

const ForwardRefAutoComplete = forwardRef<HTMLDivElement, AutoCompleteProps>(
  AutoComplete
)

const AutoCompleteComponent =
  ForwardRefAutoComplete as typeof ForwardRefAutoComplete & {
    Option: typeof Option
    OptGroup: typeof OptGroup
  }

AutoCompleteComponent.displayName = 'AutoComplete'
AutoCompleteComponent.Option = Option
AutoCompleteComponent.OptGroup = OptGroup

export default AutoCompleteComponent
export type { AutoCompleteProps }
