import React, { forwardRef, useContext } from 'react'
import cs from '../_util/classNames'
import { ConfigContext } from '../ConfigProvider/context'
import { ListItemMetaProps } from './interface'

function Meta(props: ListItemMetaProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls } = useContext(ConfigContext)
  const { className, avatar, title, description, ...others } = props
  const prefixCls = getPrefixCls('list')
  const baseClassName = `${prefixCls}-item-meta`

  return (
    <div ref={ref} {...others} className={cs(baseClassName, className)}>
      {avatar && <div className={`${baseClassName}-avatar`}>{avatar}</div>}
      {(title || description) && (
        <div className={`${baseClassName}-content`}>
          {title && <div className={`${baseClassName}-title`}>{title}</div>}
          {description && (
            <div className={`${baseClassName}-description`}>{description}</div>
          )}
        </div>
      )}
    </div>
  )
}

const MetaComponent = forwardRef<HTMLDivElement, ListItemMetaProps>(Meta)
MetaComponent.displayName = 'ListItemMeta'

export default MetaComponent
