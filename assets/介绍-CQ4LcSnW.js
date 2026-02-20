import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { useState, useEffect } from 'react'
import { action } from 'storybook/actions'
import useUnmountedRef from '../../../packages/element-utils/src/useUnmountedRef'
import '../../.css/index.css'

const ChildComponent = () => {
  const unmountedRef = useUnmountedRef()

  useEffect(() => {
    // 模拟异步操作
    const timer = setTimeout(() => {
      if (unmountedRef.current) {
        action('useUnmountedRef')('组件已卸载，跳过状态更新')
      } else {
        action('useUnmountedRef')('组件仍挂载，安全更新状态')
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [unmountedRef])

  return (
    <div className="card">
      子组件已挂载（2秒后检查卸载状态）
    </div>
  )
}

const UseUnmountedRefDemo = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <div className="button" onClick={() => setShow(!show)}>
        {show ? '卸载子组件' : '挂载子组件'}
      </div>
      <div className="area">
        {show && <ChildComponent />}
      </div>
    </div>
  )
}

export default UseUnmountedRefDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useunmountedref",children:"useUnmountedRef"}),`
`,e.jsx(n.p,{children:"返回一个 ref，用于判断组件是否已卸载。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useUnmountedRef"})," 返回一个 ",e.jsx(n.code,{children:"MutableRefObject<boolean>"}),"，其 ",e.jsx(n.code,{children:"current"})," 值在组件卸载后变为 ",e.jsx(n.code,{children:"true"}),"。"]}),`
`,e.jsxs(n.p,{children:["常用于异步操作中判断组件是否仍然挂载，避免在已卸载的组件上调用 ",e.jsx(n.code,{children:"setState"})," 导致内存泄漏警告。"]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(r,{language:"tsx",children:t}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"MutableRefObject<boolean>"})}),e.jsxs("td",{children:[e.jsx("code",{children:"current"})," 为 ",e.jsx("code",{children:"true"})," 时表示组件已卸载"]})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：实现 ",e.jsx(n.code,{children:"useUnmountedRef"})," Hook，利用 ",e.jsx(n.code,{children:"useEffect"})," 清理函数标记组件卸载状态"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useRef(false)"})," 创建 ref，初始值为 ",e.jsx(n.code,{children:"false"}),"（组件已挂载）"]}),`
`,e.jsxs(n.li,{children:["在 ",e.jsx(n.code,{children:"useEffect"})," 中将 ",e.jsx(n.code,{children:"unmountedRef.current"})," 设为 ",e.jsx(n.code,{children:"false"}),"（处理 StrictMode 重新挂载）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useEffect"})," 的清理函数将 ",e.jsx(n.code,{children:"unmountedRef.current"})," 设为 ",e.jsx(n.code,{children:"true"}),"（组件卸载时执行）"]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx(n.code,{children:"unmountedRef"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"useEffect"})," 清理函数"]}),"：利用 React 在组件卸载时自动执行清理函数的机制"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["空依赖数组 ",e.jsx(n.code,{children:"[]"})]}),"：确保 effect 只在挂载和卸载时执行"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"StrictMode 兼容"}),"：effect 回调中重置为 ",e.jsx(n.code,{children:"false"}),"，处理开发模式下的双重挂载"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`useRef(false) → unmountedRef
       ↓
useEffect 挂载 → unmountedRef.current = false
       ↓
组件卸载 → cleanup → unmountedRef.current = true
       ↓
外部读取 unmountedRef.current 判断组件是否已卸载
`})})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{j as default};
