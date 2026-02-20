import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { EmptyProps } from './interface'

const Empty = forwardRef<HTMLDivElement, EmptyProps>((props, ref) => {
  const {
    style,
    className,
    description = '暂无数据',
    icon,
    imgSrc,
    children,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('empty')

  const classString = cs(prefixCls, className)

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      <div className={`${prefixCls}-image`}>
        {icon ||
          (imgSrc ? (
            <img src={imgSrc} alt="empty" />
          ) : (
            <svg width="64" height="41" viewBox="0 0 64 41" fill="none">
              <ellipse cx="32" cy="33" rx="32" ry="7" fill="#f5f5f5" />
              <path
                d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
                fill="#fafafa"
              />
              <path
                d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35H11.95C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                fill="#fafafa"
                stroke="#d9d9d9"
              />
            </svg>
          ))}
      </div>
      <div className={`${prefixCls}-description`}>{description}</div>
      {children && <div className={`${prefixCls}-footer`}>{children}</div>}
    </div>
  )
})

Empty.displayName = 'Empty'
export default Empty
export type { EmptyProps }
