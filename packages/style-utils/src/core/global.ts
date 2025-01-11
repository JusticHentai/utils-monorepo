import { createGlobalStyle, css } from 'styled-components'

const img = css`
  img {
    max-width: 100%;
    height: auto;
    border: none;
    user-select: none;
    -webkit-user-drag: none;
  }
`

const input = css`
  input {
    border: 0 solid #fff0;
    border-radius: 0;
    outline: none;
    appearance: none;
    resize: none;
  }

  /* 去除iPhone中默认的input样式 */
  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  input:focus,
  button:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }
`

const selection = css`
  ::selection {
    color: #fff;
    background: #333;
  }
`

const html = css`
  html {
    margin: 0;
    font-family: 'Microsoft YaHei', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: none;
  }
`

export interface GlobalProps {
  root: string
}

const global = createGlobalStyle<GlobalProps>`
  * {
    padding: 0;
  }
   
  ${html}
  ${img}
  ${input}
  ${selection}

  #${(props) => props.root} {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
  }
`

export default global
