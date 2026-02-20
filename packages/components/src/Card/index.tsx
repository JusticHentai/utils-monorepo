import { forwardRef, useContext } from 'react'
import { cs } from '../_util'
import { ConfigContext } from '../ConfigProvider/context'
import Spin from '../Spin'
import { CardGridProps, CardMetaProps, CardProps } from './interface'

const CardMeta = forwardRef<HTMLDivElement, CardMetaProps>((props, ref) => {
  const { style, className, avatar, title, description, ...rest } = props
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('card-meta')

  return (
    <div ref={ref} className={cs(prefixCls, className)} style={style} {...rest}>
      {avatar && <div className={`${prefixCls}-avatar`}>{avatar}</div>}
      <div className={`${prefixCls}-detail`}>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        {description && (
          <div className={`${prefixCls}-description`}>{description}</div>
        )}
      </div>
    </div>
  )
})
CardMeta.displayName = 'CardMeta'

const CardGrid = forwardRef<HTMLDivElement, CardGridProps>((props, ref) => {
  const { style, className, children, hoverable = true, ...rest } = props
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('card-grid')

  return (
    <div
      ref={ref}
      className={cs(
        prefixCls,
        { [`${prefixCls}-hoverable`]: hoverable },
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  )
})
CardGrid.displayName = 'CardGrid'

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    style,
    className,
    children,
    title,
    extra,
    cover,
    bordered = true,
    hoverable,
    loading,
    size = 'default',
    headerStyle,
    bodyStyle,
    actions,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('card')

  const classString = cs(
    prefixCls,
    `${prefixCls}-size-${size}`,
    {
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-hoverable`]: hoverable,
      [`${prefixCls}-loading`]: loading,
    },
    className
  )

  const renderHeader = () => {
    if (!title && !extra) return null
    return (
      <div className={`${prefixCls}-header`} style={headerStyle}>
        {title && <div className={`${prefixCls}-header-title`}>{title}</div>}
        {extra && <div className={`${prefixCls}-header-extra`}>{extra}</div>}
      </div>
    )
  }

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      {renderHeader()}
      {cover && <div className={`${prefixCls}-cover`}>{cover}</div>}
      <div className={`${prefixCls}-body`} style={bodyStyle}>
        {loading ? <Spin /> : children}
      </div>
      {actions && actions.length > 0 && (
        <div className={`${prefixCls}-actions`}>
          {actions.map((action, i) => (
            <span key={i} className={`${prefixCls}-actions-item`}>
              {action}
            </span>
          ))}
        </div>
      )}
    </div>
  )
})

Card.displayName = 'Card'

type CardComponentType = typeof Card & {
  Meta: typeof CardMeta
  Grid: typeof CardGrid
}

const CardComponent = Card as CardComponentType
CardComponent.Meta = CardMeta
CardComponent.Grid = CardGrid

export default CardComponent
export { CardGrid, CardMeta }
export type { CardGridProps, CardMetaProps, CardProps }
