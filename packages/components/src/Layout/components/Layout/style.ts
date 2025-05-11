// 弹性布局容器核心样式
// 1. 使用container工具实现全屏尺寸 2. 根据Sider存在状态切换主轴方向
import { container } from '@justichentai/style-utils'
import styled from 'styled-components'

interface LayoutStyleProps {
  $row?: boolean
}

const LayoutStyle = styled.div<LayoutStyleProps>`
  ${container({
    size: 'xy',
  })}
  display: flex;
  flex-direction: ${(props) => (props.$row ? 'row' : 'column')};
`

export default LayoutStyle
