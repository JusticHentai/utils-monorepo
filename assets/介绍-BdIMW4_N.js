import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import '../../.css/index.css'
import { useState } from 'react'
import useLockFn from '../../../packages/element-utils/src/useLockFn'
import { action } from 'storybook/actions'

const UseLocknDemo = () => {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)

  const submit = useLockFn(async () => {
    setLoading(true)
    action('开始请求')('请求中...')

    // 模拟异步请求
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setCount((c) => c + 1)
    setLoading(false)
    action('请求完成')('请求成功')
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>竞态锁</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        快速连续点击按钮，只会执行一次异步请求：
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
          请求完成次数：<span style={{ color: '#52c41a' }}>{count}</span>
        </div>
        <div>
          状态：
          <span style={{ color: loading ? '#faad14' : '#52c41a' }}>
            {loading ? '请求中...' : '空闲'}
          </span>
        </div>
      </div>

      <div
        className="button"
        onClick={submit}
        style={{
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? '请求中...' : '提交请求 (2秒)'}
      </div>

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：useLockFn 会在异步函数执行期间阻止重复调用
      </div>
    </div>
  )
}

export default UseLocknDemo
`;function s(i){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"uselockfn",children:"useLockFn"}),`
`,n.jsx(e.p,{children:"用于给异步函数增加竞态锁，防止并发执行。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsx(e.p,{children:"useLockFn 可以确保一个异步函数在执行期间不会被重复调用，有效防止用户快速多次点击导致的重复请求问题。"}),`
`,n.jsx(e.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"表单提交防重复点击"}),`
`,n.jsx(e.li,{children:"接口请求防并发"}),`
`,n.jsx(e.li,{children:"异步操作的互斥执行"}),`
`]}),`
`,n.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,n.jsx(d,{language:"tsx",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"fn"}),n.jsx("td",{children:n.jsx("code",{children:"(...args: P) => Promise<V>"})}),n.jsx("td",{children:"需要加锁的异步函数"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"(...args: P) => Promise<V | undefined>"})}),n.jsx("td",{children:"加锁后的函数，执行期间重复调用会返回 undefined"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用 useRef 保存锁状态"}),`
`,n.jsx(e.li,{children:"调用函数时检查锁状态"}),`
`,n.jsx(e.li,{children:"如果已锁定则直接返回"}),`
`,n.jsx(e.li,{children:"否则设置锁定并执行函数"}),`
`,n.jsx(e.li,{children:"函数执行完毕后释放锁"}),`
`]})]})}function j(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
