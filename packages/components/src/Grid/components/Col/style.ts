import styled from 'styled-components'

interface ColStyle {
  $paddingHorizontal: number
  $paddingVertical: number
  $span?: string
  $offset?: string
  $push?: string
  $pull?: string
  $flex: string
}

const ColStyle = styled.div<ColStyle>`
  position: relative;
  box-sizing: border-box;

  padding-left: ${(props) => props.$paddingHorizontal}px;
  padding-right: ${(props) => props.$paddingHorizontal}px;
  padding-top: ${(props) => props.$paddingVertical}px;
  padding-bottom: ${(props) => props.$paddingVertical}px;

  ${(props) => props.$span};
  ${(props) => props.$offset};
  ${(props) => props.$push};
  ${(props) => props.$pull};
  ${(props) => props.$flex};
`

export default ColStyle
