import { CSSProperties, ReactNode } from 'react'

export interface SelectOption {
  label?: ReactNode
  value: string | number
  disabled?: boolean
  extra?: Record<string, unknown>
}

export interface SelectProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 值 */
  value?: string | number | (string | number)[]
  /** 默认值 */
  defaultValue?: string | number | (string | number)[]
  /** 选项数据 */
  options?: SelectOption[]
  /** 是否多选 */
  mode?: 'multiple' | 'tags'
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 是否禁用 */
  disabled?: boolean
  /** 是否允许搜索 */
  showSearch?: boolean
  /** 是否允许清除 */
  allowClear?: boolean
  /** 是否允许创建 */
  allowCreate?: boolean
  /** 占位符 */
  placeholder?: string
  /** 加载中 */
  loading?: boolean
  /** 下拉菜单为空时的提示 */
  notFoundContent?: ReactNode
  /** 下拉菜单弹出位置 */
  position?: 'top' | 'bottom'
  /** 多选时最多显示的 tag 数量 */
  maxTagCount?: number
  /** 变化回调 */
  onChange?: (value: string | number | (string | number)[]) => void
  /** 搜索回调 */
  onSearch?: (value: string) => void
  /** 下拉框可见回调 */
  onVisibleChange?: (visible: boolean) => void
  /** 清除回调 */
  onClear?: () => void
  /** 取消选择回调(多选模式) */
  onDeselect?: (value: string | number) => void
  /** 弹出层挂载节点 */
  getPopupContainer?: () => HTMLElement
  /** 是否虚拟滚动 */
  virtualListProps?: Record<string, unknown>
  /** 下拉菜单 className */
  dropdownClassName?: string
  /** 下拉菜单 style */
  dropdownStyle?: CSSProperties
  /** 触发元素渲染函数 */
  triggerElement?: ReactNode | ((params: { value: unknown }) => ReactNode)
  /** 自定义触发节点 */
  triggerProps?: Record<string, unknown>
  /** 是否默认高亮第一个选项 */
  defaultActiveFirstOption?: boolean
  /** 弹层默认是否展开 */
  defaultPopupVisible?: boolean
  /** 弹层是否展开(受控) */
  popupVisible?: boolean
  /** 自定义弹出内容 */
  dropdownRender?: (menu: ReactNode) => ReactNode
  /** 自定义搜索过滤 */
  filterOption?:
    | boolean
    | ((inputValue: string, option: SelectOption) => boolean)
  /** 是否在隐藏的时候销毁弹层 DOM */
  unmountOnExit?: boolean
}

export interface OptionProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 值 */
  value: string | number
  /** 是否禁用 */
  disabled?: boolean
  /** 额外参数 */
  extra?: Record<string, unknown>
}

export interface OptGroupProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 分组标签 */
  label?: ReactNode
}
