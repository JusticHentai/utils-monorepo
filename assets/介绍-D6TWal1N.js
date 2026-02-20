import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useSafeState 示例集合
 */
const UseSafeStateDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useSafeState - 安全状态</h2>
      <p>安全的 useState，组件卸载后不再更新 state，避免内存泄漏警告</p>
      <BasicDemo />
    </div>
  )
}

export default UseSafeStateDemo
`;function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"usesafestate",children:"useSafeState"}),`
`,n.jsx(e.p,{children:"安全的 useState，组件卸载后不再更新 state，避免内存泄漏警告。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useSafeState"})," 在组件卸载后会忽略状态更新，避免内存泄漏警告。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"React 状态更新机制"}),`
`,n.jsx(e.li,{children:"组件生命周期"}),`
`,n.jsx(e.li,{children:"内存泄漏防护"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"异步操作后更新状态（如 API 请求）"}),`
`,n.jsx(e.li,{children:"组件可能在异步操作完成前被卸载"}),`
`,n.jsx(e.li,{children:`需要避免 "Can't perform a React state update on an unmounted component" 警告`}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"自动处理组件卸载情况"}),`
`,n.jsx(e.li,{children:"API 与 useState 完全一致"}),`
`]}),`
`,n.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,n.jsx(d,{language:"tsx",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"initialState"}),n.jsx("td",{children:n.jsx("code",{children:"S | (() => S)"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"初始状态"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"state"}),n.jsx("td",{children:n.jsx("code",{children:"S"})}),n.jsx("td",{children:"当前状态"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"setSafeState"}),n.jsx("td",{children:n.jsx("code",{children:"Dispatch<SetStateAction<S>>"})}),n.jsx("td",{children:"安全的设置状态函数"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用 useUnmountedRef 追踪组件挂载状态"}),`
`,n.jsx(e.li,{children:"调用 setSafeState 时检查组件是否已卸载"}),`
`,n.jsx(e.li,{children:"如果已卸载则忽略本次状态更新"}),`
`]}),`
`,n.jsx(e.h3,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["虽然 React 18 移除了这个警告，但在某些场景下使用 ",n.jsx(e.code,{children:"useSafeState"})," 仍然是好的实践"]}),`
`,n.jsxs(e.li,{children:["如果你的代码需要在组件卸载后执行清理逻辑，应该使用 ",n.jsx(e.code,{children:"useEffect"})," 的清理函数"]}),`
`]})]})}function a(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{a as default};
