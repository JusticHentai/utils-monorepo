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
import { isFunction, isNumber, isString } from '../_util/is'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { SplitGroupProps } from './interface'
import ResizeTrigger from './resize-trigger'

function formatSize(size: number | string | undefined, total: number): number {
  if (size === undefined) return 0
  if (isNumber(size)) return size <= 1 ? size : size / total
  if (isString(size)) {
    if (size.endsWith('px')) return parseInt(size) / total
    if (size.endsWith('%')) return parseFloat(size) / 100
    return parseFloat(size)
  }
  return 0
}

const defaultProps: Partial<SplitGroupProps> = {
  direction: 'horizontal',
}

function SplitGroup(
  baseProps: SplitGroupProps,
  _ref: React.Ref<HTMLDivElement>
) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<SplitGroupProps>(
    baseProps,
    defaultProps as SplitGroupProps,
    (componentConfig?.['ResizeBox.SplitGroup'] ?? {}) as unknown as SplitGroupProps
  )

  const {
    className,
    style,
    direction = 'horizontal',
    panes,
    onMoving,
    onMovingStart,
    onMovingEnd,
    ...rest
  } = props

  const isHorizontal = direction === 'horizontal'
  const prefixCls = getPrefixCls('resize-split-group')
  const containerRef = useRef<HTMLDivElement>(null)

  // 初始化面板大小
  const initOffsets = useCallback(() => {
    const containerSize = containerRef.current
      ? isHorizontal
        ? containerRef.current.offsetWidth
        : containerRef.current.offsetHeight
      : 1

    const definedPanes: number[] = []
    let totalDefined = 0
    let undefinedCount = 0

    panes.forEach((pane) => {
      if (pane.size !== undefined) {
        const s = formatSize(pane.size, containerSize)
        definedPanes.push(s)
        totalDefined += s
      } else {
        definedPanes.push(-1)
        undefinedCount++
      }
    })

    const remaining = Math.max(0, 1 - totalDefined)
    const eachUndefined = undefinedCount > 0 ? remaining / undefinedCount : 0

    return definedPanes.map((v) => (v === -1 ? eachUndefined : v))
  }, [panes, isHorizontal])

  const [offsets, setOffsets] = useState<number[]>(() => initOffsets())

  useEffect(() => {
    setOffsets(initOffsets())
  }, [panes.length])

  const recordRef = useRef({
    startX: 0,
    startY: 0,
    startOffsets: [] as number[],
    movingIndex: -1,
    moving: false,
  })

  const handleMouseDown = useCallback(
    (index: number, e: React.MouseEvent) => {
      if (panes[index]?.disabled || panes[index + 1]?.disabled) return
      e.preventDefault()

      recordRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startOffsets: [...offsets],
        movingIndex: index,
        moving: true,
      }

      onMovingStart?.(e)

      const containerSize = containerRef.current
        ? isHorizontal
          ? containerRef.current.offsetWidth
          : containerRef.current.offsetHeight
        : 1

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!recordRef.current.moving) return
        const { startX, startY, startOffsets, movingIndex } = recordRef.current

        const diff = isHorizontal
          ? moveEvent.clientX - startX
          : moveEvent.clientY - startY
        const diffPercent = diff / containerSize

        const newOffsets = [...startOffsets]
        const currentOffset = startOffsets[movingIndex]
        const nextOffset = startOffsets[movingIndex + 1]
        const totalOffset = currentOffset + nextOffset

        // 应用 min/max
        const pane = panes[movingIndex]
        const nextPane = panes[movingIndex + 1]
        const currentMin =
          pane?.min !== undefined ? formatSize(pane.min, containerSize) : 0
        let currentMax =
          pane?.max !== undefined
            ? formatSize(pane.max, containerSize)
            : totalOffset
        const nextMin =
          nextPane?.min !== undefined
            ? formatSize(nextPane.min, containerSize)
            : 0

        currentMax = Math.min(totalOffset - nextMin, currentMax)

        let newCurrentOffset = currentOffset + diffPercent
        newCurrentOffset = Math.max(
          currentMin,
          Math.min(currentMax, newCurrentOffset)
        )

        newOffsets[movingIndex] = newCurrentOffset
        newOffsets[movingIndex + 1] = totalOffset - newCurrentOffset

        setOffsets(newOffsets)
        onMoving?.(
          moveEvent,
          newOffsets.map((o) => `${(o * 100).toFixed(2)}%`)
        )
      }

      const handleMouseUp = (upEvent: MouseEvent) => {
        recordRef.current.moving = false
        document.body.style.cursor = ''
        off(window, 'mousemove', handleMouseMove)
        off(window, 'mouseup', handleMouseUp)
        onMovingEnd?.(upEvent)
      }

      document.body.style.cursor = isHorizontal ? 'col-resize' : 'row-resize'
      on(window, 'mousemove', handleMouseMove)
      on(window, 'mouseup', handleMouseUp)
    },
    [offsets, panes, isHorizontal, onMoving, onMovingStart, onMovingEnd]
  )

  return (
    <div
      ref={containerRef}
      className={cs(prefixCls, `${prefixCls}-${direction}`, className)}
      style={{
        display: 'flex',
        flexDirection: isHorizontal ? 'row' : 'column',
        ...style,
      }}
      {...rest}
    >
      {panes.map((pane, index) => (
        <React.Fragment key={index}>
          <div
            className={`${prefixCls}-pane`}
            style={{
              [isHorizontal ? 'width' : 'height']:
                offsets[index] !== undefined
                  ? `${(offsets[index] * 100).toFixed(4)}%`
                  : 'auto',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            {pane.content}
          </div>
          {index < panes.length - 1 &&
            (isFunction(pane.trigger) ? (
              (
                pane.trigger as (
                  prev: React.ReactNode,
                  resize: React.ReactNode,
                  next: React.ReactNode
                ) => React.ReactNode
              )(
                null,
                <ResizeTrigger
                  direction={isHorizontal ? 'horizontal' : 'vertical'}
                  resizable={pane.resizable !== false}
                  onMouseDown={(e) => handleMouseDown(index, e)}
                />,
                null
              )
            ) : pane.trigger !== undefined ? (
              <div onMouseDown={(e) => handleMouseDown(index, e)}>
                {pane.trigger as React.ReactNode}
              </div>
            ) : (
              <ResizeTrigger
                direction={isHorizontal ? 'horizontal' : 'vertical'}
                resizable={pane.resizable !== false}
                onMouseDown={(e) => handleMouseDown(index, e)}
              />
            ))}
        </React.Fragment>
      ))}
    </div>
  )
}

const ForwardRefSplitGroup = forwardRef<HTMLDivElement, SplitGroupProps>(
  SplitGroup
)
ForwardRefSplitGroup.displayName = 'SplitGroup'

export default ForwardRefSplitGroup
