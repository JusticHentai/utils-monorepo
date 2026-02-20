import { createDebounceFn } from '@justichentai/element-utils'
import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  cs,
  isArray,
  isFunction,
  isNullOrUndefined,
  isObject,
  isString,
} from '../_util'
import { useMergeValue } from '../_util/hooks'
import useUpdate from '../_util/hooks/useUpdate'
import { isEqual } from '../_util/object'
import { ConfigContext } from '../ConfigProvider/context'
import Empty from '../Empty'
import Tree from '../Tree'
import { NodeProps, TreeDataType } from '../Tree/interface'
import {
  getAllCheckedKeysByCheck,
  getCheckedKeysByInitKeys,
  getTreeDataFromTreeChildren,
  Key2NodePropsType,
} from '../Tree/util'
import Trigger from '../Trigger'
import {
  DefaultFieldNames,
  LabelValue,
  RefTreeSelectType,
  TreeSelectProps,
} from './interface'
import { normalizeValueToArray } from './utils'

function isEmptyValue(value: any) {
  return (
    !value ||
    (isArray(value) && value.length === 0) ||
    (isObject(value) && Object.keys(value).length === 0)
  )
}

const parseValue = (
  v: any,
  key2nodeProps: Key2NodePropsType,
  valueMap?: LabelValue[]
): LabelValue[] => {
  if (v === undefined || v === null) return []
  const value = isArray(v) ? v : [v]
  return value.map((x: any) => {
    let result: LabelValue = isObject(x)
      ? ({ ...x } as LabelValue)
      : { value: x, label: undefined as any }
    const item = key2nodeProps[result.value]
    if (item) {
      result.label = result.label || item.title
      result.disabled = item.disabled
    } else if (isArray(valueMap)) {
      const found = valueMap.find((y) => y.value === result.value)
      if (found) result = { ...result, ...found }
    }
    if (result.label === undefined) result.label = result.value
    return result
  })
}

const getKey2NodeProps = (
  treedata: TreeDataType[] | undefined,
  fieldNames: Record<string, string>
): Key2NodePropsType => {
  const k2np: Key2NodePropsType = {}
  let currentIndex = 0

  const loop = (data: TreeDataType[], father: any) => {
    data.forEach((item, index) => {
      const children = item[fieldNames.children]
      const key =
        fieldNames.key in item
          ? item[fieldNames.key]
          : `${father?._key || ''}-${index}`
      const nodeProps: any = {
        ...item,
        title: item[fieldNames.title],
        selectable: item[fieldNames.selectable],
        disabled: item[fieldNames.disabled],
        disableCheckbox: item[fieldNames.disableCheckbox],
        checkable: item[fieldNames.checkable],
        isLeaf: item[fieldNames.isLeaf],
        key,
        children,
        _key: key,
        parentKey: father?._key,
        pathParentKeys: father?.pathParentKeys || [],
        _level: father?._level || 0,
        _index: currentIndex++,
      }
      k2np[key] = nodeProps
      if (children && children.length) {
        k2np[key].children = children
        loop(children, {
          _key: key,
          _level: (nodeProps._level || 0) + 1,
          pathParentKeys: [...(father?.pathParentKeys || []), key],
        })
      }
    })
  }

  loop(treedata || [], {})
  return k2np
}

const TreeSelect = forwardRef<RefTreeSelectType, TreeSelectProps>(
  (props, ref) => {
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('tree-select')

    const {
      style,
      className,
      disabled,
      size = 'default',
      placeholder,
      allowClear,
      multiple: propMultiple,
      bordered = true,
      treeCheckable,
      treeCheckStrictly,
      treeCheckedStrategy = 'child',
      treeData: propTreeData,
      treeProps,
      fieldNames: propFieldNames,
      labelInValue,
      unmountOnExit,
      notFoundContent,
      dropdownMenuStyle,
      dropdownRender,
      showSearch,
      maxTagCount,
      onChange,
      onVisibleChange,
      onSearch,
      onInputValueChange,
      onClear,
      onKeyDown: _onKeyDown,
      filterTreeNode,
      loadMore,
      getPopupContainer,
      triggerElement,
      children,
    } = props

    const multiple = propMultiple || treeCheckable
    const fieldNames = useMemo(
      () => ({ ...DefaultFieldNames, ...propFieldNames }),
      [propFieldNames]
    )

    // Tree data
    const treeData = useMemo(() => {
      return propTreeData || getTreeDataFromTreeChildren(children)
    }, [propTreeData, children])

    // Key cache
    const key2nodeProps = useMemo(() => {
      return getKey2NodeProps(treeData, fieldNames)
    }, [treeData, fieldNames])

    // Refs
    const selectRef = useRef<HTMLDivElement>(null)
    const treeRef = useRef<any>(null)
    const indeterminateKeys = useRef<string[]>([])
    const valueCopyRef = useRef<LabelValue[]>([])

    // State
    const [popupVisible, setPopupVisible] = useMergeValue(false, {
      value: props.popupVisible,
    })
    const [inputValue, setInputValue] = useState<string>('')
    const [hitKeys, setHitKeys] = useState<Set<string>>(new Set())

    // Value state
    const calcValue = useCallback((): LabelValue[] => {
      const propsValue = props.value ?? props.defaultValue ?? []
      if (treeCheckable) {
        const keys = normalizeValueToArray(propsValue)
        if (!treeCheckStrictly) {
          const { checkedKeys, indeterminateKeys: halfKeys } =
            getCheckedKeysByInitKeys(keys, key2nodeProps)
          indeterminateKeys.current = halfKeys
          let filteredKeys = checkedKeys
          if (treeCheckedStrategy === 'parent') {
            filteredKeys = filteredKeys.filter((x) => {
              const item = key2nodeProps[x]
              return !item || filteredKeys.indexOf(item.parentKey!) === -1
            })
          } else if (treeCheckedStrategy === 'child') {
            filteredKeys = filteredKeys.filter((x) => {
              const item = key2nodeProps[x]
              return !item || !item.children || !(item.children as any[]).length
            })
          }
          const parsedProp = parseValue(
            propsValue,
            key2nodeProps,
            valueCopyRef.current
          )
          return parseValue(filteredKeys, key2nodeProps, parsedProp)
        }
        indeterminateKeys.current = []
        return parseValue(propsValue, key2nodeProps)
      }
      return parseValue(propsValue, key2nodeProps)
    }, [
      props.value,
      props.defaultValue,
      treeCheckable,
      treeCheckStrictly,
      treeCheckedStrategy,
      key2nodeProps,
    ])

    // eslint-disable-next-line react-hooks/refs
    const [value, _setValue] = useState<LabelValue[]>(() => calcValue())

    const setValue = useCallback((v: LabelValue[]) => {
      valueCopyRef.current = v
      _setValue(v)
    }, [])

    // Sync controlled value
    useUpdate(() => {
      const nextValue = calcValue()
      if ('value' in props) {
        if (labelInValue) {
          if (
            !isEqual(
              normalizeValueToArray(value),
              normalizeValueToArray(nextValue)
            )
          ) {
            setValue(nextValue)
          }
        } else if (!isEqual(value, nextValue)) {
          setValue(nextValue)
        }
      }
    }, [
      treeCheckedStrategy,
      treeCheckStrictly,
      treeCheckable,
      props.value,
      key2nodeProps,
    ])

    // Search
    const debouncedSearch = useMemo(
      () =>
        createDebounceFn((text: string) => {
          if (isFunction(onSearch)) {
            onSearch(text)
            return
          }
          if (!text) {
            setHitKeys(new Set())
            return
          }
          const hits = new Set<string>()
          Object.keys(key2nodeProps).forEach((key) => {
            const nodeProps = key2nodeProps[key]
            let isHit = false
            if (isFunction(filterTreeNode)) {
              if (filterTreeNode(text, nodeProps)) isHit = true
            } else {
              const textVal = (nodeProps as any).value || nodeProps._key
              if (textVal && String(textVal).indexOf(text) > -1) isHit = true
            }
            if (isHit) hits.add(key)
          })
          setHitKeys(hits)
        }, 100),
      [onSearch, key2nodeProps, filterTreeNode]
    )

    const handleInputChange = useCallback(
      (val: string) => {
        setInputValue(val)
        onInputValueChange?.(val, 'manual')
        debouncedSearch(val)
      },
      [debouncedSearch, onInputValueChange]
    )

    // Search expansion keys
    const searchKeys = useMemo<string[]>(() => {
      if (!inputValue || hitKeys.size === 0) return []
      const newKeys = new Set<string>()
      for (const key in key2nodeProps) {
        const item = key2nodeProps[key]
        const pathKeys = [...(item.pathParentKeys || []), key]
        if (pathKeys.some((_key) => hitKeys.has(_key))) {
          pathKeys.forEach((k) => newKeys.add(k))
        }
      }
      return Array.from(newKeys)
    }, [inputValue, key2nodeProps, hitKeys])

    const isFilterNode = inputValue && !isFunction(onSearch)
    const filterNode = useCallback(
      (node: NodeProps) => {
        return isFilterNode ? searchKeys.indexOf(node._key!) > -1 : true
      },
      [isFilterNode, searchKeys]
    )

    // Popup visibility
    const tryUpdatePopupVisible = useCallback(
      (visible: boolean) => {
        if (visible !== popupVisible) {
          setPopupVisible(visible)
          onVisibleChange?.(visible)
        }
      },
      [popupVisible, onVisibleChange, setPopupVisible]
    )

    // Value change
    const triggerChange = useCallback(
      (newValue: LabelValue[], extra: any) => {
        const {
          labelInValue,
          multiple: m,
          treeCheckable: tc,
          value: _pv,
        } = props
        const isMultiple = m || tc
        if (!('value' in props)) setValue(newValue)

        let outputValue: any
        if (isMultiple) {
          outputValue = newValue.map((x) =>
            labelInValue ? { label: x.label, value: x.value } : x.value
          )
        } else {
          outputValue = labelInValue ? newValue[0] : newValue[0]?.value
        }
        onChange?.(outputValue, extra)

        if (!isMultiple) tryUpdatePopupVisible(false)
        // Reset inputValue for multiselect
        if (isMultiple && inputValue) {
          const retain =
            isObject(showSearch) &&
            (showSearch as any).retainInputValueWhileSelect !== false
          if (!retain) {
            setInputValue('')
            onInputValueChange?.('', 'optionChecked')
          }
        }
      },
      [
        props,
        onChange,
        setValue,
        tryUpdatePopupVisible,
        inputValue,
        showSearch,
        onInputValueChange,
      ]
    )

    // Tree selection handler
    const handleTreeSelect = useCallback(
      (_: string[], extra: any) => {
        const node = extra.node
        if (!node) return
        const nodeKey = node.props?._key || node._key
        const nodeTitle = node.props?.title || node.title

        if (multiple) {
          const newValue = [...value]
          const idx = newValue.findIndex((x) => x.value === nodeKey)
          if (idx > -1) {
            newValue.splice(idx, 1)
          } else {
            newValue.push({ value: nodeKey, label: nodeTitle })
          }
          triggerChange(newValue, {
            trigger: node.props || node,
            selected: extra.selected,
          })
        } else {
          triggerChange([{ value: nodeKey, label: nodeTitle }], {
            trigger: node.props || node,
            selected: extra.selected,
          })
        }
      },
      [value, multiple, triggerChange]
    )

    // Tree check handler
    const handleTreeCheck = useCallback(
      (keys: string[], extra: any) => {
        const checkedNodes = extra.checkedNodes || []
        const newValue = keys.map((key: string) => {
          const item = checkedNodes.find(
            (x: any) => x && (x.props?._key === key || x._key === key)
          )
          if (!item) {
            const existing = value.find((x) => x.value === key)
            return existing || { label: key, value: key }
          }
          return {
            label: item.props?.title || item.title,
            value: item.props?._key || item._key,
            disabled: item.props?.disabled || item.disabled,
          }
        })
        triggerChange(newValue, {
          checked: extra.checked,
          trigger: extra.node?.props || extra.node,
        })
      },
      [value, triggerChange]
    )

    // Remove checked item
    const handleRemoveItem = useCallback(
      (val: string) => {
        const itemValue = val
        if (!treeCheckable || treeCheckStrictly || !key2nodeProps[itemValue]) {
          const newValue = value.filter((x) => x.value !== itemValue)
          triggerChange(newValue, {
            trigger: key2nodeProps[itemValue] || { value: itemValue },
            checked: false,
            selected: false,
          })
          return
        }
        const result = getAllCheckedKeysByCheck(
          itemValue,
          false,
          normalizeValueToArray(value),
          key2nodeProps,
          indeterminateKeys.current
        )
        indeterminateKeys.current = result.indeterminateKeys
        triggerChange(parseValue(result.checkedKeys, key2nodeProps, value), {
          trigger: key2nodeProps[itemValue],
          checked: false,
          selected: false,
        })
      },
      [value, treeCheckable, treeCheckStrictly, key2nodeProps, triggerChange]
    )

    // Auto scroll on open
    useEffect(() => {
      if (popupVisible) {
        setTimeout(() => {
          const target = value[0]
          if (treeRef.current && target) {
            treeRef.current.scrollIntoView?.(target.value)
          }
        })
      } else {
        if (inputValue) {
          setInputValue('')
          onInputValueChange?.('', 'optionListHide')
        }
      }
    }, [popupVisible])

    // Imperative
    useImperativeHandle(ref, () => ({
      focus: () => selectRef.current?.focus(),
      blur: () => selectRef.current?.blur(),
    }))

    // Render title with search highlight
    const renderTitle = useCallback(
      (nodeProps: NodeProps) => {
        if (treeProps?.renderTitle) return treeProps.renderTitle(nodeProps)
        const { title } = nodeProps
        if (inputValue && isString(title)) {
          const index = title.toLowerCase().indexOf(inputValue.toLowerCase())
          if (index === -1) return title
          return (
            <span>
              {title.substring(0, index)}
              <span className={`${prefixCls}-highlight`}>
                {title.substring(index, index + inputValue.length)}
              </span>
              {title.substring(index + inputValue.length)}
            </span>
          )
        }
        return title
      },
      [inputValue, treeProps?.renderTitle, prefixCls]
    )

    // Tree extra props for checkable mode
    const treeExtraProps = useMemo(() => {
      if (treeCheckable) {
        return {
          onCheck: handleTreeCheck,
          checkedKeys: value.map((x) => x.value),
          checkable: true,
        }
      }
      return {}
    }, [treeCheckable, handleTreeCheck, value])

    const selectedKeys = useMemo(() => {
      return treeCheckable ? [] : value.map((x) => x.value)
    }, [treeCheckable, value])

    // Handle clear
    const handleClear = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation()
        triggerChange([], {})
        onClear?.(!!popupVisible)
      },
      [triggerChange, onClear, popupVisible]
    )

    // Render tree dropdown
    const renderDropdown = () => {
      if ((isFilterNode && !searchKeys.length) || !treeData?.length) {
        return (
          <div className={`${prefixCls}-empty`}>
            {notFoundContent || <Empty description="暂无数据" />}
          </div>
        )
      }

      return (
        <Tree
          ref={treeRef}
          size={size}
          blockNode
          filterNode={filterNode}
          {...treeProps}
          multiple={multiple}
          loadMore={loadMore as any}
          checkedStrategy={treeCheckedStrategy}
          checkStrictly={treeCheckStrictly}
          onMouseDown={(e: any) => e.preventDefault()}
          {...treeExtraProps}
          treeData={treeData}
          fieldNames={fieldNames}
          renderTitle={renderTitle}
          onSelect={
            !treeCheckable
              ? handleTreeSelect
              : (_, extra: any) => {
                  // In checkable mode, clicking a node should toggle check
                  const node = extra.node
                  const nodeProps = node?.props || node
                  if (
                    nodeProps &&
                    !nodeProps.disableCheckbox &&
                    !nodeProps.disabled &&
                    nodeProps.checkable !== false
                  ) {
                    if (treeRef.current?.handleCheck) {
                      treeRef.current.handleCheck(
                        !nodeProps.checked,
                        nodeProps._key,
                        extra.e
                      )
                    }
                  }
                }
          }
          selectedKeys={selectedKeys}
        />
      )
    }

    const dropdownContent = (
      <div
        className={cs(`${prefixCls}-popup`)}
        style={{
          maxHeight: treeProps?.style?.height ? 'unset' : '',
          ...dropdownMenuStyle,
        }}
      >
        {dropdownRender ? dropdownRender(renderDropdown()) : renderDropdown()}
      </div>
    )

    const hasValue = !isEmptyValue(value)

    const renderSelector = () => {
      if (multiple) {
        const tags = value.map((v) => ({
          label: isFunction(props.renderFormat)
            ? props.renderFormat(
                key2nodeProps[v.value] || null,
                labelInValue ? v : v.value
              )
            : v.label || v.value,
          value: v.value,
          closable: !v.disabled && !disabled,
        }))

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
          >
            <div className={`${prefixCls}-view`}>
              {tags.length === 0 && !inputValue && (
                <span className={`${prefixCls}-placeholder`}>
                  {placeholder}
                </span>
              )}
              {(maxTagCount ? tags.slice(0, maxTagCount) : tags).map((tag) => (
                <span key={tag.value} className={`${prefixCls}-tag`}>
                  <span className={`${prefixCls}-tag-content`}>
                    {tag.label}
                  </span>
                  {tag.closable && (
                    <span
                      className={`${prefixCls}-tag-close`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemoveItem(tag.value)
                      }}
                    >
                      ×
                    </span>
                  )}
                </span>
              ))}
              {maxTagCount && tags.length > maxTagCount && (
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

      // Single select
      const displayLabel = value[0]
        ? isFunction(props.renderFormat)
          ? props.renderFormat(
              key2nodeProps[value[0].value] || null,
              labelInValue ? value[0] : value[0].value
            )
          : value[0].label || value[0].value
        : undefined

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

    // Custom trigger element
    const customTrigger =
      typeof triggerElement === 'function'
        ? (() => {
            let val: any
            if (multiple) {
              val = value.map((x) =>
                labelInValue ? { label: x.label, value: x.value } : x.value
              )
            } else {
              val = labelInValue ? value[0] : value[0]?.value
            }
            return triggerElement({ value: val })
          })()
        : triggerElement

    const selectorElement = !isNullOrUndefined(customTrigger)
      ? customTrigger
      : renderSelector()

    return (
      <Trigger
        trigger="click"
        position="bottom"
        disabled={disabled}
        popupVisible={popupVisible}
        onVisibleChange={tryUpdatePopupVisible}
        autoAlignPopupWidth
        getPopupContainer={getPopupContainer}
        unmountOnExit={unmountOnExit}
        popup={() => dropdownContent}
      >
        {selectorElement}
      </Trigger>
    )
  }
)

TreeSelect.displayName = 'TreeSelect'

type TreeSelectComponentType = typeof TreeSelect & {
  Node: typeof Tree.Node
  SHOW_ALL: 'all'
  SHOW_PARENT: 'parent'
  SHOW_CHILD: 'child'
}

const TreeSelectComponent = TreeSelect as TreeSelectComponentType
TreeSelectComponent.Node = Tree.Node
TreeSelectComponent.SHOW_ALL = 'all'
TreeSelectComponent.SHOW_PARENT = 'parent'
TreeSelectComponent.SHOW_CHILD = 'child'

export default TreeSelectComponent
export type {
  LabelValue,
  RefTreeSelectType,
  TreeSelectProps,
} from './interface'
