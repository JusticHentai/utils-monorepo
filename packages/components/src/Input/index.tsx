import { forwardRef, useContext, useRef } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import {
  InputGroupProps,
  InputPasswordProps,
  InputProps,
  InputSearchProps,
  TextAreaProps,
} from './interface'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    style,
    className,
    size = 'default',
    allowClear,
    disabled,
    readOnly,
    error,
    status,
    prefix,
    suffix,
    addBefore,
    addAfter,
    defaultValue = '',
    value: propValue,
    onChange,
    onPressEnter,
    onClear,
    maxLength,
    showWordLimit,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('input')

  const [value, setValue] = useMergeValue('', {
    defaultValue,
    value: propValue,
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const mergedRef = (node: HTMLInputElement) => {
    ;(inputRef as React.MutableRefObject<HTMLInputElement | null>).current =
      node
    if (typeof ref === 'function') ref(node)
    else if (ref)
      (ref as React.MutableRefObject<HTMLInputElement | null>).current = node
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onChange?.(newValue, e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter?.(e)
    }
    rest.onKeyDown?.(e)
  }

  const handleClear = () => {
    setValue('')
    onClear?.()
    onChange?.('', {
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>)
    inputRef.current?.focus()
  }

  const classString = cs(
    `${prefixCls}-wrapper`,
    `${prefixCls}-size-${size}`,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-error`]: error || status === 'error',
      [`${prefixCls}-warning`]: status === 'warning',
      [`${prefixCls}-has-prefix`]: prefix,
      [`${prefixCls}-has-suffix`]: suffix || allowClear || showWordLimit,
    },
    className
  )

  const inputNode = (
    <div className={classString} style={style}>
      {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
      <input
        ref={mergedRef}
        className={prefixCls}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...rest}
      />
      {allowClear && value && !disabled && (
        <span className={`${prefixCls}-clear-icon`} onClick={handleClear}>
          ×
        </span>
      )}
      {showWordLimit && maxLength && (
        <span
          className={`${prefixCls}-word-limit`}
        >{`${value.length}/${maxLength}`}</span>
      )}
      {suffix && <span className={`${prefixCls}-suffix`}>{suffix}</span>}
    </div>
  )

  if (addBefore || addAfter) {
    return (
      <div className={cs(`${prefixCls}-group`, className)}>
        {addBefore && (
          <span className={`${prefixCls}-group-addbefore`}>{addBefore}</span>
        )}
        {inputNode}
        {addAfter && (
          <span className={`${prefixCls}-group-addafter`}>{addAfter}</span>
        )}
      </div>
    )
  }

  return inputNode
})
Input.displayName = 'Input'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      style,
      className,
      defaultValue = '',
      value: propValue,
      onChange,
      disabled,
      maxLength,
      showWordLimit,
      allowClear,
      autoSize: _autoSize,
      status,
      ...rest
    } = props

    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('textarea')

    const [value, setValue] = useMergeValue('', {
      defaultValue,
      value: propValue,
    })

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      setValue(newValue)
      onChange?.(newValue, e)
    }

    const classString = cs(
      `${prefixCls}-wrapper`,
      {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-error`]: status === 'error',
        [`${prefixCls}-warning`]: status === 'warning',
      },
      className
    )

    return (
      <div className={classString} style={style}>
        <textarea
          ref={ref}
          className={prefixCls}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          {...rest}
        />
        {allowClear && value && !disabled && (
          <span
            className={`${prefixCls}-clear-icon`}
            onClick={() => {
              setValue('')
              onChange?.('', {} as React.ChangeEvent<HTMLTextAreaElement>)
            }}
          >
            ×
          </span>
        )}
        {showWordLimit && maxLength && (
          <span
            className={`${prefixCls}-word-limit`}
          >{`${value.length}/${maxLength}`}</span>
        )}
      </div>
    )
  }
)
TextArea.displayName = 'TextArea'

const Search = forwardRef<HTMLInputElement, InputSearchProps>((props, ref) => {
  const { searchButton, onSearch, loading, ...rest } = props
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('input-search')

  const [value, setValue] = useMergeValue('', {
    defaultValue: rest.defaultValue,
    value: rest.value,
  })

  const handleSearch = () => {
    onSearch?.(value)
  }

  return (
    <div className={prefixCls}>
      <Input
        ref={ref}
        {...rest}
        value={value}
        onChange={(v, e) => {
          setValue(v)
          rest.onChange?.(v, e)
        }}
        onPressEnter={() => handleSearch()}
        suffix={
          !searchButton ? (
            <span className={`${prefixCls}-icon`} onClick={handleSearch}>
              {loading ? '...' : '🔍'}
            </span>
          ) : undefined
        }
      />
      {searchButton && (
        <button
          className={`${prefixCls}-btn`}
          onClick={handleSearch}
          disabled={loading}
        >
          {searchButton === true ? '搜索' : searchButton}
        </button>
      )}
    </div>
  )
})
Search.displayName = 'InputSearch'

const Password = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const {
      defaultVisibility = false,
      visibility: propVisibility,
      onVisibilityChange,
      visibilityToggle = true,
      ...rest
    } = props
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('input-password')

    const [visibility, setVisibility] = useMergeValue(defaultVisibility, {
      value: propVisibility,
    })

    const toggle = () => {
      const newVal = !visibility
      setVisibility(newVal)
      onVisibilityChange?.(newVal)
    }

    return (
      <Input
        ref={ref}
        {...rest}
        className={cs(prefixCls, rest.className)}
        type={visibility ? 'text' : 'password'}
        suffix={
          visibilityToggle ? (
            <span className={`${prefixCls}-visibility`} onClick={toggle}>
              {visibility ? '👁' : '👁‍🗨'}
            </span>
          ) : undefined
        }
      />
    )
  }
)
Password.displayName = 'InputPassword'

const Group = forwardRef<HTMLDivElement, InputGroupProps>((props, ref) => {
  const { style, className, children, compact, ...rest } = props
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('input-group')

  return (
    <div
      ref={ref}
      className={cs(
        prefixCls,
        { [`${prefixCls}-compact`]: compact },
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  )
})
Group.displayName = 'InputGroup'

type InputComponentType = typeof Input & {
  TextArea: typeof TextArea
  Search: typeof Search
  Password: typeof Password
  Group: typeof Group
}

const InputComponent = Input as InputComponentType
InputComponent.TextArea = TextArea
InputComponent.Search = Search
InputComponent.Password = Password
InputComponent.Group = Group

export default InputComponent
export { Group, Password, Search, TextArea }
export type {
  InputGroupProps,
  InputPasswordProps,
  InputProps,
  InputSearchProps,
  TextAreaProps,
}
