import { Children, forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { BreadcrumbItemProps, BreadcrumbProps, RouteProps } from './interface'

const BreadcrumbItem = forwardRef<HTMLSpanElement, BreadcrumbItemProps>(
  (props, ref) => {
    const { style, className, children, href, onClick, ...rest } = props
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('breadcrumb-item')

    return (
      <span
        ref={ref}
        className={cs(prefixCls, className)}
        style={style}
        {...rest}
      >
        {href ? (
          <a className={`${prefixCls}-link`} href={href} onClick={onClick}>
            {children}
          </a>
        ) : (
          <span className={`${prefixCls}-link`} onClick={onClick}>
            {children}
          </span>
        )}
      </span>
    )
  }
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>((props, ref) => {
  const {
    style,
    className,
    children,
    separator = '/',
    routes,
    maxCount,
    itemRender,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('breadcrumb')

  const renderFromRoutes = () => {
    if (!routes) return null
    const paths: string[] = []

    return routes.map((route, index) => {
      paths.push(route.path || '')
      const isLast = index === routes.length - 1

      const content = itemRender
        ? itemRender(route, routes, paths)
        : route.breadcrumbName

      return (
        <span key={route.path || index}>
          <BreadcrumbItem href={isLast ? undefined : route.path}>
            {content}
          </BreadcrumbItem>
          {!isLast && (
            <span className={`${prefixCls}-separator`}>{separator}</span>
          )}
        </span>
      )
    })
  }

  const renderFromChildren = () => {
    const items = Children.toArray(children)
    const displayItems =
      maxCount && items.length > maxCount
        ? [...items.slice(0, 1), '...', ...items.slice(-1)]
        : items

    return displayItems.map((child, index) => {
      const isLast = index === displayItems.length - 1
      return (
        <span key={index}>
          {child === '...' ? <BreadcrumbItem>...</BreadcrumbItem> : child}
          {!isLast && (
            <span className={`${prefixCls}-separator`}>{separator}</span>
          )}
        </span>
      )
    })
  }

  return (
    <nav
      ref={ref}
      className={cs(prefixCls, className)}
      style={style}
      aria-label="breadcrumb"
      {...rest}
    >
      {routes ? renderFromRoutes() : renderFromChildren()}
    </nav>
  )
})

Breadcrumb.displayName = 'Breadcrumb'

type BreadcrumbComponentType = typeof Breadcrumb & {
  Item: typeof BreadcrumbItem
}

const BreadcrumbComponent = Breadcrumb as BreadcrumbComponentType
BreadcrumbComponent.Item = BreadcrumbItem

export default BreadcrumbComponent
export { BreadcrumbItem }
export type { BreadcrumbItemProps, BreadcrumbProps, RouteProps }
