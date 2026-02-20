import { CSSProperties, ReactNode } from 'react'

export interface TabsProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 当前选中的 tab */
  activeTab?: string
  /** 默认选中的 tab */
  defaultActiveTab?: string
  /** 类型 */
  type?: 'line' | 'card' | 'card-gutter' | 'text' | 'rounded' | 'capsule'
  /** 方向 */
  direction?: 'horizontal' | 'vertical'
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 标签位置 */
  tabPosition?: 'left' | 'right' | 'top' | 'bottom'
  /** 是否可编辑 */
  editable?: boolean
  /** 是否显示新增按钮 */
  showAddButton?: boolean
  /** 是否销毁隐藏的 tab */
  destroyOnHide?: boolean
  /** 是否懒加载 */
  lazyload?: boolean
  /** 是否有分割线 */
  headerPadding?: boolean
  /** 是否支持动画 */
  animation?: boolean
  /** 额外内容 */
  extra?: ReactNode
  /** 变化回调 */
  onChange?: (key: string) => void
  /** 新增回调 */
  onAddTab?: () => void
  /** 删除回调 */
  onDeleteTab?: (key: string) => void
  /** 标签页点击回调 */
  onClickTab?: (key: string) => void
}

export interface TabPaneProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 标签页的标题 */
  title?: ReactNode
  /** 唯一标识 */
  key?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否可关闭 */
  closable?: boolean
  /** 是否被销毁 */
  destroyOnHide?: boolean
}
