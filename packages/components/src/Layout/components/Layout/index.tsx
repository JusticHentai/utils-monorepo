// 布局容器组件
// 1. 自动检测子级是否存在Sider组件
// 2. 根据检测结果动态切换主轴方向
import useMergeProps from '@/hooks/useMergeProps'
import { forwardRef } from 'react'

import { LayoutProps } from './interface'
import LayoutStyle from './style'

const Layout = forwardRef<HTMLDivElement, LayoutProps>((baseProps, ref) => {
  const { row, children, ...rest } = useMergeProps<LayoutProps>(
    baseProps,
    {},
    {}
  )

  return (
    <LayoutStyle ref={ref} {...(rest as any)} $row={row}>
      {children}
    </LayoutStyle>
  )
})

Layout.displayName = 'Layout'

export default Layout
