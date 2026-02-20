import {
  DragEvent,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cs, isArray, isFunction, isUndefined, scrollIntoView } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { isEqual } from '../_util/object'
import { pickDataAttributes } from '../_util/pick'
import { ConfigContext } from '../ConfigProvider/context'
import { TreeContext } from './context'
import { NodeInstance, NodeProps, TreeDataType, TreeProps } from './interface'
import Node from './node'
import {
  getAllCheckedKeysByCheck,
  getCheckedKeysByInitKeys,
  getTreeDataFromTreeChildren,
  Key2NodePropsType,
} from './util'

const DefaultFieldNames = {
  key: 'key',
  title: 'title',
  children: 'children',
  selectable: 'selectable',
  disabled: 'disabled',
  disableCheckbox: 'disableCheckbox',
  checkable: 'checkable',
  isLeaf: 'isLeaf',
}

const defaultTreeProps: Partial<TreeProps> = {
  selectable: true,
  autoExpandParent: true,
  checkedStrategy: 'all' as const,
  actionOnClick: 'select',
  allowDrop: () => true,
  fieldNames: DefaultFieldNames,
}

const Tree = forwardRef<any, TreeProps>((baseProps, ref) => {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('tree')

  // Merge props with defaults and global config
  const props = useMemo(() => {
    const globalConfig = (componentConfig?.Tree || {}) as Record<string, unknown>
    const merged = { ...defaultTreeProps } as Record<string, unknown>
    const bp = baseProps as Record<string, unknown>
    for (const k of Object.keys(defaultTreeProps)) {
      if (!isUndefined(bp[k])) merged[k] = bp[k]
      else if (!isUndefined(globalConfig[k])) merged[k] = globalConfig[k]
    }
    // Copy remaining props
    for (const k of Object.keys(bp)) {
      if (!(k in merged) || isUndefined(merged[k])) merged[k] = bp[k]
    }
    return merged as unknown as TreeProps
  }, [baseProps, componentConfig])

  const {
    selectable,
    autoExpandParent,
    checkedStrategy,
    checkStrictly,
    multiple,
    checkable,
    draggable,
    showLine,
    blockNode,
    size,
    icons,
    actionOnClick,
    loadMore,
    renderExtra,
    renderTitle,
    fieldNames: propFieldNames,
    onSelect,
    onCheck,
    onExpand,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDragLeave,
    onDrop,
    filterNode,
    allowDrop,
    onMouseDown,
    style,
    className,
  } = props

  const fieldNames = useMemo(
    () => ({ ...DefaultFieldNames, ...propFieldNames }),
    [propFieldNames]
  )

  // Instance refs
  const key2nodePropsRef = useRef<Key2NodePropsType>({})
  const dragNodeRef = useRef<NodeInstance | null>(null)
  const dropPositionRef = useRef<0 | -1 | 1>(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // --- Helper: getFieldInfo ---
  const getFieldInfo = useCallback(
    (data: any) => {
      const result: any = {
        children: data[fieldNames.children],
        selectable:
          fieldNames.selectable in data
            ? data[fieldNames.selectable]
            : selectable,
        checkable:
          fieldNames.checkable in data ? data[fieldNames.checkable] : checkable,
        title: data[fieldNames.title],
        disabled: data[fieldNames.disabled],
        disableCheckbox: data[fieldNames.disableCheckbox],
        isLeaf: data[fieldNames.isLeaf],
        key: data[fieldNames.key],
      }
      if (!(fieldNames.key in data)) delete result.key
      return result
    },
    [fieldNames, selectable, checkable]
  )

  // --- Build nodeList ---
  const buildNodeList = useCallback(
    (treedata: TreeDataType[] | undefined) => {
      const k2np: Key2NodePropsType = {}
      const nodeList: NodeProps[] = []
      let currentIndex = 0

      const loop = (data: TreeDataType[], father: any) => {
        const totalLength = data.length
        return data.map((item, index) => {
          const {
            children,
            selectable,
            checkable,
            key = `${father?._key || ''}-${index}`,
            ...rest
          } = getFieldInfo(item)
          const nodeProps: NodeProps & { children?: NodeProps[] } = {
            dataRef: item,
            draggable,
            selectable,
            checkable,
            showLine,
            blockNode,
            ...item,
            ...rest,
            key,
            children,
            _key: key,
            _index: currentIndex++,
            parentKey: father?._key,
            pathParentKeys: father?.pathParentKeys || [],
            _level: father?._level || 0,
            _lineless: father?._lineless
              ? [...(father._lineless || []), father._isTail]
              : [],
          }

          if (totalLength === index + 1) {
            nodeProps.className = cs(
              `${prefixCls}-node-is-tail`,
              nodeProps.className
            )
          }

          nodeList.push(nodeProps)
          k2np[key] = nodeProps as TreeDataType

          if (children && children.length) {
            k2np[key].children = loop(children as TreeDataType[], {
              _key: key,
              _level: (nodeProps._level || 0) + 1,
              _lineless: nodeProps._lineless,
              _isTail: totalLength === index + 1,
              pathParentKeys: [...(father?.pathParentKeys || []), key],
            })
          }
          return nodeProps
        })
      }

      loop(treedata || [], {})
      key2nodePropsRef.current = k2np
      return nodeList
    },
    [getFieldInfo, draggable, showLine, blockNode, prefixCls]
  )

  // --- Get tree data ---
  const getTreeData = useCallback(() => {
    return 'treeData' in props
      ? props.treeData
      : getTreeDataFromTreeChildren(props.children)
  }, [props.treeData, props.children])

  // --- Initial state ---
  const initialTreeData = useMemo(() => getTreeData(), [])
  const initialNodeList = useMemo(() => buildNodeList(initialTreeData), [])

  const getInitExpandedKeys = useCallback(
    (keys?: string[]) => {
      const k2np = key2nodePropsRef.current
      if (!autoExpandParent) return keys || []
      if (!keys) {
        return Object.keys(k2np).filter((key) => {
          const p = k2np[key]
          return p.children && (p.children as any[]).length
        })
      }
      const expanded: Record<string, number> = {}
      keys.forEach((key) => {
        const item = k2np[key]
        if (!item) return
        expanded[key] = 1
        item.pathParentKeys?.forEach((x) => {
          expanded[x] = 1
        })
      })
      return Object.keys(expanded)
    },
    [autoExpandParent]
  )

  const getInitCheckedKeys = useCallback(
    (keys: string[]) => {
      if (!checkStrictly) {
        const { checkedKeys, indeterminateKeys } = getCheckedKeysByInitKeys(
          keys,
          key2nodePropsRef.current
        )
        return { checkedKeys, halfCheckedKeys: indeterminateKeys }
      }
      return { checkedKeys: keys, halfCheckedKeys: props.halfCheckedKeys || [] }
    },
    [checkStrictly, props.halfCheckedKeys]
  )

  // State
  const [selectedKeys, setSelectedKeys] = useMergeValue<string[]>([], {
    defaultValue: props.defaultSelectedKeys,
    value: props.selectedKeys,
  })
  const [expandedKeys, setExpandedKeys] = useState<string[]>(() =>
    getInitExpandedKeys(props.expandedKeys || props.defaultExpandedKeys)
  )
  const initChecked = useMemo(
    () =>
      getInitCheckedKeys(props.checkedKeys || props.defaultCheckedKeys || []),
    []
  )
  const [checkedKeys, setCheckedKeys] = useState<string[]>(
    initChecked.checkedKeys
  )
  const [halfCheckedKeys, setHalfCheckedKeys] = useState<string[]>(
    initChecked.halfCheckedKeys
  )
  const [loadedKeys, setLoadedKeys] = useState<string[]>([])
  const [loadingKeys, setLoadingKeys] = useState<string[]>([])
  const [nodeList, setNodeList] = useState<NodeProps[]>(initialNodeList)

  // Track previous props for updates
  const prevPropsRef = useRef(props)

  // --- Sync controlled props ---
  useEffect(() => {
    const prev = prevPropsRef.current
    prevPropsRef.current = props

    // Rebuild nodeList if needed
    let newNodeList = nodeList
    let treeDataChanged = false
    if (
      prev.treeData !== props.treeData ||
      prev.children !== props.children ||
      !isEqual(prev.fieldNames, props.fieldNames) ||
      prev.showLine !== props.showLine ||
      prev.blockNode !== props.blockNode ||
      prev.checkable !== props.checkable ||
      prev.draggable !== props.draggable ||
      prev.checkStrictly !== props.checkStrictly
    ) {
      const td = getTreeData()
      newNodeList = buildNodeList(td)
      setNodeList(newNodeList)
      treeDataChanged = true
    }

    // Sync checkedKeys
    if (
      treeDataChanged ||
      ('checkedKeys' in props && !isEqual(prev.checkedKeys, props.checkedKeys))
    ) {
      const currentKeys =
        'checkedKeys' in props ? props.checkedKeys : checkedKeys
      const { checkedKeys: ck, halfCheckedKeys: hck } = getInitCheckedKeys(
        currentKeys || []
      )
      if (!isEqual(ck, checkedKeys)) setCheckedKeys(ck)
      if (!isEqual(hck, halfCheckedKeys)) setHalfCheckedKeys(hck)
    }

    // Sync halfCheckedKeys in strict mode
    if (
      checkStrictly &&
      'halfCheckedKeys' in props &&
      !isEqual(prev.halfCheckedKeys, props.halfCheckedKeys)
    ) {
      setHalfCheckedKeys(props.halfCheckedKeys || [])
    }

    // Sync expandedKeys
    if (
      'expandedKeys' in props &&
      !isEqual(props.expandedKeys, prev.expandedKeys)
    ) {
      setExpandedKeys(props.expandedKeys || [])
    }
  })

  // --- getCacheNode ---
  const getCacheNode = useCallback((keys: string[]): NodeInstance[] => {
    const k2np = key2nodePropsRef.current
    const nodes: NodeProps[] = []
    keys.forEach((_key) => {
      const data = k2np[_key]
      if (data) nodes.push(data as unknown as NodeProps)
    })
    return getNodeProps(nodes).map((_props) => (
      <Node {...(_props as any)} key={_props._key} />
    )) as unknown as NodeInstance[]
  }, [])

  // --- getNodeProps ---
  const getNodeProps = useCallback(
    <T extends NodeProps | NodeProps[]>(nodes: T, dataSet?: any): T => {
      const expandedKeysSet = dataSet?.expandedKeysSet || new Set(expandedKeys)
      const checkedKeysSet = dataSet?.checkedKeysSet || new Set(checkedKeys)
      const selectedKeysSet = dataSet?.selectedKeysSet || new Set(selectedKeys)
      const halfCheckedKeysSet =
        dataSet?.halfCheckedKeysSet || new Set(halfCheckedKeys)

      const processNode = (nodeProps: NodeProps): NodeProps => {
        const hasChildren =
          nodeProps.children && (nodeProps.children as any[]).length
        const otherProps: any = {
          isLeaf: !hasChildren,
          autoExpandParent: hasChildren ? autoExpandParent : false,
          expanded: expandedKeysSet.has(nodeProps._key),
        }

        if (loadMore) {
          otherProps.loaded = loadedKeys.indexOf(nodeProps._key!) > -1
          otherProps.isLeaf = hasChildren ? false : nodeProps.isLeaf
        }

        return {
          ...nodeProps,
          ...otherProps,
          selected: selectedKeysSet.has(nodeProps._key),
          indeterminated: halfCheckedKeysSet.has(nodeProps._key),
          loading: loadingKeys.indexOf(nodeProps._key!) > -1,
          checked: checkedKeysSet.has(nodeProps._key),
          selectedKeys,
          checkedKeys,
          loadingKeys,
          loadedKeys,
          expandedKeys,
          childrenData: (nodeProps.children as NodeProps[]) || [],
          children: null,
        }
      }

      return (
        isArray(nodes)
          ? nodes.map(processNode)
          : processNode(nodes as NodeProps)
      ) as T
    },
    [
      expandedKeys,
      checkedKeys,
      selectedKeys,
      halfCheckedKeys,
      loadedKeys,
      loadingKeys,
      autoExpandParent,
      loadMore,
    ]
  )

  // --- Visible keys (respect expanded state) ---
  const expandedKeysSet = useMemo(() => new Set(expandedKeys), [expandedKeys])

  const visibleNodeList = useMemo(() => {
    const result: NodeProps[] = []
    nodeList.forEach((nodeProps) => {
      const pathParentKeys = nodeProps.pathParentKeys || []
      if (pathParentKeys.every((key) => expandedKeysSet.has(key))) {
        if (!filterNode || filterNode(nodeProps)) {
          result.push(nodeProps)
        }
      }
    })
    return result
  }, [nodeList, expandedKeysSet, filterNode])

  // --- Event handlers ---
  const handleSelect = useCallback(
    (key: string, e: any) => {
      const extra: any = { e, node: getCacheNode([key])[0] }
      if (multiple) {
        const newKeys = [...selectedKeys]
        const index = newKeys.indexOf(key)
        if (index > -1) {
          newKeys.splice(index, 1)
          extra.selected = false
        } else {
          extra.selected = true
          newKeys.push(key)
        }
        extra.selectedNodes = getCacheNode(newKeys)
        if (!('selectedKeys' in props)) setSelectedKeys(newKeys)
        onSelect?.(newKeys, extra)
      } else {
        extra.selected = true
        extra.selectedNodes = getCacheNode([key])
        if (!('selectedKeys' in props)) setSelectedKeys([key])
        onSelect?.([key], extra)
      }
    },
    [selectedKeys, multiple, onSelect, getCacheNode, props]
  )

  const handleCheck = useCallback(
    (checked: boolean, key: string, e: any) => {
      const extra = { e, node: getCacheNode([key])[0] }
      let newCheckedKeys = checkedKeys
      let newHalfCheckedKeys = halfCheckedKeys

      if (checkStrictly) {
        newCheckedKeys = checked
          ? checkedKeys.concat(key)
          : checkedKeys.filter((item) => item !== key)
        if (!('checkedKeys' in props)) setCheckedKeys(newCheckedKeys)
      } else {
        const result = getAllCheckedKeysByCheck(
          key,
          checked,
          checkedKeys,
          key2nodePropsRef.current,
          halfCheckedKeys
        )
        newCheckedKeys = result.checkedKeys
        newHalfCheckedKeys = result.indeterminateKeys
        if (!('checkedKeys' in props)) {
          setCheckedKeys(newCheckedKeys)
          setHalfCheckedKeys(newHalfCheckedKeys)
        } else {
          setHalfCheckedKeys(newHalfCheckedKeys)
        }

        // Apply checkedStrategy filter for callback
        let callbackKeys = newCheckedKeys
        if (checkedStrategy === 'parent') {
          callbackKeys = callbackKeys.filter((x) => {
            const item = key2nodePropsRef.current[x]
            return !item || callbackKeys.indexOf(item.parentKey!) === -1
          })
        } else if (checkedStrategy === 'child') {
          callbackKeys = callbackKeys.filter((x) => {
            const item = key2nodePropsRef.current[x]
            return (
              !item ||
              !item.children?.length ||
              (item.children as any[]).every(
                (c: any) => callbackKeys.indexOf(c._key) === -1
              )
            )
          })
        }
        newCheckedKeys = callbackKeys
      }

      onCheck?.(newCheckedKeys, {
        checkedNodes: getCacheNode(newCheckedKeys) as NodeInstance[],
        checked,
        halfCheckedKeys: newHalfCheckedKeys,
        halfCheckedNodes: getCacheNode(newHalfCheckedKeys) as NodeInstance[],
        ...extra,
      })
    },
    [
      checkedKeys,
      halfCheckedKeys,
      checkStrictly,
      checkedStrategy,
      onCheck,
      getCacheNode,
      props,
    ]
  )

  const handleExpand = useCallback(
    (expanded: boolean, key: string) => {
      const newExpandedKeys = expanded
        ? Array.from(new Set([...expandedKeys, key]))
        : expandedKeys.filter((k) => k !== key)

      if (!('expandedKeys' in props)) setExpandedKeys(newExpandedKeys)

      onExpand?.(newExpandedKeys, {
        expanded,
        node: getCacheNode([key])[0] as NodeInstance,
        expandedNodes: getCacheNode(newExpandedKeys) as NodeInstance[],
      })
    },
    [expandedKeys, onExpand, getCacheNode, props]
  )

  const handleLoadMore = useCallback(
    (node: NodeProps) => {
      if (!isFunction(loadMore)) return
      setLoadingKeys((prev) => Array.from(new Set([...prev, node._key!])))
      setLoadedKeys((prev) => prev.filter((x) => x !== node._key))
      ;(async () => {
        try {
          await loadMore(getCacheNode([node._key!])[0])
          setLoadedKeys((prev) => Array.from(new Set([...prev, node._key!])))
          setLoadingKeys((prev) => prev.filter((x) => x !== node._key))
          handleExpand(!node.expanded, node._key!)
        } catch (e) {
          console.error('[tree]load data error: ', e)
          setLoadingKeys((prev) => prev.filter((x) => x !== node._key))
        }
      })()
    },
    [loadMore, getCacheNode, handleExpand]
  )

  // Drag handlers
  const handleNodeDragStart = useCallback(
    (e: DragEvent<HTMLSpanElement>, node: NodeProps) => {
      dragNodeRef.current = getCacheNode([node._key!])[0]
      dropPositionRef.current = 0
      onDragStart?.(e, getCacheNode([node._key!])[0])
    },
    [onDragStart, getCacheNode]
  )

  const handleNodeDragEnd = useCallback(
    (e: DragEvent<HTMLSpanElement>, node: NodeProps) => {
      dragNodeRef.current = null
      dropPositionRef.current = 0
      onDragEnd?.(e, getCacheNode([node._key!])[0])
    },
    [onDragEnd, getCacheNode]
  )

  const handleNodeDragOver = useCallback(
    (e: DragEvent<HTMLSpanElement>, node: NodeProps, dropPosition: number) => {
      dropPositionRef.current = dropPosition as 0 | -1 | 1
      onDragOver?.(e, getCacheNode([node._key!])[0])
    },
    [onDragOver, getCacheNode]
  )

  const handleNodeDragLeave = useCallback(
    (e: DragEvent<HTMLSpanElement>, node: NodeProps) => {
      dropPositionRef.current = 0
      onDragLeave?.(e, getCacheNode([node._key!])[0])
    },
    [onDragLeave, getCacheNode]
  )

  const isChildOfNode = useCallback((node: NodeProps, target: NodeInstance) => {
    const k2np = key2nodePropsRef.current
    let current = k2np[node.parentKey!]
    while (current) {
      if (current._key === (target as any).props._key) return true
      if (current.parentKey === current._key) return false
      current = k2np[current.parentKey!]
    }
    return false
  }, [])

  const handleNodeDrop = useCallback(
    (
      e: DragEvent<HTMLSpanElement>,
      node: NodeProps,
      dropPosition: 0 | 1 | -1
    ) => {
      if (!dragNodeRef.current) return
      const nodeInstance = getCacheNode([node._key!])[0]
      if (!onDrop) return
      if (isChildOfNode(node, dragNodeRef.current)) return
      if (
        allowDrop &&
        !(allowDrop as any)({
          dropNode: nodeInstance,
          dragNode: dragNodeRef.current,
          dropPosition,
        })
      )
        return
      onDrop({
        dragNode: dragNodeRef.current,
        dropNode: nodeInstance,
        dropPosition,
        e,
      })
    },
    [onDrop, allowDrop, getCacheNode, isChildOfNode]
  )

  const handleAllowDrop = useCallback(
    (node: NodeProps, dropPosition: 0 | 1 | -1) => {
      if (typeof allowDrop === 'function') {
        return allowDrop({
          dropNode: getCacheNode([node._key!])[0],
          dragNode: dragNodeRef.current,
          dropPosition,
        })
      }
      return true
    },
    [allowDrop, getCacheNode]
  )

  // --- scrollIntoView ---
  useImperativeHandle(ref, () => ({
    scrollIntoView: (_index: number | string) => {
      if (!wrapperRef.current) return
      const key = typeof _index === 'string' ? _index : undefined
      if (key) {
        const children = wrapperRef.current.children
        const idx = visibleNodeList.findIndex((n) => n._key === key)
        if (idx >= 0 && children[idx]) {
          scrollIntoView(
            wrapperRef.current.parentElement || wrapperRef.current,
            children[idx] as HTMLElement
          )
        }
      }
    },
    handleCheck,
  }))

  // --- Render ---
  const treeClassNames = cs(
    prefixCls,
    {
      [`${prefixCls}-checkable`]: checkable,
      [`${prefixCls}-show-line`]: showLine,
      [`${prefixCls}-size-${size}`]: size,
    },
    className
  )

  const getTreeState = useCallback(
    () => ({
      selectedKeys,
      checkedKeys,
      halfCheckedKeys,
      expandedKeys,
      loadedKeys,
      loadingKeys,
      currentExpandKeys: [],
      nodeList,
    }),
    [
      selectedKeys,
      checkedKeys,
      halfCheckedKeys,
      expandedKeys,
      loadedKeys,
      loadingKeys,
      nodeList,
    ]
  )

  return (
    <TreeContext.Provider
      value={{
        icons,
        key2nodeProps: key2nodePropsRef.current as any,
        getFieldInfo,
        getTreeState,
        getNodeProps,
        onExpandEnd: () => {},
        onSelect: handleSelect,
        onCheck: handleCheck,
        onNodeDragStart: handleNodeDragStart,
        onNodeDragEnd: handleNodeDragEnd,
        onNodeDragLeave: handleNodeDragLeave,
        onNodeDragOver: handleNodeDragOver,
        onNodeDrop: handleNodeDrop,
        onExpand: handleExpand,
        renderExtra,
        renderTitle,
        loadMore: loadMore ? handleLoadMore : undefined,
        allowDrop: handleAllowDrop,
        actionOnClick,
      }}
    >
      <div
        role="tree"
        tabIndex={0}
        className={treeClassNames}
        style={style}
        ref={wrapperRef}
        onMouseDown={onMouseDown}
        {...pickDataAttributes(props)}
      >
        {visibleNodeList.map((item) => {
          const nProps = getNodeProps(item)
          return <Node {...(nProps as any)} key={item._key} />
        })}
      </div>
    </TreeContext.Provider>
  )
})

Tree.displayName = 'Tree'

type TreeComponentType = typeof Tree & {
  Node: typeof Node
  SHOW_ALL: 'all'
  SHOW_PARENT: 'parent'
  SHOW_CHILD: 'child'
}

const TreeComponent = Tree as TreeComponentType
TreeComponent.Node = Node
TreeComponent.SHOW_ALL = 'all'
TreeComponent.SHOW_PARENT = 'parent'
TreeComponent.SHOW_CHILD = 'child'

export default TreeComponent
export type { Key2NodePropsType as key2nodePropsType } from './util'
export type { NodeProps as TreeNodeProps, TreeProps }
