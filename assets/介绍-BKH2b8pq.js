import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import '../../.css/index.css'
import { useRef, useState } from 'react'
import useEventListener from '../../../packages/element-utils/src/useEventListener'
import { action } from 'storybook/actions'

const UseEventListenerDemo = () => {
  const [clickCount, setClickCount] = useState(0)
  const [keyPressed, setKeyPressed] = useState('')
  const buttonRef = useRef<HTMLDivElement>(null)

  // 监听元素点击
  useEventListener(
    'click',
    () => {
      setClickCount((c) => c + 1)
      action('元素点击')(\`点击次数: \${clickCount + 1}\`)
    },
    { target: buttonRef }
  )

  // 监听全局键盘事件
  useEventListener('keydown', (event) => {
    setKeyPressed(event.key)
    action('键盘按下')(event.key)
  })

  // 监听 window resize
  useEventListener('resize', () => {
    action('窗口大小变化')({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>事件监听</div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ marginBottom: 8, color: '#666' }}>
          点击下方按钮，或按键盘任意键：
        </div>
        <div
          ref={buttonRef}
          style={{
            width: 200,
            height: 80,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          点击我: {clickCount} 次
        </div>
      </div>

      <div
        style={{
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <div>
          最后按下的键：
          <span style={{ color: '#1890ff', fontWeight: 'bold' }}>
            {keyPressed || '无'}
          </span>
        </div>
      </div>

      <div style={{ color: '#999', fontSize: 12 }}>
        提示：调整浏览器窗口大小可以在 Actions 面板看到 resize 事件
      </div>
    </div>
  )
}

export default UseEventListenerDemo
`;function i(t){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"useeventlistener",children:"useEventListener"}),`
`,n.jsx(e.p,{children:"优雅地使用 addEventListener 的 Hook。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsx(e.p,{children:"useEventListener 封装了 DOM 事件监听的逻辑，自动处理事件的绑定和解绑，支持指定目标元素和各种事件选项。"}),`
`,n.jsx(e.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"监听 window/document 事件"}),`
`,n.jsx(e.li,{children:"监听特定元素的事件"}),`
`,n.jsx(e.li,{children:"需要在组件卸载时自动清理事件监听"}),`
`]}),`
`,n.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,n.jsx(d,{language:"tsx",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"eventName"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"事件名称"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"handler"}),n.jsx("td",{children:n.jsx("code",{children:"(event: Event) => void"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"事件处理函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.target"}),n.jsx("td",{children:n.jsx("code",{children:"BasicTarget"})}),n.jsx("td",{children:n.jsx("code",{children:"window"})}),n.jsx("td",{children:"目标元素"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.capture"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"false"})}),n.jsx("td",{children:"是否在捕获阶段触发"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.once"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"false"})}),n.jsx("td",{children:"是否只触发一次"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.passive"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"false"})}),n.jsx("td",{children:"是否为被动监听器"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用 useLatest 保存最新的 handler 引用"}),`
`,n.jsx(e.li,{children:"在 useEffect 中添加事件监听"}),`
`,n.jsx(e.li,{children:"组件卸载或依赖变化时移除事件监听"}),`
`,n.jsx(e.li,{children:"支持 window、document 和 DOM 元素作为目标"}),`
`]})]})}function a(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{a as default};
