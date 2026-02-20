import React, {
  PropsWithChildren,
  forwardRef,
  memo,
  useContext,
  useEffect,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { off, on } from '../_util/dom'
import { pickDataAttributes } from '../_util/pick'
import throttleByRaf from '../_util/throttleByRaf'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { BackTopProps } from './interface'

const defaultProps: Partial<BackTopProps> = {
  visibleHeight: 400,
  duration: 400,
  target: () => window,
}

function BackTop(
  baseProps: PropsWithChildren<BackTopProps>,
  ref: React.Ref<HTMLDivElement>
) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<PropsWithChildren<BackTopProps>>(
    baseProps,
    defaultProps as PropsWithChildren<BackTopProps>,
    (componentConfig?.BackTop ?? {}) as PropsWithChildren<BackTopProps>
  )

  const prefixCls = getPrefixCls('backtop')
  const [visible, setVisible] = useState(false)

  const getTarget = (target: HTMLElement | Window): HTMLElement => {
    return target === window
      ? document.documentElement
      : (target as HTMLElement)
  }

  useEffect(() => {
    const target = props.target?.()
    if (!target) return

    const scrollHandler = throttleByRaf(() => {
      const scrollTop = getTarget(target).scrollTop
      setVisible(scrollTop >= (props.visibleHeight ?? 400))
    })

    on(target, 'scroll', scrollHandler)
    scrollHandler()

    return () => {
      scrollHandler.cancel?.()
      off(target, 'scroll', scrollHandler)
    }
  }, [props.target, props.visibleHeight])

  const scrollToTop = () => {
    const targetDom = props.target?.()
    if (!targetDom) return
    const t = getTarget(targetDom)
    const scrollTop = t.scrollTop
    const duration = props.duration ?? 400
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // quartOut easing
      const eased = 1 - Math.pow(1 - progress, 4)
      t.scrollTop = scrollTop * (1 - eased)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
    props.onClick?.()
  }

  return (
    <div
      {...pickDataAttributes(props)}
      ref={ref}
      className={cs(prefixCls, props.className)}
      style={props.style}
      onClick={scrollToTop}
    >
      {visible &&
        (props.children || (
          <button className={`${prefixCls}-button`}>
            <svg
              viewBox="0 0 1024 1024"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M512 320l384 384H128z" />
            </svg>
          </button>
        ))}
    </div>
  )
}

const BackTopRef = forwardRef<HTMLDivElement, PropsWithChildren<BackTopProps>>(BackTop)
BackTopRef.displayName = 'BackTop'

export default memo(BackTopRef)
export type { BackTopProps }
