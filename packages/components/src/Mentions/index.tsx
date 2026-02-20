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
import { isArray, isFunction, isString } from '../_util/is'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { MentionsProps } from './interface'

/** 获取光标前的文本 */
function getBeforeSelectionText(input: HTMLTextAreaElement) {
  const { selectionStart } = input
  return input.value.slice(0, selectionStart ?? 0)
}

/** 获取最后一个 mention 前缀的位置 */
function getLastMeasureIndex(text: string, prefixes: string[]) {
  let lastIndex = -1
  let lastPrefix = ''
  prefixes.forEach((prefix) => {
    const idx = text.lastIndexOf(prefix)
    if (idx > lastIndex) {
      lastIndex = idx
      lastPrefix = prefix
    }
  })
  return { index: lastIndex, prefix: lastPrefix }
}

/** 搜索文本是否合法 */
function isValidSearch(text: string) {
  return !/\s/.test(text)
}

interface MeasureInfo {
  measuring: boolean
  index: number
  prefix: string
  text: string
}

const defaultProps: Partial<MentionsProps> = {
  prefix: '@',
  split: ' ',
  position: 'bl',
  alignTextarea: true,
}

function Mentions(
  baseProps: MentionsProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<MentionsProps>(
    baseProps,
    defaultProps as MentionsProps,
    (componentConfig?.Mentions ?? {}) as MentionsProps
  )

  const {
    className,
    style,
    placeholder,
    disabled,
    readOnly,
    rows,
    prefix: mentionPrefix = '@',
    split = ' ',
    options: propOptions,
    filterOption,
    notFoundContent: _notFoundContent,
    position: _position,
    getPopupContainer: _getPopupContainer,
    onChange,
    onSearch,
    onFocus,
    onBlur,
    ...rest
  } = props
  void rest

  const prefixCls = getPrefixCls('mentions')

  const prefixes = isArray(mentionPrefix)
    ? mentionPrefix
    : [mentionPrefix as string]

  const [value, setValue] = useMergeValue('', {
    defaultValue: props.defaultValue,
    value: props.value,
  })

  const [measureInfo, setMeasureInfo] = useState<MeasureInfo>({
    measuring: false,
    index: -1,
    prefix: '',
    text: '',
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 合并 ref
  const mergedRef = (node: HTMLTextAreaElement) => {
    ;(
      textareaRef as React.MutableRefObject<HTMLTextAreaElement | null>
    ).current = node
    if (typeof ref === 'function') ref(node)
    else if (ref)
      (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node
  }

  // 标准化选项
  const options = useMemo(() => {
    if (!propOptions) return []
    return propOptions.map((opt) => {
      if (isString(opt) || typeof opt === 'number') {
        return { value: String(opt), label: String(opt) }
      }
      return {
        value: String(opt.value),
        label: opt.label || String(opt.value),
        disabled: opt.disabled,
      }
    })
  }, [propOptions])

  // 过滤选项
  const filteredOptions = useMemo(() => {
    if (!measureInfo.measuring) return []
    if (filterOption === false) return options
    return options.filter((opt) => {
      if (isFunction(filterOption)) {
        return filterOption(
          measureInfo.text,
          opt as { label: React.ReactNode; value: string | number }
        )
      }
      const label = String(opt.label || opt.value)
      return label.toLowerCase().includes(measureInfo.text.toLowerCase())
    })
  }, [options, measureInfo.measuring, measureInfo.text, filterOption])

  /* eslint-disable react-hooks/preserve-manual-memoization */
  const handleOptionSelect = useCallback(
    (optValue: string) => {
      const textarea = textareaRef.current
      if (!textarea) return

      const { index, prefix } = measureInfo
      const beforeText = value.slice(0, index)
      const afterText = value.slice(
        textarea.selectionStart ??
          index + prefix.length + measureInfo.text.length
      )
      const insertText = `${prefix}${optValue}${split}`
      const newValue = `${beforeText}${insertText}${afterText}`

      setValue(newValue)
      onChange?.(newValue)

      setMeasureInfo({ measuring: false, index: -1, prefix: '', text: '' })
      setActiveIndex(0)

      // 恢复光标位置
      requestAnimationFrame(() => {
        if (textarea) {
          const cursorPos = beforeText.length + insertText.length
          textarea.setSelectionRange(cursorPos, cursorPos)
          textarea.focus()
        }
      })
    },
    [measureInfo, value, split, setValue, onChange]
  )
  /* eslint-enable react-hooks/preserve-manual-memoization */

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onChange?.(newValue)
  }

  const handleKeyUp = (_e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const beforeText = getBeforeSelectionText(textarea)
    const { index, prefix } = getLastMeasureIndex(beforeText, prefixes)

    if (index >= 0) {
      const text = beforeText.slice(index + prefix.length)
      if (isValidSearch(text)) {
        setMeasureInfo({ measuring: true, index, prefix, text })
        onSearch?.(text, prefix)
        return
      }
    }
    setMeasureInfo({ measuring: false, index: -1, prefix: '', text: '' })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!measureInfo.measuring || filteredOptions.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % filteredOptions.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(
        (prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length
      )
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const opt = filteredOptions[activeIndex]
      if (opt && !opt.disabled) {
        handleOptionSelect(opt.value)
      }
    } else if (e.key === 'Escape') {
      setMeasureInfo({ measuring: false, index: -1, prefix: '', text: '' })
    }
  }

  const handleBlurInternal = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setTimeout(() => {
      setMeasureInfo({ measuring: false, index: -1, prefix: '', text: '' })
    }, 150)
    onBlur?.(e)
  }

  const classString = cs(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled,
  })

  const showDropdown = measureInfo.measuring && filteredOptions.length > 0

  return (
    <div className={classString} style={style}>
      <textarea
        ref={mergedRef}
        className={`${prefixCls}-textarea`}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        rows={rows}
        onChange={handleTextAreaChange}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={handleBlurInternal}
      />
      {showDropdown && (
        <div ref={dropdownRef} className={`${prefixCls}-popup`}>
          <ul className={`${prefixCls}-popup-list`}>
            {filteredOptions.map((opt, index) => (
              <li
                key={opt.value}
                className={cs(`${prefixCls}-option`, {
                  [`${prefixCls}-option-active`]: index === activeIndex,
                  [`${prefixCls}-option-disabled`]: opt.disabled,
                })}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => !opt.disabled && handleOptionSelect(opt.value)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const ForwardRefMentions = forwardRef<HTMLTextAreaElement, MentionsProps>(
  Mentions
)
ForwardRefMentions.displayName = 'Mentions'

export default ForwardRefMentions
export type { MentionsProps }
