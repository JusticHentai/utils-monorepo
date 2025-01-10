import { css } from 'styled-components'

export interface MaskProps {
  rotate: string
  width: string
}

const mask = css<MaskProps>`
  mask-image: linear-gradient(
    ${(props) => props.rotate},
    transparent,
    #000 ${(props) => props.width},
    #000 (100% - ${(props) => props.width}),
    transparent
  );

  -webkit-mask-image: linear-gradient(
    ${(props) => props.rotate},
    transparent,
    #000 ${(props) => props.width},
    #000 (100% - ${(props) => props.width}),
    transparent
  );
`

export default mask
