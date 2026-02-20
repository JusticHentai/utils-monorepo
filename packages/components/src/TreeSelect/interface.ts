import { CSSProperties, ReactNode } from 'react'
import { NodeProps, TreeDataType, TreeProps } from '../Tree/interface'

export type TreeSelectDataType = TreeDataType & { value?: string }
export type LabelValue = { label: ReactNode; value: string; disabled?: boolean }

export interface TreeSelectProps {
  style?: CSSProperties
  className?: string | string[]
  disabled?: boolean
  size?: 'mini' | 'small' | 'default' | 'large'
  placeholder?: string
  allowClear?: boolean
  multiple?: boolean
  defaultValue?:
    | string
    | string[]
    | { label: ReactNode; value: string; disabled?: boolean }
    | { label: ReactNode; value: string; disabled?: boolean }[]
  value?:
    | string
    | string[]
    | { label: ReactNode; value: string; disabled?: boolean }
    | { label: ReactNode; value: string; disabled?: boolean }[]
  renderFormat?: (
    option: NodeProps | null,
    value: string | LabelValue
  ) => ReactNode
  inputValue?: string
  fieldNames?: TreeProps['fieldNames']
  treeData?: TreeSelectDataType[]
  labelInValue?: boolean
  unmountOnExit?: boolean
  treeCheckable?: boolean
  treeCheckStrictly?: boolean
  treeCheckedStrategy?: TreeProps['checkedStrategy']
  treeProps?: Partial<TreeProps>
  bordered?: boolean
  notFoundContent?: ReactNode
  popupVisible?: boolean
  dropdownMenuStyle?: CSSProperties
  dropdownRender?: (dom: ReactNode) => ReactNode
  showSearch?: boolean | { retainInputValueWhileSelect?: boolean }
  maxTagCount?: number
  onChange?: (
    value: any,
    extra: {
      trigger?: NodeProps
      checked?: boolean
      selected?: boolean
    }
  ) => void
  getPopupContainer?: (node: HTMLElement) => Element
  onVisibleChange?: (visible: boolean) => void
  filterTreeNode?: (inputText: string, treeNode: any) => boolean | void
  loadMore?: (treeNode: any, dataRef?: any) => void
  onSearch?: (inputValue: string) => void
  onInputValueChange?: (value: string, reason: InputValueChangeReason) => void
  onClear?: (visible: boolean) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  triggerElement?: ReactNode | ((params: { value: any }) => ReactNode)
  children?: ReactNode
}

export type RefTreeSelectType = {
  focus: () => void
  blur: () => void
}

export const DefaultFieldNames = {
  key: 'key',
  title: 'title',
  children: 'children',
  selectable: 'selectable',
  disabled: 'disabled',
  disableCheckbox: 'disableCheckbox',
  checkable: 'checkable',
  isLeaf: 'isLeaf',
}

export type InputValueChangeReason =
  | 'manual'
  | 'optionChecked'
  | 'optionListHide'
