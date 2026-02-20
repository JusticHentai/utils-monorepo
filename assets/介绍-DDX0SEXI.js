import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useThrottleEffect 示例集合
 */
const UseThrottleEffectDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useThrottleEffect - 节流 Effect</h2>
      <p>为 useEffect 增加节流能力</p>
      <BasicDemo />
    </div>
  )
}

export default UseThrottleEffectDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usethrottleeffect",children:"useThrottleEffect"}),`
`,e.jsxs(n.p,{children:["为 ",e.jsx(n.code,{children:"useEffect"})," 增加节流能力的 Hook。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useThrottleEffect"})," 对 useEffect 进行节流处理，限制 effect 的执行频率。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"useEffect 的依赖监听"}),`
`,e.jsx(n.li,{children:"节流（throttle）机制"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"监听输入变化并执行副作用，但需要限制执行频率"}),`
`,e.jsx(n.li,{children:"高频更新时避免过于频繁的副作用执行"}),`
`,e.jsx(n.li,{children:"需要节流触发的 effect 逻辑"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"固定频率执行 effect"}),`
`,e.jsx(n.li,{children:"提供持续反馈"}),`
`]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(r,{language:"tsx",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"effect"}),e.jsx("td",{children:e.jsx("code",{children:"EffectCallback"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"执行函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"deps"}),e.jsx("td",{children:e.jsx("code",{children:"DependencyList"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"依赖数组"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.wait"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"1000"})}),e.jsx("td",{children:"等待时间（毫秒）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.leading"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否在延迟开始前执行"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.trailing"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否在延迟结束后执行"})]})]})]}),`
`,e.jsx(n.h2,{id:"与-usedebounceeffect-对比",children:"与 useDebounceEffect 对比"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Hook"}),e.jsx("th",{children:"行为"}),e.jsx("th",{children:"适用场景"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"useThrottleEffect"})}),e.jsx("td",{children:"固定频率执行"}),e.jsx("td",{children:"需要持续反馈的场景"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"useDebounceEffect"})}),e.jsx("td",{children:"停止触发后执行"}),e.jsx("td",{children:"最终值确定后执行的场景"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"使用 useThrottleFn 创建节流函数"}),`
`,e.jsx(n.li,{children:"在 deps 变化时调用节流函数"}),`
`,e.jsx(n.li,{children:"节流函数内部执行实际 effect"}),`
`]})]})}function f(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{f as default};
