import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import '../../.css/index.css'
import useGetState from '../../../packages/element-utils/src/useGetState'
import { action } from 'storybook/actions'

const UseGetStateDemo = () => {
  const [count, setCount, getCount] = useGetState(0)

  const handleClick = () => {
    setCount((c) => c + 1)
    // 立即获取最新值（避免闭包问题）
    setTimeout(() => {
      action('1秒后获取的值')(getCount())
    }, 1000)
  }

  const handleShowCurrent = () => {
    action('当前值')(getCount())
  }

  return (
    <div>
      <div className="button" onClick={handleClick}>
        增加并延迟获取 (count: {count})
      </div>
      <div className="button" onClick={handleShowCurrent}>
        立即获取当前值
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>当前计数: {count}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          提示：点击"增加并延迟获取"后，getCount() 在 1 秒后仍能获取最新值
        </p>
      </div>
    </div>
  )
}

export default UseGetStateDemo
`;function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"usegetstate",children:"useGetState"}),`
`,e.jsx(t.p,{children:"给 useState 增加了一个获取当前值的方法。"}),`
`,e.jsx(t.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"useGetState"})," 在 useState 的基础上，增加了一个 ",e.jsx(t.code,{children:"getState"})," 方法，可以在任何时候获取到最新的状态值，避免闭包陷阱。"]}),`
`,e.jsx(t.p,{children:"常用场景："}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"setTimeout/setInterval 中获取最新状态"}),`
`,e.jsx(t.li,{children:"异步回调中获取最新状态"}),`
`,e.jsx(t.li,{children:"事件处理函数中获取最新状态"}),`
`]}),`
`,e.jsx(t.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(i,{language:"tsx",children:c}),`
`,e.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"initialState"}),e.jsx("td",{children:e.jsx("code",{children:"S | (() => S)"})}),e.jsx("td",{children:"初始状态"})]})})]}),`
`,e.jsx(t.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"索引"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"0"}),e.jsx("td",{children:e.jsx("code",{children:"S"})}),e.jsx("td",{children:"当前状态"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:e.jsx("code",{children:"Dispatch<SetStateAction<S>>"})}),e.jsx("td",{children:"设置状态函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:e.jsx("code",{children:"() => S"})}),e.jsx("td",{children:"获取当前状态函数"})]})]})]}),`
`,e.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(t.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"index.ts"}),"：实现 ",e.jsx(t.code,{children:"useGetState"})," Hook，在 ",e.jsx(t.code,{children:"useState"})," 基础上通过 ",e.jsx(t.code,{children:"useLatest"})," 提供获取最新状态的能力"]}),`
`]}),`
`,e.jsx(t.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["使用 ",e.jsx(t.code,{children:"useState"})," 管理状态值"]}),`
`,e.jsxs(t.li,{children:["使用 ",e.jsx(t.code,{children:"useLatest"})," 将 ",e.jsx(t.code,{children:"state"})," 保存到 ref 中，始终指向最新值"]}),`
`,e.jsxs(t.li,{children:["通过 ",e.jsx(t.code,{children:"useCallback"})," 创建稳定的 ",e.jsx(t.code,{children:"getState"})," 函数，读取 ",e.jsx(t.code,{children:"stateRef.current"})]}),`
`,e.jsxs(t.li,{children:["返回 ",e.jsx(t.code,{children:"[state, setState, getState]"})," 元组"]}),`
`]}),`
`,e.jsx(t.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"useLatest"})}),"：将 state 同步到 ref，使得 ",e.jsx(t.code,{children:"getState"})," 在任何闭包中都能获取最新值"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"useCallback(() => stateRef.current, [])"})}),"：空依赖保证函数引用稳定，不触发消费组件的重渲染"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"函数重载"}),"：提供有参和无参两种类型签名，支持 ",e.jsx(t.code,{children:"useGetState()"})," 和 ",e.jsx(t.code,{children:"useGetState(initialState)"})]}),`
`]}),`
`,e.jsx(t.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`useState(initialState) → state
       ↓
useLatest(state) → stateRef（始终同步最新值）
       ↓
getState = useCallback(() => stateRef.current) → 读取最新值
       ↓
返回 [state, setState, getState]
`})})]})}function a(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{a as default};
