import React, {
  CSSProperties,
  forwardRef,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { off, on } from '../_util/dom'
import {
  isFunction,
  isObject,
  isServerRendering,
  isUndefined,
} from '../_util/is'
import throttleByRaf from '../_util/throttleByRaf'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { AffixProps } from './interface'

const useIsomorphicLayoutEffect = isServerRendering()
  ? useEffect
  : useLayoutEffect

function isWindow(el: unknown): el is Window {
  return el === window
}

function getTargetRect(target: HTMLElement | Window) {
  return isWindow(target)
    ? { top: 0, bottom: window.innerHeight }
    : target.getBoundingClientRect()
}

const defaultProps: Partial<AffixProps> = {
  offsetTop: 0,
  target: () => window,
}

function Affix(
  baseProps: PropsWithChildren<AffixProps>,
  ref: React.Ref<unknown>
) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<PropsWithChildren<AffixProps>>(
    baseProps,
    defaultProps as PropsWithChildren<AffixProps>,
    (componentConfig?.Affix ?? {}) as PropsWithChildren<AffixProps>
  )
  const {
    className,
    style,
    affixClassName,
    affixStyle,
    offsetTop,
    offsetBottom,
    target,
    targetContainer,
    children,
    onChange,
    ...rest
  } = props

  const [state, setState] = useState<{
    status: 'MEASURE_DONE' | 'MEASURE_START'
    isFixed: boolean
    sizeStyles: CSSProperties
    fixedStyles: CSSProperties
  }>({
    status: 'MEASURE_DONE',
    isFixed: false,
    sizeStyles: {},
    fixedStyles: {},
  })
  const { isFixed, sizeStyles, fixedStyles } = state
  const lastIsFixed = useRef(isFixed)

  const prefixCls = getPrefixCls('affix')
  const classNameStr = cs({ [prefixCls]: isFixed }, affixClassName)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLElement | Window | null>(null)

  /* eslint-disable react-hooks/use-memo */
  const updatePosition = useCallback(
    throttleByRaf(() => {
      setState({
        status: 'MEASURE_START',
        isFixed: false,
        fixedStyles: {},
        sizeStyles: {},
      })
    }),
    []
  )
  /* eslint-enable react-hooks/use-memo */

  useIsomorphicLayoutEffect(() => {
    const { status } = state
    if (status !== 'MEASURE_START' || !wrapperRef.current || !targetRef.current)
      return

    const offsetType = isUndefined(offsetBottom) ? 'top' : 'bottom'
    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const targetRect = getTargetRect(targetRef.current)

    let newIsFixed = false
    let newFixedStyles: CSSProperties = {}
    if (offsetType === 'top') {
      newIsFixed = wrapperRect.top - targetRect.top < (offsetTop || 0)
      newFixedStyles = newIsFixed
        ? { position: 'fixed', top: targetRect.top + (offsetTop || 0) }
        : {}
    } else {
      newIsFixed = targetRect.bottom - wrapperRect.bottom < (offsetBottom || 0)
      newFixedStyles = newIsFixed
        ? {
            position: 'fixed',
            bottom:
              window.innerHeight - targetRect.bottom + (offsetBottom || 0),
          }
        : {}
    }
    const newSizeStyles: CSSProperties = newIsFixed
      ? {
          width: wrapperRef.current.offsetWidth,
          height: wrapperRef.current.offsetHeight,
        }
      : {}

    setState({
      status: 'MEASURE_DONE',
      isFixed: newIsFixed,
      sizeStyles: newSizeStyles,
      fixedStyles: { ...newFixedStyles, ...newSizeStyles },
    })

    if (newIsFixed !== lastIsFixed.current) {
      lastIsFixed.current = newIsFixed
      if (isFunction(onChange)) onChange(newIsFixed)
    }
  }, [state, offsetBottom, offsetTop, onChange])

  useEffect(() => {
    updatePosition()
    return () => {
      ;(updatePosition as ReturnType<typeof throttleByRaf>).cancel?.()
    }
  }, [target, targetContainer, offsetBottom, offsetTop, updatePosition])

  useEffect(() => {
    targetRef.current = target && isFunction(target) ? target() : null
    if (targetRef.current) {
      on(targetRef.current as HTMLElement | Window, 'scroll', updatePosition)
      on(targetRef.current as HTMLElement | Window, 'resize', updatePosition)
      return () => {
        off(targetRef.current as HTMLElement | Window, 'scroll', updatePosition)
        off(targetRef.current as HTMLElement | Window, 'resize', updatePosition)
      }
    }
  }, [target, updatePosition])

  useEffect(() => {
    const container =
      targetContainer && isFunction(targetContainer) ? targetContainer() : null
    if (targetRef.current !== window && container) {
      on(container as HTMLElement | Window, 'scroll', updatePosition)
      return () => {
        off(container as HTMLElement | Window, 'scroll', updatePosition)
      }
    }
  }, [targetContainer, updatePosition])

  useImperativeHandle(ref, () => ({
    updatePosition,
    getRootDOMNode: () => wrapperRef.current,
  }))

  return (
    <div className={cs(className)} style={style} ref={wrapperRef} {...rest}>
      {isFixed && <div style={sizeStyles} />}
      <div
        className={classNameStr}
        style={{ ...fixedStyles, ...(isObject(affixStyle) ? affixStyle : {}) }}
      >
        {children || <span />}
      </div>
    </div>
  )
}

const AffixComponent = forwardRef(Affix)
AffixComponent.displayName = 'Affix'

export default AffixComponent
export type { AffixProps }
