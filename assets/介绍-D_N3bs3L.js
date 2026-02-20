import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import '../../.css/index.css'
import { useRef } from 'react'
import useHover from '../../../packages/element-utils/src/useHover'
import { action } from 'storybook/actions'

const UseHoverDemo = () => {
  const basicRef = useRef<HTMLDivElement>(null)
  const callbackRef = useRef<HTMLDivElement>(null)

  const isBasicHovering = useHover(basicRef)
  const isCallbackHovering = useHover(callbackRef, {
    onEnter: () => action('onEnter')('鼠标进入'),
    onLeave: () => action('onLeave')('鼠标离开'),
    onChange: (isHovering) => action('onChange')(isHovering),
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础用法</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        将鼠标移入下方元素：
      </div>
      <div
        ref={basicRef}
        style={{
          width: 200,
          height: 100,
          background: isBasicHovering
            ? 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          transition: 'all 0.3s',
          cursor: 'pointer',
        }}
      >
        {isBasicHovering ? 'Hovering!' : 'Hover me'}
      </div>

      <div style={{ margin: '24px 0 16px', fontWeight: 'bold' }}>带回调函数</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        监听进入/离开事件（查看 Actions 面板）：
      </div>
      <div
        ref={callbackRef}
        style={{
          width: 200,
          height: 100,
          background: isCallbackHovering
            ? 'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)'
            : 'linear-gradient(135deg, #faad14 0%, #ffc53d 100%)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          transition: 'all 0.3s',
          cursor: 'pointer',
        }}
      >
        {isCallbackHovering ? 'Hovering!' : 'Hover me'}
      </div>
    </div>
  )
}

export default UseHoverDemo
`;function r(i){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"usehover",children:"useHover"}),`
`,n.jsx(e.p,{children:"监听 DOM 元素是否有鼠标悬停的 Hook。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsx(e.p,{children:"useHover 通过监听 mouseenter 和 mouseleave 事件来追踪元素的悬停状态，并支持进入、离开和状态变化的回调函数。"}),`
`,n.jsx(e.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"悬停显示提示信息"}),`
`,n.jsx(e.li,{children:"悬停改变元素样式"}),`
`,n.jsx(e.li,{children:"悬停触发动画效果"}),`
`,n.jsx(e.li,{children:"下拉菜单的显示/隐藏"}),`
`]}),`
`,n.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,n.jsx(t,{language:"tsx",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"target"}),n.jsx("td",{children:n.jsx("code",{children:"BasicTarget"})}),n.jsx("td",{children:"目标元素（ref 或 DOM 元素）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.onEnter"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"鼠标进入时的回调"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.onLeave"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"鼠标离开时的回调"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.onChange"}),n.jsx("td",{children:n.jsx("code",{children:"(isHovering: boolean) => void"})}),n.jsx("td",{children:"悬停状态改变时的回调"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否正在悬停"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用 useState 管理悬停状态"}),`
`,n.jsx(e.li,{children:"使用 useEventListener 监听 mouseenter 和 mouseleave 事件"}),`
`,n.jsx(e.li,{children:"事件触发时更新状态并调用相应的回调函数"}),`
`]})]})}function j(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{j as default};
