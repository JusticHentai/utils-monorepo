import React, {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import { cs, isFunction, throttleByRaf } from '../_util'
import Checkbox from '../Checkbox'
import { ConfigContext } from '../ConfigProvider/context'
import { TreeContext } from './context'
import { NodeProps } from './interface'

interface NodeState {
  isDragOver?: boolean
  dragPosition: 0 | -1 | 1
  isDragging?: boolean
  isAllowDrop?: boolean
}

function TreeNode(
  props: PropsWithChildren<NodeProps>,
  ref: React.Ref<HTMLDivElement>
) {
  const treeContext = useContext(TreeContext)
  const { getPrefixCls } = useContext(ConfigContext)
  const nodeTitleRef = useRef<HTMLSpanElement>(null)

  const [state, setState] = useState<NodeState>({
    isAllowDrop: true,
    isDragOver: false,
    dragPosition: 0,
    isDragging: false,
  })

  const {
    _key = '',
    title,
    icon,
    checkable,
    selected,
    disabled,
    disableCheckbox,
    isLeaf,
    draggable,
    expanded,
    showLine,
    loading,
    selectable = true,
  } = props

  const prefixCls = getPrefixCls('tree-node')
  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-selected`]: selected,
      [`${prefixCls}-is-leaf`]: isLeaf,
      [`${prefixCls}-expanded`]: expanded,
      [`${prefixCls}-disabled-selectable`]: !selectable,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-draggable`]: draggable,
    },
    props.className
  )

  const icons = (() => {
    const treeIcons = isFunction(treeContext.icons)
      ? treeContext.icons(props)
      : treeContext.icons
    const propsIcons = isFunction(props.icons)
      ? props.icons(props)
      : props.icons
    return { ...(treeIcons || {}), ...(propsIcons || {}) } as Record<string, React.ReactNode>
  })()

  const setExpand = useCallback(
    (newExpand: boolean) => {
      if (newExpand === expanded) return
      treeContext.onExpand?.(newExpand, _key)
    },
    [expanded, treeContext.onExpand, _key]
  )

  const switchExpandStatus = useCallback(async () => {
    if (isLeaf) return
    if (
      !props.childrenData?.length &&
      isFunction(treeContext.loadMore) &&
      !expanded
    ) {
      await treeContext.loadMore(props)
    } else {
      setExpand(!expanded)
    }
  }, [props, setExpand, treeContext.loadMore, isLeaf, expanded])

  const getPrefixIcon = () => {
    if (loading) {
      return 'loadingIcon' in icons ? (
        icons.loadingIcon
      ) : (
        <span className={`${prefixCls}-loading-icon`}>⟳</span>
      )
    }
    let iconEl: React.ReactNode = null
    if (!isLeaf) {
      const defaultIcon = showLine ? (
        <span className={`${prefixCls}-${expanded ? 'minus' : 'plus'}-icon`} />
      ) : (
        <span className={`${prefixCls}-arrow-icon`}>▶</span>
      )
      iconEl = 'switcherIcon' in icons ? icons.switcherIcon : defaultIcon
    } else if (showLine) {
      iconEl = 'switcherIcon' in icons ? icons.switcherIcon : <span>📄</span>
    }

    if (iconEl) {
      return (
        <span
          className={`${prefixCls}-switcher-icon`}
          role="button"
          tabIndex={0}
          onClick={switchExpandStatus}
        >
          {iconEl}
        </span>
      )
    }
    return null
  }

  /* eslint-disable react-hooks/use-memo */
  const updateDragOverState = useCallback(
    throttleByRaf((e: React.DragEvent) => {
      const dom = nodeTitleRef.current
      if (!dom) return
      const rect = dom.getBoundingClientRect()
      const offsetY = window.pageYOffset + rect.top
      const pageY = e.pageY
      const gapHeight = rect.height / 4
      const diff = pageY - offsetY
      const position: 0 | -1 | 1 =
        diff < gapHeight ? -1 : diff < rect.height - gapHeight ? 0 : 1
      const isAllowDrop = treeContext.allowDrop
        ? treeContext.allowDrop(props, position)
        : true

      setState((prev) => ({
        ...prev,
        isAllowDrop,
        isDragOver: true,
        dragPosition: position,
      }))
      treeContext.onNodeDragOver?.(e as any, props, position)
    }),
    [treeContext.onNodeDragOver, treeContext.allowDrop]
  )
  /* eslint-enable react-hooks/use-memo */

  const handleCheck = useCallback(
    (checked: boolean, e: any) => {
      if (disableCheckbox || disabled) return
      treeContext.onCheck?.(checked, _key, e)
    },
    [disabled, disableCheckbox, _key, treeContext.onCheck]
  )

  return (
    <>
      <div
        style={props.style}
        className={classNames}
        ref={ref}
        role="treeitem"
        aria-disabled={disabled}
        aria-expanded={expanded}
        aria-level={props._level}
      >
        <span className={`${prefixCls}-indent`} aria-hidden>
          {[...Array(props._level || 0)].map((_, i) => (
            <span
              className={cs(`${prefixCls}-indent-block`, {
                [`${prefixCls}-indent-block-lineless`]:
                  props._lineless && props._lineless[i],
              })}
              key={i}
            />
          ))}
        </span>
        <span
          className={cs(`${prefixCls}-switcher`, {
            [`${prefixCls}-switcher-expanded`]: expanded,
          })}
        >
          {getPrefixIcon()}
        </span>
        {checkable ? (
          <Checkbox
            disabled={disableCheckbox || disabled}
            value={_key}
            indeterminate={props.indeterminated}
            checked={props.checked}
            onChange={handleCheck}
          />
        ) : null}
        <span
          aria-grabbed={state.isDragging}
          ref={nodeTitleRef}
          className={cs(`${prefixCls}-title`, {
            [`${prefixCls}-title-draggable`]: draggable,
            [`${prefixCls}-title-gap-top`]:
              state.isDragOver && state.isAllowDrop && state.dragPosition < 0,
            [`${prefixCls}-title-gap-bottom`]:
              state.isDragOver && state.isAllowDrop && state.dragPosition > 0,
            [`${prefixCls}-title-highlight`]:
              !state.isDragging &&
              state.isDragOver &&
              state.isAllowDrop &&
              state.dragPosition === 0,
            [`${prefixCls}-title-dragging`]: state.isDragging,
            [`${prefixCls}-title-block`]: props.blockNode,
          })}
          onClick={(e) => {
            const { onSelect, actionOnClick } = treeContext
            if (!disabled) {
              const actions = ([] as string[]).concat(actionOnClick as any)
              if (selectable && actions.indexOf('select') > -1) {
                onSelect?.(_key, e)
              }
              if (actions.indexOf('expand') > -1) {
                switchExpandStatus()
              }
              if (checkable && actions.indexOf('check') > -1) {
                handleCheck(!props.checked, e)
              }
            }
          }}
          draggable={draggable}
          onDrop={(e) => {
            e.stopPropagation()
            e.preventDefault()
            treeContext.onNodeDrop?.(e, props, state.dragPosition)
            if ((updateDragOverState as any).cancel)
              (updateDragOverState as any).cancel()
            setState((prev) => ({
              ...prev,
              isDragOver: false,
              dragPosition: 0,
            }))
          }}
          onDragStart={(e) => {
            if (!draggable) return
            e.stopPropagation()
            setState((prev) => ({ ...prev, isDragging: true }))
            try {
              e.dataTransfer.setData('text/plain', '')
            } catch {
              // ignore setData errors in some browsers
            }
            treeContext.onNodeDragStart?.(e, props)
          }}
          onDragEnd={(e) => {
            if (!draggable) return
            e.stopPropagation()
            if ((updateDragOverState as any).cancel)
              (updateDragOverState as any).cancel()
            setState((prev) => ({
              ...prev,
              isDragOver: false,
              isDragging: false,
            }))
            treeContext.onNodeDragEnd?.(e, props)
          }}
          onDragOver={(e) => {
            e.preventDefault()
            e.stopPropagation()
            updateDragOverState(e)
          }}
          onDragLeave={(e) => {
            if (!draggable) return
            e.stopPropagation()
            if ((updateDragOverState as any).cancel)
              (updateDragOverState as any).cancel()
            setState((prev) => ({ ...prev, isDragOver: false }))
            treeContext.onNodeDragLeave?.(e, props)
          }}
        >
          {icon && (
            <span className={`${prefixCls}-icon ${prefixCls}-custom-icon`}>
              {icon}
            </span>
          )}
          <span className={`${prefixCls}-title-text`}>
            {isFunction(treeContext.renderTitle)
              ? treeContext.renderTitle(props)
              : title}
          </span>
          {draggable && (
            <span className={`${prefixCls}-icon ${prefixCls}-drag-icon`}>
              {'dragIcon' in icons ? icons.dragIcon : <span>⋮</span>}
            </span>
          )}
        </span>
        {isFunction(treeContext.renderExtra) && treeContext.renderExtra(props)}
      </div>
      {/* Render children inline when expanded (no animation) */}
    </>
  )
}

const TreeNodeComponent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<NodeProps>
>(TreeNode)
TreeNodeComponent.displayName = 'TreeNode'

export default React.memo(TreeNodeComponent)
