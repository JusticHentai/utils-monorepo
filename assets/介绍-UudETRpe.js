import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-C_s77IFb.js";import{C as r}from"./blocks-yt1LEit5.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMbbdbFD.js";const i=`import { action } from 'storybook/actions'
import truncateText from '../../../packages/element-utils/src/truncateText'

const basicDemo = () => {
  const text = 'early error message with a very long stack preview'

  action('硬截断结果')({
    original: text,
    maxLength: 18,
    truncated: truncateText(text, 18),
  })
}

export default basicDemo
`,c=`import { action } from 'storybook/actions'
import truncateText from '../../../packages/element-utils/src/truncateText'

const optionalDemo = () => {
  const missingText: string | undefined = undefined

  action('可选文本截断结果')({
    undefinedInput: truncateText(missingText, 10),
    zeroLength: truncateText('error', 0),
    negativeLength: truncateText('error', -1),
  })
}

export default optionalDemo
`,x=`/**
 * 按最大长度硬截断文本
 *
 * 不追加省略号，适合日志、上报 payload、URL 等需要严格控制字段长度的场景。
 *
 * @param text - 原始文本，undefined 会原样返回
 * @param maxLength - 最大保留长度，小于等于 0 或 NaN 时返回空字符串
 * @returns 截断后的文本
 */
function truncateText(text: string, maxLength: number): string
function truncateText(text: undefined, maxLength: number): undefined
function truncateText(
  text: string | undefined,
  maxLength: number
): string | undefined
function truncateText(
  text: string | undefined,
  maxLength: number
): string | undefined {
  if (text === undefined) return undefined
  if (maxLength <= 0 || Number.isNaN(maxLength)) return ''
  if (text.length <= maxLength) return text

  return text.slice(0, maxLength)
}

export default truncateText
`;function d(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"truncatetext",children:"truncateText"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"truncateText"})," 按最大长度硬截断字符串，不追加省略号。它用于日志、URL、错误消息、payload 字段这类需要严格控制字段长度的场景。"]}),`
`,n.jsx(e.h2,{id:"和-js-utilstruncate-的边界",children:"和 js-utils/truncate 的边界"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"工具"}),n.jsx("th",{children:"行为"}),n.jsx("th",{children:"适合场景"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"@justichentai/js-utils/truncate"})}),n.jsxs("td",{children:["超长时追加 ",n.jsx("code",{children:"..."}),"，省略号包含在总长度里。"]}),n.jsx("td",{children:"UI 展示，让用户知道文本被省略。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"truncateText"})}),n.jsxs("td",{children:["只执行 ",n.jsx("code",{children:"slice(0, maxLength)"})," 语义，不增加额外字符。"]}),n.jsx("td",{children:"上报、缓存、URL、堆栈等必须严格受长度限制的数据字段。"})]})]})]}),`
`,n.jsx(e.h2,{id:"实现逻辑",children:"实现逻辑"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"分支"}),n.jsx("th",{children:"返回"}),n.jsx("th",{children:"原因"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"text === undefined"})}),n.jsx("td",{children:n.jsx("code",{children:"undefined"})}),n.jsx("td",{children:"保留可选字段语义，不把缺失值变成空字符串。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:"maxLength <= 0"})," 或 ",n.jsx("code",{children:"Number.isNaN(maxLength)"})]})}),n.jsx("td",{children:"空字符串"}),n.jsx("td",{children:"调用方明确给出不可保留长度时，结果长度仍满足限制。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"text.length <= maxLength"})}),n.jsx("td",{children:"原字符串"}),n.jsx("td",{children:"未超限时不创建新的截断内容。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"超长文本"}),n.jsx("td",{children:n.jsx("code",{children:"text.slice(0, maxLength)"})}),n.jsx("td",{children:"硬截断到指定最大长度。"})]})]})]}),`
`,n.jsx(e.h2,{id:"用例",children:"用例"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"源码",children:"源码"}),`
`,n.jsx(r,{language:"typescript",children:x}),`
`,n.jsx(e.h2,{id:"storybook-文件说明",children:"Storybook 文件说明"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"文件"}),n.jsx("th",{children:"职责"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"index.stories.ts"})}),n.jsx("td",{children:"注册 Storybook story。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"index.tsx"})}),n.jsx("td",{children:"渲染两个触发按钮。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"basicDemo.ts"})}),n.jsx("td",{children:"演示普通长文本的硬截断结果。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"optionalDemo.ts"})}),n.jsxs("td",{children:["演示 ",n.jsx("code",{children:"undefined"}),"、0 长度和负长度分支。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"介绍.mdx"})}),n.jsx("td",{children:"解释工具边界、分支行为、demo 和源码。"})]})]})]})]})}function m(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(d,{...t})}):d(t)}export{m as default};
