import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  ReactElement,
  useCallback,
  useContext,
} from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import {
  MenuItemGroupProps,
  MenuItemProps,
  MenuProps,
  SubMenuProps,
} from './interface'

interface MenuContextType {
  mode?: string
  selectedKeys: string[]
  openKeys: string[]
  onSelect: (key: string, e: React.MouseEvent) => void
  onOpenChange: (key: string) => void
  levelIndent: number
  level: number
}

const MenuContext = createContext<MenuContextType>({
  selectedKeys: [],
  openKeys: [],
  onSelect: () => {},
  onOpenChange: () => {},
  levelIndent: 20,
  level: 0,
})

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps & { _key?: string }>(
  (props, ref) => {
    const { style, className, children, disabled, _key, ...rest } = props
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('menu-item')
    const { selectedKeys, onSelect, levelIndent, level } =
      useContext(MenuContext)
    const key = _key || ''
    const isSelected = selectedKeys.includes(key)

    const classString = cs(
      prefixCls,
      {
        [`${prefixCls}-selected`]: isSelected,
        [`${prefixCls}-disabled`]: disabled,
      },
      className
    )

    return (
      <li
        ref={ref}
        className={classString}
        style={{ paddingLeft: level * levelIndent, ...style }}
        onClick={(e) => !disabled && onSelect(key, e)}
        role="menuitem"
        {...rest}
      >
        {children}
      </li>
    )
  }
)
MenuItem.displayName = 'MenuItem'

const SubMenu = forwardRef<HTMLLIElement, SubMenuProps & { _key?: string }>(
  (props, ref) => {
    const { style, className, children, title, disabled, _key, ...rest } = props
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('menu-submenu')
    const { openKeys, onOpenChange, levelIndent, level, ...menuCtx } =
      useContext(MenuContext)
    const key = _key || ''
    const isOpen = openKeys.includes(key)

    const classString = cs(
      prefixCls,
      { [`${prefixCls}-open`]: isOpen, [`${prefixCls}-disabled`]: disabled },
      className
    )

    return (
      <li ref={ref} className={classString} style={style} {...rest}>
        <div
          className={`${prefixCls}-title`}
          style={{ paddingLeft: level * levelIndent }}
          onClick={() => !disabled && onOpenChange(key)}
        >
          {title}
          <span className={`${prefixCls}-arrow`}>{isOpen ? '▼' : '▶'}</span>
        </div>
        {isOpen && (
          <MenuContext.Provider
            value={{
              ...menuCtx,
              openKeys,
              onOpenChange,
              levelIndent,
              level: level + 1,
              selectedKeys: menuCtx.selectedKeys,
              onSelect: menuCtx.onSelect,
            }}
          >
            <ul className={`${prefixCls}-content`} role="menu">
              {Children.map(children, (child) => {
                if (!child) return null
                const c = child as ReactElement<{ _key?: string }>
                return cloneElement(c, { _key: c.key as string } as Partial<{
                  _key: string
                }>)
              })}
            </ul>
          </MenuContext.Provider>
        )}
      </li>
    )
  }
)
SubMenu.displayName = 'SubMenu'

const MenuItemGroup = forwardRef<HTMLLIElement, MenuItemGroupProps>(
  (props, ref) => {
    const { style, className, children, title, ...rest } = props
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('menu-item-group')

    return (
      <li
        ref={ref}
        className={cs(prefixCls, className)}
        style={style}
        {...rest}
      >
        <div className={`${prefixCls}-title`}>{title}</div>
        <ul className={`${prefixCls}-list`} role="group">
          {Children.map(children, (child) => {
            if (!child) return null
            const c = child as ReactElement<{ _key?: string }>
            return cloneElement(c, { _key: c.key as string } as Partial<{
              _key: string
            }>)
          })}
        </ul>
      </li>
    )
  }
)
MenuItemGroup.displayName = 'MenuItemGroup'

const Menu = forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
  const {
    style,
    className,
    children,
    mode = 'vertical',
    theme = 'light',
    selectedKeys: propSelectedKeys,
    defaultSelectedKeys = [],
    openKeys: propOpenKeys,
    defaultOpenKeys = [],
    collapse,
    levelIndent = 20,
    accordion,
    onClickMenuItem,
    onClickSubMenu,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('menu')

  const [selectedKeys, setSelectedKeys] = useMergeValue<string[]>(
    defaultSelectedKeys,
    { value: propSelectedKeys }
  )
  const [openKeys, setOpenKeys] = useMergeValue<string[]>(defaultOpenKeys, {
    value: propOpenKeys,
  })

  const onSelect = useCallback(
    (key: string, e: React.MouseEvent) => {
      const newKeys = [key]
      setSelectedKeys(newKeys)
      onClickMenuItem?.(key, e, [key])
    },
    [setSelectedKeys, onClickMenuItem]
  )

  const onOpenChange = useCallback(
    (key: string) => {
      let newOpenKeys: string[]
      if (openKeys.includes(key)) {
        newOpenKeys = openKeys.filter((k) => k !== key)
      } else {
        newOpenKeys = accordion ? [key] : [...openKeys, key]
      }
      setOpenKeys(newOpenKeys)
      onClickSubMenu?.(key, newOpenKeys, [key])
    },
    [openKeys, setOpenKeys, accordion, onClickSubMenu]
  )

  const classString = cs(
    prefixCls,
    `${prefixCls}-${mode}`,
    `${prefixCls}-${theme}`,
    { [`${prefixCls}-collapse`]: collapse },
    className
  )

  return (
    <MenuContext.Provider
      value={{
        mode,
        selectedKeys,
        openKeys,
        onSelect,
        onOpenChange,
        levelIndent,
        level: 1,
      }}
    >
      <ul ref={ref} className={classString} style={style} role="menu" {...rest}>
        {Children.map(children, (child) => {
          if (!child) return null
          const c = child as ReactElement<{ _key?: string }>
          return cloneElement(c, { _key: c.key as string } as Partial<{
            _key: string
          }>)
        })}
      </ul>
    </MenuContext.Provider>
  )
})

Menu.displayName = 'Menu'

type MenuComponentType = typeof Menu & {
  Item: typeof MenuItem
  SubMenu: typeof SubMenu
  ItemGroup: typeof MenuItemGroup
}

const MenuComponent = Menu as MenuComponentType
MenuComponent.Item = MenuItem
MenuComponent.SubMenu = SubMenu
MenuComponent.ItemGroup = MenuItemGroup

export default MenuComponent
export { MenuItem, MenuItemGroup, SubMenu }
export type { MenuItemGroupProps, MenuItemProps, MenuProps, SubMenuProps }
