import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cs, isArray, isFunction } from '../_util'
import { ConfigContext } from '../ConfigProvider/context'
import { FormContext } from './context'
import {
  FieldError,
  FormInstance,
  FormItemProps,
  FormListProps,
  FormProps,
} from './interface'
import { FormStore } from './store'
import useForm from './useForm'

// =========== Form ===========

const InternalForm = forwardRef<FormInstance, FormProps>((props, ref) => {
  const { getPrefixCls, size: ctxSize } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('form')

  const {
    style,
    className,
    layout = 'horizontal',
    labelCol,
    wrapperCol,
    form: propForm,
    initialValues,
    onValuesChange,
    onSubmit,
    onSubmitFailed,
    disabled,
    labelAlign = 'right',
    size = ctxSize || 'default',
    colon,
    requiredSymbol = true,
    validateTrigger = 'onChange',
    scrollToFirstError,
    wrapper: Wrapper = 'form',
    id,
    autoComplete,
    children,
  } = props

  const [formInstance] = useForm(propForm)
  const store: FormStore = (formInstance as any).__INTERNAL_STORE__

  // Set initial values
  useEffect(() => {
    if (initialValues && store) {
      store.setInitialValues(initialValues)
    }
  }, [])

  // Set callbacks
  useEffect(() => {
    if (store) {
      store.setCallbacks({
        onValuesChange,
        onSubmit,
        onSubmitFailed: (errors) => {
          onSubmitFailed?.(errors)
          if (scrollToFirstError) {
            const firstField = Object.keys(errors)[0]
            if (firstField) {
              formInstance.scrollToField(
                firstField,
                typeof scrollToFirstError === 'object'
                  ? scrollToFirstError
                  : undefined
              )
            }
          }
        },
      })
    }
  }, [onValuesChange, onSubmit, onSubmitFailed, scrollToFirstError])

  useImperativeHandle(ref, () => formInstance)

  const contextValue = useMemo(
    () => ({
      form: formInstance,
      layout,
      labelCol,
      wrapperCol,
      labelAlign,
      disabled,
      colon,
      requiredSymbol,
      validateTrigger,
      size,
    }),
    [
      formInstance,
      layout,
      labelCol,
      wrapperCol,
      labelAlign,
      disabled,
      colon,
      requiredSymbol,
      validateTrigger,
      size,
    ]
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      e.stopPropagation()
      formInstance.submit()
    },
    [formInstance]
  )

  const formClassNames = cs(
    prefixCls,
    `${prefixCls}-${layout}`,
    `${prefixCls}-size-${size}`,
    className
  )

  const formProps: Record<string, unknown> = {
    className: formClassNames,
    style,
    id,
    autoComplete,
  }

  if (Wrapper === 'form') {
    formProps.onSubmit = handleSubmit
  }

  return (
    <FormContext.Provider value={contextValue}>
      <Wrapper {...(formProps as any)}>{children}</Wrapper>
    </FormContext.Provider>
  )
})

InternalForm.displayName = 'Form'

// =========== Form.Item ===========

const FormItem = forwardRef<HTMLDivElement, FormItemProps>((props, ref) => {
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('form-item')
  const formCtx = useContext(FormContext)

  const {
    style,
    className,
    field,
    label,
    rules = [],
    labelCol: itemLabelCol,
    wrapperCol: itemWrapperCol,
    required,
    extra,
    help,
    validateStatus: propValidateStatus,
    hasFeedback,
    validateTrigger: itemValidateTrigger,
    noStyle,
    hidden,
    dependencies,
    shouldUpdate: _shouldUpdate,
    normalize,
    getValueFromEvent,
    tooltip,
    triggerPropName = 'value',
    trigger = 'onChange',
    labelAlign: itemLabelAlign,
    colon: itemColon,
    children,
  } = props

  const form = formCtx.form
  const store: FormStore | undefined = form
    ? (form as any).__INTERNAL_STORE__
    : undefined
  const layout = formCtx.layout || 'horizontal'
  const labelCol = itemLabelCol || formCtx.labelCol
  const wrapperCol = itemWrapperCol || formCtx.wrapperCol
  const labelAlign = itemLabelAlign || formCtx.labelAlign || 'right'
  const colon = itemColon !== undefined ? itemColon : formCtx.colon
  const validateTrigger =
    itemValidateTrigger || formCtx.validateTrigger || 'onChange'

  const [errors, setErrors] = useState<FieldError[]>([])
  const [warnings, setWarnings] = useState<FieldError[]>([])
  const [fieldValue, setFieldValue] = useState<unknown>(() => {
    if (field && form) return form.getFieldValue(field)
    return undefined
  })

  const isRequired = required ?? rules.some((r) => r.required)

  const handleValidate = useCallback(async () => {
    if (!field || !store || rules.length === 0) return
    const fieldErrors = await store.validateField(field, rules)
    const errs = fieldErrors.filter((e) => e.type !== 'warning')
    const warns = fieldErrors.filter((e) => e.type === 'warning')
    setErrors(errs)
    setWarnings(warns)
  }, [field, store, rules])

  // Register control
  useEffect(() => {
    if (!field || !store) return

    const control = {
      field,
      rules,
      onStoreChange: (type: string, info?: Record<string, unknown>) => {
        // Update field value
        const newValue = form!.getFieldValue(field)
        setFieldValue(newValue)

        // Re-validate on dependencies change
        if (
          type === 'setFieldValue' &&
          dependencies?.includes((info as any)?.field)
        ) {
          handleValidate()
        }
      },
      setErrors: (errs: FieldError[], warns: FieldError[]) => {
        setErrors(errs)
        setWarnings(warns)
      },
      getErrors: () => errors,
      getWarnings: () => warnings,
      reset: () => {
        setErrors([])
        setWarnings([])
        setFieldValue(form!.getFieldValue(field))
      },
    }

    const unregister = store.registerControl(control)
    return unregister
  }, [field, store, rules, dependencies])

  // Sync field value
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (field && form) {
      setFieldValue(form.getFieldValue(field))
    }
  }, [field, form])
  /* eslint-enable react-hooks/set-state-in-effect */

  // Get validate status
  const validateStatus =
    propValidateStatus ||
    (errors.length > 0 ? 'error' : warnings.length > 0 ? 'warning' : undefined)

  // Create control props
  const getControlled = useCallback(
    (childProps: Record<string, unknown>) => {
      if (!field || !form) return childProps

      const controlProps: Record<string, unknown> = {
        ...childProps,
        [triggerPropName]: fieldValue,
      }

      const triggers = isArray(validateTrigger)
        ? validateTrigger
        : [validateTrigger]

      // Main trigger (onChange by default)
      controlProps[trigger] = (...args: unknown[]) => {
        let newValue: unknown
        if (getValueFromEvent) {
          newValue = getValueFromEvent(...args)
        } else {
          const event = args[0]
          if (event && typeof event === 'object' && 'target' in event) {
            const target = (event as React.ChangeEvent<HTMLInputElement>).target
            newValue =
              target.type === 'checkbox' ? target.checked : target.value
          } else {
            newValue = event
          }
        }

        if (normalize) {
          newValue = normalize(newValue, fieldValue, form.getFieldsValue())
        }

        form.setFieldValue(field, newValue)
        setFieldValue(newValue)

        // Call original handler
        if (isFunction(childProps[trigger])) {
          ;(childProps[trigger] as (...a: unknown[]) => void)(...args)
        }

        // Validate if trigger matches
        if (triggers.includes(trigger)) {
          setTimeout(() => handleValidate())
        }
      }

      // Additional validate triggers
      triggers.forEach((t) => {
        if (t !== trigger) {
          const originalHandler = childProps[t]
          controlProps[t] = (...args: unknown[]) => {
            if (isFunction(originalHandler)) {
              ;(originalHandler as (...a: unknown[]) => void)(...args)
            }
            setTimeout(() => handleValidate())
          }
        }
      })

      if (formCtx.disabled) {
        controlProps.disabled = true
      }

      return controlProps
    },
    [
      field,
      form,
      fieldValue,
      triggerPropName,
      trigger,
      validateTrigger,
      normalize,
      getValueFromEvent,
      handleValidate,
      formCtx.disabled,
    ]
  )

  // Render children with control props
  const renderChildren = (): ReactNode => {
    if (isFunction(children)) {
      return (children as (...a: unknown[]) => ReactNode)(
        form?.getFieldsValue() || {},
        form!
      )
    }

    if (!field) return children as ReactNode

    // Clone child element with controlled props
    const childElement = React.Children.only(children) as React.ReactElement
    if (!childElement || !React.isValidElement(childElement)) return children as ReactNode

    return React.cloneElement(
      childElement,
      getControlled((childElement.props || {}) as Record<string, unknown>)
    )
  }

  if (noStyle) {
    return <>{renderChildren()}</>
  }

  if (hidden) {
    return null
  }

  const errorMessages =
    help !== undefined ? [help] : errors.map((e) => e.message)
  const warningMessages = warnings.map((e) => e.message)

  const requiredSymbol = formCtx.requiredSymbol
  const showRequired = isRequired && requiredSymbol !== false

  // Render label
  const renderLabel = () => {
    if (!label) return null

    const labelClass = cs(`${prefixCls}-label`, {
      [`${prefixCls}-label-left`]: labelAlign === 'left',
      [`${prefixCls}-label-right`]: labelAlign === 'right',
    })

    const labelStyle: React.CSSProperties = {
      ...labelCol?.style,
      ...(layout === 'horizontal' && labelCol?.span
        ? {
            flex: `0 0 ${(labelCol.span / 24) * 100}%`,
            maxWidth: `${(labelCol.span / 24) * 100}%`,
          }
        : {}),
    }

    return (
      <div className={labelClass} style={labelStyle}>
        {showRequired && (
          <span className={`${prefixCls}-label-required-symbol`}>
            {typeof requiredSymbol === 'object' &&
            requiredSymbol.position === 'end'
              ? null
              : '*'}
          </span>
        )}
        <label>{label}</label>
        {showRequired &&
          typeof requiredSymbol === 'object' &&
          requiredSymbol.position === 'end' && (
            <span className={`${prefixCls}-label-required-symbol`}>*</span>
          )}
        {tooltip && <span className={`${prefixCls}-label-tooltip`}>?</span>}
        {colon && (
          <span className={`${prefixCls}-label-colon`}>
            {typeof colon === 'boolean' ? ':' : colon}
          </span>
        )}
      </div>
    )
  }

  const wrapperStyle: React.CSSProperties = {
    ...wrapperCol?.style,
    ...(layout === 'horizontal' && wrapperCol?.span
      ? {
          flex: `0 0 ${(wrapperCol.span / 24) * 100}%`,
          maxWidth: `${(wrapperCol.span / 24) * 100}%`,
        }
      : {}),
  }

  const feedbackIcon =
    hasFeedback && validateStatus ? (
      <span
        className={`${prefixCls}-feedback-icon ${prefixCls}-feedback-icon-${validateStatus}`}
      >
        {validateStatus === 'success'
          ? '✓'
          : validateStatus === 'error'
            ? '✗'
            : validateStatus === 'warning'
              ? '!'
              : validateStatus === 'validating'
                ? '...'
                : null}
      </span>
    ) : null

  return (
    <div
      ref={ref}
      className={cs(
        prefixCls,
        `${prefixCls}-${layout}`,
        {
          [`${prefixCls}-status-${validateStatus}`]: validateStatus,
          [`${prefixCls}-has-help`]:
            errorMessages.length > 0 || warningMessages.length > 0,
        },
        className
      )}
      style={style}
      data-form-field={field}
    >
      {renderLabel()}
      <div className={`${prefixCls}-wrapper`} style={wrapperStyle}>
        <div className={`${prefixCls}-control`}>
          {renderChildren()}
          {feedbackIcon}
        </div>
        {errorMessages.length > 0 && (
          <div className={`${prefixCls}-message ${prefixCls}-message-error`}>
            {errorMessages.map((msg, i) => (
              <div key={i}>{msg}</div>
            ))}
          </div>
        )}
        {warningMessages.length > 0 && (
          <div className={`${prefixCls}-message ${prefixCls}-message-warning`}>
            {warningMessages.map((msg, i) => (
              <div key={i}>{msg}</div>
            ))}
          </div>
        )}
        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </div>
    </div>
  )
})

FormItem.displayName = 'FormItem'

// =========== Form.List ===========

function FormList(props: FormListProps) {
  const { field, children, initialValue } = props
  const formCtx = useContext(FormContext)
  const form = formCtx.form
  const [keys, setKeys] = useState<number[]>(() => {
    const initVal =
      (form?.getFieldValue(field) as unknown[]) || initialValue || []
    return initVal.map((_, i) => i)
  })
  const keyCountRef = useRef(keys.length)

  const fields = useMemo(
    () =>
      keys.map((key, index) => ({
        key,
        field: `${field}[${index}]`,
      })),
    [keys, field]
  )

  const operation = useMemo(
    () => ({
      add: (defaultValue?: unknown, index?: number) => {
        const currentValue = (
          (form?.getFieldValue(field) as unknown[]) || []
        ).slice()
        const newKey = keyCountRef.current++
        if (index !== undefined) {
          currentValue.splice(index, 0, defaultValue)
          setKeys((prev) => {
            const next = [...prev]
            next.splice(index, 0, newKey)
            return next
          })
        } else {
          currentValue.push(defaultValue)
          setKeys((prev) => [...prev, newKey])
        }
        form?.setFieldValue(field, currentValue)
      },
      remove: (index: number) => {
        const currentValue = (
          (form?.getFieldValue(field) as unknown[]) || []
        ).slice()
        currentValue.splice(index, 1)
        setKeys((prev) => prev.filter((_, i) => i !== index))
        form?.setFieldValue(field, currentValue)
      },
      move: (fromIndex: number, toIndex: number) => {
        const currentValue = (
          (form?.getFieldValue(field) as unknown[]) || []
        ).slice()
        const [item] = currentValue.splice(fromIndex, 1)
        currentValue.splice(toIndex, 0, item)
        setKeys((prev) => {
          const next = [...prev]
          const [key] = next.splice(fromIndex, 1)
          next.splice(toIndex, 0, key)
          return next
        })
        form?.setFieldValue(field, currentValue)
      },
    }),
    [form, field]
  )

  return <>{children(fields, operation)}</> // eslint-disable-line react-hooks/refs
}

FormList.displayName = 'FormList'

// =========== useWatch ===========

function useWatch(field: string, form?: FormInstance): unknown {
  const formCtx = useContext(FormContext)
  const formInstance = form || formCtx.form
  const [value, setValue] = useState<unknown>(() =>
    formInstance?.getFieldValue(field)
  )

  useEffect(() => {
    if (!formInstance) return
    const store: FormStore = (formInstance as any).__INTERNAL_STORE__
    if (!store) return
    const unwatch = store.registerWatcher({
      field,
      callback: (val) => setValue(val),
    })
    // Sync current value
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue(formInstance.getFieldValue(field))
    return unwatch
  }, [field, formInstance])

  return value
}

// =========== Compose ===========

type FormComponent = typeof InternalForm & {
  Item: typeof FormItem
  List: typeof FormList
  useForm: typeof useForm
  useWatch: typeof useWatch
}

const Form = InternalForm as FormComponent
Form.Item = FormItem
Form.List = FormList
Form.useForm = useForm
Form.useWatch = useWatch

export default Form
export type {
  FieldError,
  FormInstance,
  FormItemProps,
  FormListProps,
  FormProps,
  RulesProps,
} from './interface'
export { useForm }
