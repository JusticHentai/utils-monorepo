/**
 * 可复用的 CSS 片段工厂
 * 用于在 styled-components 的 css`` 中引用
 */
import { css } from 'styled-components'
import { transition } from './tokens'

/**
 * 语义色变量引用工具函数
 * 将 Arco 的 CSS 变量名映射为 var() 引用
 */
export const cssVar = (name: string) => `var(--${name})`

/** rgb(var(--xxx)) */
export const rgbVar = (name: string) => `rgb(var(--${name}))`

/** rgba(var(--xxx), alpha) */
export const rgbaVar = (name: string, alpha: number) =>
  `rgba(var(--${name}), ${alpha})`

/** 通用过渡 */
export const transitionAll = css`
  transition: all ${transition.duration1} ${transition.linear};
`

/** 禁用状态基础样式 */
export const disabledStyle = css`
  cursor: not-allowed;
`

/** 文本省略 */
export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
