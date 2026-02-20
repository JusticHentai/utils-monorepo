import { CSSProperties, ReactNode } from 'react'

export interface TransferItem {
  key: string
  value: string
  label?: ReactNode
  disabled?: boolean
}

export interface TransferProps {
  className?: string | string[]
  style?: CSSProperties
  /** 数据源 */
  dataSource?: TransferItem[]
  /** 默认选中的目标 key 列表 */
  defaultTargetKeys?: string[]
  /** 选中的目标 key 列表（受控） */
  targetKeys?: string[]
  /** 默认选中的 key 列表 */
  defaultSelectedKeys?: string[]
  /** 选中的 key 列表（受控） */
  selectedKeys?: string[]
  /** 标题 */
  titleTexts?: [ReactNode, ReactNode]
  /** 操作按钮文案 */
  operationTexts?: [ReactNode?, ReactNode?]
  /** 搜索框占位符 */
  searchPlaceholder?: string
  /** 是否显示搜索框 */
  showSearch?: boolean
  /** 是否显示全选 */
  showSelectAll?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否单向 */
  oneWay?: boolean
  /** 简单模式 */
  simple?: boolean
  /** 每行渲染函数 */
  render?: (item: TransferItem) => ReactNode
  /** 搜索过滤 */
  filterOption?: (inputValue: string, item: TransferItem) => boolean
  /** 选中变更回调 */
  onSelectChange?: (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => void
  /** 数据移动回调 */
  onChange?: (
    targetKeys: string[],
    direction: 'left' | 'right',
    moveKeys: string[]
  ) => void
  /** 搜索回调 */
  onSearch?: (direction: 'left' | 'right', value: string) => void
  /** 列表页脚 */
  footer?: (props: { direction: 'left' | 'right' }) => ReactNode
  /** 子元素 */
  children?: ReactNode
}
