import React, {
  forwardRef,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import omit from '../_util/omit'
import Breadcrumb from '../Breadcrumb'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { PageHeaderProps } from './interface'

function PageHeader(
  baseProps: PropsWithChildren<PageHeaderProps>,
  ref: React.Ref<HTMLDivElement>
) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<PropsWithChildren<PageHeaderProps>>(
    baseProps,
    {} as PropsWithChildren<PageHeaderProps>,
    (componentConfig?.PageHeader ?? {}) as PropsWithChildren<PageHeaderProps>
  )
  const {
    title,
    subTitle,
    extra,
    children,
    backIcon,
    footer,
    breadcrumb,
    ...rest
  } = props

  const [pageWrap, setPageWrap] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  const prefixCls = getPrefixCls('page-header')

  // Monitor resize
  useEffect(() => {
    if (!pageRef.current) return
    const el = pageRef.current
    const observer = new ResizeObserver(() => {
      setPageWrap(el.offsetWidth < 768)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      {...omit(rest, ['onBack'] as (keyof typeof rest)[])}
      ref={(node) => {
        ;(pageRef as React.MutableRefObject<HTMLDivElement | null>).current =
          node
        if (typeof ref === 'function') ref(node)
        else if (ref)
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      }}
      className={cs(
        prefixCls,
        {
          [`${prefixCls}-with-breadcrumb`]: breadcrumb,
          [`${prefixCls}-with-content`]: children,
          [`${prefixCls}-with-footer`]: footer,
          [`${prefixCls}-wrap`]: pageWrap,
        },
        props.className
      )}
      style={props.style}
    >
      <div className={`${prefixCls}-head-wrapper`}>
        {breadcrumb && <Breadcrumb {...breadcrumb} />}

        <div className={`${prefixCls}-head`}>
          <div
            className={cs(`${prefixCls}-head-main`, {
              [`${prefixCls}-head-main-with-back`]: backIcon,
            })}
          >
            {backIcon && (
              <span
                className={`${prefixCls}-back`}
                role="button"
                tabIndex={0}
                onClick={props.onBack as unknown as React.MouseEventHandler}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    props.onBack?.(e as unknown as React.MouseEvent)
                  }
                }}
              >
                <span className={`${prefixCls}-back-icon`}>
                  {backIcon === true ? (
                    <svg
                      viewBox="0 0 1024 1024"
                      width="14"
                      height="14"
                      fill="currentColor"
                    >
                      <path d="M697.8 170.7L354.5 514l343.3 343.3c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L286.9 536.9c-6.4-6.4-9.4-14.8-9.2-23.1-0.2-8.3 2.8-16.7 9.2-23.1l365.6-365.6c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.6z" />
                    </svg>
                  ) : (
                    backIcon
                  )}
                </span>
              </span>
            )}
            {title && <div className={`${prefixCls}-title`}>{title}</div>}
            {subTitle && (
              <>
                <div className={`${prefixCls}-divider`} />
                <div className={`${prefixCls}-sub-title`}>{subTitle}</div>
              </>
            )}
          </div>
          {extra && <div className={`${prefixCls}-head-extra`}>{extra}</div>}
        </div>
      </div>
      {children && <div className={`${prefixCls}-content`}>{children}</div>}
      {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
    </div>
  )
}

const PageHeaderComponent = forwardRef(PageHeader)
PageHeaderComponent.displayName = 'PageHeader'

export default PageHeaderComponent
export type { PageHeaderProps }
