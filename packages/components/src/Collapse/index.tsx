import React, { forwardRef, useCallback, useContext } from 'react'
import cs from '../_util/classNames'
import useMergeValue from '../_util/hooks/useMergeValue'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { CollapseContext } from './context'
import { CollapseItemProps, CollapseProps } from './interface'
import CollapseItem from './item'

const defaultProps: Partial<CollapseProps> = {
  bordered: true,
  lazyload: true,
  expandIconPosition: 'left',
}

function getActiveKeys(
  keys: string | string[] | undefined,
  accordion: boolean | undefined
): string[] {
  const res = [].concat(keys as never)
  if (accordion) return res.slice(0, 1)
  return res
}

function Collapse(baseProps: CollapseProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<CollapseProps>(
    baseProps,
    defaultProps as CollapseProps,
    (componentConfig?.Collapse ?? {}) as CollapseProps
  )
  const {
    className,
    style,
    accordion,
    expandIcon,
    expandIconPosition,
    bordered,
    lazyload,
    destroyOnHide,
    triggerRegion,
    children,
  } = props

  const prefixCls = getPrefixCls('collapse')

  const [activeKeys, setActiveKeys] = useMergeValue<string[]>([], {
    defaultValue: getActiveKeys(props.defaultActiveKey, accordion),
    value:
      props.activeKey !== undefined
        ? getActiveKeys(props.activeKey, accordion)
        : undefined,
  })

  /* eslint-disable react-hooks/preserve-manual-memoization */
  const onToggle = useCallback(
    (key: string, e: React.MouseEvent) => {
      let newKeys: string[]
      const index = activeKeys.indexOf(key)
      if (accordion) {
        newKeys = index > -1 ? [] : [key]
      } else {
        newKeys = [...activeKeys]
        if (index > -1) {
          newKeys.splice(index, 1)
        } else {
          newKeys.push(key)
        }
      }
      setActiveKeys(newKeys)
      props.onChange?.(key, newKeys, e)
    },
    [activeKeys, accordion, props.onChange]
  )
  /* eslint-enable react-hooks/preserve-manual-memoization */

  return (
    <CollapseContext.Provider
      value={{
        activeKeys,
        onToggle,
        expandIcon,
        expandIconPosition,
        triggerRegion,
        lazyload,
        destroyOnHide,
      }}
    >
      <div
        ref={ref}
        className={cs(
          prefixCls,
          {
            [`${prefixCls}-borderless`]: !bordered,
          },
          className
        )}
        style={style}
      >
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement(child) &&
            (child.type as typeof CollapseItem).isCollapseItem
          ) {
            return child
          }
          return null
        })}
      </div>
    </CollapseContext.Provider>
  )
}

const ForwardRefCollapse = forwardRef(Collapse)

const CollapseComponent = ForwardRefCollapse as typeof ForwardRefCollapse & {
  Item: typeof CollapseItem
}

CollapseComponent.displayName = 'Collapse'
CollapseComponent.Item = CollapseItem

export default CollapseComponent
export type { CollapseItemProps, CollapseProps }
