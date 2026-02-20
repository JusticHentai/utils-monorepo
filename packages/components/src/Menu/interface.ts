import { CSSProperties, ReactNode } from 'react'

export interface MenuProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 模式 */
  mode?: 'vertical' | 'horizontal' | 'pop' | 'popButton'
  /** 主题 */
  theme?: 'light' | 'dark'
  /** 选中的菜单项 key */
  selectedKeys?: string[]
  /** 默认选中 */
  defaultSelectedKeys?: string[]
  /** 展开的子菜单 key */
  openKeys?: string[]
  /** 默认展开 */
  defaultOpenKeys?: string[]
  /** 是否自动展开父节点 */
  autoOpen?: boolean
  /** 是否收缩 */
  collapse?: boolean
  /** 缩进步长 */
  levelIndent?: number
  /** 是否自动滚动到选中项 */
  autoScrollIntoView?: boolean
  /** 是否支持手风琴模式 */
  accordion?: boolean
  /** 选中菜单项回调 */
  onClickMenuItem?: (
    key: string,
    event: React.MouseEvent,
    keyPath: string[]
  ) => void
  /** 子菜单展开回调 */
  onClickSubMenu?: (key: string, openKeys: string[], keyPath: string[]) => void
  /** 收缩变化回调 */
  onCollapseChange?: (collapse: boolean) => void
}

export interface MenuItemProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 唯一标识 */
  key?: string
  /** 是否禁用 */
  disabled?: boolean
}

export interface SubMenuProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 唯一标识 */
  key?: string
  /** 标题 */
  title?: ReactNode
  /** 是否禁用 */
  disabled?: boolean
}

export interface MenuItemGroupProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 分组标题 */
  title?: ReactNode
}
