import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import '../../.css/index.css'
import { useState } from 'react'
import useTimeout from '../../../packages/element-utils/src/useTimeout'
import { action } from 'storybook/actions'

const UseTimeoutDemo = () => {
  const [message, setMessage] = useState('点击按钮开始')
  const [delay, setDelay] = useState<number | undefined>(undefined)

  const clear = useTimeout(() => {
    setMessage('延时回调已执行！')
    setDelay(undefined)
    action('timeout 执行')('延时回调触发')
  }, delay)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>延时器 Timeout</div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 18, color: '#1890ff' }}>{message}</div>
        <div style={{ color: '#999', marginTop: 8 }}>
          状态：{delay ? \`等待中 (\${delay}ms 后执行)\` : '空闲'}
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          setMessage('等待中...')
          setDelay(3000)
          action('启动延时器')('3 秒后执行')
        }}
      >
        3 秒后执行
      </div>
      <div
        className="button"
        onClick={() => {
          setMessage('等待中...')
          setDelay(1000)
          action('启动延时器')('1 秒后执行')
        }}
      >
        1 秒后执行
      </div>
      <div
        className="button"
        onClick={() => {
          clear()
          setDelay(undefined)
          setMessage('已取消')
          action('取消延时器')('已取消')
        }}
      >
        取消
      </div>
      <div
        className="button"
        onClick={() => {
          setMessage('点击按钮开始')
          setDelay(undefined)
          action('重置')('已重置')
        }}
      >
        重置
      </div>
    </div>
  )
}

export default UseTimeoutDemo
`;function i(n){const s={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"usetimeout",children:"useTimeout"}),`
`,e.jsx(s.p,{children:"管理 setTimeout 的 Hook。"}),`
`,e.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(s.p,{children:"useTimeout 封装了 setTimeout，自动处理定时器的创建和清理，避免内存泄漏。支持动态调整延迟时间。"}),`
`,e.jsx(s.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"延迟执行操作"}),`
`,e.jsx(s.li,{children:"自动隐藏提示"}),`
`,e.jsx(s.li,{children:"延迟加载"}),`
`,e.jsx(s.li,{children:"动画延迟触发"}),`
`]}),`
`,e.jsx(s.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(d,{language:"tsx",children:l}),`
`,e.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"fn"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"延迟执行的函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"delay"}),e.jsx("td",{children:e.jsx("code",{children:"number | undefined"})}),e.jsx("td",{children:"延迟时间（毫秒），undefined 时不执行"})]})]})]}),`
`,e.jsx(s.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"清除定时器的函数"})]})})]}),`
`,e.jsx(s.h2,{id:"usetimeout-vs-useinterval",children:"useTimeout vs useInterval"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"特性"}),e.jsx("th",{children:"useTimeout"}),e.jsx("th",{children:"useInterval"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"执行次数"}),e.jsx("td",{children:"单次"}),e.jsx("td",{children:"多次"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"适用场景"}),e.jsx("td",{children:"延迟操作"}),e.jsx("td",{children:"轮询、动画"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"定时器类型"}),e.jsx("td",{children:"setTimeout"}),e.jsx("td",{children:"setInterval"})]})]})]}),`
`,e.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(s.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"使用 useRef 保存最新的回调函数"}),`
`,e.jsx(s.li,{children:"使用 useRef 保存定时器 ID"}),`
`,e.jsx(s.li,{children:"在 useEffect 中创建延时器"}),`
`,e.jsx(s.li,{children:"delay 变化或组件卸载时清除定时器"}),`
`,e.jsx(s.li,{children:"返回手动清除定时器的函数"}),`
`]})]})}function a(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default};
