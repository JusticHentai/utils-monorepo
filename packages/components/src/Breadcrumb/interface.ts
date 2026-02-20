import { CSSProperties, ReactNode } from 'react'

export interface BreadcrumbProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 分隔符 */
  separator?: ReactNode
  /** 路由配置 */
  routes?: RouteProps[]
  /** 最大数量 */
  maxCount?: number
  /** 自定义渲染 */
  itemRender?: (
    route: RouteProps,
    routes: RouteProps[],
    paths: string[]
  ) => ReactNode
}

export interface BreadcrumbItemProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 链接地址 */
  href?: string
  /** 点击回调 */
  onClick?: (e: React.MouseEvent) => void
  /** 下拉菜单 */
  droplist?: ReactNode
}

export interface RouteProps {
  path?: string
  breadcrumbName?: string
  children?: RouteProps[]
}
