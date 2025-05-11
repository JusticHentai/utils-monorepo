import { container } from '@justichentai/style-utils'
import styled from 'styled-components'

interface RowStyle {
  $marginVertical: number
  $justify?: string
  $align?: string
}

// 自动填充父容器剩余空间
const RowStyle = styled.div<RowStyle>`
  ${container()}
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};

  margin-top: ${(props) => props.$marginVertical}px;
  margin-bottom: ${(props) => props.$marginVertical}px;
`

export default RowStyle
