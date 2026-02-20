import React, { forwardRef, useContext } from 'react'
import cs from '../_util/classNames'
import { ConfigContext } from '../ConfigProvider/context'
import { IconProps } from './interface'

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { getPrefixCls } = useContext(ConfigContext)
  const {
    className,
    style,
    spin,
    rotate,
    color,
    fontSize,
    onClick,
    children,
    ...rest
  } = props

  const prefixCls = getPrefixCls('icon')

  const svgStyle: React.CSSProperties = {
    ...(color ? { color } : {}),
    ...(fontSize
      ? { fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize }
      : {}),
    ...(rotate ? { transform: `rotate(${rotate}deg)` } : {}),
    ...style,
  }

  return (
    <svg
      ref={ref}
      className={cs(prefixCls, { [`${prefixCls}-spin`]: spin }, className)}
      style={svgStyle}
      fill="currentColor"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      onClick={onClick}
      {...rest}
    >
      {children}
    </svg>
  )
})

Icon.displayName = 'Icon'

/**
 * 通过 iconfont.cn 加载图标
 */
function addFromIconFontCn(options: {
  src: string
  extraProps?: Record<string, unknown>
}) {
  const { src, extraProps = {} } = options

  if (typeof document === 'undefined') return () => null

  // 检查是否已经加载过
  const existingScript = document.querySelector(
    `script[data-namespace="${src}"]`
  )
  if (!existingScript) {
    const script = document.createElement('script')
    script.setAttribute('src', src)
    script.setAttribute('data-namespace', src)
    document.body.appendChild(script)
  }

  const IconFont = forwardRef<SVGSVGElement, IconProps & { type: string }>(
    (props, ref) => {
      const { type, children, ...rest } = props
      return (
        <Icon ref={ref} {...rest} {...extraProps}>
          {type ? <use xlinkHref={`#${type}`} /> : children}
        </Icon>
      )
    }
  )

  IconFont.displayName = 'IconFont'
  return IconFont
}

const IconComponent = Icon as typeof Icon & {
  addFromIconFontCn: typeof addFromIconFontCn
}

IconComponent.addFromIconFontCn = addFromIconFontCn

export default IconComponent
export type { IconProps }
