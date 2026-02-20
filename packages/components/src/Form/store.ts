import { get, set } from '../_util/object'
import { FieldError, RulesProps } from './interface'

type ControlInstance = {
  field: string
  rules?: RulesProps[]
  onStoreChange: (type: string, info?: Record<string, unknown>) => void
  setErrors: (errors: FieldError[], warnings: FieldError[]) => void
  getErrors: () => FieldError[]
  getWarnings: () => FieldError[]
  reset: () => void
}

type Watcher = {
  field: string
  callback: (value: unknown) => void
}

export class FormStore<T = any> {
  private store: Partial<T> = {}
  private initialValues: Partial<T> = {}
  private touchedFields: Set<string> = new Set()
  private controls: ControlInstance[] = []
  private watchers: Watcher[] = []
  private callbacks: {
    onValuesChange?: (changed: Partial<T>, all: Partial<T>) => void
    onSubmit?: (values: T) => void
    onSubmitFailed?: (errors: Record<string, FieldError[]>) => void
  } = {}

  constructor(initialValues?: Partial<T>) {
    if (initialValues) {
      this.store = this.cloneDeep(initialValues)
      this.initialValues = this.cloneDeep(initialValues)
    }
  }

  private cloneDeep(obj: unknown): any {
    if (obj === null || typeof obj !== 'object') return obj
    if (Array.isArray(obj)) return obj.map((item) => this.cloneDeep(item))
    const result: Record<string, unknown> = {}
    for (const key of Object.keys(obj as Record<string, unknown>)) {
      result[key] = this.cloneDeep((obj as Record<string, unknown>)[key])
    }
    return result
  }

  setCallbacks(callbacks: typeof this.callbacks) {
    this.callbacks = { ...this.callbacks, ...callbacks }
  }

  registerControl(control: ControlInstance) {
    this.controls.push(control)
    return () => {
      this.controls = this.controls.filter((c) => c !== control)
    }
  }

  registerWatcher(watcher: Watcher) {
    this.watchers.push(watcher)
    return () => {
      this.watchers = this.watchers.filter((w) => w !== watcher)
    }
  }

  getFieldValue(field: string): unknown {
    return get(this.store, field)
  }

  getFieldsValue(fields?: string[]): Partial<T> {
    if (!fields) return this.cloneDeep(this.store)
    const result: Record<string, unknown> = {}
    fields.forEach((field) => {
      set(result, field, get(this.store, field))
    })
    return result as Partial<T>
  }

  setFieldValue(field: string, value: unknown) {
    set(this.store as Record<string, unknown>, field, value)
    this.touchedFields.add(field)
    this.notify('setFieldValue', { field })
    this.notifyWatchers(field)
    this.callbacks.onValuesChange?.(
      { [field]: value } as Partial<T>,
      this.cloneDeep(this.store)
    )
  }

  setFieldsValue(values: Partial<T>) {
    const fields: string[] = []
    const setDeep = (obj: Record<string, unknown>, path: string) => {
      for (const key of Object.keys(obj)) {
        const fullPath = path ? `${path}.${key}` : key
        const val = obj[key]
        if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
          setDeep(val as Record<string, unknown>, fullPath)
        } else {
          set(this.store as Record<string, unknown>, fullPath, val)
          fields.push(fullPath)
          this.touchedFields.add(fullPath)
        }
      }
    }
    setDeep(values as Record<string, unknown>, '')
    this.notify('setFieldsValue', { fields })
    fields.forEach((f) => this.notifyWatchers(f))
    this.callbacks.onValuesChange?.(values, this.cloneDeep(this.store))
  }

  resetFields(fields?: string[]) {
    if (fields) {
      fields.forEach((field) => {
        const initialValue = get(this.initialValues, field)
        set(
          this.store as Record<string, unknown>,
          field,
          initialValue !== undefined ? this.cloneDeep(initialValue) : undefined
        )
        this.touchedFields.delete(field)
      })
    } else {
      this.store = this.cloneDeep(this.initialValues)
      this.touchedFields.clear()
    }
    const targetControls = fields
      ? this.controls.filter((c) => fields.includes(c.field))
      : this.controls
    targetControls.forEach((c) => c.reset())
    this.notify('resetFields', { fields })
  }

  clearFields(fields?: string[]) {
    if (fields) {
      fields.forEach((field) => {
        set(this.store as Record<string, unknown>, field, undefined)
      })
    } else {
      this.store = {} as Partial<T>
    }
    const targetControls = fields
      ? this.controls.filter((c) => fields.includes(c.field))
      : this.controls
    targetControls.forEach((c) => c.reset())
    this.notify('clearFields', { fields })
  }

  getFieldError(field: string): FieldError[] {
    const control = this.controls.find((c) => c.field === field)
    return control?.getErrors() || []
  }

  getFieldsError(fields?: string[]): Record<string, FieldError[]> {
    const result: Record<string, FieldError[]> = {}
    const targetControls = fields
      ? this.controls.filter((c) => fields.includes(c.field))
      : this.controls
    targetControls.forEach((c) => {
      const errors = c.getErrors()
      if (errors.length > 0) {
        result[c.field] = errors
      }
    })
    return result
  }

  async validate(fields?: string[]): Promise<T> {
    const targetControls = fields
      ? this.controls.filter((c) => fields.includes(c.field))
      : this.controls.filter((c) => c.rules && c.rules.length > 0)

    const errors: Record<string, FieldError[]> = {}

    await Promise.all(
      targetControls.map(async (control) => {
        const fieldErrors = await this.validateField(
          control.field,
          control.rules || []
        )
        const errs = fieldErrors.filter((e) => e.type !== 'warning')
        const warns = fieldErrors.filter((e) => e.type === 'warning')
        control.setErrors(errs, warns)
        if (errs.length > 0) {
          errors[control.field] = errs
        }
      })
    )

    if (Object.keys(errors).length > 0) {
      return Promise.reject(errors)
    }

    return this.cloneDeep(this.store) as T
  }

  async validateField(
    field: string,
    rules: RulesProps[]
  ): Promise<FieldError[]> {
    const value = this.getFieldValue(field)
    const errors: FieldError[] = []

    for (const rule of rules) {
      // when condition
      if (rule.when && !rule.when(this.cloneDeep(this.store))) {
        continue
      }

      const isWarning = rule.validateLevel === 'warning'
      const errorType = isWarning ? 'warning' : 'error'

      // required
      if (rule.required) {
        const isEmpty =
          value === undefined ||
          value === null ||
          value === '' ||
          (Array.isArray(value) && value.length === 0)
        if (isEmpty) {
          errors.push({
            message: rule.message || `该字段是必填的`,
            type: errorType,
            requiredError: true,
          })
          if (!isWarning) return errors
          continue
        }
      }

      if (value === undefined || value === null || value === '') continue

      // type check
      if (rule.type === 'email') {
        if (
          typeof value === 'string' &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {
          errors.push({
            message: rule.message || '请输入有效的邮箱地址',
            type: errorType,
          })
          if (!isWarning) return errors
        }
      } else if (rule.type === 'url') {
        try {
          new URL(value as string)
        } catch {
          errors.push({
            message: rule.message || '请输入有效的 URL',
            type: errorType,
          })
          if (!isWarning) return errors
        }
      } else if (rule.type === 'number') {
        if (typeof value !== 'number' || isNaN(value)) {
          errors.push({
            message: rule.message || '请输入数字',
            type: errorType,
          })
          if (!isWarning) return errors
        }
      }

      // match (regex)
      if (rule.match && typeof value === 'string') {
        if (!rule.match.test(value)) {
          errors.push({
            message: rule.message || '格式不正确',
            type: errorType,
          })
          if (!isWarning) return errors
        }
      }

      // min / max (for number)
      if (
        rule.min !== undefined &&
        typeof value === 'number' &&
        value < rule.min
      ) {
        errors.push({
          message: rule.message || `不能小于 ${rule.min}`,
          type: errorType,
        })
        if (!isWarning) return errors
      }
      if (
        rule.max !== undefined &&
        typeof value === 'number' &&
        value > rule.max
      ) {
        errors.push({
          message: rule.message || `不能大于 ${rule.max}`,
          type: errorType,
        })
        if (!isWarning) return errors
      }

      // minLength / maxLength (for string and array)
      const lengthVal =
        typeof value === 'string'
          ? value.length
          : Array.isArray(value)
            ? value.length
            : 0
      if (rule.minLength !== undefined && lengthVal < rule.minLength) {
        errors.push({
          message: rule.message || `长度不能少于 ${rule.minLength}`,
          type: errorType,
        })
        if (!isWarning) return errors
      }
      if (rule.maxLength !== undefined && lengthVal > rule.maxLength) {
        errors.push({
          message: rule.message || `长度不能超过 ${rule.maxLength}`,
          type: errorType,
        })
        if (!isWarning) return errors
      }

      // equal
      if (rule.equal !== undefined && value !== rule.equal) {
        errors.push({ message: rule.message || '值不匹配', type: errorType })
        if (!isWarning) return errors
      }

      // custom validator
      if (rule.validator) {
        try {
          const result = await new Promise<void | string>((resolve, reject) => {
            const ret = rule.validator!(value, (error?: string) => {
              if (error) reject(error)
              else resolve()
            })
            if (ret instanceof Promise) {
              ret.then(resolve).catch(reject)
            }
          })
          if (typeof result === 'string') {
            errors.push({ message: result, type: errorType })
            if (!isWarning) return errors
          }
        } catch (e) {
          const msg =
            typeof e === 'string' ? e : (e as Error)?.message || '校验失败'
          errors.push({ message: msg, type: errorType })
          if (!isWarning) return errors
        }
      }
    }

    return errors
  }

  scrollToField(field: string, options?: ScrollIntoViewOptions) {
    const el = document.querySelector(`[data-form-field="${field}"]`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', ...options })
    }
  }

  getTouchedFields(): string[] {
    return Array.from(this.touchedFields)
  }

  isFieldTouched(field: string): boolean {
    return this.touchedFields.has(field)
  }

  submit() {
    this.validate()
      .then((values) => {
        this.callbacks.onSubmit?.(values)
      })
      .catch((errors) => {
        this.callbacks.onSubmitFailed?.(errors)
      })
  }

  setInitialValues(values: Partial<T>) {
    this.initialValues = this.cloneDeep(values)
    // Only set store if it's empty (first mount)
    if (Object.keys(this.store as Record<string, unknown>).length === 0) {
      this.store = this.cloneDeep(values)
    }
  }

  private notify(type: string, info?: Record<string, unknown>) {
    this.controls.forEach((c) => c.onStoreChange(type, info))
  }

  private notifyWatchers(field: string) {
    this.watchers.forEach((w) => {
      if (w.field === field || !w.field) {
        w.callback(this.getFieldValue(w.field || field))
      }
    })
  }
}
