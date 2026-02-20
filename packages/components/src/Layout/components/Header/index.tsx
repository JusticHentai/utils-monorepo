import useMergeProps from '@/hooks/useMergeProps'
import { forwardRef } from 'react'

import { HeaderProps } from './interface'
import HeaderStyle from './style'

// 头部容器组件
// 特性：
// - 支持通过ref获取DOM实例
// - 继承所有div元素属性
const Header = forwardRef<HTMLDivElement, HeaderProps>((baseProps, ref) => {
  const { children, ...rest } = useMergeProps<HeaderProps>(baseProps, {}, {})

  return (
    <HeaderStyle ref={ref} {...(rest as any)}>
      {children}
    </HeaderStyle>
  )
})

Header.displayName = 'Header'

export default Header
