import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import '../../.css/index.css'
import { useState } from 'react'
import useInterval from '../../../packages/element-utils/src/useInterval'
import { action } from 'storybook/actions'

const UseIntervalDemo = () => {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState<number | undefined>(undefined)

  const clear = useInterval(
    () => {
      setCount((c) => c + 1)
      action('interval 执行')(\`计数: \${count + 1}\`)
    },
    delay,
    { immediate: false }
  )

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>定时器 Interval</div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div style={{ fontSize: 32, textAlign: 'center', color: '#1890ff' }}>
          {count}
        </div>
        <div style={{ textAlign: 'center', color: '#999', marginTop: 8 }}>
          状态：{delay ? \`运行中 (\${delay}ms)\` : '已停止'}
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          setDelay(1000)
          action('启动定时器')('间隔 1000ms')
        }}
      >
        启动 (1s 间隔)
      </div>
      <div
        className="button"
        onClick={() => {
          setDelay(500)
          action('启动定时器')('间隔 500ms')
        }}
      >
        启动 (0.5s 间隔)
      </div>
      <div
        className="button"
        onClick={() => {
          setDelay(undefined)
          action('停止定时器')('已停止')
        }}
      >
        停止
      </div>
      <div
        className="button"
        onClick={() => {
          clear()
          setDelay(undefined)
          action('清除定时器')('已清除')
        }}
      >
        清除
      </div>
      <div
        className="button"
        onClick={() => {
          setCount(0)
          action('重置计数')('计数已重置')
        }}
      >
        重置计数
      </div>
    </div>
  )
}

export default UseIntervalDemo
`;function t(i){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useinterval",children:"useInterval"}),`
`,e.jsx(n.p,{children:"管理 setInterval 的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(n.p,{children:"useInterval 封装了 setInterval，自动处理定时器的创建和清理，避免内存泄漏。支持动态调整间隔时间和首次立即执行。"}),`
`,e.jsx(n.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"轮询数据"}),`
`,e.jsx(n.li,{children:"倒计时"}),`
`,e.jsx(n.li,{children:"定时刷新"}),`
`,e.jsx(n.li,{children:"动画循环"}),`
`]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(s,{language:"tsx",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"fn"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"定时执行的函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"delay"}),e.jsx("td",{children:e.jsx("code",{children:"number | undefined"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"间隔时间（毫秒），undefined 时停止定时器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.immediate"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"是否在首次渲染时立即执行"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"清除定时器的函数"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"使用 useRef 保存最新的回调函数"}),`
`,e.jsx(n.li,{children:"使用 useRef 保存定时器 ID"}),`
`,e.jsx(n.li,{children:"在 useEffect 中创建定时器"}),`
`,e.jsx(n.li,{children:"delay 变化或组件卸载时清除定时器"}),`
`,e.jsx(n.li,{children:"返回手动清除定时器的函数"}),`
`]})]})}function j(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{j as default};
