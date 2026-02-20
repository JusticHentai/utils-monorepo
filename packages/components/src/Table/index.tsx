import { createThrottleFn } from '@justichentai/element-utils'
import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cs, isArray, isFunction, isObject, isString } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { get } from '../_util/object'
import Checkbox from '../Checkbox'
import { ConfigContext } from '../ConfigProvider/context'
import Empty from '../Empty'
import Pagination from '../Pagination'
import Radio from '../Radio'
import Spin from '../Spin'
import Trigger from '../Trigger'
import {
  ColumnProps,
  InternalColumnProps,
  SortDirection,
  SorterFn,
  SorterInfo,
  SummaryCellProps,
  SummaryRowProps,
  TableProps,
} from './interface'

// =========== Utilities ===========

function getRowKey<T>(
  rowKey: TableProps<T>['rowKey'],
  record: T,
  index: number
): string | number {
  if (isFunction(rowKey)) return rowKey(record) as string | number
  if (isString(rowKey)) return (record as Record<string, any>)[rowKey as string]
  return (record as Record<string, any>).key ?? index
}

function flattenColumns<T>(
  columns: ColumnProps<T>[]
): InternalColumnProps<T>[] {
  const result: InternalColumnProps<T>[] = []
  columns.forEach((col) => {
    if (col.children && col.children.length > 0) {
      result.push(...flattenColumns(col.children))
    } else {
      result.push(col as InternalColumnProps<T>)
    }
  })
  return result
}

function getHeaderRows<T>(columns: ColumnProps<T>[]): ColumnProps<T>[][] {
  const maxLevel = getMaxLevel(columns)
  const rows: ColumnProps<T>[][] = Array.from({ length: maxLevel }, () => [])

  function fillRows(cols: ColumnProps<T>[], level: number) {
    cols.forEach((col) => {
      const row = { ...col }
      if (col.children && col.children.length > 0) {
        row.colSpan = getLeafCount(col)
        rows[level].push(row)
        fillRows(col.children, level + 1)
      } else {
        row.rowSpan = maxLevel - level
        rows[level].push(row)
      }
    })
  }

  fillRows(columns, 0)
  return rows
}

function getMaxLevel<T>(columns: ColumnProps<T>[]): number {
  let max = 1
  columns.forEach((col) => {
    if (col.children && col.children.length > 0) {
      const childMax = getMaxLevel(col.children) + 1
      if (childMax > max) max = childMax
    }
  })
  return max
}

function getLeafCount<T>(column: ColumnProps<T>): number {
  if (!column.children || column.children.length === 0) return 1
  return column.children.reduce((sum, child) => sum + getLeafCount(child), 0)
}

function getStickyOffsets<T>(columns: InternalColumnProps<T>[]): {
  left: number[]
  right: number[]
} {
  const left: number[] = []
  const right: number[] = []
  let leftOffset = 0
  let rightOffset = 0

  for (let i = 0; i < columns.length; i++) {
    left.push(leftOffset)
    const width =
      typeof columns[i].width === 'number' ? (columns[i].width as number) : 0
    leftOffset += width
  }

  for (let i = columns.length - 1; i >= 0; i--) {
    right.push(rightOffset)
    const width =
      typeof columns[i].width === 'number' ? (columns[i].width as number) : 0
    rightOffset += width
  }
  right.reverse()

  return { left, right }
}

function getAllDataKeys<T>(
  data: T[],
  rowKeyFn: (record: T, index: number) => string | number,
  childrenColumnName: string
): (string | number)[] {
  const keys: (string | number)[] = []
  const loop = (arr: T[], parentIndex: number) => {
    arr.forEach((item, i) => {
      const index = parentIndex + i
      keys.push(rowKeyFn(item, index))
      const children = (item as Record<string, any>)[childrenColumnName]
      if (isArray(children)) {
        loop(children as T[], index)
      }
    })
  }
  loop(data, 0)
  return keys
}

// =========== Sub-components ===========

function SummaryRow({ children }: SummaryRowProps) {
  return <tr>{children}</tr>
}

function SummaryCell({
  children,
  colSpan,
  rowSpan,
  className,
  style,
  align,
}: SummaryCellProps) {
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={className}
      style={{ ...style, textAlign: align }}
    >
      {children}
    </td>
  )
}

const Summary = ({
  children,
  fixed: _fixed,
}: {
  children?: React.ReactNode
  fixed?: 'top' | 'bottom'
}) => {
  return <>{children}</>
}

Summary.Row = SummaryRow
Summary.Cell = SummaryCell

// =========== Filter Dropdown ===========

function FilterDropdown({
  column,
  prefixCls,
  currentFilterKeys,
  onFilter,
  onReset,
}: {
  column: ColumnProps
  prefixCls: string
  currentFilterKeys: string[]
  onFilter: (column: ColumnProps, keys: string[]) => void
  onReset: (column: ColumnProps) => void
}) {
  const [visible, setVisible] = useState(false)
  const [filterKeys, setFilterKeys] = useState<string[]>(currentFilterKeys)
  const isMultiple = column.filterMultiple !== false

  useEffect(() => {
    setFilterKeys(currentFilterKeys)
  }, [currentFilterKeys])

  const handleConfirm = () => {
    onFilter(column, filterKeys)
    setVisible(false)
  }

  const handleReset = () => {
    setFilterKeys([])
    onReset(column)
    setVisible(false)
  }

  if (column.filterDropdown) {
    return (
      <Trigger
        trigger="click"
        position="bl"
        popupVisible={visible}
        onVisibleChange={(v) => {
          setVisible(v)
          column.onFilterDropdownVisibleChange?.(v)
        }}
        popup={() => (
          <div
            className={`${prefixCls}-filter-popup`}
            onMouseDown={(e) => e.preventDefault()}
          >
            {column.filterDropdown!({
              filterKeys,
              setFilterKeys: (keys) => setFilterKeys(keys),
              confirm: handleConfirm,
            })}
          </div>
        )}
      >
        <span
          className={cs(`${prefixCls}-filter-icon`, {
            [`${prefixCls}-filter-icon-active`]: currentFilterKeys.length > 0,
          })}
        >
          {column.filterIcon || '▽'}
        </span>
      </Trigger>
    )
  }

  if (!column.filters || column.filters.length === 0) return null

  return (
    <Trigger
      trigger="click"
      position="bl"
      popupVisible={visible}
      onVisibleChange={(v) => {
        setVisible(v)
        column.onFilterDropdownVisibleChange?.(v)
      }}
      popup={() => (
        <div
          className={`${prefixCls}-filter-popup`}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div className={`${prefixCls}-filter-list`}>
            {column.filters!.map((filter) => (
              <div
                key={String(filter.value)}
                className={`${prefixCls}-filter-item`}
              >
                {isMultiple ? (
                  <Checkbox
                    checked={filterKeys.includes(String(filter.value))}
                    onChange={(checked) => {
                      const val = String(filter.value)
                      if (checked) setFilterKeys([...filterKeys, val])
                      else setFilterKeys(filterKeys.filter((k) => k !== val))
                    }}
                  >
                    {filter.text}
                  </Checkbox>
                ) : (
                  <Radio
                    checked={filterKeys.includes(String(filter.value))}
                    onChange={() => setFilterKeys([String(filter.value)])}
                  >
                    {filter.text}
                  </Radio>
                )}
              </div>
            ))}
          </div>
          <div className={`${prefixCls}-filter-btns`}>
            <span
              className={`${prefixCls}-filter-btn-reset`}
              onClick={handleReset}
            >
              重置
            </span>
            <span
              className={`${prefixCls}-filter-btn-confirm`}
              onClick={handleConfirm}
            >
              确定
            </span>
          </div>
        </div>
      )}
    >
      <span
        className={cs(`${prefixCls}-filter-icon`, {
          [`${prefixCls}-filter-icon-active`]: currentFilterKeys.length > 0,
        })}
      >
        {column.filterIcon || '▽'}
      </span>
    </Trigger>
  )
}

// =========== Main Table Component ===========

const InternalTable = <T extends Record<string, any> = any>(
  props: TableProps<T>,
  ref: React.Ref<any>
) => {
  const { getPrefixCls, size: ctxSize } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('table')

  const {
    style,
    className,
    tableLayoutFixed,
    rowKey = 'key',
    columns = [],
    data = [],
    border = true,
    borderCell,
    hover = true,
    defaultExpandAllRows,
    expandedRowRender,
    expandProps,
    onExpand,
    onExpandedRowsChange,
    loading = false,
    noDataElement,
    showHeader = true,
    stripe,
    size = ctxSize || 'default',
    onChange,
    pagination: paginationProp,
    renderPagination,
    scroll,
    rowClassName,
    rowSelection,
    onHeaderRow,
    onRow,
    placeholder,
    pagePosition = 'br',
    childrenColumnName = 'children',
    indentSize = 15,
    footer,
    summary,
    showSorterTooltip: _showSorterTooltip,
  } = props

  const tableRef = useRef<HTMLDivElement>(null)
  const scrollBodyRef = useRef<HTMLDivElement>(null)

  // ---- Flatten columns ----
  const flatColumns = useMemo(() => flattenColumns(columns), [columns])
  const headerRows = useMemo(() => getHeaderRows(columns), [columns])

  // ---- Expand ----
  const getRowKeyFn = useCallback(
    (record: T, index: number): string | number => getRowKey(rowKey, record, index),
    [rowKey]
  )

  const [expandedRowKeysState, setExpandedRowKeys] = useMergeValue<
    (string | number)[]
  >(
    defaultExpandAllRows
      ? getAllDataKeys(data, getRowKeyFn, childrenColumnName)
      : [],
    {
      value: props.expandedRowKeys,
      defaultValue: props.defaultExpandedRowKeys,
    }
  )

  const handleExpand = useCallback(
    (record: T, expanded: boolean) => {
      const key = getRowKeyFn(record, -1)
      const newKeys: (string | number)[] = expanded
        ? [...expandedRowKeysState, key as string | number]
        : expandedRowKeysState.filter((k) => k !== key)
      if (!('expandedRowKeys' in props)) {
        setExpandedRowKeys(newKeys)
      }
      onExpand?.(record, expanded)
      onExpandedRowsChange?.(newKeys)
    },
    [
      expandedRowKeysState,
      getRowKeyFn,
      props,
      setExpandedRowKeys,
      onExpand,
      onExpandedRowsChange,
    ]
  )

  // ---- Sorter ----
  const [activeSorters, setActiveSorters] = useState<SorterInfo[]>(() => {
    const initial: SorterInfo[] = []
    flatColumns.forEach((col) => {
      const field = col.key ?? col.dataIndex
      const order = col.sortOrder ?? col.defaultSortOrder
      if (order && field !== undefined) {
        const sorterInfo: SorterInfo = { direction: order, field }
        if (typeof col.sorter === 'function') {
          sorterInfo.sorterFn = col.sorter
        } else if (isObject(col.sorter) && (col.sorter as any).compare) {
          sorterInfo.sorterFn = (col.sorter as any).compare
          sorterInfo.priority = (col.sorter as any).multiple
        }
        initial.push(sorterInfo)
      }
    })
    return initial
  })

  // Sync controlled sortOrder
  useEffect(() => {
    const newSorters: SorterInfo[] = []
    flatColumns.forEach((col) => {
      if ('sortOrder' in col) {
        const field = col.key ?? col.dataIndex
        if (field !== undefined && col.sortOrder) {
          const info: SorterInfo = { direction: col.sortOrder, field }
          if (typeof col.sorter === 'function') {
            info.sorterFn = col.sorter
          } else if (isObject(col.sorter) && (col.sorter as any).compare) {
            info.sorterFn = (col.sorter as any).compare
            info.priority = (col.sorter as any).multiple
          }
          newSorters.push(info)
        }
      }
    })
    const hasControlled = flatColumns.some((c) => 'sortOrder' in c)
    if (hasControlled) {
      setActiveSorters(newSorters)
    }
  }, [flatColumns])

  const handleSort = useCallback(
    (
      field: string | number,
      direction: SortDirection | undefined,
      sorterFn?: SorterFn,
      priority?: number
    ) => {
      const isControlled = flatColumns.some(
        (c) => (c.key ?? c.dataIndex) === field && 'sortOrder' in c
      )

      let newSorters: SorterInfo[]
      if (priority !== undefined) {
        // Multi-sort mode
        newSorters = activeSorters.filter((s) => s.field !== field)
        if (direction) {
          newSorters.push({ direction, field, sorterFn, priority })
        }
        newSorters.sort((a, b) => (a.priority || 0) - (b.priority || 0))
      } else {
        newSorters = direction ? [{ direction, field, sorterFn }] : []
      }

      if (!isControlled) {
        setActiveSorters(newSorters)
      }

      /* eslint-disable react-hooks/immutability */
      onChange?.(
        paginationState,
        newSorters.length === 1 ? newSorters[0] : newSorters,
        currentFilters,
        { currentData: processedData, action: 'sort' }
      )
      /* eslint-enable react-hooks/immutability */
    },
    [activeSorters, flatColumns]
  )

  // ---- Filters ----
  const [currentFilters, setCurrentFilters] = useState<
    Record<string, string[]>
  >(() => {
    const initial: Record<string, string[]> = {}
    flatColumns.forEach((col) => {
      const field = String(col.key ?? col.dataIndex ?? '')
      if (col.filteredValue) {
        initial[field] = col.filteredValue
      } else if (col.defaultFilters) {
        initial[field] = col.defaultFilters
      }
    })
    return initial
  })

  // Sync controlled filters
  useEffect(() => {
    const newFilters: Record<string, string[]> = { ...currentFilters }
    let changed = false
    flatColumns.forEach((col) => {
      const field = String(col.key ?? col.dataIndex ?? '')
      if ('filteredValue' in col) {
        newFilters[field] = col.filteredValue || []
        changed = true
      }
    })
    if (changed) setCurrentFilters(newFilters)
  }, [flatColumns])

  const handleFilter = useCallback(
    (column: ColumnProps, keys: string[]) => {
      const field = String(column.key ?? column.dataIndex ?? '')
      const isControlled = 'filteredValue' in column
      const newFilters = { ...currentFilters, [field]: keys }
      if (!isControlled) {
        setCurrentFilters(newFilters)
      }
      onChange?.(
        paginationState,
        activeSorters.length === 1 ? activeSorters[0] : activeSorters,
        newFilters,
        { currentData: processedData, action: 'filter' }
      )
    },
    [currentFilters, activeSorters]
  )

  const handleFilterReset = useCallback(
    (column: ColumnProps) => {
      handleFilter(column, [])
    },
    [handleFilter]
  )

  // ---- Row Selection ----
  const [selectedRowKeys, setSelectedRowKeys] = useMergeValue<
    (string | number)[]
  >([], {
    value: rowSelection?.selectedRowKeys,
  })

    const handleCheckRow = useCallback(
    (checked: boolean, record: T) => {
      const key = getRowKeyFn(record, -1)
      let newKeys: (string | number)[]
      if (checked) {
        newKeys = [...selectedRowKeys, key as string | number]
      } else {
        newKeys = selectedRowKeys.filter((k) => k !== key)
      }
      const selectedRows = data.filter((r, i) =>
        newKeys.includes(getRowKeyFn(r, i))
      )
      if (!('selectedRowKeys' in (rowSelection || {}))) {
        setSelectedRowKeys(newKeys)
      }
      rowSelection?.onChange?.(newKeys, selectedRows)
      rowSelection?.onSelect?.(checked, record, selectedRows)
    },
    [selectedRowKeys, data, getRowKeyFn, rowSelection, setSelectedRowKeys]
  )

  const handleCheckRadio = useCallback(
    (record: T) => {
      const key = getRowKeyFn(record, -1)
      const newKeys: (string | number)[] = [key as string | number]
      const selectedRows = [record]
      if (!('selectedRowKeys' in (rowSelection || {}))) {
        setSelectedRowKeys(newKeys)
      }
      rowSelection?.onChange?.(newKeys, selectedRows)
      rowSelection?.onSelect?.(true, record, selectedRows)
    },
    [data, getRowKeyFn, rowSelection, setSelectedRowKeys]
  )

  const handleCheckAll = useCallback(
    (checked: boolean) => {
      const allKeys = data
        .filter((record) => {
          const cbProps = rowSelection?.checkboxProps?.(record)
          return !cbProps?.disabled
        })
        .map((record, i) => getRowKeyFn(record, i))

      const newKeys = checked ? allKeys : []
      const selectedRows = checked
        ? data.filter((_, i) => allKeys.includes(getRowKeyFn(data[i], i)))
        : []
      if (!('selectedRowKeys' in (rowSelection || {}))) {
        setSelectedRowKeys(newKeys)
      }
      rowSelection?.onChange?.(newKeys, selectedRows)
      rowSelection?.onSelectAll?.(checked, selectedRows)
    },
    [data, getRowKeyFn, rowSelection, setSelectedRowKeys]
  )

  // ---- Process Data (filter + sort) ----
  const processedData = useMemo(() => {
    let result = [...data]

    // Filter
    Object.keys(currentFilters).forEach((field) => {
      const filterValues = currentFilters[field]
      if (!filterValues || filterValues.length === 0) return
      const column = flatColumns.find(
        (c) => String(c.key ?? c.dataIndex ?? '') === field
      )
      if (column?.onFilter) {
        result = result.filter((record) =>
          filterValues.some((val) => column.onFilter!(val, record))
        )
      }
    })

    // Sort
    if (activeSorters.length > 0) {
      const sortedSorters = [...activeSorters].sort(
        (a, b) => (a.priority || 0) - (b.priority || 0)
      )
      result.sort((a, b) => {
        for (const sorter of sortedSorters) {
          if (sorter.sorterFn) {
            const val =
              sorter.direction === 'descend'
                ? sorter.sorterFn(b, a)
                : sorter.sorterFn(a, b)
            if (val !== 0) return val
          }
        }
        return 0
      })
    }

    return result
  }, [data, currentFilters, activeSorters, flatColumns])

  // ---- Pagination ----
  const hasPagination = paginationProp !== false
  const [paginationState, setPaginationState] = useState(() => {
    if (isObject(paginationProp)) {
      return { current: 1, pageSize: 10, ...paginationProp }
    }
    return { current: 1, pageSize: 10 }
  })

  useEffect(() => {
    if (isObject(paginationProp)) {
      setPaginationState((prev: any) => ({ ...prev, ...paginationProp }))
    }
  }, [paginationProp])

  const pageData = useMemo(() => {
    if (!hasPagination) return processedData
    const { current = 1, pageSize = 10 } = paginationState
    const start = (current - 1) * pageSize
    return processedData.slice(start, start + pageSize)
  }, [processedData, hasPagination, paginationState])

  const handlePaginationChange = useCallback(
    (current: number, pageSize: number) => {
      const newPagination = { ...paginationState, current, pageSize }
      setPaginationState(newPagination)
      ;(paginationProp as any)?.onChange?.(current, pageSize)

      onChange?.(
        newPagination,
        activeSorters.length === 1 ? activeSorters[0] : activeSorters,
        currentFilters,
        { currentData: processedData, action: 'paginate' }
      )

      // Scroll to top
      if (scrollBodyRef.current) {
        scrollBodyRef.current.scrollTop = 0
      }
    },
    [
      paginationState,
      paginationProp,
      onChange,
      activeSorters,
      currentFilters,
      processedData,
    ]
  )

  // ---- Scroll ----
  const [scrollPosition, setScrollPosition] = useState<
    'left' | 'right' | 'middle' | 'both'
  >('left')

  const handleScroll = useMemo(
    () =>
      createThrottleFn((e: Event) => {
        const target = e.target as HTMLDivElement
        if (!target) return
        const { scrollLeft, scrollWidth, clientWidth } = target
        if (scrollLeft === 0) {
          setScrollPosition(scrollWidth <= clientWidth ? 'both' : 'left')
        } else if (Math.abs(scrollLeft + clientWidth - scrollWidth) <= 1) {
          setScrollPosition('right')
        } else {
          setScrollPosition('middle')
        }
      }, 100),
    []
  )

  // ---- Sticky offsets ----
  const stickyOffsets = useMemo(
    () => getStickyOffsets(flatColumns),
    [flatColumns]
  )

  // ---- Fixed column class names ----
  const getStickyClass = useCallback(
    (column: InternalColumnProps<T>, index: number) => {
      const classes: string[] = []
      if (column.fixed === 'left') {
        classes.push(`${prefixCls}-col-fixed-left`)
        // Check if last left fixed
        const nextCol = flatColumns[index + 1]
        if (!nextCol || nextCol.fixed !== 'left') {
          classes.push(`${prefixCls}-col-fixed-left-last`)
        }
      }
      if (column.fixed === 'right') {
        classes.push(`${prefixCls}-col-fixed-right`)
        const prevCol = flatColumns[index - 1]
        if (!prevCol || prevCol.fixed !== 'right') {
          classes.push(`${prefixCls}-col-fixed-right-first`)
        }
      }
      return classes.join(' ')
    },
    [flatColumns, prefixCls]
  )

  const getStickyStyle = useCallback(
    (column: InternalColumnProps<T>, index: number): CSSProperties => {
      if (column.fixed === 'left') {
        return {
          position: 'sticky',
          left: stickyOffsets.left[index],
          zIndex: 1,
        }
      }
      if (column.fixed === 'right') {
        return {
          position: 'sticky',
          right: stickyOffsets.right[index],
          zIndex: 1,
        }
      }
      return {}
    },
    [stickyOffsets]
  )

  // Ref
  useImperativeHandle(ref, () => ({
    getRootDomElement: () => tableRef.current,
    scrollIntoView: (key: string | number) => {
      // Find row and scroll
      const row = tableRef.current?.querySelector(`[data-row-key="${key}"]`)
      if (row) {
        row.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    },
  }))

  const hasFixedColumn = flatColumns.some((c) => c.fixed)
  const hasScrollX = !!scroll?.x
  const hasScrollY = !!scroll?.y

  const borderConfig = useMemo(() => {
    if (typeof border === 'boolean') {
      return {
        wrapper: border,
        headerCell: border,
        bodyCell: false,
        cell: borderCell || false,
      }
    }
    return {
      wrapper: true,
      headerCell: false,
      bodyCell: false,
      cell: false,
      ...border,
    }
  }, [border, borderCell])

  // ---- Render Header ----
  const renderHeader = () => {
    if (!showHeader) return null

    return (
      <thead>
        {headerRows.map((row, rowIndex) => {
          const headerRowProps =
            onHeaderRow?.(row as ColumnProps<T>[], rowIndex) || {}
          return (
            <tr key={rowIndex} {...headerRowProps}>
              {rowSelection && rowIndex === 0 && (
                <th
                  className={cs(
                    `${prefixCls}-th`,
                    `${prefixCls}-th-selection`,
                    {
                      [`${prefixCls}-col-fixed-left`]: rowSelection.fixed,
                    }
                  )}
                  style={{
                    width: rowSelection.columnWidth || 40,
                    ...(rowSelection.fixed
                      ? { position: 'sticky', left: 0, zIndex: 2 }
                      : {}),
                  }}
                  rowSpan={headerRows.length}
                >
                  {rowSelection.type !== 'radio' &&
                    rowSelection.checkAll !== false &&
                    (() => {
                      const allKeys = data
                        .filter(
                          (r) => !rowSelection.checkboxProps?.(r)?.disabled
                        )
                        .map((r, i) => getRowKeyFn(r, i))
                      const allChecked =
                        allKeys.length > 0 &&
                        allKeys.every((k) => selectedRowKeys.includes(k))
                      const someChecked = allKeys.some((k) =>
                        selectedRowKeys.includes(k)
                      )
                      return (
                        <Checkbox
                          checked={allChecked}
                          indeterminate={!allChecked && someChecked}
                          onChange={(checked) =>
                            handleCheckAll(checked as boolean)
                          }
                        />
                      )
                    })()}
                  {rowSelection.columnTitle}
                </th>
              )}
              {expandedRowRender && rowIndex === 0 && (
                <th
                  className={`${prefixCls}-th ${prefixCls}-th-expand`}
                  style={{ width: expandProps?.width || 40 }}
                  rowSpan={headerRows.length}
                >
                  {expandProps?.columnTitle}
                </th>
              )}
              {row.map((col, colIndex) => {
                const field = col.key ?? col.dataIndex
                const activeSorter = activeSorters.find(
                  (s) => s.field === field
                )
                const flatIndex = flatColumns.findIndex(
                  (c) => (c.key ?? c.dataIndex) === field
                )
                const stickyStyle =
                  flatIndex >= 0
                    ? getStickyStyle(flatColumns[flatIndex], flatIndex)
                    : {}
                const stickyClassName =
                  flatIndex >= 0
                    ? getStickyClass(flatColumns[flatIndex], flatIndex)
                    : ''
                const filterKeys = currentFilters[String(field)] || []

                const getNextSortDirection = (): SortDirection | undefined => {
                  const directions = col.sortDirections || ['ascend', 'descend']
                  const currentDir = activeSorter?.direction
                  if (!currentDir) return directions[0]
                  const idx = directions.indexOf(currentDir)
                  if (idx < directions.length - 1) return directions[idx + 1]
                  return undefined
                }

                return (
                  <th
                    key={String(field ?? colIndex)}
                    className={cs(
                      `${prefixCls}-th`,
                      stickyClassName,
                      col.className,
                      {
                        [`${prefixCls}-th-sortable`]: col.sorter,
                        [`${prefixCls}-th-sorted`]: activeSorter?.direction,
                      }
                    )}
                    style={{
                      textAlign: col.align,
                      ...col.headerCellStyle,
                      ...stickyStyle,
                    }}
                    colSpan={(col.colSpan ?? 1) > 1 ? col.colSpan : undefined}
                    rowSpan={(col.rowSpan ?? 1) > 1 ? col.rowSpan : undefined}
                    {...(col.onHeaderCell?.(col, colIndex) || {})}
                  >
                    <span
                      className={`${prefixCls}-th-content`}
                      onClick={
                        col.sorter
                          ? () => {
                              const nextDir = getNextSortDirection()
                              const sorterFn =
                                typeof col.sorter === 'function'
                                  ? col.sorter
                                  : isObject(col.sorter)
                                    ? (col.sorter as any).compare
                                    : undefined
                              const priority = isObject(col.sorter)
                                ? (col.sorter as any).multiple
                                : undefined
                              handleSort(
                                field as string | number,
                                nextDir,
                                sorterFn,
                                priority
                              )
                            }
                          : undefined
                      }
                    >
                      {col.title}
                      {col.sorter && (
                        <span className={`${prefixCls}-sorter`}>
                          <span
                            className={cs(
                              `${prefixCls}-sorter-icon`,
                              `${prefixCls}-sorter-icon-up`,
                              {
                                [`${prefixCls}-sorter-icon-active`]:
                                  activeSorter?.direction === 'ascend',
                              }
                            )}
                          >
                            ▲
                          </span>
                          <span
                            className={cs(
                              `${prefixCls}-sorter-icon`,
                              `${prefixCls}-sorter-icon-down`,
                              {
                                [`${prefixCls}-sorter-icon-active`]:
                                  activeSorter?.direction === 'descend',
                              }
                            )}
                          >
                            ▼
                          </span>
                        </span>
                      )}
                    </span>
                    {(col.filters?.length || col.filterDropdown) && (
                      <FilterDropdown
                        column={col}
                        prefixCls={prefixCls}
                        currentFilterKeys={filterKeys}
                        onFilter={handleFilter}
                        onReset={handleFilterReset}
                      />
                    )}
                  </th>
                )
              })}
            </tr>
          )
        })}
      </thead>
    )
  }

  // ---- Render Body ----
  const renderRow = (record: T, index: number, level = 0) => {
    const key = getRowKeyFn(record, index) as string | number
    const isExpanded = expandedRowKeysState.includes(key)
    const rowProps = onRow?.(record, index) || {}
    const rowClass = rowClassName?.(record, index) || ''
    const children = (record as Record<string, any>)[childrenColumnName]
    const hasChildren = isArray(children) && children.length > 0
    const isRowExpandable = expandedRowRender
      ? expandProps?.rowExpandable
        ? expandProps.rowExpandable(record)
        : true
      : hasChildren

    const rows: React.ReactNode[] = []

    rows.push(
      <tr
        key={key}
        data-row-key={key}
        className={cs(`${prefixCls}-tr`, rowClass, {
          [`${prefixCls}-tr-striped`]: stripe && index % 2 === 1,
          [`${prefixCls}-tr-expanded`]: isExpanded,
        })}
        onClick={(e) => {
          rowProps.onClick?.(e)
          if (expandProps?.expandRowByClick && isRowExpandable) {
            handleExpand(record, !isExpanded)
          }
        }}
        onDoubleClick={rowProps.onDoubleClick}
        onContextMenu={rowProps.onContextMenu}
        onMouseEnter={rowProps.onMouseEnter}
        onMouseLeave={rowProps.onMouseLeave}
      >
        {rowSelection && (
          <td
            className={cs(`${prefixCls}-td`, `${prefixCls}-td-selection`, {
              [`${prefixCls}-col-fixed-left`]: rowSelection.fixed,
            })}
            style={
              rowSelection.fixed
                ? { position: 'sticky', left: 0, zIndex: 1 }
                : {}
            }
          >
            {(() => {
              const cbProps = rowSelection.checkboxProps?.(record) || {}
              const checked = selectedRowKeys.includes(key)
              const node =
                rowSelection.type === 'radio' ? (
                  <Radio
                    checked={checked}
                    disabled={cbProps.disabled}
                    onChange={() => handleCheckRadio(record)}
                  />
                ) : (
                  <Checkbox
                    checked={checked}
                    disabled={cbProps.disabled}
                    onChange={(v) => handleCheckRow(v as boolean, record)}
                  />
                )
              return rowSelection.renderCell
                ? rowSelection.renderCell(node, checked, record)
                : node
            })()}
          </td>
        )}
        {expandedRowRender && (
          <td className={`${prefixCls}-td ${prefixCls}-td-expand`}>
            {isRowExpandable && (
              <span
                className={cs(`${prefixCls}-expand-icon`, {
                  [`${prefixCls}-expand-icon-expanded`]: isExpanded,
                })}
                onClick={(e) => {
                  e.stopPropagation()
                  handleExpand(record, !isExpanded)
                }}
              >
                {expandProps?.icon
                  ? expandProps.icon({ expanded: isExpanded, record })
                  : isExpanded
                    ? '−'
                    : '+'}
              </span>
            )}
          </td>
        )}
        {flatColumns.map((col, colIndex) => {
          const dataIndex = col.dataIndex
          const cellValue = dataIndex ? get(record, dataIndex) : undefined
          const rendered = col.render
            ? col.render(cellValue, record, index)
            : cellValue

          // Support render returning { children, props }
          let cellContent: ReactNode = rendered
          let cellProps: Record<string, any> = {}
          if (
            rendered &&
            typeof rendered === 'object' &&
            'children' in rendered &&
            'props' in rendered
          ) {
            cellContent = rendered.children
            cellProps = rendered.props || {}
          }

          if (
            cellContent === undefined ||
            cellContent === null ||
            cellContent === ''
          ) {
            cellContent = col.placeholder ?? placeholder
          }

          const isFirstDataCol = colIndex === 0 && !expandedRowRender
          const indent =
            isFirstDataCol && hasChildren
              ? level * indentSize
              : isFirstDataCol
                ? level * indentSize
                : 0

          return cellProps.colSpan === 0 || cellProps.rowSpan === 0 ? null : (
            <td
              key={String(col.key ?? col.dataIndex ?? colIndex)}
              className={cs(
                `${prefixCls}-td`,
                getStickyClass(col, colIndex),
                col.className,
                {
                  [`${prefixCls}-td-ellipsis`]: col.ellipsis,
                }
              )}
              style={{
                textAlign: col.align,
                ...col.bodyCellStyle,
                ...getStickyStyle(col, colIndex),
              }}
              colSpan={cellProps.colSpan}
              rowSpan={cellProps.rowSpan}
              {...(col.onCell?.(record, index) || {})}
            >
              {isFirstDataCol && level > 0 && (
                <span style={{ paddingLeft: indent }} />
              )}
              {isFirstDataCol && !expandedRowRender && hasChildren && (
                <span
                  className={cs(`${prefixCls}-expand-icon`, {
                    [`${prefixCls}-expand-icon-expanded`]: isExpanded,
                  })}
                  style={{ marginLeft: indent, marginRight: 4 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleExpand(record, !isExpanded)
                  }}
                >
                  {expandProps?.icon
                    ? expandProps.icon({ expanded: isExpanded, record })
                    : isExpanded
                      ? '−'
                      : '+'}
                </span>
              )}
              {cellContent}
            </td>
          )
        })}
      </tr>
    )

    // Expanded row
    if (isExpanded && expandedRowRender) {
      const expandedContent = expandedRowRender(record, index)
      if (expandedContent !== null) {
        const totalCols =
          flatColumns.length +
          (rowSelection ? 1 : 0) +
          1
        rows.push(
          <tr
            key={`${key}-expanded`}
            className={`${prefixCls}-tr-expanded-content`}
          >
            <td
              colSpan={totalCols}
              className={`${prefixCls}-td-expanded-content`}
            >
              {expandedContent}
            </td>
          </tr>
        )
      }
    }

    // Tree children
    if (isExpanded && hasChildren && !expandedRowRender) {
      ;(children as T[]).forEach((child: T, childIndex: number) => {
        rows.push(...renderRow(child, childIndex, level + 1))
      })
    }

    return rows
  }

  const renderBody = () => {
    if (pageData.length === 0) {
      const totalCols =
        flatColumns.length +
        (rowSelection ? 1 : 0) +
        (expandedRowRender ? 1 : 0)
      return (
        <tbody>
          <tr className={`${prefixCls}-tr-empty`}>
            <td colSpan={totalCols} className={`${prefixCls}-td-empty`}>
              {noDataElement || <Empty />}
            </td>
          </tr>
        </tbody>
      )
    }

    return (
      <tbody>
        {pageData.map((record, index) => renderRow(record, index, 0))}
      </tbody>
    )
  }

  // ---- Render Summary ----
  const renderSummary = () => {
    if (!summary) return null
    return <tfoot className={`${prefixCls}-tfoot`}>{summary(pageData)}</tfoot>
  }

  // ---- Render Pagination ----
  const renderPaginationNode = () => {
    if (!hasPagination) return null
    const total = processedData.length
    const paginationNode = (
      <div
        className={cs(
          `${prefixCls}-pagination`,
          `${prefixCls}-pagination-${pagePosition}`
        )}
      >
        <Pagination
          {...(isObject(paginationProp) ? paginationProp : {})}
          current={paginationState.current}
          pageSize={paginationState.pageSize}
          total={total}
          onChange={handlePaginationChange}
        />
      </div>
    )
    return renderPagination ? renderPagination(paginationNode) : paginationNode
  }

  // ---- Main Render ----
  const tableClassName = cs(
    `${prefixCls}-container`,
    {
      [`${prefixCls}-border`]: borderConfig.wrapper,
      [`${prefixCls}-border-cell`]: borderConfig.cell,
      [`${prefixCls}-border-header-cell`]: borderConfig.headerCell,
      [`${prefixCls}-border-body-cell`]: borderConfig.bodyCell,
      [`${prefixCls}-stripe`]: stripe,
      [`${prefixCls}-hover`]: hover,
      [`${prefixCls}-size-${size}`]: true,
      [`${prefixCls}-layout-fixed`]:
        tableLayoutFixed || hasScrollX || flatColumns.some((c) => c.ellipsis),
      [`${prefixCls}-has-fixed-col`]: hasFixedColumn,
      [`${prefixCls}-scroll-position-${scrollPosition}`]: hasFixedColumn,
    },
    className
  )

  const tableStyle: React.CSSProperties = {
    ...(typeof scroll?.x === 'number'
      ? { width: scroll.x }
      : typeof scroll?.x === 'string'
        ? { width: scroll.x }
        : {}),
  }

  const isTopPagination = ['tr', 'tl', 'topCenter'].includes(pagePosition)
  const isBottomPagination = !isTopPagination

  const loadingNode = loading ? (
    <Spin tip={isObject(loading) ? (loading as any).tip : undefined}>
      <div style={{ minHeight: 100 }} />
    </Spin>
  ) : null

  return (
    <div ref={tableRef} className={tableClassName} style={style}>
      {isTopPagination && renderPaginationNode()}
      <div className={`${prefixCls}-content-scroll`}>
        <div
          ref={scrollBodyRef}
          className={`${prefixCls}-content-inner`}
          style={{
            overflow: hasScrollX || hasScrollY ? 'auto' : undefined,
            maxHeight:
              typeof scroll?.y === 'number' || typeof scroll?.y === 'string'
                ? scroll.y
                : undefined,
          }}
          onScroll={hasFixedColumn ? (handleScroll as any) : undefined}
        >
          {loading ? (
            loadingNode
          ) : (
            <table className={`${prefixCls}-element`} style={tableStyle}>
              <colgroup>
                {rowSelection && (
                  <col style={{ width: rowSelection.columnWidth || 40 }} />
                )}
                {expandedRowRender && (
                  <col style={{ width: expandProps?.width || 40 }} />
                )}
                {flatColumns.map((col, i) => (
                  <col key={i} style={{ width: col.width }} />
                ))}
              </colgroup>
              {renderHeader()}
              {renderBody()}
              {renderSummary()}
            </table>
          )}
        </div>
      </div>
      {footer && (
        <div className={`${prefixCls}-footer`}>{footer(pageData)}</div>
      )}
      {isBottomPagination && renderPaginationNode()}
    </div>
  )
}

const Table = forwardRef(InternalTable) as <
  T extends Record<string, any> = any,
>(
  props: TableProps<T> & { ref?: React.Ref<any> }
) => React.ReactElement

;(Table as any).displayName = 'Table'
;(Table as any).Summary = Summary

export default Table as typeof Table & { Summary: typeof Summary }
export type {
  ColumnProps,
  ExpandProps,
  RowSelectionProps,
  SortDirection,
  SorterFn,
  SorterInfo,
  SummaryCellProps,
  SummaryRowProps,
  TableProps,
} from './interface'
