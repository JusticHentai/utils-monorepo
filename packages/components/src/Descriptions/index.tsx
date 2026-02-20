import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { DescriptionsItemProps, DescriptionsProps } from './interface'

const Descriptions = forwardRef<HTMLDivElement, DescriptionsProps>(
  (props, ref) => {
    const {
      style,
      className,
      title,
      column = 3,
      data = [],
      layout = 'horizontal',
      size = 'default',
      bordered,
      colon = ':',
      labelStyle,
      valueStyle,
      children,
      ...rest
    } = props

    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('descriptions')

    const classString = cs(
      prefixCls,
      `${prefixCls}-size-${size}`,
      `${prefixCls}-layout-${layout}`,
      {
        [`${prefixCls}-bordered`]: bordered,
      },
      className
    )

    // 将数据分行
    const rows: DescriptionsItemProps[][] = []
    let currentRow: DescriptionsItemProps[] = []
    let currentSpan = 0

    data.forEach((item) => {
      const span = item.span || 1
      if (currentSpan + span > column) {
        rows.push(currentRow)
        currentRow = [item]
        currentSpan = span
      } else {
        currentRow.push(item)
        currentSpan += span
      }
    })
    if (currentRow.length > 0) rows.push(currentRow)

    return (
      <div ref={ref} className={classString} style={style} {...rest}>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        <div className={`${prefixCls}-body`}>
          <table className={`${prefixCls}-table`}>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={`${prefixCls}-row`}>
                  {row.map((item, colIndex) => {
                    if (
                      layout === 'horizontal' ||
                      layout === 'inline-horizontal'
                    ) {
                      return (
                        <td
                          key={colIndex}
                          className={`${prefixCls}-item`}
                          colSpan={(item.span || 1) * 2 - 1}
                        >
                          <span
                            className={`${prefixCls}-item-label`}
                            style={labelStyle}
                          >
                            {item.label}
                            {colon && (
                              <span className={`${prefixCls}-item-colon`}>
                                {colon}
                              </span>
                            )}
                          </span>
                          <span
                            className={`${prefixCls}-item-value`}
                            style={valueStyle}
                          >
                            {item.value || item.children}
                          </span>
                        </td>
                      )
                    }
                    return (
                      <td
                        key={colIndex}
                        className={`${prefixCls}-item`}
                        colSpan={item.span || 1}
                      >
                        <div
                          className={`${prefixCls}-item-label`}
                          style={labelStyle}
                        >
                          {item.label}
                        </div>
                        <div
                          className={`${prefixCls}-item-value`}
                          style={valueStyle}
                        >
                          {item.value || item.children}
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {children}
      </div>
    )
  }
)

Descriptions.displayName = 'Descriptions'
export default Descriptions
export type { DescriptionsItemProps, DescriptionsProps }
