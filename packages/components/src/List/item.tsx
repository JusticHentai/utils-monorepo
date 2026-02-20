import React, { forwardRef, useContext } from 'react'
import cs from '../_util/classNames'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { ListItemProps } from './interface'
import Meta from './meta'

const defaultProps: Partial<ListItemProps> = {
  actionLayout: 'horizontal',
}

function Item(baseProps: ListItemProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<ListItemProps>(
    baseProps,
    defaultProps as ListItemProps,
    (componentConfig?.['List.Item'] ?? {}) as ListItemProps
  )
  const { children, className, actions, extra, actionLayout, ...rest } = props

  const prefixCls = getPrefixCls('list')
  const baseClassName = `${prefixCls}-item`
  const metaContent: React.ReactElement[] = []
  const mainContent: React.ReactElement[] = []

  React.Children.forEach(
    children as React.ReactElement,
    (element: React.ReactElement) => {
      if (element?.type === Meta) {
        metaContent.push(element)
      } else {
        mainContent.push(element)
      }
    }
  )

  return (
    <div
      role="listitem"
      ref={ref}
      className={cs(baseClassName, className)}
      {...rest}
    >
      <div className={`${baseClassName}-main`}>
        {metaContent}
        {mainContent.length > 0 && (
          <div className={`${baseClassName}-content`}>{mainContent}</div>
        )}
        {actionLayout === 'vertical' && actions?.length ? (
          <div className={`${baseClassName}-action`}>
            {actions.map((action, i) => (
              <li key={i}>{action}</li>
            ))}
          </div>
        ) : null}
      </div>
      {actionLayout === 'horizontal' && actions?.length ? (
        <div className={`${baseClassName}-action`}>
          {actions.map((action, i) => (
            <li key={i}>{action}</li>
          ))}
        </div>
      ) : null}
      {extra && <div className={`${baseClassName}-extra-content`}>{extra}</div>}
    </div>
  )
}

const ForwardRefItem = forwardRef<HTMLDivElement, ListItemProps>(Item)

const ItemComponent = ForwardRefItem as typeof ForwardRefItem & {
  Meta: typeof Meta
}

ItemComponent.displayName = 'ListItem'
ItemComponent.Meta = Meta

export default ItemComponent
