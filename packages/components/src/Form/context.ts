import { createContext } from 'react'
import { FormInstance, FormLayout } from './interface'

export interface FormContextType {
  form?: FormInstance
  layout?: FormLayout
  labelCol?: { span?: number; offset?: number; style?: React.CSSProperties }
  wrapperCol?: { span?: number; offset?: number; style?: React.CSSProperties }
  labelAlign?: 'left' | 'right'
  disabled?: boolean
  colon?: boolean | React.ReactNode
  requiredSymbol?: boolean | { position?: 'start' | 'end' }
  validateTrigger?: string | string[]
  size?: 'mini' | 'small' | 'default' | 'large'
}

export const FormContext = createContext<FormContextType>({})

export interface FormItemContextType {
  updateFormItem?: (type: string, info: Record<string, unknown>) => void
}

export const FormItemContext = createContext<FormItemContextType>({})
