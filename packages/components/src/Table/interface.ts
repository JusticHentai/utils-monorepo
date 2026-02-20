import { CSSProperties, ReactNode } from 'react'

export type SorterFn = (a: any, b: any) => number
export type SortDirection = 'descend' | 'ascend'

export interface SorterInfo {
  direction?: SortDirection
  field?: string | number
  sorterFn?: SorterFn
  priority?: number
}

export type RowCallbackProps = {
  onClick?: (event: React.MouseEvent) => void
  onDoubleClick?: (event: React.MouseEvent) => void
  onContextMenu?: (event: React.MouseEvent) => void
  onMouseEnter?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
  [name: string]: unknown
}

export interface ColumnProps<T = any> {
  className?: string | string[]
  align?: 'left' | 'center' | 'right'
  ellipsis?: boolean
  headerCellStyle?: CSSProperties
  bodyCellStyle?: CSSProperties
  title: ReactNode
  width?: number | string
  dataIndex?: string
  key?: string | number
  render?: (col: any, item: T, index: number) => any
  placeholder?: ReactNode
  sorter?: SorterFn | boolean | { compare?: SorterFn; multiple?: number }
  filters?: { text?: ReactNode; value?: any; [key: string]: any }[]
  defaultFilters?: string[]
  defaultSortOrder?: SortDirection
  filteredValue?: string[]
  sortOrder?: SortDirection
  sortDirections?: SortDirection[]
  filterMultiple?: boolean
  filterIcon?: ReactNode
  filterDropdown?: (props: {
    filterKeys?: string[]
    setFilterKeys?: (filterKeys: string[], callback?: () => void) => void
    confirm?: () => void
  }) => ReactNode
  onFilterDropdownVisibleChange?: (visible: boolean) => void
  onFilter?: (value: any, row: T) => boolean
  fixed?: 'left' | 'right'
  onHeaderCell?: (column: ColumnProps<T>, index: number) => RowCallbackProps
  onCell?: (record: T, index: number) => RowCallbackProps
  children?: ColumnProps<T>[]
  colSpan?: number
  rowSpan?: number
}

export interface InternalColumnProps<T = any> extends ColumnProps<T> {
  $$isOperation?: boolean
  $$isFirstColumn?: boolean
  $$columnIndex?: number | number[]
}

export interface RowSelectionProps<T = any> {
  checkAll?: boolean
  checkStrictly?: boolean
  checkCrossPage?: boolean
  columnTitle?: string | ReactNode
  columnWidth?: number
  checkboxProps?: (record: T) => { [key: string]: any }
  fixed?: boolean
  onChange?: (selectedRowKeys: (string | number)[], selectedRows: T[]) => void
  onSelect?: (selected: boolean, record: T, selectedRows: T[]) => void
  onSelectAll?: (selected: boolean, selectedRows: T[]) => void
  preserveSelectedRowKeys?: boolean
  renderCell?: (originNode: ReactNode, checked: boolean, record: T) => ReactNode
  selectedRowKeys?: (string | number)[]
  type?: 'checkbox' | 'radio'
}

export interface ExpandProps<T = any> {
  icon?: (props: { expanded: boolean; record: T }) => ReactNode
  width?: number
  columnTitle?: ReactNode
  rowExpandable?: (record: T) => boolean
  expandRowByClick?: boolean
  strictTreeData?: boolean
}

export interface TableProps<T = any> {
  style?: CSSProperties
  className?: string | string[]
  tableLayoutFixed?: boolean
  rowKey?: string | number | ((record: T) => string | number)
  columns?: ColumnProps<T>[]
  data?: T[]
  border?:
    | boolean
    | {
        wrapper?: boolean
        headerCell?: boolean
        bodyCell?: boolean
        cell?: boolean
      }
  borderCell?: boolean
  hover?: boolean
  defaultExpandAllRows?: boolean
  expandedRowKeys?: (string | number)[]
  defaultExpandedRowKeys?: (string | number)[]
  expandedRowRender?: (record: T, index: number) => ReactNode
  expandProps?: ExpandProps<T>
  onExpand?: (record: T, expanded: boolean) => void
  onExpandedRowsChange?: (expandedRows: (string | number)[]) => void
  loading?: boolean | { tip?: string }
  noDataElement?: string | ReactNode
  showHeader?: boolean
  stripe?: boolean
  size?: 'default' | 'middle' | 'small' | 'mini'
  onChange?: (
    pagination: any,
    sorter: SorterInfo | SorterInfo[],
    filters: Partial<Record<string, string[]>>,
    extra: { currentData: T[]; action: 'paginate' | 'sort' | 'filter' }
  ) => void
  pagination?: any | boolean
  renderPagination?: (paginationNode?: ReactNode) => ReactNode
  scroll?: { x?: number | string | boolean; y?: number | string | boolean }
  rowClassName?: (record: T, index: number) => string
  rowSelection?: RowSelectionProps<T>
  onHeaderRow?: (columns: ColumnProps<T>[], index: number) => RowCallbackProps
  onRow?: (record: T, index: number) => RowCallbackProps
  placeholder?: ReactNode
  pagePosition?: 'br' | 'bl' | 'tr' | 'tl' | 'topCenter' | 'bottomCenter'
  childrenColumnName?: string
  indentSize?: number
  footer?: (currentPageData: T[]) => ReactNode
  summary?: (currentData?: T[]) => ReactNode
  showSorterTooltip?: boolean
}

export interface SummaryRowProps {
  children?: ReactNode
}

export interface SummaryCellProps {
  children?: ReactNode
  colSpan?: number
  rowSpan?: number
  className?: string
  style?: CSSProperties
  align?: 'left' | 'center' | 'right'
}
