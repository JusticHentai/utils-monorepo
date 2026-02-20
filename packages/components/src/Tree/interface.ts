import {
  CSSProperties,
  DragEvent,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react'

export type NodeInstance = ReactElement<PropsWithChildren<NodeProps>>

export type SHOW_ALL = 'all'
export type SHOW_PARENT = 'parent'
export type SHOW_CHILD = 'child'

export type ActionOnClick = 'select' | 'check' | 'expand'

export type FieldNamesType = {
  key?: string
  title?: string
  disabled?: string
  children?: string
  isLeaf?: string
  disableCheckbox?: string
  checkable?: string
}

export type TreeDataType = NodeProps & {
  key?: string
  _index?: number
  children?: TreeDataType[]
  [key: string]: any
}

export type AllowDrop = (options: {
  dropNode: NodeInstance
  dragNode: NodeInstance | null
  dropPosition: number
}) => boolean

export interface TreeState {
  treeData?: TreeProps['treeData']
  nodeList?: NodeProps[]
  selectedKeys?: string[]
  checkedKeys?: string[]
  expandedKeys?: string[]
  loadedKeys?: string[]
  loadingKeys?: string[]
  halfCheckedKeys?: string[]
  currentExpandKeys?: string[]
}

export interface TreeProps {
  style?: CSSProperties
  className?: string | string[]
  size?: 'mini' | 'small' | 'default' | 'large'
  blockNode?: boolean
  autoExpandParent?: boolean
  multiple?: boolean
  checkable?: boolean
  draggable?: boolean
  allowDrop?: AllowDrop
  selectable?: boolean
  checkStrictly?: boolean
  checkedStrategy?: SHOW_ALL | SHOW_PARENT | SHOW_CHILD
  defaultSelectedKeys?: string[]
  selectedKeys?: string[]
  defaultCheckedKeys?: string[]
  checkedKeys?: string[]
  halfCheckedKeys?: string[]
  defaultExpandedKeys?: string[]
  expandedKeys?: string[]
  treeData?: TreeDataType[]
  fieldNames?: FieldNamesType
  icons?:
    | ((nodeProps: NodeProps) => {
        dragIcon?: ReactNode
        switcherIcon?: ReactNode
        loadingIcon?: ReactNode
      })
    | {
        dragIcon?: ReactNode
        switcherIcon?: ReactNode
        loadingIcon?: ReactNode
      }
  renderExtra?: (props: NodeProps) => ReactNode
  renderTitle?: (props: NodeProps) => ReactNode
  showLine?: boolean
  actionOnClick?: ActionOnClick | ActionOnClick[]
  loadMore?: (node: NodeInstance) => Promise<void>
  onSelect?: (
    selectedKeys: string[],
    extra: {
      selected: boolean
      selectedNodes: NodeInstance[]
      node: NodeInstance
      e: Event
    }
  ) => void
  onCheck?: (
    checkedKeys: string[],
    extra: {
      node: NodeInstance
      checkedNodes: NodeInstance[]
      checked: boolean
      halfCheckedKeys: string[]
      halfCheckedNodes: NodeInstance[]
      e: Event
    }
  ) => void
  onExpand?: (
    expandedKeys: string[],
    extra?: {
      expanded: boolean
      node: NodeInstance
      expandedNodes: NodeInstance[]
    }
  ) => void
  onDragStart?: (e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void
  onDragEnd?: (e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void
  onDragOver?: (e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void
  onDragLeave?: (e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void
  onDrop?: (info: {
    e: DragEvent<HTMLSpanElement>
    dragNode: NodeInstance | null
    dropNode: NodeInstance | null
    dropPosition: number
  }) => void
  filterNode?: (node: NodeProps) => boolean
  children?: ReactNode
  onMouseDown?: (e: React.MouseEvent) => void
}

export interface NodeProps {
  style?: CSSProperties
  className?: string | string[]
  blockNode?: boolean
  title?: string | ReactNode
  selectable?: boolean
  disabled?: boolean
  disableCheckbox?: boolean
  icon?: ReactNode
  checkable?: boolean
  isLeaf?: boolean
  icons?: TreeProps['icons']
  draggable?: boolean
  showLine?: boolean
  checked?: boolean
  selected?: boolean
  parentKey?: string
  pathParentKeys?: string[]
  indeterminated?: boolean
  _key?: string
  _level?: number
  _lineless?: boolean[]
  selectedKeys?: string[]
  checkedKeys?: string[]
  expandedKeys?: string[]
  loading?: boolean
  loaded?: boolean
  autoExpandParent?: boolean
  expanded?: boolean
  children?: NodeProps[]
  childrenData?: NodeProps[]
  dataRef?: TreeDataType
  loadingKeys?: string[]
  loadedKeys?: string[]
}
