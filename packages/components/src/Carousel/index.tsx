import React, {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { CarouselProps } from './interface'

const DEFAULT_AUTO_PLAY_INTERVAL = 3000

const defaultProps: Partial<CarouselProps> = {
  animation: 'slide',
  indicatorType: 'dot',
  indicatorPosition: 'bottom',
  direction: 'horizontal',
  showArrow: 'always',
  trigger: 'click',
  moveSpeed: 500,
  timingFunc: 'cubic-bezier(0.34, 0.69, 0.1, 1)',
}

function Carousel(baseProps: CarouselProps, _ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<CarouselProps>(
    baseProps,
    defaultProps as CarouselProps,
    (componentConfig?.Carousel ?? {}) as CarouselProps
  )
  const {
    style,
    className,
    children,
    currentIndex,
    animation,
    trigger,
    direction,
    moveSpeed,
    timingFunc,
    indicatorType,
    indicatorPosition,
    indicatorClassName,
    showArrow,
    miniRender,
    arrowClassName,
    carousel,
    icons,
    onChange,
  } = props

  const autoPlay = props.autoPlay
  const childrenList = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as ReactElement[]
  const childrenLength = childrenList.length

  const refDom = useRef<HTMLDivElement>(null)
  const refAnimationTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const getValidIndex = (i: number): number => {
    return ((i % childrenLength) + childrenLength) % childrenLength
  }

  const [index, setIndex] = useState(
    typeof currentIndex === 'number' ? getValidIndex(currentIndex) : 0
  )
  const [previousIndex, setPreviousIndex] = useState(index)
  const [isPause, setIsPause] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<
    'positive' | 'negative' | null
  >(null)

  const mergedIndex =
    typeof currentIndex === 'number' ? getValidIndex(currentIndex) : index
  const prevIndex = getValidIndex(mergedIndex - 1)
  const nextIndex = getValidIndex(mergedIndex + 1)
  const autoPlayInterval =
    typeof autoPlay === 'object' && autoPlay.interval
      ? autoPlay.interval
      : DEFAULT_AUTO_PLAY_INTERVAL

  useEffect(() => {
    return () => {
      if (refAnimationTimer.current) clearTimeout(refAnimationTimer.current)
    }
  }, [])

  const slideTo = useCallback(
    ({
      targetIndex,
      isNegative = false,
      isManual = false,
    }: {
      targetIndex: number
      isNegative?: boolean
      isManual?: boolean
    }) => {
      if (!isAnimating && targetIndex !== mergedIndex) {
        setIsAnimating(true)
        setPreviousIndex(mergedIndex)
        setIndex(targetIndex)
        setSlideDirection(isNegative ? 'negative' : 'positive')
        onChange?.(targetIndex, mergedIndex, isManual)

        refAnimationTimer.current = setTimeout(() => {
          setIsAnimating(false)
          refAnimationTimer.current = null
        }, moveSpeed)
      }
    },
    [isAnimating, mergedIndex, moveSpeed, onChange]
  )

  // Auto play
  useEffect(() => {
    if (!autoPlay || isPause || childrenLength <= 1) return
    const timer = setInterval(() => {
      slideTo({ targetIndex: getValidIndex(mergedIndex + 1) })
    }, autoPlayInterval)
    return () => clearInterval(timer)
  }, [
    autoPlay,
    isPause,
    childrenLength,
    autoPlayInterval,
    mergedIndex,
    slideTo,
  ])

  useImperativeHandle(carousel, () => ({
    dom: refDom.current!,
    goto: ({ index: idx, isNegative, isManual }) => {
      slideTo({ targetIndex: getValidIndex(idx), isNegative, isManual })
    },
  }))

  const prefixCls = getPrefixCls('carousel')
  const classNames = cs(
    prefixCls,
    `${prefixCls}-indicator-position-${indicatorPosition}`,
    className
  )

  const eventHandlers =
    autoPlay &&
    (typeof autoPlay !== 'object' || autoPlay.hoverToPause !== false)
      ? {
          onMouseEnter: () => setIsPause(true),
          onMouseLeave: () => setIsPause(false),
        }
      : {}

  return (
    <div ref={refDom} className={classNames} style={style} {...eventHandlers}>
      <div
        className={cs(
          `${prefixCls}-${animation}`,
          `${prefixCls}-${direction}`,
          {
            [`${prefixCls}-negative`]: slideDirection === 'negative',
          }
        )}
      >
        {/* eslint-disable react-hooks/refs */}
        {childrenList.map((child, idx) => {
          const isCurrent = idx === mergedIndex
          const isPrev = idx === prevIndex
          const isNext = idx === nextIndex
          if (miniRender && !isCurrent && !isPrev && !isNext) return null

          const childProps = child.props as Record<string, any>
          return React.cloneElement(child as React.ReactElement<Record<string, any>>, {
            key: idx,
            'aria-hidden': !isCurrent,
            style: {
              ...childProps.style,
              transitionTimingFunction: timingFunc,
              transitionDuration: `${moveSpeed}ms`,
              animationTimingFunction: timingFunc,
              animationDuration: `${moveSpeed}ms`,
            },
            className: cs(childProps.className, {
              [`${prefixCls}-item-prev`]: isPrev,
              [`${prefixCls}-item-next`]: isNext,
              [`${prefixCls}-item-current`]: isCurrent,
              [`${prefixCls}-item-slide-in`]:
                animation === 'slide' && isAnimating && isCurrent,
              [`${prefixCls}-item-slide-out`]:
                animation === 'slide' && isAnimating && idx === previousIndex,
            }),
            onClick: (event: React.MouseEvent) => {
              childProps.onClick?.(event)
              slideTo({
                targetIndex: idx,
                isNegative: idx === prevIndex,
                isManual: true,
              })
            },
          })
        })}
        {/* eslint-enable react-hooks/refs */}
      </div>

      {indicatorType !== 'never' && childrenLength > 1 && (
        <div
          className={cs(
            `${prefixCls}-indicator-wrapper`,
            `${prefixCls}-indicator-wrapper-${indicatorPosition}`
          )}
        >
          <div
            className={cs(
              `${prefixCls}-indicator`,
              `${prefixCls}-indicator-${indicatorType}`,
              indicatorClassName
            )}
          >
            {Array.from({ length: childrenLength }, (_, i) => (
              <span
                key={i}
                data-index={i}
                className={cs(`${prefixCls}-indicator-item`, {
                  [`${prefixCls}-indicator-item-active`]: i === mergedIndex,
                })}
                onClick={() =>
                  slideTo({
                    targetIndex: i,
                    isNegative: i < mergedIndex,
                    isManual: true,
                  })
                }
                onMouseEnter={
                  trigger === 'hover'
                    ? () =>
                        slideTo({
                          targetIndex: i,
                          isNegative: i < mergedIndex,
                          isManual: true,
                        })
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      )}

      {showArrow !== 'never' && childrenLength > 1 && (
        <div
          className={cs(
            `${prefixCls}-arrow`,
            {
              [`${prefixCls}-arrow-hover`]: showArrow === 'hover',
            },
            arrowClassName
          )}
        >
          <div
            className={`${prefixCls}-arrow-${direction === 'vertical' ? 'top' : 'left'}`}
            role="button"
            tabIndex={0}
            onClick={() =>
              slideTo({
                targetIndex: prevIndex,
                isNegative: true,
                isManual: true,
              })
            }
          >
            {icons?.prev || (
              <svg
                viewBox="0 0 1024 1024"
                width="14"
                height="14"
                fill="currentColor"
              >
                <path d="M697.8 170.7L354.5 514l343.3 343.3" />
              </svg>
            )}
          </div>
          <div
            className={`${prefixCls}-arrow-${direction === 'vertical' ? 'bottom' : 'right'}`}
            role="button"
            tabIndex={0}
            onClick={() => slideTo({ targetIndex: nextIndex, isManual: true })}
          >
            {icons?.next || (
              <svg
                viewBox="0 0 1024 1024"
                width="14"
                height="14"
                fill="currentColor"
              >
                <path d="M326.2 853.3L669.5 510 326.2 166.7" />
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const CarouselComponent = React.forwardRef(Carousel)
CarouselComponent.displayName = 'Carousel'

export default CarouselComponent
export type { CarouselProps }
