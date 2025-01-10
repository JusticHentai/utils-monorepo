import { css } from 'styled-components'

const hideScroll = css`
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0000;
    border-radius: 0;
  }

  &::-webkit-scrollbar-track {
    background: #0000;
  }
`

export default hideScroll
