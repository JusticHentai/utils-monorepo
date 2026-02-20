import { useRef } from 'react'
import { FormInstance } from './interface'
import { FormStore } from './store'

export default function useForm<T = any>(
  form?: FormInstance<T>
): [FormInstance<T>] {
  const storeRef = useRef<FormStore<T> | null>(null)

  // eslint-disable-next-line react-hooks/refs
  if (!storeRef.current) {
    if (form) {
      return [form]
    }
    const store = new FormStore<T>()
    const instance: FormInstance<T> = {
      getFieldValue: (field) => store.getFieldValue(field),
      getFieldsValue: (fields) => store.getFieldsValue(fields),
      setFieldValue: (field, value) => store.setFieldValue(field, value),
      setFieldsValue: (values) => store.setFieldsValue(values),
      resetFields: (fields) => store.resetFields(fields),
      validate: (fields) => store.validate(fields),
      clearFields: (fields) => store.clearFields(fields),
      getFieldError: (field) => store.getFieldError(field),
      getFieldsError: (fields) => store.getFieldsError(fields),
      scrollToField: (field, options) => store.scrollToField(field, options),
      getTouchedFields: () => store.getTouchedFields(),
      isFieldTouched: (field) => store.isFieldTouched(field),
      submit: () => store.submit(),
    }
    ;(instance as any).__INTERNAL_STORE__ = store
    storeRef.current = store
    return [instance]
  }

  if (form) return [form]

  // eslint-disable-next-line react-hooks/refs
  const store = storeRef.current
  const instance: FormInstance<T> = {
    getFieldValue: (field) => store.getFieldValue(field),
    getFieldsValue: (fields) => store.getFieldsValue(fields),
    setFieldValue: (field, value) => store.setFieldValue(field, value),
    setFieldsValue: (values) => store.setFieldsValue(values),
    resetFields: (fields) => store.resetFields(fields),
    validate: (fields) => store.validate(fields),
    clearFields: (fields) => store.clearFields(fields),
    getFieldError: (field) => store.getFieldError(field),
    getFieldsError: (fields) => store.getFieldsError(fields),
    scrollToField: (field, options) => store.scrollToField(field, options),
    getTouchedFields: () => store.getTouchedFields(),
    isFieldTouched: (field) => store.isFieldTouched(field),
    submit: () => store.submit(),
  }
  ;(instance as any).__INTERNAL_STORE__ = store
  return [instance]
}
