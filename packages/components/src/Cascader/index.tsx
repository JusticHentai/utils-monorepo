import React, {
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
import { cs, isArray, isFunction } from '../_util'
import { useForceUpdate, useMergeValue } from '../_util/hooks'
import { isEqual } from '../_util/object'
import Checkbox from '../Checkbox'
import { ConfigContext } from '../ConfigProvider/context'
import Empty from '../Empty'
import Trigger from '../Trigger'
import {
  CascaderNodeType,
  CascaderOptionType,
  CascaderProps,
  CascaderValue,
  FieldNamesType,
  RefCascaderType,
} from './interface'
import { CascaderStore } from './store'

const defaultFieldNames: Required<FieldNamesType> = {
  label: 'label',
  value: 'value',
  children: 'children',
  disabled: 'disabled',
  isLeaf: 'isLeaf',
}

const Cascader = forwardRef<RefCascaderType, CascaderProps>((props, ref) => {
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('cascader')

  const {
    style,
    className,
    options = [],
    disabled,
    size = 'default',
    placeholder,
    allowClear,
    multiple,
    bordered = true,
    changeOnSelect,
    fieldNames: propFieldNames,
    showSearch,
    filterOption,
    onSearch,
    onVisibleChange,
    onInputValueChange,
    onClear,
    onChange,
    loadMore,
    getPopupContainer,
    unmountOnExit,
    dropdownRender,
    dropdownMenuColumnStyle,
    triggerElement,
    renderFormat,
    renderOption,
    renderFooter,
    maxTagCount,
    notFoundContent,
    checkedStrategy = 'child',
    showPathLabel = true,
    pathSeparator = ' / ',
    popupAlign,
  } = props

  const fieldNames = useMemo(
    () => ({ ...defaultFieldNames, ...propFieldNames }),
    [propFieldNames]
  )

  // Store
  const storeRef = useRef<CascaderStore | null>(null)
  const forceUpdate = useForceUpdate()

  const getStore = useCallback(() => {
    if (!storeRef.current) {
      storeRef.current = new CascaderStore(options, fieldNames, changeOnSelect)
    }
    return storeRef.current
  }, [])

  // Rebuild store when options change
  useEffect(() => {
    storeRef.current = new CascaderStore(options, fieldNames, changeOnSelect)
    forceUpdate()
  }, [options, fieldNames, changeOnSelect])

  // eslint-disable-next-line react-hooks/refs
  const store = getStore()

  // Refs
  const selectRef = useRef<HTMLDivElement>(null)
  const listRefs = useRef<(HTMLDivElement | null)[]>([])

  // Popup visible
  const [popupVisible, setPopupVisible] = useMergeValue(false, {
    value: props.popupVisible,
    defaultValue: props.defaultPopupVisible,
  })

  // Search
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState<CascaderNodeType[]>([])
  const [searchActiveIndex, setSearchActiveIndex] = useState(-1)

  // Active path (展开路径)
  const [activePath, setActivePath] = useState<CascaderNodeType[]>([])

  // Value state (pathValues)
  const [value, setValue] = useMergeValue<CascaderValue[]>([], {
    value: props.value,
    defaultValue: props.defaultValue,
  })

  // Sync checked state
  useEffect(() => {
    if (multiple && store) {
      const pathValues = (value || []).map((v) => (isArray(v) ? v : [v]))
      store.setCheckedByValue(pathValues)
      forceUpdate()
    }
  }, [value, store])

  // Active path initialization
  useEffect(() => {
    if (popupVisible && !multiple && value.length > 0) {
      const lastSelected = value[value.length - 1]
      const pathValue = isArray(lastSelected) ? lastSelected : [lastSelected]
      const node = store.findNodeByPathValue(pathValue)
      if (node) {
        const path: CascaderNodeType[] = []
        let cur: CascaderNodeType | null | undefined = node
        while (cur) {
          path.unshift(cur)
          cur = cur.parent
        }
        setActivePath(path)
      }
    }
  }, [popupVisible])

  const tryUpdatePopupVisible = useCallback(
    (visible: boolean) => {
      if (visible !== popupVisible) {
        setPopupVisible(visible)
        onVisibleChange?.(visible)
        if (!visible) {
          setInputValue('')
          setSearchResults([])
          onInputValueChange?.('')
        }
      }
    },
    [popupVisible, onVisibleChange, setPopupVisible, onInputValueChange]
  )

  // Trigger value change
  const triggerChange = useCallback(
    (newValue: CascaderValue[], selectedOptions: CascaderOptionType[][]) => {
      if (!('value' in props)) setValue(newValue)
      onChange?.(newValue, selectedOptions, { dropdownVisible: popupVisible })
    },
    [props, onChange, setValue, popupVisible]
  )

  // Handle option click (single select)
  const handleOptionClick = useCallback(
    (node: CascaderNodeType, level: number) => {
      if (node.disabled) return

      // Update active path
      const newPath = activePath.slice(0, level)
      newPath[level] = node
      setActivePath(newPath)

      // Load more
      if (
        loadMore &&
        !node.isLeaf &&
        !node.loaded &&
        node.children.length === 0
      ) {
        node.loading = true
        forceUpdate()
        loadMore(node._data, node.level).then((children) => {
          if (children) {
            store.appendChildren(node.pathValue, children)
          } else {
            node.loading = false
            node.loaded = true
          }
          forceUpdate()
        })
        return
      }

      if (multiple) {
        // Multiple: toggle checkbox
        if (!node.disableCheckbox) {
          const result = store.toggleCheck(node.pathValue)
          let selectedPaths = result.checkedPaths
          if (checkedStrategy === 'child') {
            selectedPaths = selectedPaths.filter((p) => {
              const n = store.findNodeByPathValue(p)
              return n && n.isLeaf
            })
          } else if (checkedStrategy === 'parent') {
            selectedPaths = selectedPaths.filter((p) => {
              const n = store.findNodeByPathValue(p)
              return n && (!n.parent || !n.parent.checked)
            })
          }
          const selectedOptions = selectedPaths.map((p) => {
            const path: CascaderOptionType[] = []
            let cur: CascaderNodeType | null | undefined = store.findNodeByPathValue(p)
            while (cur) {
              path.unshift(cur._data)
              cur = cur.parent
            }
            return path
          })
          triggerChange(selectedPaths, selectedOptions)
        }
        return
      }

      // Single: select if leaf or changeOnSelect
      if (node.isLeaf || changeOnSelect) {
        const pathValue = node.pathValue
        const pathOptions: CascaderOptionType[] = []
        let cur: CascaderNodeType | null | undefined = node
        while (cur) {
          pathOptions.unshift(cur._data)
          cur = cur.parent
        }
        triggerChange([pathValue], [pathOptions])
        if (node.isLeaf) {
          tryUpdatePopupVisible(false)
        }
      }
    },
    [
      activePath,
      multiple,
      changeOnSelect,
      loadMore,
      store,
      checkedStrategy,
      triggerChange,
      forceUpdate,
      tryUpdatePopupVisible,
    ]
  )

  // Search
  const handleInputChange = useCallback(
    (val: string) => {
      setInputValue(val)
      onInputValueChange?.(val)
      if (isFunction(onSearch)) {
        onSearch(val)
        return
      }
      if (!val) {
        setSearchResults([])
        setSearchActiveIndex(-1)
        return
      }
      if (isFunction(filterOption)) {
        const results = store.flatNodes.filter((node) => {
          if (!node.isLeaf && !changeOnSelect) return false
          return filterOption(
            val,
            node._data,
            node.pathLabel.map((_, i) => {
              const pathNode = store.findNodeByPathValue(
                node.pathValue.slice(0, i + 1)
              )
              return pathNode?._data || ({} as CascaderOptionType)
            })
          )
        })
        setSearchResults(results)
      } else {
        setSearchResults(store.searchByLabel(val))
      }
      setSearchActiveIndex(0)
    },
    [onSearch, onInputValueChange, filterOption, store, changeOnSelect]
  )

  // Search select
  const handleSearchSelect = useCallback(
    (node: CascaderNodeType) => {
      if (node.disabled) return
      if (multiple) {
        const result = store.toggleCheck(node.pathValue)
        let selectedPaths = result.checkedPaths
        if (checkedStrategy === 'child') {
          selectedPaths = selectedPaths.filter((p) => {
            const n = store.findNodeByPathValue(p)
            return n && n.isLeaf
          })
        } else if (checkedStrategy === 'parent') {
          selectedPaths = selectedPaths.filter((p) => {
            const n = store.findNodeByPathValue(p)
            return n && (!n.parent || !n.parent.checked)
          })
        }
        const selectedOptions = selectedPaths.map((p) => {
          const path: CascaderOptionType[] = []
          let cur: CascaderNodeType | null | undefined = store.findNodeByPathValue(p)
          while (cur) {
            path.unshift(cur._data)
            cur = cur.parent
          }
          return path
        })
        triggerChange(selectedPaths, selectedOptions)
        forceUpdate()
      } else {
        const pathOptions: CascaderOptionType[] = []
        let cur: CascaderNodeType | null | undefined = node
        while (cur) {
          pathOptions.unshift(cur._data)
          cur = cur.parent
        }
        triggerChange([node.pathValue], [pathOptions])
        tryUpdatePopupVisible(false)
      }
    },
    [
      multiple,
      store,
      checkedStrategy,
      triggerChange,
      forceUpdate,
      tryUpdatePopupVisible,
    ]
  )

  // Clear
  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (multiple) {
        store.flatNodes.forEach((n) => {
          n.checked = false
          n.halfChecked = false
        })
      }
      triggerChange([], [])
      setActivePath([])
      onClear?.()
    },
    [multiple, store, triggerChange, onClear]
  )

  // Remove tag
  const handleRemoveTag = useCallback(
    (pathValue: string[]) => {
      if (multiple) {
        const result = store.toggleCheck(pathValue)
        let selectedPaths = result.checkedPaths
        if (checkedStrategy === 'child') {
          selectedPaths = selectedPaths.filter((p) => {
            const n = store.findNodeByPathValue(p)
            return n && n.isLeaf
          })
        } else if (checkedStrategy === 'parent') {
          selectedPaths = selectedPaths.filter((p) => {
            const n = store.findNodeByPathValue(p)
            return n && (!n.parent || !n.parent.checked)
          })
        }
        const selectedOptions = selectedPaths.map((p) => {
          const path: CascaderOptionType[] = []
          let cur: CascaderNodeType | null | undefined = store.findNodeByPathValue(p)
          while (cur) {
            path.unshift(cur._data)
            cur = cur.parent
          }
          return path
        })
        triggerChange(selectedPaths, selectedOptions)
        forceUpdate()
      }
    },
    [multiple, store, checkedStrategy, triggerChange, forceUpdate]
  )

  useImperativeHandle(ref, () => ({
    focus: () => selectRef.current?.focus(),
    blur: () => selectRef.current?.blur(),
  }))

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (inputValue && searchResults.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSearchActiveIndex((prev) =>
            Math.min(prev + 1, searchResults.length - 1)
          )
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSearchActiveIndex((prev) => Math.max(prev - 1, 0))
        } else if (e.key === 'Enter' && searchActiveIndex >= 0) {
          e.preventDefault()
          handleSearchSelect(searchResults[searchActiveIndex])
        }
        return
      }
      if (e.key === 'Escape') {
        tryUpdatePopupVisible(false)
      }
    },
    [
      inputValue,
      searchResults,
      searchActiveIndex,
      handleSearchSelect,
      tryUpdatePopupVisible,
    ]
  )

  // Get display labels for selected value
  const getDisplayLabels = useCallback(
    (pathValue: CascaderValue): ReactNode[] => {
      const pv = isArray(pathValue) ? pathValue : [pathValue]
      const node = store.findNodeByPathValue(pv)
      if (node) {
        return node.pathLabel as ReactNode[]
      }
      return pv as ReactNode[]
    },
    [store]
  )

  // Render cascader columns
  const renderColumns = () => {
    const columns: React.ReactNode[] = []
    const selectedPathValues = (value || []).map((v) => (isArray(v) ? v : [v]))

    // First level
    const renderColumn = (nodes: CascaderNodeType[], level: number) => {
      const activeNode = activePath[level]
      return (
        <div
          key={level}
          className={`${prefixCls}-list-column`}
          style={dropdownMenuColumnStyle}
          ref={(el) => {
            listRefs.current[level] = el
          }}
        >
          <div className={`${prefixCls}-list-column-inner`} role="menu">
            {nodes.map((node) => {
              const isActive =
                activeNode &&
                activeNode.value === node.value &&
                activeNode.level === node.level
              const isSelected =
                !multiple &&
                selectedPathValues.some((pv) => isEqual(pv, node.pathValue))
              const isExpanded = isActive && !node.isLeaf

              return (
                <div
                  key={node.pathValue.join('/')}
                  className={cs(`${prefixCls}-list-item`, {
                    [`${prefixCls}-list-item-active`]: isActive,
                    [`${prefixCls}-list-item-selected`]: isSelected,
                    [`${prefixCls}-list-item-disabled`]: node.disabled,
                    [`${prefixCls}-list-item-expand`]: isExpanded,
                  })}
                  role="menuitem"
                  aria-disabled={node.disabled}
                  aria-expanded={isExpanded}
                  onClick={() => handleOptionClick(node, level)}
                >
                  {multiple && (
                    <Checkbox
                      checked={node.checked}
                      indeterminate={node.halfChecked}
                      disabled={node.disabled || node.disableCheckbox}
                      onChange={() => {}}
                      onClick={(e: any) => {
                        e.stopPropagation()
                        handleOptionClick(node, level)
                      }}
                    />
                  )}
                  <span className={`${prefixCls}-list-item-label`}>
                    {renderOption
                      ? renderOption(node._data, level)
                      : node.label}
                  </span>
                  {node.loading && (
                    <span className={`${prefixCls}-list-item-loading`}>
                      ...
                    </span>
                  )}
                  {!node.isLeaf && !node.loading && (
                    <span className={`${prefixCls}-list-item-expand-icon`}>
                      ›
                    </span>
                  )}
                </div>
              )
            })}
            {renderFooter && renderFooter(level, activeNode ? (activeNode as unknown as CascaderOptionType) : null)}
          </div>
        </div>
      )
    }

    // Root column
    if (store.nodes.length > 0) {
      columns.push(renderColumn(store.nodes, 0))
    }

    // Expanded columns
    activePath.forEach((node, level) => {
      if (node.children.length > 0) {
        columns.push(renderColumn(node.children, level + 1))
      }
    })

    return columns
  }

  // Search panel
  const renderSearchPanel = () => {
    if (searchResults.length === 0) {
      return (
        <div className={`${prefixCls}-empty`}>
          {notFoundContent || <Empty description="暂无数据" />}
        </div>
      )
    }

    return (
      <div className={`${prefixCls}-search-panel`}>
        {searchResults.map((node, index) => {
          const isActive = index === searchActiveIndex
          const pathLabels = node.pathLabel.map((label, i) => {
            const text = typeof label === 'string' ? label : String(label)
            const lowerInput = inputValue.toLowerCase()
            const lowerText = text.toLowerCase()
            const idx = lowerText.indexOf(lowerInput)
            if (idx === -1) return text
            return (
              <React.Fragment key={i}>
                {text.substring(0, idx)}
                <span className={`${prefixCls}-highlight`}>
                  {text.substring(idx, idx + inputValue.length)}
                </span>
                {text.substring(idx + inputValue.length)}
              </React.Fragment>
            )
          })

          return (
            <div
              key={node.pathValue.join('/')}
              className={cs(`${prefixCls}-search-item`, {
                [`${prefixCls}-search-item-active`]: isActive,
                [`${prefixCls}-search-item-disabled`]: node.disabled,
                [`${prefixCls}-search-item-checked`]: node.checked,
              })}
              onClick={() => handleSearchSelect(node)}
            >
              {multiple && (
                <Checkbox
                  checked={node.checked}
                  disabled={node.disabled}
                  onChange={() => {}}
                  onClick={(e: any) => {
                    e.stopPropagation()
                    handleSearchSelect(node)
                  }}
                />
              )}
              <span className={`${prefixCls}-search-item-label`}>
                {pathLabels.map((label, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <span className={`${prefixCls}-search-item-separator`}>
                        {pathSeparator}
                      </span>
                    )}
                    {label}
                  </React.Fragment>
                ))}
              </span>
            </div>
          )
        })}
      </div>
    )
  }

  // Dropdown content
  const renderDropdown = () => {
    const isSearching = !!inputValue && !isFunction(onSearch)

    if (isSearching) {
      return renderSearchPanel()
    }

    if (store.nodes.length === 0) {
      return (
        <div className={`${prefixCls}-empty`}>
          {notFoundContent || <Empty description="暂无数据" />}
        </div>
      )
    }

    return <div className={`${prefixCls}-panel`}>{renderColumns()}</div>
  }

  const dropdownContent = (
    <div
      className={cs(`${prefixCls}-popup`)}
      onMouseDown={(e) => e.preventDefault()}
    >
      {/* eslint-disable-next-line react-hooks/refs */}
      {dropdownRender ? dropdownRender(renderDropdown()) : renderDropdown()}
    </div>
  )

  // Render selected value display
  const getValueDisplay = (): ReactNode => {
    if (multiple) return null

    const selectedValue = value[0]
    if (!selectedValue) return null

    const labels = getDisplayLabels(selectedValue)
    if (renderFormat) return renderFormat(labels)
    if (showPathLabel) return labels.join(pathSeparator)
    return labels[labels.length - 1]
  }

  const hasValue = value.length > 0

  // Render selector
  const renderSelector = () => {
    if (multiple) {
      const tags = value.map((v) => {
        const pv = isArray(v) ? v : [v]
        const labels = getDisplayLabels(v)
        const display = showPathLabel
          ? labels.join(pathSeparator)
          : labels[labels.length - 1]
        const node = store.findNodeByPathValue(pv)
        return {
          pathValue: pv,
          label: renderFormat ? renderFormat(labels) : display,
          closable: !disabled && !node?.disabled,
        }
      })

      return (
        <div
          ref={selectRef}
          className={cs(
            prefixCls,
            `${prefixCls}-size-${size}`,
            {
              [`${prefixCls}-disabled`]: disabled,
              [`${prefixCls}-multiple`]: true,
              [`${prefixCls}-bordered`]: bordered,
              [`${prefixCls}-open`]: popupVisible,
            },
            className
          )}
          style={style}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
        >
          <div className={`${prefixCls}-view`}>
            {tags.length === 0 && !inputValue && (
              <span className={`${prefixCls}-placeholder`}>{placeholder}</span>
            )}
            {(maxTagCount !== undefined
              ? tags.slice(0, maxTagCount)
              : tags
            ).map((tag) => (
              <span
                key={tag.pathValue.join('/')}
                className={`${prefixCls}-tag`}
              >
                <span className={`${prefixCls}-tag-content`}>{tag.label}</span>
                {tag.closable && (
                  <span
                    className={`${prefixCls}-tag-close`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemoveTag(tag.pathValue)
                    }}
                  >
                    ×
                  </span>
                )}
              </span>
            ))}
            {maxTagCount !== undefined && tags.length > maxTagCount && (
              <span className={`${prefixCls}-tag`}>
                +{tags.length - maxTagCount}
              </span>
            )}
            {showSearch && (
              <input
                className={`${prefixCls}-search-input`}
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={tags.length === 0 ? placeholder : ''}
                disabled={disabled}
              />
            )}
          </div>
          {allowClear && hasValue && !disabled && (
            <span className={`${prefixCls}-clear`} onClick={handleClear}>
              ×
            </span>
          )}
          <span className={`${prefixCls}-arrow`}>▼</span>
        </div>
      )
    }

    // Single selector
    const displayLabel = getValueDisplay()

    return (
      <div
        ref={selectRef}
        className={cs(
          prefixCls,
          `${prefixCls}-size-${size}`,
          {
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-bordered`]: bordered,
            [`${prefixCls}-open`]: popupVisible,
          },
          className
        )}
        style={style}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
      >
        <div className={`${prefixCls}-view`}>
          {showSearch && popupVisible ? (
            <input
              className={`${prefixCls}-search-input`}
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={displayLabel ? String(displayLabel) : placeholder}
              autoFocus
              disabled={disabled}
            />
          ) : displayLabel ? (
            <span className={`${prefixCls}-value`}>{displayLabel}</span>
          ) : (
            <span className={`${prefixCls}-placeholder`}>{placeholder}</span>
          )}
        </div>
        {allowClear && hasValue && !disabled && (
          <span className={`${prefixCls}-clear`} onClick={handleClear}>
            ×
          </span>
        )}
        <span className={`${prefixCls}-arrow`}>▼</span>
      </div>
    )
  }

  // Custom trigger
  const customTrigger =
    typeof triggerElement === 'function'
      ? triggerElement({ value: value })
      : triggerElement

  const selectorElement =
    customTrigger !== undefined && customTrigger !== null
      ? customTrigger
      : renderSelector() // eslint-disable-line react-hooks/refs

  return (
    <Trigger
      trigger="click"
      position={popupAlign === 'right' ? 'br' : 'bl'}
      disabled={disabled}
      popupVisible={popupVisible}
      onVisibleChange={tryUpdatePopupVisible}
      autoAlignPopupWidth={false}
      autoAlignPopupMinWidth
      getPopupContainer={getPopupContainer}
      unmountOnExit={unmountOnExit}
      popup={() => dropdownContent}
    >
      {selectorElement as ReactNode}
    </Trigger>
  )
})

Cascader.displayName = 'Cascader'

export default Cascader
export type {
  CascaderOptionType,
  CascaderProps,
  CascaderValue,
  RefCascaderType,
} from './interface'
