import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import '../../.css/index.css'
import { useRef } from 'react'
import useSize from '../../../packages/element-utils/src/useSize'

const UseSizeDemo = () => {
  const ref = useRef<HTMLDivElement>(null)
  const size = useSize(ref)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>元素尺寸监听</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        拖拽下方元素右下角调整大小：
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
          width: <span style={{ color: '#1890ff' }}>{size?.width ?? 0}px</span>
        </div>
        <div>
          height: <span style={{ color: '#52c41a' }}>{size?.height ?? 0}px</span>
        </div>
      </div>

      <div
        ref={ref}
        style={{
          width: 200,
          height: 150,
          resize: 'both',
          overflow: 'auto',
          minWidth: 100,
          minHeight: 100,
          maxWidth: 400,
          maxHeight: 300,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        拖拽调整大小
      </div>

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：useSize 使用 ResizeObserver API 监听元素尺寸变化
      </div>
    </div>
  )
}

export default UseSizeDemo
`;function s(i){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"usesize",children:"useSize"}),`
`,n.jsx(e.p,{children:"监听 DOM 节点尺寸变化的 Hook。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsx(e.p,{children:"useSize 使用 ResizeObserver API 实时监听元素的尺寸变化，返回元素的 width 和 height。适用于需要响应元素尺寸变化的场景。"}),`
`,n.jsx(e.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"响应式布局"}),`
`,n.jsx(e.li,{children:"图表自适应"}),`
`,n.jsx(e.li,{children:"图片裁剪区域"}),`
`,n.jsx(e.li,{children:"虚拟列表高度计算"}),`
`]}),`
`,n.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,n.jsx(t,{language:"tsx",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"target"}),n.jsx("td",{children:n.jsx("code",{children:"BasicTarget"})}),n.jsx("td",{children:"目标元素（ref 或 DOM 元素）"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"width"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"元素宽度（clientWidth）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"height"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"元素高度（clientHeight）"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用 useRafState 管理尺寸状态（使用 requestAnimationFrame 优化）"}),`
`,n.jsx(e.li,{children:"创建 ResizeObserver 实例监听目标元素"}),`
`,n.jsx(e.li,{children:"尺寸变化时更新状态"}),`
`,n.jsx(e.li,{children:"组件卸载时断开观察器"}),`
`]})]})}function a(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{a as default};
