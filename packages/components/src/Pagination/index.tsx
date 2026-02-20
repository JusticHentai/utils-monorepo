import { forwardRef, useCallback, useContext, useMemo, useState } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { PaginationProps } from './interface'

const Pagination = forwardRef<HTMLDivElement, PaginationProps>((props, ref) => {
  const {
    style,
    className,
    current: propCurrent,
    defaultCurrent = 1,
    total = 0,
    pageSize: propPageSize,
    defaultPageSize = 10,
    size = 'default',
    disabled,
    simple,
    showTotal,
    showJumper,
    sizeCanChange,
    sizeOptions = [10, 20, 30, 50],
    hideOnSinglePage,
    onChange,
    onPageSizeChange,
    pageSizeChangeResetCurrent = true,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('pagination')

  const [current, setCurrent] = useMergeValue(defaultCurrent, {
    value: propCurrent,
  })
  const [pageSize, setPageSize] = useMergeValue(defaultPageSize, {
    value: propPageSize,
  })
  const [jumperValue, setJumperValue] = useState('')

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / pageSize)),
    [total, pageSize]
  )

  const handlePageChange = useCallback(
    (page: number) => {
      const p = Math.max(1, Math.min(totalPages, page))
      setCurrent(p)
      onChange?.(p, pageSize)
    },
    [totalPages, pageSize, setCurrent, onChange]
  )

  if (hideOnSinglePage && totalPages <= 1) return null

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize)
    const newCurrent = pageSizeChangeResetCurrent
      ? 1
      : Math.min(current, Math.ceil(total / newSize))
    setCurrent(newCurrent)
    onPageSizeChange?.(newSize, newCurrent)
    onChange?.(newCurrent, newSize)
  }

  const handleJumperKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const page = parseInt(jumperValue, 10)
      if (!isNaN(page)) handlePageChange(page)
      setJumperValue('')
    }
  }

  const getPageList = (): (number | string)[] => {
    const pages: (number | string)[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (current > 3) pages.push('...')
      const start = Math.max(2, current - 1)
      const end = Math.min(totalPages - 1, current + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (current < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  const classString = cs(
    prefixCls,
    `${prefixCls}-size-${size}`,
    { [`${prefixCls}-disabled`]: disabled, [`${prefixCls}-simple`]: simple },
    className
  )

  if (simple) {
    return (
      <div ref={ref} className={classString} style={style} {...rest}>
        <span
          className={`${prefixCls}-prev`}
          onClick={() => handlePageChange(current - 1)}
        >
          {'<'}
        </span>
        <span className={`${prefixCls}-simple-pager`}>
          <input
            className={`${prefixCls}-simple-input`}
            value={jumperValue || current}
            onChange={(e) => setJumperValue(e.target.value)}
            onKeyDown={handleJumperKeyDown}
          />
          <span> / {totalPages}</span>
        </span>
        <span
          className={`${prefixCls}-next`}
          onClick={() => handlePageChange(current + 1)}
        >
          {'>'}
        </span>
      </div>
    )
  }

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      {showTotal && (
        <span className={`${prefixCls}-total`}>
          {typeof showTotal === 'function'
            ? showTotal(total, [
                (current - 1) * pageSize + 1,
                Math.min(current * pageSize, total),
              ])
            : `共 ${total} 条`}
        </span>
      )}
      <span
        className={cs(`${prefixCls}-prev`, {
          [`${prefixCls}-prev-disabled`]: current <= 1,
        })}
        onClick={() => current > 1 && handlePageChange(current - 1)}
      >
        {'<'}
      </span>
      {getPageList().map((page, i) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${i}`} className={`${prefixCls}-ellipsis`}>
              ...
            </span>
          )
        }
        return (
          <span
            key={page}
            className={cs(`${prefixCls}-item`, {
              [`${prefixCls}-item-active`]: page === current,
            })}
            onClick={() => handlePageChange(page as number)}
          >
            {page}
          </span>
        )
      })}
      <span
        className={cs(`${prefixCls}-next`, {
          [`${prefixCls}-next-disabled`]: current >= totalPages,
        })}
        onClick={() => current < totalPages && handlePageChange(current + 1)}
      >
        {'>'}
      </span>
      {sizeCanChange && (
        <select
          className={`${prefixCls}-size-changer`}
          value={pageSize}
          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
        >
          {sizeOptions.map((s) => (
            <option key={s} value={s}>
              {s} 条/页
            </option>
          ))}
        </select>
      )}
      {showJumper && (
        <span className={`${prefixCls}-jumper`}>
          跳至
          <input
            className={`${prefixCls}-jumper-input`}
            value={jumperValue}
            onChange={(e) => setJumperValue(e.target.value)}
            onKeyDown={handleJumperKeyDown}
          />
          页
        </span>
      )}
    </div>
  )
})

Pagination.displayName = 'Pagination'
export default Pagination
export type { PaginationProps }
