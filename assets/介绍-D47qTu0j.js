import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-C_s77IFb.js";import{C as r}from"./blocks-yt1LEit5.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMbbdbFD.js";const c=`import { action } from 'storybook/actions'
import supportTextEncoder from '../../../packages/element-utils/src/supportTextEncoder'

const basicDemo = () => {
  const supported = supportTextEncoder()

  action('supportTextEncoder 检测结果')({
    supported,
    globalType: typeof TextEncoder,
    behavior: supported
      ? 'estimateBytes 会使用 TextEncoder 计算 UTF-8 字节数'
      : 'estimateBytes 会降级为 string.length',
  })
}

export default basicDemo
`,i=`/**
 * 检查当前运行环境是否支持 TextEncoder
 *
 * @returns 是否支持 TextEncoder
 */
const supportTextEncoder = (): boolean => {
  return typeof TextEncoder !== 'undefined'
}

export default supportTextEncoder
`;function s(d){const n={code:"code",h1:"h1",h2:"h2",p:"p",...t(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"supporttextencoder",children:"supportTextEncoder"}),`
`,e.jsxs(n.p,{children:["判断当前运行环境是否可以直接使用 ",e.jsx(n.code,{children:"TextEncoder"}),"。"]}),`
`,e.jsx(n.h2,{id:"具体逻辑",children:"具体逻辑"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"步骤"}),e.jsx("th",{children:"代码动作"}),e.jsx("th",{children:"读取对象"}),e.jsx("th",{children:"返回结果"}),e.jsx("th",{children:"调用方影响"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:e.jsxs(n.p,{children:["执行 ",e.jsx("code",{children:"typeof TextEncoder !== 'undefined'"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["全局作用域里的 ",e.jsx("code",{children:"TextEncoder"})," 绑定"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["存在时返回 ",e.jsx("code",{children:"true"}),"，不存在时返回 ",e.jsx("code",{children:"false"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"estimateBytes"}),` 据此决定是否调用
`,e.jsx("code",{children:"new TextEncoder().encode(text)"}),"。"]})})]})})]}),`
`,e.jsx(n.h2,{id:"分支行为",children:"分支行为"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"环境"}),e.jsx("th",{children:"supportTextEncoder 返回值"}),e.jsx("th",{children:"estimateBytes 后续行为"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"现代浏览器或支持全局 TextEncoder 的运行时"}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["按 UTF-8 编码后的 ",e.jsx("code",{children:"Uint8Array.length"})," 计算字节数。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"缺少 TextEncoder 的旧环境"}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["降级为 ",e.jsx("code",{children:"text.length"}),"，ASCII 准确，中文和 emoji 会低估。"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"用例",children:"用例"}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"无"}),e.jsx("td",{children:e.jsx("code",{children:"-"})}),e.jsx("td",{children:"只读取全局能力，不接收参数。"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["当前环境是否支持全局 ",e.jsx("code",{children:"TextEncoder"}),"。"]})})]})})]}),`
`,e.jsx(n.h2,{id:"源码",children:"源码"}),`
`,e.jsx(r,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"storybook-文件说明",children:"Storybook 文件说明"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"文件"}),e.jsx("th",{children:"职责"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.stories.ts"})}),e.jsx("td",{children:"注册 Storybook story。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.tsx"})}),e.jsx("td",{children:"渲染触发检测的按钮。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"basicDemo.ts"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["调用 ",e.jsx("code",{children:"supportTextEncoder()"}),"，并输出检测结果和下游行为。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"介绍.mdx"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["解释检测分支、返回值和它在 ",e.jsx("code",{children:"estimateBytes"})," 中的消费方式。"]})})]})]})]})]})}function a(d={}){const{wrapper:n}={...t(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(s,{...d})}):s(d)}export{a as default};
