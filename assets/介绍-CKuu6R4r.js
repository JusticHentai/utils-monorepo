import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import '../../.css/index.css'
import { useState } from 'react'
import useUnmount from '../../../packages/element-utils/src/useUnmount'
import { action } from 'storybook/actions'

const UnmountableComponent = () => {
  useUnmount(() => {
    action('useUnmount')('组件已卸载')
  })

  return (
    <div
      style={{
        padding: 16,
        background: 'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)',
        borderRadius: 8,
        color: 'white',
        textAlign: 'center',
      }}
    >
      我是可卸载的组件
    </div>
  )
}

const UseUnmountDemo = () => {
  const [mounted, setMounted] = useState(true)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>组件卸载</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        useUnmount 在组件卸载时执行回调：
      </div>

      <div
        className="button"
        onClick={() => {
          setMounted(!mounted)
          action(mounted ? '即将卸载组件' : '挂载组件')('')
        }}
      >
        {mounted ? '卸载组件' : '挂载组件'}
      </div>

      <div style={{ marginTop: 16 }}>
        {mounted ? (
          <UnmountableComponent />
        ) : (
          <div
            style={{
              padding: 16,
              background: '#f5f5f5',
              borderRadius: 8,
              textAlign: 'center',
              color: '#999',
            }}
          >
            组件已卸载
          </div>
        )}
      </div>

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：点击卸载组件后，查看 Actions 面板可以看到 useUnmount 回调
      </div>
    </div>
  )
}

export default UseUnmountDemo
`;function o(t){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"useunmount",children:"useUnmount"}),`
`,n.jsx(e.p,{children:"在组件卸载时执行的 Hook。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsx(e.p,{children:"useUnmount 在组件卸载前执行回调函数，相当于 class 组件的 componentWillUnmount。使用 useLatest 确保总是调用最新的回调函数。"}),`
`,n.jsx(e.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"取消订阅"}),`
`,n.jsx(e.li,{children:"清理定时器"}),`
`,n.jsx(e.li,{children:"释放资源"}),`
`,n.jsx(e.li,{children:"记录页面离开"}),`
`]}),`
`,n.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,n.jsx(s,{language:"tsx",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"fn"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"卸载时执行的回调函数"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用 useLatest 保存最新的回调函数"}),`
`,n.jsx(e.li,{children:"使用 useEffect 的清理函数实现卸载时执行"}),`
`,n.jsx(e.li,{children:"依赖数组为空，清理函数只在卸载时执行"}),`
`]})]})}function x(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{x as default};
