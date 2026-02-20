import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import {
  SkeletonImageProps,
  SkeletonProps,
  SkeletonTextProps,
} from './interface'

const SkeletonImage = ({
  shape = 'square',
  size = 'default',
  className,
  style,
  prefixCls,
}: SkeletonImageProps & { prefixCls: string }) => (
  <div
    className={cs(
      `${prefixCls}-image`,
      `${prefixCls}-image-${shape}`,
      `${prefixCls}-image-${size}`,
      className
    )}
    style={style}
  />
)

const SkeletonText = ({
  rows = 3,
  width,
  className,
  style,
  prefixCls,
}: SkeletonTextProps & { prefixCls: string }) => {
  const getWidth = (index: number) => {
    if (Array.isArray(width)) return width[index]
    if (index === rows - 1) return width || '60%'
    return undefined
  }

  return (
    <div className={cs(`${prefixCls}-text`, className)} style={style}>
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className={`${prefixCls}-text-row`}
          style={{ width: getWidth(i) }}
        />
      ))}
    </div>
  )
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const {
    style,
    className,
    animation = true,
    loading = true,
    image,
    text = true,
    children,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('skeleton')

  if (!loading) return <>{children}</>

  const imageProps = typeof image === 'boolean' ? {} : image
  const textProps = typeof text === 'boolean' ? {} : text

  return (
    <div
      ref={ref}
      className={cs(
        prefixCls,
        { [`${prefixCls}-animate`]: animation },
        className
      )}
      style={style}
      {...rest}
    >
      {image && <SkeletonImage {...imageProps} prefixCls={prefixCls} />}
      <div className={`${prefixCls}-content`}>
        {text && <SkeletonText {...textProps} prefixCls={prefixCls} />}
      </div>
    </div>
  )
})

Skeleton.displayName = 'Skeleton'
export default Skeleton
export type { SkeletonImageProps, SkeletonProps, SkeletonTextProps }
