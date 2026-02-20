import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { useMergeValue } from '../_util/hooks'
import { isArray, isObject } from '../_util/is'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import Tag from '../Tag'
import { InputTagProps, ObjectValueType } from './interface'

type InputTagHandle = {
  focus: () => void
  blur: () => void
}

function formatValue(values: (string | ObjectValueType)[]): ObjectValueType[] {
  if (!isArray(values)) return []
  return values.map((v) => {
    if (isObject(v)) return v as ObjectValueType
    return { value: String(v), label: String(v), closable: true }
  })
}

const defaultProps: Partial<InputTagProps> = {
  animation: true,
  validate: (inputValue, values) => {
    if (!inputValue || !inputValue.trim()) return false
    return !values.includes(inputValue)
  },
}

function InputTag(baseProps: InputTagProps, ref: React.Ref<InputTagHandle>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<InputTagProps>(
    baseProps,
    defaultProps as InputTagProps,
    (componentConfig?.InputTag ?? {}) as InputTagProps
  )

  const {
    className,
    style,
    size = 'default',
    placeholder,
    disabled,
    readOnly,
    allowClear,
    saveOnBlur,
    labelInValue,
    disableInput,
    autoFocus,
    prefix,
    suffix,
    addBefore,
    addAfter,
    icon,
    tokenSeparators,
    validate,
    renderTag,
    tagClassName,
    status,
    error,
    maxTagCount,
    onRemove,
    onChange,
    onBlur,
    onFocus,
    onPressEnter,
    onInputChange,
    onKeyDown,
    onPaste,
    onClear,
    onClick,
    ...rest
  } = props

  const prefixCls = getPrefixCls('input-tag')

  const [value, setValue] = useMergeValue<(string | ObjectValueType)[]>([], {
    defaultValue: props.defaultValue,
    value: props.value,
  })

  const [inputValue, setInputValue] = useMergeValue('', {
    defaultValue: props.defaultInputValue,
    value: props.inputValue,
  })

  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const mirrorRef = useRef<HTMLSpanElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
  }))

  const objectValues = formatValue(value as (string | ObjectValueType)[])

  const valueChangeHandler = useCallback(
    (
      newValues: ObjectValueType[],
      reason: 'add' | 'remove' | 'clear' | 'sort'
    ) => {
      const result = labelInValue
        ? newValues
        : newValues.map((v) => v.value || '')
      setValue(result as (string | ObjectValueType)[])
      onChange?.(result as never[], reason)
    },
    [labelInValue, onChange, setValue]
  )

  const tryAddInputValueToTag = useCallback(async () => {
    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    if (validate) {
      const result = await Promise.resolve(
        validate(trimmedValue, value as string[])
      )
      if (!result) return
    }

    const newTag: ObjectValueType = {
      value: trimmedValue,
      label: trimmedValue,
      closable: true,
    }
    valueChangeHandler([...objectValues, newTag], 'add')
    setInputValue('')
    onInputChange?.('')
  }, [
    inputValue,
    value,
    validate,
    objectValues,
    valueChangeHandler,
    setInputValue,
    onInputChange,
  ])

  const handleTokenSeparators = useCallback(
    (val: string) => {
      if (!tokenSeparators?.length) return false
      const values = val.split(
        new RegExp(
          `[${tokenSeparators.map((s) => s.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&')).join('')}]`
        )
      )
      const validValues = values.filter((v) => v.trim())
      if (validValues.length > 1) {
        const newTags = validValues.map((v) => ({
          value: v.trim(),
          label: v.trim(),
          closable: true,
        }))
        valueChangeHandler([...objectValues, ...newTags], 'add')
        setInputValue('')
        onInputChange?.('')
        return true
      }
      return false
    },
    [
      tokenSeparators,
      objectValues,
      valueChangeHandler,
      setInputValue,
      onInputChange,
    ]
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (handleTokenSeparators(newValue)) return
    setInputValue(newValue)
    onInputChange?.(newValue, e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      tryAddInputValueToTag()
      onPressEnter?.(e)
    } else if (e.key === 'Backspace' && !inputValue) {
      // 删除最后一个可关闭的标签
      const lastClosableIndex = [...objectValues]
        .reverse()
        .findIndex((v) => v.closable !== false)
      if (lastClosableIndex !== -1) {
        const actualIndex = objectValues.length - 1 - lastClosableIndex
        const removed = objectValues[actualIndex]
        const newValues = objectValues.filter((_, i) => i !== actualIndex)
        onRemove?.(
          removed as never,
          actualIndex,
          e as unknown as React.MouseEvent
        )
        valueChangeHandler(newValues, 'remove')
      }
    }
    onKeyDown?.(e)
  }

  const handleTagClose = (index: number, e: React.MouseEvent) => {
    if (disabled || readOnly) return
    const removed = objectValues[index]
    const newValues = objectValues.filter((_, i) => i !== index)
    onRemove?.(removed as never, index, e)
    valueChangeHandler(newValues, 'remove')
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    valueChangeHandler([], 'clear')
    setInputValue('')
    onClear?.()
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    if (saveOnBlur && inputValue) {
      tryAddInputValueToTag()
    }
    onBlur?.(e)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && !readOnly) {
      inputRef.current?.focus()
    }
    onClick?.(e)
  }

  // 自动调整输入框宽度
  useEffect(() => {
    if (mirrorRef.current && inputRef.current) {
      const width = mirrorRef.current.offsetWidth
      inputRef.current.style.width = `${Math.max(width + 4, 4)}px`
    }
  }, [inputValue])

  const getDisplayTags = () => {
    let displayValues = objectValues
    let restCount = 0
    const tagCount =
      typeof maxTagCount === 'object' ? maxTagCount.count : maxTagCount
    if (typeof tagCount === 'number' && objectValues.length > tagCount) {
      displayValues = objectValues.slice(0, tagCount)
      restCount = objectValues.length - tagCount
    }
    return { displayValues, restCount }
  }

  const { displayValues, restCount } = getDisplayTags()

  const classString = cs(
    prefixCls,
    `${prefixCls}-size-${size}`,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-focused`]: focused,
      [`${prefixCls}-error`]: error || status === 'error',
      [`${prefixCls}-warning`]: status === 'warning',
      [`${prefixCls}-has-prefix`]: prefix,
      [`${prefixCls}-has-suffix`]: suffix || allowClear,
    },
    className
  )

  const innerContent = (
    <div className={cs(`${prefixCls}-inner`)} onClick={handleClick}>
      {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
      <span className={`${prefixCls}-content`}>
        {displayValues.map((item, index) => {
          const closable = item.closable !== false && !disabled && !readOnly
          if (renderTag) {
            return renderTag(
              {
                value: item as never,
                label: item.label,
                closable,
                onClose: (e) => handleTagClose(index, e),
              },
              index,
              objectValues
            )
          }
          return (
            <Tag
              key={`${item.value}-${index}`}
              className={cs(`${prefixCls}-tag`, tagClassName)}
              closable={closable}
              onClose={(e) => {
                e?.stopPropagation()
                handleTagClose(index, e as React.MouseEvent)
              }}
            >
              {item.label || item.value}
            </Tag>
          )
        })}
        {restCount > 0 && (
          <Tag className={`${prefixCls}-tag-rest`}>+{restCount}</Tag>
        )}
        {!disableInput && (
          <>
            <input
              ref={inputRef}
              className={`${prefixCls}-input`}
              value={inputValue}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={objectValues.length === 0 ? placeholder : ''}
              autoFocus={autoFocus}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onPaste={onPaste}
            />
            <span ref={mirrorRef} className={`${prefixCls}-mirror`}>
              {inputValue || placeholder}
            </span>
          </>
        )}
      </span>
      {allowClear && objectValues.length > 0 && !disabled && (
        <span className={`${prefixCls}-clear-icon`} onClick={handleClear}>
          {icon?.clearIcon || '×'}
        </span>
      )}
      {suffix && <span className={`${prefixCls}-suffix`}>{suffix}</span>}
    </div>
  )

  if (addBefore || addAfter) {
    return (
      <div className={cs(`${prefixCls}-group`, className)} style={style}>
        {addBefore && (
          <span className={`${prefixCls}-group-addbefore`}>{addBefore}</span>
        )}
        <div className={classString}>{innerContent}</div>
        {addAfter && (
          <span className={`${prefixCls}-group-addafter`}>{addAfter}</span>
        )}
      </div>
    )
  }

  return (
    <div className={classString} style={style} {...rest}>
      {innerContent}
    </div>
  )
}

const ForwardRefInputTag = forwardRef<InputTagHandle, InputTagProps>(InputTag)
ForwardRefInputTag.displayName = 'InputTag'

export default ForwardRefInputTag
export type { InputTagProps, ObjectValueType }
