import React, {
  forwardRef,
  Fragment,
  useCallback,
  useContext,
  useRef,
} from 'react'
import cs from '../_util/classNames'
import { useMergeValue } from '../_util/hooks'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { VerificationCodeProps } from './interface'

const defaultProps: Partial<VerificationCodeProps> = {
  length: 6,
}

function useVerificationCode(options: {
  defaultValue?: string
  value?: string
  length: number
  onChange?: (value: string) => void
  onFinish?: (value: string) => void
  getInputRefList: () => (HTMLInputElement | null)[]
}) {
  const { length, onChange, onFinish, getInputRefList } = options

  const [value, setValue] = useMergeValue('', {
    defaultValue: options.defaultValue,
    value: options.value,
  })

  const filledValue = Array.from({ length }, (_, i) => value[i] || '')

  const focusInput = useCallback(
    (index: number) => {
      const list = getInputRefList()
      const clampedIndex = Math.max(0, Math.min(index, length - 1))
      list[clampedIndex]?.focus()
    },
    [getInputRefList, length]
  )

  const updateValue = useCallback(
    (chars: string[], focusIndex?: number) => {
      const newValue = chars.join('').slice(0, length)
      setValue(newValue)
      onChange?.(newValue)

      if (newValue.length === length) {
        onFinish?.(newValue)
      }

      if (focusIndex !== undefined) {
        requestAnimationFrame(() => focusInput(focusIndex))
      }
    },
    [length, setValue, onChange, onFinish, focusInput]
  )

  const getInputProps = useCallback(
    (index: number) => ({
      value: filledValue[index],
      maxLength: 1,
      onChange: (inputValue: string) => {
        const chars = [...filledValue]
        chars[index] = inputValue
        const nextFocus = inputValue ? index + 1 : index
        updateValue(chars, nextFocus)
      },
      onClick: () => {
        const list = getInputRefList()
        list[index]?.select()
      },
      onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
          e.preventDefault()
          const chars = [...filledValue]
          if (chars[index]) {
            chars[index] = ''
            updateValue(chars, index)
          } else if (index > 0) {
            chars[index - 1] = ''
            updateValue(chars, index - 1)
          }
        } else if (e.key === 'ArrowLeft' && index > 0) {
          focusInput(index - 1)
        } else if (e.key === 'ArrowRight' && index < length - 1) {
          focusInput(index + 1)
        }
      },
      onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const pasteData = e.clipboardData.getData('text').trim()
        const chars = [...filledValue]
        for (let i = 0; i < pasteData.length && index + i < length; i++) {
          chars[index + i] = pasteData[i]
        }
        const nextFocusIndex = Math.min(index + pasteData.length, length - 1)
        updateValue(chars, nextFocusIndex)
      },
    }),
    [filledValue, length, updateValue, focusInput, getInputRefList]
  )

  return { value, filledValue, getInputProps }
}

function VerificationCode(
  baseProps: VerificationCodeProps,
  ref: React.Ref<HTMLDivElement>
) {
  const ctx = useContext(ConfigContext)
  const props = useMergeProps<VerificationCodeProps>(
    baseProps,
    defaultProps as VerificationCodeProps,
    (ctx.componentConfig?.VerificationCode ?? {}) as VerificationCodeProps
  )

  const {
    className,
    style,
    size,
    separator,
    status,
    length = 6,
    masked,
    disabled,
    readOnly,
    validate,
  } = props
  const focusEleRefList = useRef<(HTMLInputElement | null)[]>([])
  const { value, filledValue, getInputProps } = useVerificationCode({
    defaultValue: props.defaultValue,
    value: props.value,
    length,
    getInputRefList: () => focusEleRefList.current,
    onChange: props.onChange,
    onFinish: props.onFinish,
  })

  const prefixCls = ctx.getPrefixCls('verification-code')
  const inputPrefixCls = ctx.getPrefixCls('input')

  return (
    <div ref={ref} className={cs(prefixCls, className)} style={style}>
      {filledValue.map((v, index) => {
        const { onChange, onClick, onPaste, onKeyDown, ...restInputProps } =
          getInputProps(index)
        return (
          <Fragment key={index}>
            <input
              className={cs(inputPrefixCls, `${prefixCls}-input`, {
                [`${inputPrefixCls}-size-${size}`]: size,
                [`${inputPrefixCls}-${status}`]: status,
                [`${inputPrefixCls}-disabled`]: disabled,
              })}
              ref={(node) => {
                focusEleRefList.current[index] = node
              }}
              disabled={disabled}
              readOnly={readOnly}
              {...restInputProps}
              onClick={!readOnly ? onClick : undefined}
              onPaste={!readOnly ? onPaste : undefined}
              onKeyDown={!readOnly ? onKeyDown : undefined}
              onChange={
                !readOnly
                  ? (e) => {
                      const inputValue = e.target.value
                      if (validate) {
                        const result = validate({ inputValue, index, value })
                        if (result !== false) {
                          onChange(
                            typeof result === 'string' ? result : inputValue
                          )
                        }
                      } else {
                        onChange(inputValue)
                      }
                    }
                  : undefined
              }
              type={masked ? 'password' : 'text'}
            />
            {separator?.({ index, character: v })}
          </Fragment>
        )
      })}
    </div>
  )
}

const ForwardRefVerificationCode = forwardRef<
  HTMLDivElement,
  VerificationCodeProps
>(VerificationCode)
ForwardRefVerificationCode.displayName = 'VerificationCode'

export default ForwardRefVerificationCode
export type { VerificationCodeProps }
