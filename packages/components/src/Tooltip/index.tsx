import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import Trigger from '../Trigger'
import { cs } from '../_util'
import { TooltipProps } from './interface'

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, _ref) => {
  const {
    style,
    className,
    children,
    content,
    position = 'top',
    trigger = 'hover',
    disabled,
    popupVisible,
    defaultPopupVisible,
    onVisibleChange,
    color,
    mini,
    getPopupContainer,
    unmountOnExit = true,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('tooltip')

  if (!children) return null

  const popupStyle: React.CSSProperties = { ...style }
  if (color) {
    popupStyle.backgroundColor = color
  }

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
      className={cs(prefixCls, { [`${prefixCls}-mini`]: mini }, className)}
      style={popupStyle}
      popup={() => (
        <div className={`${prefixCls}-content`} {...rest}>
          <div className={`${prefixCls}-content-inner`}>{content}</div>
        </div>
      )}
    >
      {children}
    </Trigger>
  )
})

Tooltip.displayName = 'Tooltip'
export default Tooltip
export type { TooltipProps }
