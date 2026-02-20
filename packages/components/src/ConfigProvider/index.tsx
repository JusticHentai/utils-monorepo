import { useMemo } from 'react'
import { ConfigContext, ConfigProviderProps } from './context'

function ConfigProvider(props: ConfigProviderProps) {
  const { prefixCls = 'hentai', size, componentConfig, children } = props

  const config = useMemo(
    () => ({
      getPrefixCls: (componentName: string, customPrefix?: string) => {
        const prefix = customPrefix || prefixCls
        return `${prefix}-${componentName}`
      },
      size,
      componentConfig,
    }),
    [prefixCls, size, componentConfig]
  )

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  )
}

ConfigProvider.displayName = 'ConfigProvider'

export default ConfigProvider
export { ConfigContext } from './context'
export type {
  ComponentConfig,
  ConfigContextType,
  ConfigProviderProps,
} from './context'
