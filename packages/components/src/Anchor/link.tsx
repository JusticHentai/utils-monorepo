import React, {
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import cs from '../_util/classNames'
import { isNull, isObject, isString, isUndefined } from '../_util/is'
import useMergeProps from '../hooks/useMergeProps'
import AnchorContext from './context'
import { AnchorLinkProps } from './interface'

const DISPLAY_NAME = 'AnchorLink'

const defaultProps: Partial<AnchorLinkProps> = {
  href: '#',
}

function isNamedComponent(
  type: unknown
): type is React.ForwardRefExoticComponent<unknown> {
  return (
    isObject(type) && Object.prototype.hasOwnProperty.call(type, 'displayName')
  )
}

function Link(
  baseProps: React.PropsWithChildren<AnchorLinkProps>,
  ref: React.Ref<HTMLDivElement>
) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const { className, style, href, title, children, ...rest } = useMergeProps<
    React.PropsWithChildren<AnchorLinkProps>
  >(
    baseProps,
    defaultProps as React.PropsWithChildren<AnchorLinkProps>,
    (componentConfig?.['Anchor.Link'] ??
      {}) as React.PropsWithChildren<AnchorLinkProps>
  )
  const anchorContext = useContext(AnchorContext)
  const { currentLink, addLink, removeLink, onLinkClick, direction } =
    anchorContext
  const prefixCls = getPrefixCls('anchor-link')
  const classNames = cs(
    prefixCls,
    { [`${prefixCls}-active`]: currentLink === href },
    className
  )
  const linkRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => linkRef.current!, [])

  useEffect(() => {
    if (addLink) addLink(href!, linkRef.current!)
    return () => {
      if (removeLink) removeLink(href!)
    }
  }, [href])

  return (
    <div className={classNames} style={style} ref={linkRef} {...rest}>
      {!isUndefined(title) && !isNull(title) && (
        <a
          className={`${prefixCls}-title`}
          title={isString(title) ? title : ''}
          href={href}
          data-href={href}
          onClick={(e) => {
            if (onLinkClick) onLinkClick(e, href!)
          }}
        >
          {title}
        </a>
      )}
      {children &&
        direction !== 'horizontal' &&
        React.Children.map(children, (item) => {
          return (
            isValidElement(item) &&
            isNamedComponent(item.type) &&
            (item.type as unknown as { displayName: string }).displayName ===
              DISPLAY_NAME &&
            item
          )
        })}
    </div>
  )
}

const AnchorLinkComponent = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<AnchorLinkProps>
>(Link)
AnchorLinkComponent.displayName = DISPLAY_NAME

export default AnchorLinkComponent
