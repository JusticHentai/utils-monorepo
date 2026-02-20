import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import '../../.css/index.css'
import { useState, useEffect } from 'react'
import useLatest from '../../../packages/element-utils/src/useLatest'
import { action } from 'storybook/actions'

const UseLatestDemo = () => {
  const [count, setCount] = useState(0)
  const latestCount = useLatest(count)

  // 演示闭包问题
  useEffect(() => {
    const timer = setInterval(() => {
      // 使用 latestCount.current 总是能获取最新值
      action('定时器读取 latestCount.current')(latestCount.current)
    }, 2000)

    return () => clearInterval(timer)
  }, []) // 依赖数组为空，但 latestCount.current 总是最新的

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>获取最新值</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        useLatest 可以避免闭包问题，总是获取最新值：
      </div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div style={{ fontSize: 24 }}>
          count: <span style={{ color: '#1890ff' }}>{count}</span>
        </div>
        <div style={{ marginTop: 8, color: '#666', fontSize: 12 }}>
          每 2 秒会在 Actions 面板输出 latestCount.current
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          setCount((c) => c + 1)
          action('增加 count')(count + 1)
        }}
      >
        count + 1
      </div>
      <div
        className="button"
        onClick={() => {
          setCount(0)
          action('重置')('count 已重置')
        }}
      >
        重置
      </div>

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：即使 useEffect 的依赖数组为空，latestCount.current 也能获取到最新的
        count 值
      </div>
    </div>
  )
}

export default UseLatestDemo
`;function s(n){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"uselatest",children:"useLatest"}),`
`,e.jsx(t.p,{children:"返回当前最新值的 ref，用于解决闭包问题。"}),`
`,e.jsx(t.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(t.p,{children:"useLatest 通过 useRef 保存值的引用，每次渲染时更新 ref.current，使得在任何时候通过 ref.current 都能获取到最新的值，有效解决 useEffect、useCallback 等 Hook 中的闭包陈旧问题。"}),`
`,e.jsx(t.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"在 useEffect 中获取最新的 props 或 state"}),`
`,e.jsx(t.li,{children:"在 useCallback 中避免闭包问题"}),`
`,e.jsx(t.li,{children:"定时器回调中获取最新值"}),`
`,e.jsx(t.li,{children:"事件处理函数中获取最新值"}),`
`]}),`
`,e.jsx(t.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(i,{language:"tsx",children:c}),`
`,e.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"需要获取最新值的变量"})]})})]}),`
`,e.jsx(t.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"React.MutableRefObject<T>"})}),e.jsx("td",{children:"包含最新值的 ref 对象"})]})})]}),`
`,e.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(t.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"使用 useRef 创建一个 ref 对象"}),`
`,e.jsx(t.li,{children:"每次渲染时将 value 赋值给 ref.current"}),`
`,e.jsx(t.li,{children:"返回 ref 对象"}),`
`,e.jsx(t.li,{children:"由于 ref 对象引用不变，可以在任何地方通过 ref.current 获取最新值"}),`
`]})]})}function x(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{x as default};
