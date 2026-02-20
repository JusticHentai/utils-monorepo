import { CSSProperties, ReactNode } from 'react'

export type CascaderValue = string | string[]

export interface CascaderOptionType {
  value: string
  label?: ReactNode
  disabled?: boolean
  disableCheckbox?: boolean
  isLeaf?: boolean
  children?: CascaderOptionType[]
  [key: string]: unknown
}

export interface FieldNamesType {
  label?: string
  value?: string
  children?: string
  disabled?: string
  isLeaf?: string
}

export interface CascaderProps {
  style?: CSSProperties
  className?: string | string[]
  /** 选项数据 */
  options?: CascaderOptionType[]
  /** 选中值（受控） */
  value?: CascaderValue[]
  /** 默认选中值 */
  defaultValue?: CascaderValue[]
  /** 是否多选 */
  multiple?: boolean
  /** 选中时触发 */
  onChange?: (
    value: CascaderValue[],
    selectedOptions: CascaderOptionType[][],
    extra: { dropdownVisible: boolean }
  ) => void
  /** 选中即改变（不必选到叶子节点） */
  changeOnSelect?: boolean
  /** 自定义字段名 */
  fieldNames?: FieldNamesType
  /** 搜索 */
  showSearch?:
    | boolean
    | {
        render?: (
          inputValue: string,
          options: CascaderOptionType[]
        ) => ReactNode
      }
  /** 搜索过滤函数 */
  filterOption?: (
    inputValue: string,
    option: CascaderOptionType,
    options: CascaderOptionType[]
  ) => boolean
  /** 远程搜索回调 */
  onSearch?: (inputValue: string) => void
  /** 弹出框显示隐藏回调 */
  onVisibleChange?: (visible: boolean) => void
  /** 弹出框是否可见（受控） */
  popupVisible?: boolean
  /** 默认弹出框是否可见 */
  defaultPopupVisible?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 占位符 */
  placeholder?: string
  /** 允许清除 */
  allowClear?: boolean
  /** 输入框大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 有边框 */
  bordered?: boolean
  /** 弹出框挂载节点 */
  getPopupContainer?: (node: HTMLElement) => HTMLElement
  /** 是否在隐藏时卸载弹出框 */
  unmountOnExit?: boolean
  /** 自定义弹出框内容 */
  dropdownRender?: (menu: ReactNode) => ReactNode
  /** 自定义触发元素 */
  triggerElement?:
    | ReactNode
    | ((params: { value: CascaderValue[] }) => ReactNode)
  /** 动态加载 */
  loadMore?: (
    option: CascaderOptionType,
    level: number
  ) => Promise<CascaderOptionType[] | void>
  /** 弹出框菜单列样式 */
  dropdownMenuColumnStyle?: CSSProperties
  /** 搜索值改变回调 */
  onInputValueChange?: (inputValue: string) => void
  /** 清除回调 */
  onClear?: () => void
  /** 自定义选中值的展示 */
  renderFormat?: (valueShow: ReactNode[]) => ReactNode
  /** 自定义选项渲染 */
  renderOption?: (option: CascaderOptionType, level: number) => ReactNode
  /** 每列底部渲染 */
  renderFooter?: (
    level: number,
    activeOption: CascaderOptionType | null
  ) => ReactNode
  /** 最大显示标签数 */
  maxTagCount?: number
  /** 无数据时的内容 */
  notFoundContent?: ReactNode
  /** 多选模式下的选中策略 */
  checkedStrategy?: 'parent' | 'child' | 'all'
  /** 选中后的回填方式，默认显示完整路径 */
  showPathLabel?: boolean
  /** 路径分隔符 */
  pathSeparator?: string
  /** 弹出框位置 */
  popupAlign?: 'left' | 'right'
}

export interface CascaderNodeType {
  value: string
  label: ReactNode
  disabled: boolean
  disableCheckbox: boolean
  isLeaf: boolean
  loading: boolean
  loaded: boolean
  checked: boolean
  halfChecked: boolean
  children: CascaderNodeType[]
  parent: CascaderNodeType | null | undefined
  level: number
  pathValue: string[]
  pathLabel: ReactNode[]
  _data: CascaderOptionType
}

export interface RefCascaderType {
  focus: () => void
  blur: () => void
}
