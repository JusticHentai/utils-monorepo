import { createContext } from 'react'

export type ComponentConfig = Record<string, Record<string, unknown>>

export interface ConfigProviderProps {
  /** 组件类名前缀 */
  prefixCls?: string
  /** 组件大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 全局组件配置 */
  componentConfig?: ComponentConfig
  children?: React.ReactNode
}

export interface ConfigContextType {
  getPrefixCls: (componentName: string, customPrefix?: string) => string
  size?: 'mini' | 'small' | 'default' | 'large'
  componentConfig?: ComponentConfig
}

const defaultGetPrefixCls = (componentName: string, customPrefix?: string) => {
  const prefix = customPrefix || 'hentai'
  return `${prefix}-${componentName}`
}

export const ConfigContext = createContext<ConfigContextType>({
  getPrefixCls: defaultGetPrefixCls,
})
