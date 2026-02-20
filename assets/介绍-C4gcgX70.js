import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { useState } from 'react'
import { action } from 'storybook/actions'
import usePrevious from '../../../packages/element-utils/src/usePrevious'
import '../../.css/index.css'

const UsePreviousDemo = () => {
  const [count, setCount] = useState(0)
  const [prevCount, updatePrevCount] = usePrevious(count)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>保存上一次值</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        usePrevious 返回 [prevRef, update]，只有调用 update 时才会更新 prev：
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
          当前 count: <span style={{ color: '#1890ff' }}>{count}</span>
        </div>
        <div>
          上一次 count:{' '}
          <span style={{ color: '#52c41a' }}>{prevCount.current ?? '无'}</span>
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          updatePrevCount()
          setCount((c) => c + 1)
          action('count +1（记录 prev）')({
            current: count + 1,
            previous: prevCount.current,
          })
        }}
      >
        count + 1（记录 prev）
      </div>

      <div
        className="button"
        onClick={() => {
          setCount((c) => c + 1)
          action('count +1（不记录 prev）')({
            current: count + 1,
            previous: prevCount.current,
          })
        }}
      >
        count + 1（不记录 prev）
      </div>

      <div
        className="button"
        onClick={() => {
          updatePrevCount()
          action('手动记录 prev')({
            current: count,
            previous: prevCount.current,
          })
        }}
      >
        仅记录当前值为 prev
      </div>
    </div>
  )
}

export default UsePreviousDemo
`;function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useprevious",children:"usePrevious"}),`
`,e.jsx(n.p,{children:"获取状态上一次值的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"usePrevious"})," 返回一个元组 ",e.jsx(n.code,{children:"[prevRef, update]"}),"，其中 ",e.jsx(n.code,{children:"prevRef"})," 是保存上一次值的 ref，",e.jsx(n.code,{children:"update"})," 是手动触发更新的函数。与自动跟踪不同，只有显式调用 ",e.jsx(n.code,{children:"update"})," 时才会将当前值存为上一次值，给予调用方完全的控制权。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"使用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"比较状态前后变化（如动画过渡）"}),`
`,e.jsx(n.li,{children:'需要精确控制"何时记录上一次值"的场景'}),`
`,e.jsx(n.li,{children:"撤销/重做功能中记录历史状态"}),`
`,e.jsx(n.li,{children:"表单变化检测（只在提交时记录）"}),`
`]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(d,{language:"tsx",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"state"}),e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"需要跟踪的状态值"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"索引"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"[0]"}),e.jsx("td",{children:e.jsx("code",{children:"RefObject<T | undefined>"})}),e.jsx("td",{children:"上一次的状态值 ref，通过 .current 读取，首次为 undefined"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"[1]"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"更新函数，调用后将当前 state 存为上一次值"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：实现 ",e.jsx(n.code,{children:"usePrevious"})," Hook"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心流程"}),"："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"prevRef"})," 保存上一次值，",e.jsx(n.code,{children:"curRef"})," 保存当前值（初始为传入的 ",e.jsx(n.code,{children:"state"}),"）"]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"useCallback"})," 创建 ",e.jsx(n.code,{children:"update"})," 函数，依赖 ",e.jsx(n.code,{children:"[state]"}),"：调用时将 ",e.jsx(n.code,{children:"curRef.current"})," 赋给 ",e.jsx(n.code,{children:"prevRef.current"}),"，再将 ",e.jsx(n.code,{children:"state"})," 赋给 ",e.jsx(n.code,{children:"curRef.current"})]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx(n.code,{children:"[prevRef, update]"})," 元组"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"关键技术点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"返回 ref 而非值"}),"：",e.jsx(n.code,{children:"prevRef"})," 是 ref 对象，读取时通过 ",e.jsx(n.code,{children:".current"})," 访问，不会触发重渲染，避免了旧版实现中 ",e.jsx(n.code,{children:"useState"})," 导致的额外渲染"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"手动控制更新时机"}),"：调用方决定何时调用 ",e.jsx(n.code,{children:"update"}),"，比自动在 ",e.jsx(n.code,{children:"useEffect"})," 中更新更灵活。例如可以在 ",e.jsx(n.code,{children:"setState"})," 之前先调用 ",e.jsx(n.code,{children:"update"})," 记录当前值，也可以跳过某些变化不记录"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"useCallback"})," 依赖 ",e.jsx(n.code,{children:"[state]"})]}),"：确保 ",e.jsx(n.code,{children:"update"})," 内部总能捕获到最新的 ",e.jsx(n.code,{children:"state"})," 值写入 ",e.jsx(n.code,{children:"curRef"})]}),`
`]})]})}function j(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
