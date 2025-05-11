/**
 * 内容区域组件
 * - 作为布局系统的主体内容容器，自动填充布局剩余空间
 * - 支持响应式布局，自动适应父容器尺寸变化
 * - 集成基础属性配置，与布局系统其他组件保持样式一致性
 */
import useMergeProps from '@/hooks/useMergeProps'
import { forwardRef } from 'react'

import { ContentProps } from './interface'
import ContentStyle from './style'

const Content = forwardRef<HTMLDivElement, ContentProps>((baseProps, ref) => {
  const { children, ...rest } = useMergeProps<ContentProps>(baseProps, {}, {})

  return (
    <ContentStyle ref={ref} {...rest}>
      {children}
    </ContentStyle>
  )
})

Content.displayName = 'Content'

export default Content
