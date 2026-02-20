import React, { forwardRef, useContext, useRef } from 'react'
import cs from '../_util/classNames'
import { pickDataAttributes } from '../_util/pick'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import Spin from '../Spin'
import { ListProps } from './interface'
import Item from './item'

const SizeList = ['small', 'default', 'large']

const defaultProps: Partial<ListProps> = {
  split: true,
  bordered: true,
}

function List<T = any>(
  baseProps: ListProps<T>,
  _ref: React.Ref<HTMLDivElement>
) {
  const {
    getPrefixCls,
    size: ctxSize,
    componentConfig,
  } = useContext(ConfigContext)
  const props = useMergeProps<ListProps<T>>(
    baseProps,
    defaultProps as ListProps<T>,
    (componentConfig?.List ?? {}) as ListProps<T>
  )
  const {
    style,
    wrapperStyle,
    className,
    wrapperClassName,
    children,
    dataSource = [],
    size: propSize,
    footer,
    header,
    bordered,
    split,
    render,
    loading,
    hoverable,
    scrollLoading,
    noDataElement,
  } = props

  const size =
    propSize || (SizeList.indexOf(ctxSize!) > -1 ? ctxSize : 'default')
  const prefixCls = getPrefixCls('list')
  const refDom = useRef<HTMLDivElement>(null)

  const renderListItems = () => {
    if (dataSource.length > 0 && render) {
      return dataSource.map(render)
    }
    if (React.Children.count(children) > 0) {
      return children
    }
    if (!scrollLoading) {
      return (
        noDataElement || <div className={`${prefixCls}-empty`}>No Data</div>
      )
    }
    return null
  }

  const listItems = renderListItems()
  const scrollLoadingEle = scrollLoading ? (
    <div className={`${prefixCls}-item ${prefixCls}-scroll-loading`}>
      {scrollLoading}
    </div>
  ) : null

  const renderList = () => (
    <div
      ref={refDom}
      style={wrapperStyle}
      className={cs(`${prefixCls}-wrapper`, wrapperClassName)}
    >
      <div
        {...pickDataAttributes(props)}
        style={style}
        className={cs(
          prefixCls,
          `${prefixCls}-${size}`,
          {
            [`${prefixCls}-no-border`]: !bordered,
            [`${prefixCls}-no-split`]: !split,
            [`${prefixCls}-hoverable`]: hoverable,
          },
          className
        )}
      >
        {header && <div className={`${prefixCls}-header`}>{header}</div>}
        <div role="list" className={`${prefixCls}-content`}>
          {listItems}
          {scrollLoadingEle}
        </div>
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
    </div>
  )

  return 'loading' in props ? (
    <Spin style={{ display: 'block' }} loading={loading}>
      {renderList()}
    </Spin>
  ) : (
    renderList()
  )
}

const ListComponent = forwardRef(List) as React.ForwardRefExoticComponent<
  ListProps & React.RefAttributes<HTMLDivElement>
> & {
  Item: typeof Item
}

ListComponent.displayName = 'List'
ListComponent.Item = Item

export default ListComponent
export type { ListItemMetaProps, ListItemProps, ListProps } from './interface'
