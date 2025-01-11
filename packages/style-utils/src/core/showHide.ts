import { css } from 'styled-components'

export interface ShowHideProps {
  show: boolean
}

const showHide = css<ShowHideProps>`
  transition: 0.3s opacity ease-in-out;
  opacity: ${(props) => (props.show ? 1 : 0)};
`

export default showHide
