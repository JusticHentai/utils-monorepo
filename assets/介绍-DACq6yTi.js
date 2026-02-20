import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import sleep from '../../../packages/js-utils/src/sleep'

const normalDemo = async () => {
  action('开始睡眠 1 秒')()
  await sleep(1000)
  action('睡眠完成')()
}

export default normalDemo
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"sleep",children:"sleep"}),`
`,n.jsx(e.p,{children:"异步睡眠函数，用于暂停代码执行指定时间。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:["sleep 是一个简单但非常实用的异步工具函数，核心作用是：",n.jsx(e.strong,{children:'让代码"暂停"执行一段时间，然后继续'}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Promise：实现异步等待机制"}),`
`,n.jsx(e.li,{children:"setTimeout：定时触发 resolve"}),`
`,n.jsx(e.li,{children:"async/await：配合使用实现同步风格的延迟"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"轮询等待：每隔一段时间检查某个状态"}),`
`,n.jsx(e.li,{children:"动画间隔：控制连续动画帧之间的间隔"}),`
`,n.jsx(e.li,{children:"请求限流：限制 API 调用频率"}),`
`,n.jsx(e.li,{children:"调试延迟：模拟网络延迟或慢速操作"}),`
`,n.jsx(e.li,{children:"重试间隔：失败后等待一段时间再重试"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"代码简洁，一行实现延迟"}),`
`,n.jsx(e.li,{children:"基于 Promise，可配合 async/await 使用"}),`
`,n.jsx(e.li,{children:"不阻塞主线程，性能友好"}),`
`]}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"time"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"睡眠时间，单位：毫秒"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Promise<void>"})]}),`
`,n.jsx(e.li,{children:"描述：睡眠结束后 resolve 的 Promise"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 sleep 函数实现"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"sleep(time)"})," 返回一个 Promise"]}),`
`,n.jsx(e.li,{children:"Promise 内部创建 setTimeout 定时器"}),`
`,n.jsx(e.li,{children:"定时器到期后调用 resolve，Promise 完成"}),`
`,n.jsx(e.li,{children:"await 等待的代码继续执行"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["实现：",n.jsx(e.code,{children:"new Promise((resolve) => setTimeout(resolve, time))"})]}),`
`,n.jsx(e.li,{children:'利用 Promise + setTimeout 组合，将"等待"包装为可 await 的异步操作'}),`
`,n.jsxs(e.li,{children:["resolve 不传参数，返回 ",n.jsx(e.code,{children:"Promise<void>"})]}),`
`]})]})}function m(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{m as default};
