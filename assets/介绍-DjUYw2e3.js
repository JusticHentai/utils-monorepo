import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useResetState 示例集合
 */
const UseResetStateDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useResetState - 可重置状态</h2>
      <p>提供重置 state 方法的 Hook</p>
      <BasicDemo />
    </div>
  )
}

export default UseResetStateDemo
`;function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useresetstate",children:"useResetState"}),`
`,e.jsx(n.p,{children:"提供重置 state 方法的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useResetState"})," 提供了重置状态到初始值的方法。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"React useState"}),`
`,e.jsx(n.li,{children:"状态重置"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"表单重置功能"}),`
`,e.jsx(n.li,{children:"需要恢复初始状态的场景"}),`
`,e.jsx(n.li,{children:"游戏/测验的重新开始功能"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"一键重置状态"}),`
`,e.jsx(n.li,{children:"支持函数初始化"}),`
`]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(d,{language:"tsx",children:r}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"initialState"}),e.jsx("td",{children:e.jsx("code",{children:"S | (() => S)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"初始状态"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"state"}),e.jsx("td",{children:e.jsx("code",{children:"S"})}),e.jsx("td",{children:"当前状态"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"setState"}),e.jsx("td",{children:e.jsx("code",{children:"Dispatch<SetStateAction<S>>"})}),e.jsx("td",{children:"设置状态函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"resetState"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"重置状态函数"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"使用 useState 管理状态"}),`
`,e.jsx(n.li,{children:"使用 useRef 保存初始值"}),`
`,e.jsx(n.li,{children:"resetState 函数将状态设置为初始值"}),`
`]}),`
`,e.jsx(n.h3,{id:"注意事项",children:"注意事项"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetState"})," 会将状态重置为初始值"]}),`
`,e.jsx(n.li,{children:"如果使用函数初始化，函数只会在首次渲染时执行一次"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetState"})," 函数是稳定的，不会因为重新渲染而变化"]}),`
`]})]})}function a(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
