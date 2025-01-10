import { css } from 'styled-components'

export interface ImageProps {
  fit: 'cover' | 'contain'
}

const image = css<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.fit};
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: none;
`

export default image
