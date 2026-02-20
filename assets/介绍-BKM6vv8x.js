import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { memo, useCallback, useState } from 'react'
import { action } from 'storybook/actions'
import useMemoizedFn from '../../../packages/element-utils/src/useMemoizedFn'
import '../../.css/index.css'

// 子组件，用于演示渲染次数
const ChildComponent = memo(
  ({ onClick, label }: { onClick: () => void; label: string }) => {
    action('子组件渲染')(label)
    return (
      <div
        onClick={onClick}
        style={{
          padding: '8px 16px',
          background: '#f0f0f0',
          borderRadius: 4,
          cursor: 'pointer',
          marginBottom: 8,
        }}
      >
        {label}
      </div>
    )
  }
)

const UseMemoizedFnDemo = () => {
  const [count, setCount] = useState(0)

  // 普通 useCallback（count 变化时会重新创建）
  const normalCallback = useCallback(() => {
    action('普通 callback')(count)
  }, [count])

  // useMemoizedFn（引用永远不变）
  const memoizedCallback = useMemoizedFn(() => {
    action('memoized callback')(count)
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>持久化函数</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        useMemoizedFn 返回的函数引用永远不变，可以避免子组件重新渲染：
      </div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div>
          count: <span style={{ color: '#1890ff' }}>{count}</span>
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          setCount((c) => c + 1)
        }}
      >
        增加 count（触发重新渲染）
      </div>

      <div style={{ margin: '24px 0 16px', fontWeight: 'bold' }}>子组件</div>
      <div style={{ marginBottom: 8, color: '#666', fontSize: 12 }}>
        查看 Actions 面板观察子组件渲染情况：
      </div>

      <ChildComponent
        onClick={normalCallback}
        label="普通 callback（count 变化时重新渲染）"
      />
      <ChildComponent
        onClick={memoizedCallback}
        label="memoized callback（不会重新渲染）"
      />

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：增加 count 时，使用普通 callback 的子组件会重新渲染，使用 memoized
        callback 的不会
      </div>
    </div>
  )
}

export default UseMemoizedFnDemo
`;function l(i){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usememoizedfn",children:"useMemoizedFn"}),`
`,e.jsx(n.p,{children:"持久化函数引用的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(n.p,{children:"useMemoizedFn 返回一个引用永远不变的函数，该函数内部总是调用最新的函数实现。它解决了 useCallback 在依赖变化时函数引用会变化的问题，可以避免不必要的子组件重渲染。"}),`
`,e.jsx(n.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"传递给子组件的回调函数"}),`
`,e.jsx(n.li,{children:"需要稳定引用的事件处理函数"}),`
`,e.jsx(n.li,{children:"作为其他 Hook 的依赖项"}),`
`]}),`
`,e.jsx(n.h2,{id:"usememoizedfn-vs-usecallback",children:"useMemoizedFn vs useCallback"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"特性"}),e.jsx("th",{children:"useMemoizedFn"}),e.jsx("th",{children:"useCallback"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"函数引用"}),e.jsx("td",{children:"永远不变"}),e.jsx("td",{children:"依赖变化时改变"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"依赖声明"}),e.jsx("td",{children:"不需要"}),e.jsx("td",{children:"需要"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"最新状态"}),e.jsx("td",{children:"总是最新"}),e.jsx("td",{children:"需要正确声明依赖"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"使用场景"}),e.jsx("td",{children:"几乎所有场景"}),e.jsx("td",{children:"特定场景"})]})]})]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(s,{language:"tsx",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"fn"}),e.jsx("td",{children:e.jsx("code",{children:"T extends (...args: any[]) => any"})}),e.jsx("td",{children:"需要持久化的函数"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"持久化后的函数，引用永远不变"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"使用 useRef 保存最新的函数实现"}),`
`,e.jsx(n.li,{children:"每次渲染时更新 fnRef.current"}),`
`,e.jsx(n.li,{children:"使用另一个 useRef 保存代理函数"}),`
`,e.jsx(n.li,{children:"代理函数内部调用 fnRef.current"}),`
`,e.jsx(n.li,{children:"返回代理函数（引用永远不变）"}),`
`]})]})}function j(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{j as default};
