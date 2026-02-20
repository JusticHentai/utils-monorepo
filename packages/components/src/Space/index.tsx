import { Children, Fragment, forwardRef, useContext, useMemo } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { SpaceProps, SpaceSize } from './interface'

const sizeMap: Record<string, number> = {
  mini: 4,
  small: 8,
  medium: 16,
  large: 24,
}

function getGap(size: SpaceSize): number {
  if (typeof size === 'number') return size
  return sizeMap[size] || 8
}

const Space = forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    children,
    style,
    className,
    align,
    direction = 'horizontal',
    size = 'small',
    wrap = false,
    split,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('space')

  const [horizontalGap, verticalGap] = useMemo(() => {
    if (Array.isArray(size)) {
      return [getGap(size[0]), getGap(size[1])]
    }
    const gap = getGap(size)
    return [gap, gap]
  }, [size])

  const classString = cs(
    prefixCls,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-wrap`]: wrap,
    },
    className
  )

  const childArray = Children.toArray(children).filter(
    (child) => child !== null && child !== undefined
  )

  const innerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    alignItems: align,
    gap:
      horizontalGap === verticalGap
        ? horizontalGap
        : `${verticalGap}px ${horizontalGap}px`,
    ...style,
  }

  return (
    <div ref={ref} className={classString} style={innerStyle} {...rest}>
      {childArray.map((child, index) => (
        <Fragment key={index}>
          <div className={`${prefixCls}-item`}>{child}</div>
          {split && index < childArray.length - 1 && (
            <div className={`${prefixCls}-item-split`}>{split}</div>
          )}
        </Fragment>
      ))}
    </div>
  )
})

Space.displayName = 'Space'
export default Space
export type { SpaceProps, SpaceSize }
