import useMergeProps from '@/hooks/useMergeProps'
import { forwardRef } from 'react'

// 侧边栏布局容器组件
// 功能：提供可折叠、可定宽的侧边区域容器
// 特性：
// - 支持通过ref获取DOM实例
// - 继承所有div元素属性
// - 通过SiderProps扩展专属配置
import { SiderProps } from './interface'
import SiderStyle from './style'

const Sider = forwardRef<HTMLDivElement, SiderProps>((baseProps, ref) => {
  const { children, ...rest } = useMergeProps<SiderProps>(baseProps, {}, {})

  return (
    <SiderStyle ref={ref} {...(rest as any)}>
      {children}
    </SiderStyle>
  )
})

Sider.displayName = 'Sider'

export default Sider
