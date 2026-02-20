import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import Trigger from '../Trigger'
import { cs } from '../_util'
import { DropdownButtonProps, DropdownProps } from './interface'

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, _ref) => {
  const {
    style,
    className,
    children,
    droplist,
    position = 'bl',
    trigger = 'hover',
    disabled,
    popupVisible,
    defaultPopupVisible,
    onVisibleChange,
    getPopupContainer,
    unmountOnExit = true,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('dropdown')

  if (!children) return null

  return (
    <Trigger
      trigger={trigger}
      position={position}
      disabled={disabled}
      popupVisible={popupVisible}
      defaultPopupVisible={defaultPopupVisible}
      onVisibleChange={onVisibleChange}
      getPopupContainer={getPopupContainer}
      unmountOnExit={unmountOnExit}
      className={cs(prefixCls, className)}
      style={style}
      popup={() => (
        <div className={`${prefixCls}-menu`} {...rest}>
          {droplist}
        </div>
      )}
    >
      {children}
    </Trigger>
  )
})

Dropdown.displayName = 'Dropdown'

const DropdownButton = forwardRef<HTMLDivElement, DropdownButtonProps>(
  (props, ref) => {
    const {
      children,
      droplist,
      size = 'default',
      type: _type = 'default',
      onClick,
      icon,
      disabled,
      ...rest
    } = props

    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('dropdown-button')

    return (
      <div ref={ref} className={cs(prefixCls, `${prefixCls}-size-${size}`)}>
        <button
          className={`${prefixCls}-left`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
        <Dropdown droplist={droplist} disabled={disabled} {...rest}>
          <button className={`${prefixCls}-right`} disabled={disabled}>
            {icon || '▼'}
          </button>
        </Dropdown>
      </div>
    )
  }
)

DropdownButton.displayName = 'DropdownButton'

type DropdownComponentType = typeof Dropdown & {
  Button: typeof DropdownButton
}

const DropdownComponent = Dropdown as DropdownComponentType
DropdownComponent.Button = DropdownButton

export default DropdownComponent
export { DropdownButton }
export type { DropdownButtonProps, DropdownProps }
