import {
  CSSProperties,
  ReactElement,
  ReactNode,
  cloneElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import Portal from '../Portal'
import { contains, cs, isFunction, isServerRendering, off, on } from '../_util'

export type TriggerType = 'hover' | 'click' | 'focus' | 'contextMenu'
export type TriggerPosition =
  | 'top'
  | 'tl'
  | 'tr'
  | 'bottom'
  | 'bl'
  | 'br'
  | 'left'
  | 'lt'
  | 'lb'
  | 'right'
  | 'rt'
  | 'rb'

export interface TriggerProps {
  /** 弹出位置 */
  position?: TriggerPosition
  /** 触发方式 */
  trigger?: TriggerType | TriggerType[]
  /** 弹出层内容 */
  popup?: () => ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 受控显示 */
  popupVisible?: boolean
  /** 默认弹出层是否可见 */
  defaultPopupVisible?: boolean
  /** 弹出层显示/隐藏时的回调 */
  onVisibleChange?: (visible: boolean) => void
  /** children */
  children?: ReactNode
  /** 弹出层类名 */
  className?: string
  /** 弹出层样式 */
  style?: CSSProperties
  /** 弹出层挂载节点 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPopupContainer?: (...args: any[]) => HTMLElement | Element
  /** 是否自动对齐弹出层的宽度与触发元素一致 */
  autoAlignPopupWidth?: boolean
  /** 是否自动对齐弹出层的最小宽度与触发元素一致 */
  autoAlignPopupMinWidth?: boolean
  /** 鼠标移入弹出层的延迟(ms) */
  mouseEnterDelay?: number
  /** 鼠标移出弹出层的延迟(ms) */
  mouseLeaveDelay?: number
  /** 是否展示箭头 */
  showArrow?: boolean
  /** 关闭后是否卸载弹出层 */
  unmountOnExit?: boolean
  /** 弹出层z-index */
  zIndex?: number
}

function getPopupStyle(
  triggerRect: DOMRect,
  position: TriggerPosition,
  offset: number = 4
): CSSProperties {
  const { top, left, width, height, bottom, right } = triggerRect
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft

  const posMap: Record<TriggerPosition, CSSProperties> = {
    top: {
      left: left + scrollLeft + width / 2,
      top: top + scrollTop - offset,
      transform: 'translateX(-50%) translateY(-100%)',
    },
    tl: {
      left: left + scrollLeft,
      top: top + scrollTop - offset,
      transform: 'translateY(-100%)',
    },
    tr: {
      left: right + scrollLeft,
      top: top + scrollTop - offset,
      transform: 'translateX(-100%) translateY(-100%)',
    },
    bottom: {
      left: left + scrollLeft + width / 2,
      top: bottom + scrollTop + offset,
      transform: 'translateX(-50%)',
    },
    bl: { left: left + scrollLeft, top: bottom + scrollTop + offset },
    br: {
      left: right + scrollLeft,
      top: bottom + scrollTop + offset,
      transform: 'translateX(-100%)',
    },
    left: {
      left: left + scrollLeft - offset,
      top: top + scrollTop + height / 2,
      transform: 'translateX(-100%) translateY(-50%)',
    },
    lt: {
      left: left + scrollLeft - offset,
      top: top + scrollTop,
      transform: 'translateX(-100%)',
    },
    lb: {
      left: left + scrollLeft - offset,
      top: bottom + scrollTop,
      transform: 'translateX(-100%) translateY(-100%)',
    },
    right: {
      left: right + scrollLeft + offset,
      top: top + scrollTop + height / 2,
      transform: 'translateY(-50%)',
    },
    rt: { left: right + scrollLeft + offset, top: top + scrollTop },
    rb: {
      left: right + scrollLeft + offset,
      top: bottom + scrollTop,
      transform: 'translateY(-100%)',
    },
  }

  return { position: 'absolute', ...posMap[position] }
}

function Trigger(props: TriggerProps) {
  const {
    position = 'bottom',
    trigger = 'hover',
    popup,
    disabled,
    popupVisible: propVisible,
    defaultPopupVisible = false,
    onVisibleChange,
    children,
    className,
    style,
    getPopupContainer,
    autoAlignPopupWidth,
    autoAlignPopupMinWidth,
    mouseEnterDelay = 100,
    mouseLeaveDelay = 100,
    showArrow,
    unmountOnExit = true,
    zIndex = 1050,
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('trigger')

  const [visible, setVisible] = useState(defaultPopupVisible)
  const [popupStyle, setPopupStyle] = useState<CSSProperties>({})

  const mergedVisible = propVisible !== undefined ? propVisible : visible
  const triggerRef = useRef<HTMLElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const mouseEnterTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const mouseLeaveTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  const triggers = useMemo(
    () => (Array.isArray(trigger) ? trigger : [trigger]),
    [trigger]
  )

  const changeVisible = useCallback(
    (newVisible: boolean) => {
      if (propVisible === undefined) {
        setVisible(newVisible)
      }
      onVisibleChange?.(newVisible)
    },
    [propVisible, onVisibleChange]
  )

  const updatePopupPosition = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const posStyle = getPopupStyle(rect, position)
      if (autoAlignPopupWidth) {
        posStyle.width = rect.width
      }
      if (autoAlignPopupMinWidth) {
        posStyle.minWidth = rect.width
      }
      posStyle.zIndex = zIndex
      setPopupStyle(posStyle)
    }
  }, [position, autoAlignPopupWidth, autoAlignPopupMinWidth, zIndex])

  useEffect(() => {
    if (mergedVisible) {
      updatePopupPosition()
    }
  }, [mergedVisible, updatePopupPosition])

  // 点击外部关闭
  useEffect(() => {
    if (!mergedVisible) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        triggerRef.current &&
        !contains(triggerRef.current, target) &&
        popupRef.current &&
        !contains(popupRef.current, target)
      ) {
        changeVisible(false)
      }
    }

    on(document, 'mousedown', handleClickOutside)
    return () => off(document, 'mousedown', handleClickOutside)
  }, [mergedVisible, changeVisible])

  if (isServerRendering() || !children) return null

  /* eslint-disable react-hooks/refs */
  const childProps: Record<string, unknown> = {
    ref: triggerRef,
  }

  if (triggers.includes('hover')) {
    childProps.onMouseEnter = () => {
      if (disabled) return
      clearTimeout(mouseLeaveTimerRef.current)
      mouseEnterTimerRef.current = setTimeout(
        () => changeVisible(true),
        mouseEnterDelay
      )
    }
    childProps.onMouseLeave = () => {
      clearTimeout(mouseEnterTimerRef.current)
      mouseLeaveTimerRef.current = setTimeout(
        () => changeVisible(false),
        mouseLeaveDelay
      )
    }
  }

  if (triggers.includes('click')) {
    childProps.onClick = () => {
      if (disabled) return
      changeVisible(!mergedVisible)
    }
  }

  if (triggers.includes('focus')) {
    childProps.onFocus = () => {
      if (disabled) return
      changeVisible(true)
    }
    childProps.onBlur = () => {
      changeVisible(false)
    }
  }

  if (triggers.includes('contextMenu')) {
    childProps.onContextMenu = (e: React.MouseEvent) => {
      if (disabled) return
      e.preventDefault()
      changeVisible(!mergedVisible)
    }
  }

  const child = cloneElement(children as ReactElement, childProps)
  /* eslint-enable react-hooks/refs */

  const popupNode = mergedVisible ? (
    <div
      ref={popupRef}
      className={cs(prefixCls, className)}
      style={{ ...popupStyle, ...style }}
      onMouseEnter={() => {
        if (triggers.includes('hover')) {
          clearTimeout(mouseLeaveTimerRef.current)
        }
      }}
      onMouseLeave={() => {
        if (triggers.includes('hover')) {
          mouseLeaveTimerRef.current = setTimeout(
            () => changeVisible(false),
            mouseLeaveDelay
          )
        }
      }}
    >
      {showArrow && <div className={`${prefixCls}-arrow`} />}
      <div className={`${prefixCls}-content`}>
        {isFunction(popup) ? popup() : popup}
      </div>
    </div>
  ) : null

  const shouldRenderPopup = mergedVisible || !unmountOnExit

  return (
    <>
      {child}
      {shouldRenderPopup && (
        <Portal getContainer={getPopupContainer as any}>{popupNode}</Portal>
      )}
    </>
  )
}

Trigger.displayName = 'Trigger'

export default Trigger
