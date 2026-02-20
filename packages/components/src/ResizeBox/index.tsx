import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { off, on } from '../_util/dom'
import { isNumber } from '../_util/is'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { Direction, ResizeBoxProps } from './interface'
import ResizeTrigger from './resize-trigger'
import Split from './split'
import SplitGroup from './split-group'

const allDirections: Direction[] = ['right']

const defaultProps: Partial<ResizeBoxProps> = {
  directions: allDirections,
}

function ResizeBox(baseProps: ResizeBoxProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<ResizeBoxProps>(
    baseProps,
    defaultProps as ResizeBoxProps,
    (componentConfig?.ResizeBox ?? {}) as ResizeBoxProps
  )

  const {
    className,
    style,
    children,
    directions = allDirections,
    resizeIcons,
    resizeTriggers,
    onMovingStart,
    onMoving,
    onMovingEnd,
    ...rest
  } = props

  const prefixCls = getPrefixCls('resizebox')
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number | undefined>(
    isNumber(props.width) ? props.width : undefined
  )
  const [height, setHeight] = useState<number | undefined>(
    isNumber(props.height) ? props.height : undefined
  )

  const recordRef = useRef({
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    direction: '' as Direction,
    moving: false,
  })

  // 初始化尺寸
  useEffect(() => {
    if (containerRef.current) {
      if (width === undefined) setWidth(containerRef.current.offsetWidth)
      if (height === undefined) setHeight(containerRef.current.offsetHeight)
    }
  }, [])

  const handleMouseDown = useCallback(
    (direction: Direction, e: React.MouseEvent) => {
      e.preventDefault()
      const currentWidth = width ?? containerRef.current?.offsetWidth ?? 0
      const currentHeight = height ?? containerRef.current?.offsetHeight ?? 0

      recordRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startWidth: currentWidth,
        startHeight: currentHeight,
        direction,
        moving: true,
      }

      onMovingStart?.(e)

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!recordRef.current.moving) return
        const {
          startX,
          startY,
          startWidth,
          startHeight,
          direction: dir,
        } = recordRef.current

        let newWidth = startWidth
        let newHeight = startHeight

        if (dir === 'right') {
          newWidth = startWidth + (moveEvent.clientX - startX)
        } else if (dir === 'left') {
          newWidth = startWidth - (moveEvent.clientX - startX)
        } else if (dir === 'bottom') {
          newHeight = startHeight + (moveEvent.clientY - startY)
        } else if (dir === 'top') {
          newHeight = startHeight - (moveEvent.clientY - startY)
        }

        newWidth = Math.max(0, newWidth)
        newHeight = Math.max(0, newHeight)

        setWidth(newWidth)
        setHeight(newHeight)
        onMoving?.(moveEvent, { width: newWidth, height: newHeight })
      }

      const handleMouseUp = (upEvent: MouseEvent) => {
        recordRef.current.moving = false
        document.body.style.cursor = ''
        off(window, 'mousemove', handleMouseMove)
        off(window, 'mouseup', handleMouseUp)
        onMovingEnd?.(upEvent)
      }

      const isHorizontal = direction === 'left' || direction === 'right'
      document.body.style.cursor = isHorizontal ? 'col-resize' : 'row-resize'
      on(window, 'mousemove', handleMouseMove)
      on(window, 'mouseup', handleMouseUp)
    },
    [width, height, onMoving, onMovingStart, onMovingEnd]
  )

  const renderTrigger = (direction: Direction) => {
    if (resizeTriggers?.[direction]) {
      return (
        <div
          key={direction}
          className={`${prefixCls}-trigger-${direction}`}
          onMouseDown={(e) => handleMouseDown(direction, e)}
        >
          {resizeTriggers[direction]}
        </div>
      )
    }

    const isHorizontal = direction === 'left' || direction === 'right'
    return (
      <ResizeTrigger
        key={direction}
        className={`${prefixCls}-trigger-${direction}`}
        direction={isHorizontal ? 'horizontal' : 'vertical'}
        icon={resizeIcons?.[direction]}
        onMouseDown={(e) => handleMouseDown(direction, e)}
      />
    )
  }

  const classString = cs(prefixCls, className)

  return (
    <div
      ref={(node) => {
        ;(
          containerRef as React.MutableRefObject<HTMLDivElement | null>
        ).current = node
        if (typeof ref === 'function') ref(node)
        else if (ref)
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      }}
      className={classString}
      style={{
        position: 'relative',
        width: width !== undefined ? width : props.width,
        height: height !== undefined ? height : props.height,
        ...style,
      }}
      {...rest}
    >
      {children}
      {directions.map((dir) => renderTrigger(dir))}
    </div>
  )
}

const ForwardRefResizeBox = forwardRef<HTMLDivElement, ResizeBoxProps>(
  ResizeBox
)

const ResizeBoxComponent = ForwardRefResizeBox as typeof ForwardRefResizeBox & {
  Split: typeof Split
  SplitGroup: typeof SplitGroup
}

ResizeBoxComponent.displayName = 'ResizeBox'
ResizeBoxComponent.Split = Split
ResizeBoxComponent.SplitGroup = SplitGroup

export default ResizeBoxComponent
export type { ResizeBoxProps }
