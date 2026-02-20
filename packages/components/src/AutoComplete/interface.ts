import { CSSProperties, ReactElement, ReactNode } from 'react'
import { InputProps } from '../Input/interface'

export interface AutoCompleteProps {
  className?: string | string[]
  style?: CSSProperties
  /** 是否禁用 */
  disabled?: boolean
  /** 子元素 */
  children?: ReactNode
  /** 是否允许清除 */
  allowClear?: boolean
  /** 数据源 */
  data?: (
    | string
    | { value: string; name?: string; [key: string]: unknown }
    | ReactNode
  )[]
  /** 输入框提示 */
  placeholder?: string
  /** 默认值 */
  defaultValue?: string
  /** 受控值 */
  value?: string
  /** 错误状态（已废弃） */
  error?: boolean
  /** 状态 */
  status?: 'error' | 'warning'
  /** 大小写敏感 */
  strict?: boolean
  /** 加载状态 */
  loading?: boolean
  /** 默认高亮第一个选项 */
  defaultActiveFirstOption?: boolean
  /** 自定义触发元素 */
  triggerElement?: ReactElement | ((props: { value: string }) => ReactElement)
  /** 搜索时回调 */
  onSearch?: (value: string) => void
  /** 选中时回调 */
  onSelect?: (
    value: string,
    option?: { value: string; label: ReactNode }
  ) => void
  /** 值变化时回调 */
  onChange?: (
    value: string,
    option?: { value: string; label: ReactNode }
  ) => void
  /** 按下 Enter 时回调 */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** 聚焦时回调 */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  /** 失焦时回调 */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  /** 弹出框挂载容器 */
  getPopupContainer?: (node: HTMLElement) => HTMLElement
  /** 过滤选项 */
  filterOption?:
    | boolean
    | ((
        inputValue: string,
        option: { value: string; label: ReactNode }
      ) => boolean)
  /** 下拉框自定义渲染 */
  dropdownRender?: (menu: ReactNode) => ReactNode
  /** Input 组件的属性 */
  inputProps?: Partial<InputProps>
}
