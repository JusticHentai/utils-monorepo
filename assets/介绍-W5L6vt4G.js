import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import sessionId from '../../../packages/element-utils/src/sessionId'

const getSessionIdDemo = () => {
  const id1 = sessionId()
  const id2 = sessionId()
  const id3 = sessionId()

  action('获取的会话ID（同一会话内相同）')({ id1, id2, id3 })
}

export default getSessionIdDemo
`;function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"sessionid",children:"sessionId"}),`
`,n.jsx(s.p,{children:"生成并获取会话 ID 的工具函数，同一会话内保持不变。"}),`
`,n.jsx(s.h2,{id:"获取会话id",children:"获取会话ID"}),`
`,n.jsx(s.p,{children:"首次调用时生成唯一 ID 并存储到 sessionStorage，后续调用返回相同的 ID。适用于需要在同一会话内追踪用户的场景。"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"-"}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"无参数"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"会话 ID，同一会话内多次调用返回相同值"})]})})]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["使用 sessionStorage 存储会话 ID，key 为 ",n.jsx(s.code,{children:"__session_id__"})]}),`
`,n.jsx(s.li,{children:"首次调用时检查 sessionStorage 中是否存在 ID"}),`
`,n.jsxs(s.li,{children:["如果不存在，调用 ",n.jsx(s.code,{children:"uniqueId()"})," 生成新 ID 并存储"]}),`
`,n.jsx(s.li,{children:"如果已存在，直接返回已存储的 ID"}),`
`,n.jsx(s.li,{children:"会话结束（标签页关闭）后，sessionStorage 清空，下次会话将生成新的 ID"}),`
`]})]})}function a(e={}){const{wrapper:s}={...d(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{a as default};
