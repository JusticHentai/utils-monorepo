import { CSSProperties, ReactNode } from 'react'

export interface PaginationProps {
  style?: CSSProperties
  className?: string
  /** 当前页 */
  current?: number
  /** 默认当前页 */
  defaultCurrent?: number
  /** 总数据条数 */
  total?: number
  /** 每页条数 */
  pageSize?: number
  /** 默认每页条数 */
  defaultPageSize?: number
  /** 每页条数选项 */
  pageSizeChangeResetCurrent?: boolean
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 是否禁用 */
  disabled?: boolean
  /** 是否简洁模式 */
  simple?: boolean
  /** 显示总数 */
  showTotal?: boolean | ((total: number, range: [number, number]) => ReactNode)
  /** 是否显示页码跳转 */
  showJumper?: boolean
  /** 是否显示数据条数选择器 */
  sizeCanChange?: boolean
  /** 可选的 pageSize */
  sizeOptions?: number[]
  /** 是否隐藏只有一页时的分页 */
  hideOnSinglePage?: boolean
  /** 页码变化回调 */
  onChange?: (pageNumber: number, pageSize: number) => void
  /** 每页条数变化回调 */
  onPageSizeChange?: (size: number, current: number) => void
}
