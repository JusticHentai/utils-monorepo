// 底部布局组件
// 用于页面底部内容展示，保持固定高度布局
import useMergeProps from '@/hooks/useMergeProps'
import { forwardRef } from 'react'

import { FooterProps } from './interface'
import FooterStyle from './style'

// 脚部容器组件
// 特性：
// - 支持通过ref获取DOM实例
// - 继承所有div元素属性
const Footer = forwardRef<HTMLDivElement, FooterProps>((baseProps, ref) => {
  const { children, ...rest } = useMergeProps<FooterProps>(baseProps, {}, {})

  return (
    <FooterStyle ref={ref} {...rest}>
      {children}
    </FooterStyle>
  )
})

Footer.displayName = 'Footer'

export default Footer
