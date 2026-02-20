import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import Trigger from '../Trigger'
import { cs } from '../_util'
import { PopoverProps } from './interface'

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, _ref) => {
  const {
    style,
    className,
    children,
    title,
    content,
    position = 'top',
    trigger = 'hover',
    disabled,
    popupVisible,
    defaultPopupVisible,
    onVisibleChange,
    color: _color,
    getPopupContainer,
    unmountOnExit = true,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('popover')

  if (!children) return null

  return (
    <Trigger
      trigger={trigger}
      position={position}
      disabled={disabled}
      popupVisible={popupVisible}
      defaultPopupVisible={defaultPopupVisible}
      onVisibleChange={onVisibleChange}
      showArrow
      getPopupContainer={getPopupContainer}
      unmountOnExit={unmountOnExit}
      className={cs(prefixCls, className)}
      style={style}
      popup={() => (
        <div className={`${prefixCls}-inner`} {...rest}>
          {title && <div className={`${prefixCls}-title`}>{title}</div>}
          <div className={`${prefixCls}-content`}>{content}</div>
        </div>
      )}
    >
      {children}
    </Trigger>
  )
})

Popover.displayName = 'Popover'
export default Popover
export type { PopoverProps }
