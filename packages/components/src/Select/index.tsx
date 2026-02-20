import {
  Children,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import Empty from '../Empty'
import Spin from '../Spin'
import Trigger from '../Trigger'
import { cs, isArray, isFunction } from '../_util'
import { useMergeValue } from '../_util/hooks'
import {
  OptGroupProps,
  OptionProps,
  SelectOption,
  SelectProps,
} from './interface'

const Option = (_props: OptionProps) => null
Option.displayName = 'Option'
Option.__IS_SELECT_OPTION = true

const OptGroup = (_props: OptGroupProps) => null
OptGroup.displayName = 'OptGroup'
OptGroup.__IS_SELECT_OPT_GROUP = true

const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    style,
    className,
    children,
    value: propValue,
    defaultValue,
    options: propOptions,
    mode,
    size = 'default',
    disabled,
    showSearch,
    allowClear,
    placeholder,
    loading,
    notFoundContent,
    position = 'bottom',
    maxTagCount,
    onChange,
    onSearch,
    onVisibleChange,
    onClear,
    onDeselect,
    getPopupContainer,
    dropdownClassName,
    dropdownStyle,
    dropdownRender,
    filterOption = true,
    defaultPopupVisible,
    popupVisible: propPopupVisible,
    unmountOnExit = true,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('select')

  const isMultiple = mode === 'multiple' || mode === 'tags'

  const [value, setValue] = useMergeValue(
    isMultiple
      ? ([] as (string | number)[])
      : (undefined as unknown as string | number | (string | number)[]),
    { defaultValue, value: propValue }
  )

  const [popupVisible, setPopupVisible] = useMergeValue(false, {
    defaultValue: defaultPopupVisible,
    value: propPopupVisible,
  })
  const [searchValue, setSearchValue] = useState('')

  // 从 children 或 options 获取选项列表
  const options = useMemo(() => {
    if (propOptions) return propOptions
    const opts: SelectOption[] = []
    Children.forEach(children, (child: any) => {
      if (
        child?.type?.displayName === 'Option' ||
        child?.type?.__IS_SELECT_OPTION
      ) {
        opts.push({
          value: child.props.value,
          label: child.props.children,
          disabled: child.props.disabled,
          extra: child.props.extra,
        })
      }
    })
    return opts
  }, [propOptions, children])

  // 过滤选项
  const filteredOptions = useMemo(() => {
    if (!searchValue || !filterOption) return options
    return options.filter((opt) => {
      if (isFunction(filterOption)) {
        return (filterOption as (v: string, o: SelectOption) => boolean)(
          searchValue,
          opt
        )
      }
      const label = String(opt.label || opt.value)
      return label.toLowerCase().includes(searchValue.toLowerCase())
    })
  }, [options, searchValue, filterOption])

  const getLabel = useCallback(
    (val: string | number) => {
      const opt = options.find((o) => o.value === val)
      return opt?.label || val
    },
    [options]
  )

  const handleSelect = (optValue: string | number) => {
    if (isMultiple) {
      const currentValues = isArray(value) ? (value as (string | number)[]) : []
      const exists = currentValues.includes(optValue)
      let newValues: (string | number)[]
      if (exists) {
        newValues = currentValues.filter((v) => v !== optValue)
        onDeselect?.(optValue)
      } else {
        newValues = [...currentValues, optValue]
      }
      setValue(newValues)
      onChange?.(newValues)
    } else {
      setValue(optValue)
      onChange?.(optValue)
      setPopupVisible(false)
      onVisibleChange?.(false)
    }
    setSearchValue('')
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    const emptyValue = isMultiple
      ? []
      : (undefined as unknown as string | number)
    setValue(emptyValue)
    onChange?.(emptyValue as string | number | (string | number)[])
    onClear?.()
  }

  const handleVisibleChange = (visible: boolean) => {
    setPopupVisible(visible)
    onVisibleChange?.(visible)
    if (!visible) setSearchValue('')
  }

  const renderValue = () => {
    if (isMultiple && isArray(value)) {
      const tags = value as (string | number)[]
      const displayTags = maxTagCount ? tags.slice(0, maxTagCount) : tags
      const restCount = maxTagCount ? tags.length - maxTagCount : 0

      if (tags.length === 0 && !searchValue) {
        return <span className={`${prefixCls}-placeholder`}>{placeholder}</span>
      }

      return (
        <div className={`${prefixCls}-tags`}>
          {displayTags.map((v) => (
            <span key={String(v)} className={`${prefixCls}-tag`}>
              {getLabel(v)}
              <span
                className={`${prefixCls}-tag-close`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelect(v)
                }}
              >
                ×
              </span>
            </span>
          ))}
          {restCount > 0 && (
            <span className={`${prefixCls}-tag`}>+{restCount}</span>
          )}
          {showSearch && (
            <input
              className={`${prefixCls}-search-input`}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
                onSearch?.(e.target.value)
              }}
              placeholder={tags.length === 0 ? placeholder : ''}
            />
          )}
        </div>
      )
    }

    if (showSearch && popupVisible) {
      return (
        <input
          className={`${prefixCls}-search-input`}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
            onSearch?.(e.target.value)
          }}
          placeholder={
            value !== undefined
              ? String(getLabel(value as string | number))
              : placeholder
          }
          autoFocus
        />
      )
    }

    if (value !== undefined && value !== null) {
      return (
        <span className={`${prefixCls}-value`}>
          {getLabel(value as string | number)}
        </span>
      )
    }

    return <span className={`${prefixCls}-placeholder`}>{placeholder}</span>
  }

  const menu = (
    <div
      className={cs(`${prefixCls}-popup`, dropdownClassName)}
      style={dropdownStyle}
    >
      {loading ? (
        <div className={`${prefixCls}-popup-loading`}>
          <Spin size={20} />
        </div>
      ) : filteredOptions.length === 0 ? (
        <div className={`${prefixCls}-popup-empty`}>
          {notFoundContent || <Empty description="暂无数据" />}
        </div>
      ) : (
        <ul className={`${prefixCls}-popup-list`}>
          {filteredOptions.map((opt) => {
            const isSelected = isMultiple
              ? isArray(value) &&
                (value as (string | number)[]).includes(opt.value)
              : value === opt.value
            return (
              <li
                key={String(opt.value)}
                className={cs(`${prefixCls}-option`, {
                  [`${prefixCls}-option-selected`]: isSelected,
                  [`${prefixCls}-option-disabled`]: opt.disabled,
                })}
                onClick={() => !opt.disabled && handleSelect(opt.value)}
              >
                {opt.label || opt.value}
                {isSelected && isMultiple && (
                  <span className={`${prefixCls}-option-check`}>✓</span>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )

  const classString = cs(
    prefixCls,
    `${prefixCls}-size-${size}`,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-multiple`]: isMultiple,
      [`${prefixCls}-open`]: popupVisible,
    },
    className
  )

  const hasValue = isMultiple
    ? isArray(value) && (value as (string | number)[]).length > 0
    : value !== undefined && value !== null

  return (
    <Trigger
      trigger="click"
      position={position === 'top' ? 'top' : 'bottom'}
      disabled={disabled}
      popupVisible={popupVisible}
      onVisibleChange={handleVisibleChange}
      autoAlignPopupWidth
      getPopupContainer={getPopupContainer}
      unmountOnExit={unmountOnExit}
      popup={() => (dropdownRender ? dropdownRender(menu) : menu)}
    >
      <div ref={ref} className={classString} style={style} {...rest}>
        <div className={`${prefixCls}-view`}>{renderValue()}</div>
        {allowClear && hasValue && !disabled && (
          <span className={`${prefixCls}-clear`} onClick={handleClear}>
            ×
          </span>
        )}
        <span className={`${prefixCls}-arrow`}>{loading ? '⟳' : '▼'}</span>
      </div>
    </Trigger>
  )
})

Select.displayName = 'Select'

type SelectComponentType = typeof Select & {
  Option: typeof Option
  OptGroup: typeof OptGroup
}

const SelectComponent = Select as SelectComponentType
SelectComponent.Option = Option
SelectComponent.OptGroup = OptGroup

export default SelectComponent
export { OptGroup, Option }
export type { OptGroupProps, OptionProps, SelectOption, SelectProps }
