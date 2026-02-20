import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { off, on } from '../_util/dom'
import { isFunction, isNumber, isString } from '../_util/is'
import { raf } from '../_util/raf'
import throttleByRaf from '../_util/throttleByRaf'
import Affix from '../Affix'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import AnchorContext from './context'
import { AnchorLinkProps, AnchorProps } from './interface'
import Link from './link'

function isWindow(el: unknown): el is Window {
  return el === window
}

function findNode(
  dom: HTMLElement | Document,
  selector: string
): HTMLElement | null {
  const s =
    isString(selector) && selector[0] === '#'
      ? `[id='${selector.replace('#', '')}']`
      : selector
  try {
    return dom.querySelector(s)
  } catch {
    return null
  }
}

function getContainer(targetContainer?: string | HTMLElement | Window) {
  if (isString(targetContainer)) {
    return findNode(document, targetContainer)
  }
  return targetContainer || window
}

function getContainerElement(scrollContainer: HTMLElement | Window) {
  return isWindow(scrollContainer)
    ? document.documentElement || document.body
    : scrollContainer
}

/** quartOut 缓动函数 */
function quartOut(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

/** 用 raf 实现平滑滚动，替代 b-tween */
function slide(el: HTMLElement, targetTop: number, cb: () => void) {
  const startTop = el.scrollTop
  const diff = targetTop - startTop
  const duration = 300
  const startTime = Date.now()

  function step() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    el.scrollTop = startTop + diff * quartOut(progress)
    if (progress < 1) {
      raf(step)
    } else {
      cb()
    }
  }
  raf(step)
}

type AnchorPropsWithChildren = React.PropsWithChildren<AnchorProps>

const defaultProps: Partial<AnchorProps> = {
  animation: true,
  affix: true,
  hash: true,
  boundary: 'start',
}

function Anchor(baseProps: AnchorPropsWithChildren, ref: React.Ref<unknown>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<AnchorPropsWithChildren>(
    baseProps,
    defaultProps as AnchorPropsWithChildren,
    (componentConfig?.Anchor ?? {}) as AnchorPropsWithChildren
  )
  const {
    className,
    style,
    scrollContainer: propScrollContainer,
    animation = true,
    lineless,
    affix = true,
    affixStyle,
    offsetBottom,
    offsetTop,
    hash: willChangeHash = true,
    boundary = 'start',
    targetOffset,
    children,
    direction = 'vertical',
    onSelect,
    onChange,
    ...rest
  } = props

  const prefixCls = getPrefixCls('anchor')
  const classNames = cs(prefixCls, className, {
    [`${prefixCls}-lineless`]: lineless,
    [`${prefixCls}-horizontal`]: direction === 'horizontal',
  })

  const wrapperRef = useRef<HTMLDivElement>(null)
  const sliderLineRef = useRef<HTMLDivElement>(null)
  const linkMap = useRef<Map<string, HTMLElement>>(new Map())
  const isScrolling = useRef(false)
  const scrollContainerRef = useRef<HTMLElement | Window | null>(null)
  const [currentLink, setCurrentLink] = useState('')
  const currentLinkRef = useRef(currentLink)
  currentLinkRef.current = currentLink

  const [, setFlagUpdateSliderLine] = useState(0)

  useEffect(() => {
    scrollContainerRef.current = getContainer(propScrollContainer) as
      | HTMLElement
      | Window
  }, [propScrollContainer])

  const getAffixTarget = useCallback(() => {
    return getContainer(propScrollContainer) as HTMLElement | Window
  }, [propScrollContainer])

  useImperativeHandle(
    ref,
    () => ({
      dom: wrapperRef.current,
      getRootDOMNode: () => wrapperRef.current,
    }),
    []
  )

  function addLink(hash: string, element: HTMLElement) {
    if (hash) {
      linkMap.current.set(hash, element)
      setFlagUpdateSliderLine(Math.random())
    }
  }

  function removeLink(hash: string) {
    linkMap.current.delete(hash)
    setFlagUpdateSliderLine(Math.random())
  }

  const setActiveLink = useCallback(
    (hash: string) => {
      if (!hash || !wrapperRef.current) return
      if (!linkMap.current.has(hash)) {
        const node = findNode(wrapperRef.current, `a[data-href='${hash}']`)
        if (node) addLink(hash, node)
      }

      const node = linkMap.current.get(hash)
      if (node && hash !== currentLinkRef.current) {
        // 简化版 scrollIntoViewIfNeeded
        const container = wrapperRef.current
        const offsetTopVal = node.offsetTop
        const offsetBottom = offsetTopVal + node.clientHeight
        const scrollTop = container.scrollTop
        const scrollBottom = scrollTop + container.clientHeight
        if (offsetTopVal < scrollTop) {
          container.scrollTop = offsetTopVal
        } else if (offsetBottom > scrollBottom) {
          container.scrollTop = offsetBottom - container.clientHeight
        }

        const oldLink = currentLinkRef.current
        setCurrentLink(hash)
        if (isFunction(onChange)) onChange(hash, oldLink)
      }
    },
    [onChange]
  )

  const getEleInViewport = useCallback(() => {
    let result: HTMLElement | undefined
    const startTop = isNumber(boundary) ? boundary : 0
    const container = scrollContainerRef.current
    if (!container) return result
    const containerElement = getContainerElement(container)
    const containerRect = containerElement.getBoundingClientRect()
    const documentHeight = document.documentElement.clientHeight

    for (const hash of linkMap.current.keys()) {
      const element = findNode(document, hash)
      if (!element) continue
      const { top, height } = element.getBoundingClientRect()
      let inView = false

      if (isWindow(container)) {
        const innerTargetOffset = targetOffset ?? documentHeight / 2
        inView =
          (top >= startTop && top <= innerTargetOffset) ||
          (top <= startTop && top + height >= innerTargetOffset)
      } else {
        const oTop = top - containerRect.top - startTop
        const innerTargetOffset = targetOffset ?? containerRect.height / 2
        inView =
          (oTop >= 0 && oTop <= innerTargetOffset) ||
          (oTop <= 0 && oTop + height >= innerTargetOffset)
      }
      if (inView) {
        result = element
        break
      }
    }
    return result
  }, [boundary, targetOffset])

  /* eslint-disable react-hooks/use-memo */
  const onScroll = useCallback(
    throttleByRaf(() => {
      if (isScrolling.current) return
      const element = getEleInViewport()
      if (element && element.id) {
        const hash = `#${element.id}`
        setActiveLink(hash)
      }
    }),
    [getEleInViewport, setActiveLink]
  )
  /* eslint-enable react-hooks/use-memo */

  function scrollIntoView(hash: string) {
    if (!hash) return
    try {
      const element = findNode(document, hash)
      if (!element) return
      const container = scrollContainerRef.current
      if (!container) return

      const offset = isNumber(boundary) ? boundary : 0
      const targetEl = isWindow(container)
        ? document.documentElement
        : (container as HTMLElement)

      const elementRect = element.getBoundingClientRect()
      const containerRect = isWindow(container)
        ? { top: 0 }
        : (container as HTMLElement).getBoundingClientRect()
      const targetScrollTop =
        targetEl.scrollTop + elementRect.top - containerRect.top - offset

      if (!animation) {
        targetEl.scrollTop = targetScrollTop
        return
      }

      isScrolling.current = true
      slide(targetEl, targetScrollTop, () => {
        isScrolling.current = false
      })
    } catch (e) {
      console.error(e)
    }
  }

  function onLinkClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string
  ) {
    if (!willChangeHash) {
      e.preventDefault()
    }
    setActiveLink(hash)
    scrollIntoView(hash)
    if (isFunction(onSelect)) onSelect(hash, currentLinkRef.current)
  }

  useEffect(() => {
    const hash = decodeURIComponent(location.hash)
    if (hash) {
      setActiveLink(hash)
      scrollIntoView(hash)
    } else {
      onScroll()
    }
  }, [])

  useEffect(() => {
    on(scrollContainerRef.current, 'scroll', onScroll as EventListener)
    return () => {
      off(scrollContainerRef.current, 'scroll', onScroll as EventListener)
      ;(onScroll as ReturnType<typeof throttleByRaf>).cancel?.()
    }
  }, [propScrollContainer, onScroll])

  useEffect(() => {
    const link = linkMap.current.get(currentLink)
    if (link && !lineless && sliderLineRef.current) {
      if (direction === 'horizontal') {
        sliderLineRef.current.style.left = `${link.offsetLeft}px`
        sliderLineRef.current.style.width = `${link.clientWidth}px`
      } else {
        sliderLineRef.current.style.top = `${link.offsetTop}px`
      }
    }
  }, [currentLink, lineless, direction])

  const content = (
    <div className={classNames} style={style} ref={wrapperRef} {...rest}>
      {!lineless && currentLink && (
        <div className={`${prefixCls}-line-slider`} ref={sliderLineRef} />
      )}
      <AnchorContext.Provider
        value={{ direction, currentLink, addLink, removeLink, onLinkClick }}
      >
        <div className={`${prefixCls}-list`}>{children}</div>
      </AnchorContext.Provider>
    </div>
  )

  return affix ? (
    <Affix
      offsetTop={offsetTop}
      offsetBottom={offsetBottom}
      style={affixStyle}
      target={getAffixTarget}
    >
      {content}
    </Affix>
  ) : (
    content
  )
}

const ForwardRefAnchor = forwardRef<unknown, AnchorPropsWithChildren>(Anchor)

const AnchorComponent = ForwardRefAnchor as typeof ForwardRefAnchor & {
  Link: typeof Link
}

AnchorComponent.displayName = 'Anchor'
AnchorComponent.Link = Link

export default AnchorComponent
export type { AnchorLinkProps, AnchorProps }
