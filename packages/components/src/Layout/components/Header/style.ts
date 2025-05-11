import styled from 'styled-components'

// flex参数说明：
// - 第一个0表示flex-grow不扩展
// - 第二个0表示flex-shrink不收缩
// - auto表示基准宽度由内容或显式设置决定
const HeaderStyle = styled.div`
  flex: 0 0 auto;
`

export default HeaderStyle
