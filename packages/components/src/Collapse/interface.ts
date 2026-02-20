import { CSSProperties, ReactNode } from 'react'

export interface CollapseProps {
  style?: CSSProperties
  className?: string | string[]
  /** 当前面板选中值（受控） */
  activeKey?: string | string[]
  /** 默认展开的面板 */
  defaultActiveKey?: string | string[]
  /** 是否是手风琴模式 */
  accordion?: boolean
  /** 自定义展开图标 */
  expandIcon?: ReactNode
  /** 展开图标的位置 */
  expandIconPosition?: 'left' | 'right'
  /** 是否有边框 */
  bordered?: boolean
  /** 挂载时不渲染被隐藏的面板 */
  lazyload?: boolean
  /** 是否销毁被折叠的面板 */
  destroyOnHide?: boolean
  /** 可触发折叠操作的区域 */
  triggerRegion?: 'header' | 'icon'
  /** 展开面板改变时触发 */
  onChange?: (key: string, keys: string[], e: React.MouseEvent) => void
  children?: ReactNode
}

export interface CollapseItemProps {
  style?: CSSProperties
  className?: string | string[]
  /** 面板唯一标识 */
  name: string
  /** 折叠面板头部内容 */
  header?: ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义展开图标 */
  expandIcon?: ReactNode
  /** 是否展示展开按钮 */
  showExpandIcon?: boolean
  /** 额外节点 */
  extra?: ReactNode
  /** 内容区域样式 */
  contentStyle?: CSSProperties
  /** 折叠时是否销毁 */
  destroyOnHide?: boolean
  children?: ReactNode
}
