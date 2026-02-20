import { CSSProperties, ReactNode } from 'react'

export type FormLayout = 'horizontal' | 'vertical' | 'inline'

export interface RulesProps {
  required?: boolean
  type?:
    | 'string'
    | 'number'
    | 'boolean'
    | 'array'
    | 'object'
    | 'email'
    | 'url'
    | 'ip'
  message?: string | ReactNode
  match?: RegExp
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  equal?: unknown
  validator?: (
    value: unknown,
    callback: (error?: string) => void
  ) => void | Promise<void | string>
  validateTrigger?: string | string[]
  validateLevel?: 'error' | 'warning'
  when?: (values: Record<string, unknown>) => boolean
}

export interface FieldError {
  message: ReactNode
  type?: string
  requiredError?: boolean
}

export interface FormItemState {
  errors: FieldError[]
  warnings: FieldError[]
  validateStatus?: 'success' | 'warning' | 'error' | 'validating'
  isTouched: boolean
}

export interface FormInstance<T = any> {
  getFieldValue: (field: string) => unknown
  getFieldsValue: (fields?: string[]) => Partial<T>
  setFieldValue: (field: string, value: unknown) => void
  setFieldsValue: (values: Partial<T>) => void
  resetFields: (fields?: string[]) => void
  validate: (fields?: string[]) => Promise<T>
  clearFields: (fields?: string[]) => void
  getFieldError: (field: string) => FieldError[]
  getFieldsError: (fields?: string[]) => Record<string, FieldError[]>
  scrollToField: (field: string, options?: ScrollIntoViewOptions) => void
  getTouchedFields: () => string[]
  isFieldTouched: (field: string) => boolean
  submit: () => void
}

export interface FormProps<T = any> {
  style?: CSSProperties
  className?: string | string[]
  /** 表单布局 */
  layout?: FormLayout
  /** label 列配置 */
  labelCol?: { span?: number; offset?: number; style?: CSSProperties }
  /** wrapper 列配置 */
  wrapperCol?: { span?: number; offset?: number; style?: CSSProperties }
  /** form 实例 */
  form?: FormInstance<T>
  /** 初始值 */
  initialValues?: Partial<T>
  /** 字段值变化时的回调 */
  onValuesChange?: (changedValues: Partial<T>, allValues: Partial<T>) => void
  /** 提交事件 */
  onSubmit?: (values: T) => void
  /** 提交失败事件 */
  onSubmitFailed?: (errors: Record<string, FieldError[]>) => void
  /** 是否禁用 */
  disabled?: boolean
  /** label 文本对齐方式 */
  labelAlign?: 'left' | 'right'
  /** 尺寸 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 是否显示冒号 */
  colon?: boolean | ReactNode
  /** 必填星号 */
  requiredSymbol?: boolean | { position?: 'start' | 'end' }
  /** 校验触发时机 */
  validateTrigger?: string | string[]
  /** 校验提示信息模板 */
  validateMessages?: Record<string, string>
  /** 校验失败时自动滚动 */
  scrollToFirstError?: boolean | ScrollIntoViewOptions
  /** 外层容器标签 */
  wrapper?: keyof HTMLElementTagNameMap
  /** 表单 ID */
  id?: string
  /** 自动完成 */
  autoComplete?: string
  children?: ReactNode
}

export interface FormItemProps {
  style?: CSSProperties
  className?: string | string[]
  /** 字段名 */
  field?: string
  /** 标签 */
  label?: ReactNode
  /** 校验规则 */
  rules?: RulesProps[]
  /** label 列配置 */
  labelCol?: { span?: number; offset?: number; style?: CSSProperties }
  /** wrapper 列配置 */
  wrapperCol?: { span?: number; offset?: number; style?: CSSProperties }
  /** 必填标记 */
  required?: boolean
  /** 额外提示信息 */
  extra?: ReactNode
  /** 帮助文本 */
  help?: ReactNode
  /** 验证状态 */
  validateStatus?: 'success' | 'warning' | 'error' | 'validating'
  /** 是否有反馈图标 */
  hasFeedback?: boolean
  /** 校验触发时机 */
  validateTrigger?: string | string[]
  /** 不带任何样式 */
  noStyle?: boolean
  /** 隐藏但保留字段值 */
  hidden?: boolean
  /** 依赖字段 */
  dependencies?: string[]
  /** 内容变化时是否更新 */
  shouldUpdate?: boolean | ((prevValues: any, currentValues: any) => boolean)
  /** 格式化 value 值 */
  normalize?: (
    value: unknown,
    prevValue: unknown,
    allValues: Record<string, unknown>
  ) => unknown
  /** 获取事件值 */
  getValueFromEvent?: (...args: unknown[]) => unknown
  /** 自定义 tooltip */
  tooltip?: ReactNode
  /** 值属性名 */
  triggerPropName?: string
  /** 触发器属性名 */
  trigger?: string
  /** label 文本对齐方式 */
  labelAlign?: 'left' | 'right'
  /** 冒号 */
  colon?: boolean | ReactNode
  children?:
    | ReactNode
    | ((values: Record<string, unknown>, form: FormInstance) => ReactNode)
}

export interface FormListProps {
  field: string
  children: (
    fields: { key: number; field: string }[],
    operation: {
      add: (defaultValue?: unknown, index?: number) => void
      remove: (index: number) => void
      move: (fromIndex: number, toIndex: number) => void
    }
  ) => ReactNode
  rules?: RulesProps[]
  initialValue?: unknown[]
}
