import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { off, on } from '../_util/dom'
import { useMergeValue } from '../_util/hooks'
import { isFunction, isNumber, isString } from '../_util/is'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { SplitProps } from './interface'
import ResizeTrigger from './resize-trigger'

function isPx(value: string | number) {
  return isString(value) && value.endsWith('px')
}

function isPercent(value: string | number) {
  return isNumber(value) || (isString(value) && value.endsWith('%'))
}
void isPercent

const defaultProps: Partial<SplitProps> = {
  direction: 'horizontal',
}

function Split(baseProps: SplitProps, _ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<SplitProps>(
    baseProps,
    defaultProps as SplitProps,
    (componentConfig?.['ResizeBox.Split'] ?? {}) as unknown as SplitProps
  )

  const {
    className,
    style,
    direction = 'horizontal',
    panes,
    disabled,
    trigger,
    min,
    max,
    onMoving,
    onMovingStart,
    onMovingEnd,
    onPaneResize: _onPaneResize,
    ...rest
  } = props

  const isHorizontal =
    direction === 'horizontal' || direction === 'horizontal-reverse'
  const isReverse =
    direction === 'horizontal-reverse' || direction === 'vertical-reverse'
  const prefixCls = getPrefixCls('resize-split')

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const [triggerSize, setTriggerSize] = useState(0)

  const [offset, setOffset] = useMergeValue<number | string>(
    props.size ?? 0.5,
    { value: props.size }
  )

  const recordRef = useRef({
    startX: 0,
    startY: 0,
    startOffset: 0,
    moving: false,
  })

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (triggerRef.current) {
      setTriggerSize(
        isHorizontal
          ? triggerRef.current.offsetWidth
          : triggerRef.current.offsetHeight
      )
    }
  }, [isHorizontal])
  /* eslint-enable react-hooks/set-state-in-effect */

  const getOffset = useCallback(
    (startOffset: number, x: number, y: number) => {
      const container = containerRef.current
      if (!container) return startOffset

      const containerSize = isHorizontal
        ? container.offsetWidth
        : container.offsetHeight
      const diff = isHorizontal
        ? x - recordRef.current.startX
        : y - recordRef.current.startY
      const factor = isReverse ? -1 : 1
      let newOffset = startOffset + (diff * factor) / containerSize

      // 应用 min/max
      if (min !== undefined) {
        const minVal = isPx(min)
          ? parseInt(String(min)) / containerSize
          : Number(min)
        newOffset = Math.max(newOffset, minVal)
      }
      if (max !== undefined) {
        const maxVal = isPx(max)
          ? parseInt(String(max)) / containerSize
          : Number(max)
        newOffset = Math.min(newOffset, maxVal)
      }
      return Math.max(0, Math.min(1, newOffset))
    },
    [isHorizontal, isReverse, min, max]
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return
      e.preventDefault()

      const container = containerRef.current
      if (!container) return
      const containerSize = isHorizontal
        ? container.offsetWidth
        : container.offsetHeight

      let currentOffset: number
      if (isPx(offset)) {
        currentOffset = parseInt(String(offset)) / containerSize
      } else {
        currentOffset = Number(offset)
      }

      recordRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startOffset: currentOffset,
        moving: true,
      }

      onMovingStart?.(e)

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!recordRef.current.moving) return
        const newOffset = getOffset(
          recordRef.current.startOffset,
          moveEvent.clientX,
          moveEvent.clientY
        )
        setOffset(newOffset)
        onMoving?.(moveEvent, newOffset)
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
    [
      disabled,
      isHorizontal,
      offset,
      getOffset,
      setOffset,
      onMoving,
      onMovingStart,
      onMovingEnd,
    ]
  )

  const getFirstPaneSize = () => {
    const halfTrigger = triggerSize / 2
    if (isPx(offset)) {
      return `calc(${offset} - ${halfTrigger}px)`
    }
    return `calc(${Number(offset) * 100}% - ${halfTrigger}px)`
  }

  const triggerDirection = isHorizontal ? 'horizontal' : 'vertical'
  const flexDir = isHorizontal
    ? isReverse
      ? 'row-reverse'
      : 'row'
    : isReverse
      ? 'column-reverse'
      : 'column'

  return (
    <div
      ref={containerRef}
      className={cs(prefixCls, `${prefixCls}-${direction}`, className)}
      style={{
        display: 'flex',
        flexDirection: flexDir as React.CSSProperties['flexDirection'],
        ...style,
      }}
      {...rest}
    >
      <div
        className={`${prefixCls}-pane ${prefixCls}-pane-first`}
        style={{
          [isHorizontal ? 'width' : 'height']: getFirstPaneSize(),
          flexShrink: 0,
        }}
      >
        {panes[0]}
      </div>
      {isFunction(trigger) ? (
        (
          trigger as (
            prev: React.ReactNode,
            resize: React.ReactNode,
            next: React.ReactNode
          ) => React.ReactNode
        )(
          null,
          <ResizeTrigger
            ref={triggerRef}
            direction={triggerDirection}
            onMouseDown={handleMouseDown}
          />,
          null
        )
      ) : trigger !== undefined ? (
        <div ref={triggerRef} onMouseDown={handleMouseDown}>
          {trigger as ReactNode}
        </div>
      ) : (
        <ResizeTrigger
          ref={triggerRef}
          direction={triggerDirection}
          onMouseDown={handleMouseDown}
        />
      )}
      <div
        className={`${prefixCls}-pane ${prefixCls}-pane-second`}
        style={{ flex: 1, overflow: 'hidden' }}
      >
        {panes[1]}
      </div>
    </div>
  )
}

const ForwardRefSplit = forwardRef<HTMLDivElement, SplitProps>(Split)
ForwardRefSplit.displayName = 'Split'

export default ForwardRefSplit
