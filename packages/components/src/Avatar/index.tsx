import { Children, CSSProperties, forwardRef, useContext, useEffect, useRef } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs, isString } from '../_util'
import { AvatarGroupProps, AvatarProps } from './interface'

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
    style,
    className,
    children,
    shape = 'circle',
    size = 40,
    autoFixFontSize = true,
    triggerIcon,
    triggerType = 'button',
    onClick,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('avatar')
  const textRef = useRef<HTMLSpanElement>(null)
  const avatarRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (autoFixFontSize && textRef.current && avatarRef.current) {
      const textWidth = textRef.current.offsetWidth
      const avatarWidth = avatarRef.current.offsetWidth
      if (textWidth > avatarWidth * 0.9) {
        const scale = (avatarWidth * 0.9) / textWidth
        textRef.current.style.transform = `scale(${scale})`
      }
    }
  }, [children, autoFixFontSize])

  const classString = cs(prefixCls, `${prefixCls}-${shape}`, className)

  const sizeStyle: CSSProperties = {
    width: size,
    height: size,
    lineHeight: `${size}px`,
    fontSize: size / 2,
    ...style,
  }

  const isImage =
    isString(children) &&
    (children.startsWith('http') || children.startsWith('data:'))

  return (
    <span
      ref={(node) => {
        ;(avatarRef as React.MutableRefObject<HTMLSpanElement | null>).current =
          node
        if (typeof ref === 'function') ref(node)
        else if (ref)
          (ref as React.MutableRefObject<HTMLSpanElement | null>).current = node
      }}
      className={classString}
      style={sizeStyle}
      onClick={onClick}
      {...rest}
    >
      {isImage ? (
        <img
          src={children as string}
          alt="avatar"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span ref={textRef} className={`${prefixCls}-text`}>
          {children}
        </span>
      )}
      {triggerIcon && (
        <div
          className={cs(
            `${prefixCls}-trigger-icon`,
            `${prefixCls}-trigger-icon-${triggerType}`
          )}
        >
          {triggerIcon}
        </div>
      )}
    </span>
  )
})

Avatar.displayName = 'Avatar'

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const {
      style,
      className,
      children,
      size = 40,
      shape = 'circle',
      maxCount,
      maxStyle,
      zIndexAscend,
      ...rest
    } = props

    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('avatar-group')

    const childArray = Children.toArray(children)
    const visibleChildren = maxCount
      ? childArray.slice(0, maxCount)
      : childArray
    const restCount = maxCount ? childArray.length - maxCount : 0

    return (
      <div
        ref={ref}
        className={cs(prefixCls, className)}
        style={style}
        {...rest}
      >
        {visibleChildren.map((child, index) => (
          <span
            key={index}
            style={{ zIndex: zIndexAscend ? index : childArray.length - index }}
          >
            {child}
          </span>
        ))}
        {restCount > 0 && (
          <Avatar size={size} shape={shape} style={maxStyle}>
            +{restCount}
          </Avatar>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'

type AvatarComponentType = typeof Avatar & {
  Group: typeof AvatarGroup
}

const AvatarComponent = Avatar as AvatarComponentType
AvatarComponent.Group = AvatarGroup

export default AvatarComponent
export { AvatarGroup }
export type { AvatarGroupProps, AvatarProps }
