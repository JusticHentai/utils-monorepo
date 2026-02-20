import { CSSProperties, forwardRef, useContext, useState } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { TagProps } from './interface'

const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const {
    style,
    className,
    children,
    color,
    size = 'default',
    closable,
    checkable,
    checked: propChecked,
    defaultChecked = false,
    bordered = true,
    visible: propVisible,
    closeIcon,
    icon,
    onClose,
    onCheck,
    onClick,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('tag')

  const [checked, setChecked] = useMergeValue(defaultChecked, {
    value: propChecked,
  })
  const [visible, setVisible] = useState(
    propVisible !== undefined ? propVisible : true
  )

  const mergedVisible = propVisible !== undefined ? propVisible : visible

  if (!mergedVisible) return null

  const isCustomColor =
    color &&
    ![
      'red',
      'orange',
      'gold',
      'lime',
      'green',
      'cyan',
      'blue',
      'purple',
      'magenta',
    ].includes(color)

  const classString = cs(
    prefixCls,
    `${prefixCls}-size-${size}`,
    {
      [`${prefixCls}-checkable`]: checkable,
      [`${prefixCls}-checked`]: checkable && checked,
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-color-${color}`]: color && !isCustomColor,
      [`${prefixCls}-custom-color`]: isCustomColor,
    },
    className
  )

  const tagStyle: CSSProperties = { ...style }
  if (isCustomColor) {
    tagStyle.backgroundColor = color
    tagStyle.borderColor = color
  }

  const handleClick = (e: React.MouseEvent) => {
    if (checkable) {
      const newChecked = !checked
      setChecked(newChecked)
      onCheck?.(newChecked)
    }
    onClick?.(e)
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (propVisible === undefined) {
      setVisible(false)
    }
    onClose?.(e)
  }

  return (
    <span
      ref={ref}
      className={classString}
      style={tagStyle}
      onClick={handleClick}
      {...rest}
    >
      {icon && <span className={`${prefixCls}-icon`}>{icon}</span>}
      <span className={`${prefixCls}-content`}>{children}</span>
      {closable && (
        <span className={`${prefixCls}-close-icon`} onClick={handleClose}>
          {closeIcon || '×'}
        </span>
      )}
    </span>
  )
})

Tag.displayName = 'Tag'
export default Tag
export type { TagProps }
