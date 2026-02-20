import { createContext, DragEvent } from 'react'
import { NodeProps, TreeDataType, TreeProps, TreeState } from './interface'

export const TreeContext = createContext<{
  icons?: NodeProps['icons']
  loadMore?: (node: NodeProps) => void
  renderExtra?: TreeProps['renderExtra']
  renderTitle?: TreeProps['renderTitle']
  onSelect?: (_key: string, e: any) => void
  onCheck?: (checked: boolean, _key: string, e: any) => void
  onExpand?: (expanded: boolean, _key: string) => void
  onNodeDrop?: (
    e: DragEvent<HTMLSpanElement>,
    nodeProps: NodeProps,
    dragPosition: 0 | 1 | -1
  ) => void
  key2nodeProps?: { [key: string]: NodeProps }
  actionOnClick?: TreeProps['actionOnClick']
  getNodeProps?: <T extends NodeProps | NodeProps[]>(
    nodes: T,
    dataSet?: any
  ) => T
  getTreeState?: () => TreeState
  onExpandEnd?: (key: string) => void
  onNodeDragStart?: (
    e: DragEvent<HTMLSpanElement>,
    nodeProps: NodeProps
  ) => void
  onNodeDragEnd?: (e: DragEvent<HTMLSpanElement>, nodeProps: NodeProps) => void
  onNodeDragOver?: (
    e: DragEvent<HTMLSpanElement>,
    nodeProps: NodeProps,
    position: number
  ) => void
  onNodeDragLeave?: (
    e: DragEvent<HTMLSpanElement>,
    nodeProps: NodeProps
  ) => void
  allowDrop?: (nodeProps: NodeProps, dragPosition: 0 | 1 | -1) => boolean
  getFieldInfo?: (data: any) => TreeDataType
}>({})
