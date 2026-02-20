import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useThrottleValue 示例集合
 */
const UseThrottleValueDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useThrottleValue - 节流值</h2>
      <p>用来处理值节流的 Hook</p>
      <BasicDemo />
    </div>
  )
}

export default UseThrottleValueDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usethrottlevalue",children:"useThrottleValue"}),`
`,e.jsx(n.p,{children:"用来处理值节流的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useThrottleValue"})," 用于对高频变化的值进行节流处理，限制值更新的频率。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"节流（throttle）：固定频率执行"}),`
`,e.jsx(n.li,{children:"React 状态管理"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"高频变化的值需要节流处理"}),`
`,e.jsx(n.li,{children:"鼠标位置、滚动位置等频繁更新的状态"}),`
`,e.jsx(n.li,{children:"需要限制渲染频率的场景"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"限制状态更新频率"}),`
`,e.jsx(n.li,{children:"提供持续反馈"}),`
`]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(r,{language:"tsx",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"需要节流的值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.wait"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"1000"})}),e.jsx("td",{children:"等待时间（毫秒）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.leading"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否在延迟开始前执行"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.trailing"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否在延迟结束后执行"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"节流后的值"})]})})]}),`
`,e.jsx(n.h2,{id:"与-usedebouncevalue-对比",children:"与 useDebounceValue 对比"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Hook"}),e.jsx("th",{children:"行为"}),e.jsx("th",{children:"适用场景"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"useThrottleValue"})}),e.jsx("td",{children:"固定频率更新"}),e.jsx("td",{children:"需要持续反馈的场景（如拖拽）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"useDebounceValue"})}),e.jsx("td",{children:"停止变化后更新"}),e.jsx("td",{children:"需要最终值的场景（如搜索）"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"使用 useThrottleFn 创建节流函数"}),`
`,e.jsx(n.li,{children:"在 value 变化时触发节流更新"}),`
`,e.jsx(n.li,{children:"返回节流后的状态值"}),`
`]})]})}function u(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{u as default};
