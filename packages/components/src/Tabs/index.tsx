import { Children, forwardRef, ReactElement, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { TabPaneProps, TabsProps } from './interface'

const TabPane = forwardRef<HTMLDivElement, TabPaneProps>((props, ref) => {
  const { style, className, children, title: _title, disabled: _disabled, closable: _closable, destroyOnHide: _destroyOnHide, ...rest } = props
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('tabs-pane')

  return (
    <div
      ref={ref}
      className={cs(prefixCls, className)}
      style={style}
      role="tabpanel"
      {...rest}
    >
      {children}
    </div>
  )
})
TabPane.displayName = 'TabPane'

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    style,
    className,
    children,
    activeTab: propActiveTab,
    defaultActiveTab,
    type = 'line',
    direction = 'horizontal',
    size = 'default',
    tabPosition = 'top',
    editable,
    showAddButton,
    destroyOnHide,
    animation: _animation = true,
    extra,
    onChange,
    onAddTab,
    onDeleteTab,
    onClickTab,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('tabs')

  const panes = Children.toArray(children) as ReactElement<TabPaneProps>[]
  const firstKey = (panes[0]?.key as string) || '0'

  const [activeTab, setActiveTab] = useMergeValue(
    defaultActiveTab || firstKey,
    { value: propActiveTab }
  )

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled) return
    setActiveTab(key)
    onChange?.(key)
    onClickTab?.(key)
  }

  const classString = cs(
    prefixCls,
    `${prefixCls}-${type}`,
    `${prefixCls}-${direction}`,
    `${prefixCls}-size-${size}`,
    `${prefixCls}-position-${tabPosition}`,
    className
  )

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-header-nav`} role="tablist">
          {panes.map((pane) => {
            const key = pane.key as string
            const { title, disabled, closable } = pane.props
            const isActive = activeTab === key

            return (
              <div
                key={key}
                className={cs(`${prefixCls}-header-tab`, {
                  [`${prefixCls}-header-tab-active`]: isActive,
                  [`${prefixCls}-header-tab-disabled`]: disabled,
                })}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabClick(key, disabled)}
              >
                <span className={`${prefixCls}-header-tab-title`}>{title}</span>
                {editable && closable !== false && (
                  <span
                    className={`${prefixCls}-header-tab-close`}
                    onClick={(e) => {
                      e.stopPropagation()
                      onDeleteTab?.(key)
                    }}
                  >
                    ×
                  </span>
                )}
              </div>
            )
          })}
        </div>
        {showAddButton && editable && (
          <span className={`${prefixCls}-header-add`} onClick={onAddTab}>
            +
          </span>
        )}
        {extra && <div className={`${prefixCls}-header-extra`}>{extra}</div>}
      </div>
      <div className={`${prefixCls}-content`}>
        {panes.map((pane) => {
          const key = pane.key as string
          const isActive = activeTab === key
          if (destroyOnHide && !isActive) return null
          return (
            <div
              key={key}
              className={cs(`${prefixCls}-content-item`, {
                [`${prefixCls}-content-item-active`]: isActive,
              })}
              style={isActive ? {} : { display: 'none' }}
            >
              {pane}
            </div>
          )
        })}
      </div>
    </div>
  )
})

Tabs.displayName = 'Tabs'

type TabsComponentType = typeof Tabs & {
  TabPane: typeof TabPane
}

const TabsComponent = Tabs as TabsComponentType
TabsComponent.TabPane = TabPane

export default TabsComponent
export { TabPane }
export type { TabPaneProps, TabsProps }
