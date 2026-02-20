import React, {
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { useMergeValue } from '../_util/hooks'
import Checkbox from '../Checkbox'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import Input from '../Input'
import { TransferItem, TransferProps } from './interface'

interface TransferListProps {
  prefixCls: string
  title?: React.ReactNode
  dataSource: TransferItem[]
  selectedKeys: string[]
  disabled?: boolean
  showSearch?: boolean
  showSelectAll?: boolean
  searchPlaceholder?: string
  direction: 'left' | 'right'
  render?: (item: TransferItem) => React.ReactNode
  filterOption?: (inputValue: string, item: TransferItem) => boolean
  onSelect: (key: string, checked: boolean) => void
  onSelectAll: (keys: string[], checked: boolean) => void
  onSearch?: (direction: 'left' | 'right', value: string) => void
  footer?: (props: { direction: 'left' | 'right' }) => React.ReactNode
}

function TransferList(props: TransferListProps) {
  const {
    prefixCls,
    title,
    dataSource,
    selectedKeys,
    disabled,
    showSearch,
    showSelectAll = true,
    searchPlaceholder,
    direction,
    render,
    filterOption,
    onSelect,
    onSelectAll,
    onSearch,
    footer,
  } = props

  const [searchValue, setSearchValue] = useState('')

  const filteredData = useMemo(() => {
    if (!searchValue) return dataSource
    return dataSource.filter((item) => {
      if (filterOption) return filterOption(searchValue, item)
      const label = String(item.label || item.value)
      return label.toLowerCase().includes(searchValue.toLowerCase())
    })
  }, [dataSource, searchValue, filterOption])

  const enabledKeys = useMemo(
    () => filteredData.filter((item) => !item.disabled).map((item) => item.key),
    [filteredData]
  )

  const allChecked =
    enabledKeys.length > 0 && enabledKeys.every((k) => selectedKeys.includes(k))
  const indeterminate =
    !allChecked && enabledKeys.some((k) => selectedKeys.includes(k))

  const handleSearch = (val: string) => {
    setSearchValue(val)
    onSearch?.(direction, val)
  }

  return (
    <div className={`${prefixCls}-list`}>
      <div className={`${prefixCls}-list-header`}>
        {showSelectAll && (
          <Checkbox
            checked={allChecked}
            indeterminate={indeterminate}
            disabled={disabled || enabledKeys.length === 0}
            onChange={(checked) => onSelectAll(enabledKeys, !!checked)}
          />
        )}
        <span className={`${prefixCls}-list-header-title`}>{title}</span>
        <span className={`${prefixCls}-list-header-count`}>
          {selectedKeys.length > 0 ? `${selectedKeys.length}/` : ''}
          {filteredData.length}
        </span>
      </div>
      {showSearch && (
        <div className={`${prefixCls}-list-search`}>
          <Input
            size="small"
            placeholder={searchPlaceholder || '请输入搜索内容'}
            value={searchValue}
            onChange={(v) => handleSearch(v)}
            allowClear
          />
        </div>
      )}
      <div className={`${prefixCls}-list-body`}>
        {filteredData.length === 0 ? (
          <div className={`${prefixCls}-list-empty`}>暂无数据</div>
        ) : (
          <ul className={`${prefixCls}-list-content`}>
            {filteredData.map((item) => {
              const checked = selectedKeys.includes(item.key)
              return (
                <li
                  key={item.key}
                  className={cs(`${prefixCls}-list-item`, {
                    [`${prefixCls}-list-item-disabled`]: item.disabled,
                    [`${prefixCls}-list-item-selected`]: checked,
                  })}
                  onClick={() =>
                    !item.disabled && !disabled && onSelect(item.key, !checked)
                  }
                >
                  <Checkbox
                    checked={checked}
                    disabled={item.disabled || disabled}
                    onChange={(c) => onSelect(item.key, !!c)}
                  />
                  <span className={`${prefixCls}-list-item-content`}>
                    {render ? render(item) : item.label || item.value}
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {footer && (
        <div className={`${prefixCls}-list-footer`}>
          {footer({ direction })}
        </div>
      )}
    </div>
  )
}

const defaultProps: Partial<TransferProps> = {
  titleTexts: ['源列表', '目标列表'],
  showSelectAll: true,
}

function Transfer(baseProps: TransferProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<TransferProps>(
    baseProps,
    defaultProps as TransferProps,
    (componentConfig?.Transfer ?? {}) as TransferProps
  )

  const {
    className,
    style,
    dataSource = [],
    titleTexts,
    operationTexts,
    showSearch,
    showSelectAll,
    searchPlaceholder,
    disabled,
    oneWay,
    simple,
    render: renderItem,
    filterOption,
    footer,
    onChange,
    onSelectChange,
    onSearch,
    ...rest
  } = props

  const prefixCls = getPrefixCls('transfer')

  const [targetKeys, setTargetKeys] = useMergeValue<string[]>([], {
    defaultValue: props.defaultTargetKeys,
    value: props.targetKeys,
  })

  const [selectedKeys, setSelectedKeys] = useMergeValue<string[]>([], {
    defaultValue: props.defaultSelectedKeys,
    value: props.selectedKeys,
  })

  const leftData = useMemo(
    () => dataSource.filter((item) => !targetKeys.includes(item.key)),
    [dataSource, targetKeys]
  )

  const rightData = useMemo(
    () => dataSource.filter((item) => targetKeys.includes(item.key)),
    [dataSource, targetKeys]
  )

  const leftSelectedKeys = useMemo(
    () => selectedKeys.filter((k) => leftData.some((item) => item.key === k)),
    [selectedKeys, leftData]
  )

  const rightSelectedKeys = useMemo(
    () => selectedKeys.filter((k) => rightData.some((item) => item.key === k)),
    [selectedKeys, rightData]
  )

  const handleSelect = useCallback(
    (key: string, checked: boolean) => {
      const newSelected = checked
        ? [...selectedKeys, key]
        : selectedKeys.filter((k) => k !== key)
      setSelectedKeys(newSelected)
      const newLeft = newSelected.filter((k) =>
        leftData.some((item) => item.key === k)
      )
      const newRight = newSelected.filter((k) =>
        rightData.some((item) => item.key === k)
      )
      onSelectChange?.(newLeft, newRight)
    },
    [selectedKeys, setSelectedKeys, leftData, rightData, onSelectChange]
  )

  const handleSelectAll = useCallback(
    (keys: string[], checked: boolean) => {
      let newSelected: string[]
      if (checked) {
        const set = new Set([...selectedKeys, ...keys])
        newSelected = Array.from(set)
      } else {
        newSelected = selectedKeys.filter((k) => !keys.includes(k))
      }
      setSelectedKeys(newSelected)
    },
    [selectedKeys, setSelectedKeys]
  )

  const moveToRight = () => {
    const moveKeys = leftSelectedKeys.filter(
      (k) => !leftData.find((item) => item.key === k)?.disabled
    )
    if (moveKeys.length === 0) {
      // 如果没有通过 disabled 过滤的，就用全部
      const allMoveKeys = leftSelectedKeys
      const newTargetKeys = [...targetKeys, ...allMoveKeys]
      setTargetKeys(newTargetKeys)
      setSelectedKeys(selectedKeys.filter((k) => !allMoveKeys.includes(k)))
      onChange?.(newTargetKeys, 'right', allMoveKeys)
      return
    }
    const newTargetKeys = [...targetKeys, ...moveKeys]
    setTargetKeys(newTargetKeys)
    setSelectedKeys(selectedKeys.filter((k) => !moveKeys.includes(k)))
    onChange?.(newTargetKeys, 'right', moveKeys)
  }

  const moveToLeft = () => {
    const moveKeys = rightSelectedKeys
    const newTargetKeys = targetKeys.filter((k) => !moveKeys.includes(k))
    setTargetKeys(newTargetKeys)
    setSelectedKeys(selectedKeys.filter((k) => !moveKeys.includes(k)))
    onChange?.(newTargetKeys, 'left', moveKeys)
  }

  const classString = cs(
    prefixCls,
    { [`${prefixCls}-simple`]: simple, [`${prefixCls}-disabled`]: disabled },
    className
  )

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      <TransferList
        prefixCls={prefixCls}
        title={titleTexts?.[0]}
        dataSource={leftData}
        selectedKeys={leftSelectedKeys}
        disabled={disabled}
        showSearch={showSearch}
        showSelectAll={showSelectAll}
        searchPlaceholder={searchPlaceholder}
        direction="left"
        render={renderItem}
        filterOption={filterOption}
        onSelect={handleSelect}
        onSelectAll={handleSelectAll}
        onSearch={onSearch}
        footer={footer}
      />
      <div className={`${prefixCls}-operations`}>
        <button
          className={cs(`${prefixCls}-operation`, {
            [`${prefixCls}-operation-disabled`]:
              leftSelectedKeys.length === 0 || disabled,
          })}
          disabled={leftSelectedKeys.length === 0 || disabled}
          onClick={moveToRight}
        >
          {operationTexts?.[0] || '→'}
        </button>
        {!oneWay && (
          <button
            className={cs(`${prefixCls}-operation`, {
              [`${prefixCls}-operation-disabled`]:
                rightSelectedKeys.length === 0 || disabled,
            })}
            disabled={rightSelectedKeys.length === 0 || disabled}
            onClick={moveToLeft}
          >
            {operationTexts?.[1] || '←'}
          </button>
        )}
      </div>
      <TransferList
        prefixCls={prefixCls}
        title={titleTexts?.[1]}
        dataSource={rightData}
        selectedKeys={rightSelectedKeys}
        disabled={disabled}
        showSearch={showSearch}
        showSelectAll={showSelectAll}
        searchPlaceholder={searchPlaceholder}
        direction="right"
        render={renderItem}
        filterOption={filterOption}
        onSelect={handleSelect}
        onSelectAll={handleSelectAll}
        onSearch={onSearch}
        footer={footer}
      />
    </div>
  )
}

const TransferComponent = forwardRef<HTMLDivElement, TransferProps>(Transfer)
TransferComponent.displayName = 'Transfer'

export default TransferComponent
export type { TransferItem, TransferProps }
