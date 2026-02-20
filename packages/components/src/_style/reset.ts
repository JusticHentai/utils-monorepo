/**
 * 全局浏览器重置样式
 * 来源: normalize.less (normalize.css v8.0.1)
 * 用法: 在应用根部渲染 <ArcoReset /> 即可注入
 */
import { createGlobalStyle } from 'styled-components'
import { fontFamily } from './tokens'

export const ArcoReset = createGlobalStyle`
  html, body {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fontFamily};
  }

  body {
    margin: 0;
    padding: 0;
  }

  main { display: block; }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  tr, th {
    margin: 0;
    padding: 0;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a { background-color: transparent; }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b, strong { font-weight: bolder; }

  code, kbd, samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small { font-size: 80%; }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub { bottom: -0.25em; }
  sup { top: -0.5em; }

  img { border-style: none; }

  button, input, optgroup, select, textarea {
    font-family: inherit;
    line-height: 1.15;
    margin: 0;
  }

  button, input { overflow: visible; }
  button, select { text-transform: none; }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset { padding: 0.35em 0.75em 0.625em; }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress { vertical-align: baseline; }
  textarea { overflow: auto; }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details { display: block; }
  summary { display: list-item; }
  template { display: none; }
  [hidden] { display: none; }

  * { outline: none; }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
`
