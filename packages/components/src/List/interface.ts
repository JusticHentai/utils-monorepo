import { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export interface ListProps<T = any> {
  className?: string | string[]
  style?: CSSProperties
  wrapperStyle?: CSSProperties
  wrapperClassName?: string | string[]
  dataSource?: T[]
  render?: (item: T, index: number) => ReactNode
  children?: ReactNode
  size?: 'small' | 'default' | 'large'
  header?: ReactNode
  footer?: ReactNode
  bordered?: boolean
  split?: boolean
  loading?: boolean
  hoverable?: boolean
  noDataElement?: ReactNode
  scrollLoading?: string | ReactNode
}

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  actions?: ReactNode[]
  extra?: ReactNode
  actionLayout?: 'horizontal' | 'vertical'
}

export interface ListItemMetaProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  title?: ReactNode
  avatar?: ReactNode
  description?: ReactNode
}
