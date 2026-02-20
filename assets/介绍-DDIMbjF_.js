import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useRafState 示例集合
 */
const UseRafStateDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useRafState - RAF 状态</h2>
      <p>在 requestAnimationFrame 中更新 state，适合高频更新场景</p>
      <BasicDemo />
    </div>
  )
}

export default UseRafStateDemo
`;function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"userafstate",children:"useRafState"}),`
`,n.jsx(e.p,{children:"在 requestAnimationFrame 中更新 state，适合高频更新场景。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useRafState"})," 使用 requestAnimationFrame 来调度状态更新，适合高频更新场景。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"requestAnimationFrame API"}),`
`,n.jsx(e.li,{children:"React 状态更新调度"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"鼠标移动追踪"}),`
`,n.jsx(e.li,{children:"滚动位置更新"}),`
`,n.jsx(e.li,{children:"拖拽操作"}),`
`,n.jsx(e.li,{children:"其他高频更新的 UI 状态"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"自动合并高频更新"}),`
`,n.jsx(e.li,{children:"与屏幕刷新同步"}),`
`]}),`
`,n.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,n.jsx(i,{language:"tsx",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"initialState"}),n.jsx("td",{children:n.jsx("code",{children:"S | (() => S)"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"初始状态"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"state"}),n.jsx("td",{children:n.jsx("code",{children:"S"})}),n.jsx("td",{children:"当前状态"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"setRafState"}),n.jsx("td",{children:n.jsx("code",{children:"Dispatch<SetStateAction<S>>"})}),n.jsx("td",{children:"设置状态函数"})]})]})]}),`
`,n.jsx(e.h2,{id:"与-usestate-对比",children:"与 useState 对比"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特性"}),n.jsx("th",{children:"useRafState"}),n.jsx("th",{children:"useState"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"更新时机"}),n.jsx("td",{children:"下一帧开始"}),n.jsx("td",{children:"立即调度"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"高频更新"}),n.jsx("td",{children:"✅ 自动合并"}),n.jsx("td",{children:"❌ 每次触发渲染"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"性能"}),n.jsx("td",{children:"✅ 更优"}),n.jsx("td",{children:"一般"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"适用场景"}),n.jsx("td",{children:"高频更新"}),n.jsx("td",{children:"一般场景"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"调用 setRafState 时取消上一个待执行的更新"}),`
`,n.jsx(e.li,{children:"在下一帧开始时执行状态更新"}),`
`,n.jsx(e.li,{children:"组件卸载时自动取消待执行的更新"}),`
`]})]})}function o(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{o as default};
