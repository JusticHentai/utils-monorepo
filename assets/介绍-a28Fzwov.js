import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-C_s77IFb.js";import{C as s}from"./blocks-yt1LEit5.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMbbdbFD.js";const d=`import { action } from 'storybook/actions'
import supportFetch from '../../../packages/element-utils/src/supportFetch'

const basicDemo = () => {
  action('fetch 支持检测')({
    supported: supportFetch(),
    usage: '网络上报前判断当前环境是否可以调用 fetch',
  })
}

export default basicDemo
`,h=`/**
 * 检查当前环境是否支持全局 Fetch API
 *
 * @returns 是否支持 fetch
 */
const supportFetch = (): boolean => {
  return typeof fetch === 'function'
}

export default supportFetch
`;function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"supportfetch",children:"supportFetch"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"supportFetch"})," 判断当前运行环境是否可以调用全局 ",e.jsx(n.code,{children:"fetch"}),"。它把网络上报里的能力判断抽成公共工具，避免各模块重复写 ",e.jsx(n.code,{children:"typeof fetch"}),"。"]}),`
`,e.jsx(n.h2,{id:"具体逻辑",children:"具体逻辑"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"步骤"}),e.jsx("th",{children:"代码动作"}),e.jsx("th",{children:"返回"}),e.jsx("th",{children:"调用方影响"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:e.jsxs(n.p,{children:["执行 ",e.jsx("code",{children:"typeof fetch === 'function'"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["存在函数时返回 ",e.jsx("code",{children:"true"}),"，否则返回 ",e.jsx("code",{children:"false"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"earlyErrorQueue"})," 的 fetch 发送分支据此决定是否直接失败兜底。"]})})]})})]}),`
`,e.jsx(n.h2,{id:"用例",children:"用例"}),`
`,e.jsx(s,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"源码",children:"源码"}),`
`,e.jsx(s,{language:"typescript",children:h}),`
`,e.jsx(n.h2,{id:"storybook-文件说明",children:"Storybook 文件说明"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"文件"}),e.jsx("th",{children:"职责"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.stories.ts"})}),e.jsx("td",{children:"注册 Storybook story。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.tsx"})}),e.jsx("td",{children:"渲染触发检测按钮。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"basicDemo.ts"})}),e.jsxs("td",{children:["调用 ",e.jsx("code",{children:"supportFetch()"})," 并输出检测结果。"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"介绍.mdx"})}),e.jsx("td",{children:"解释检测逻辑和下游上报分支如何消费结果。"})]})]})]})]})}function u(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{u as default};
