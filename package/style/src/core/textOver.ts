import { css } from 'styled-components'

export interface TextOverProps {
  row: number
}

const one = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const multiple = css<TextOverProps>`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: ${(props) => props.row};
  line-clamp: ${(props) => props.row};
  -webkit-box-orient: vertical;
`

const textOver = css<TextOverProps>`
  ${(props) => props.row === 1 && one}
  ${(props) => props.row > 1 && multiple}
`

export default textOver
