import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import useBoolean from '../../../packages/element-utils/src/useBoolean'
import '../../.css/index.css'

const UseBooleanDemo = () => {
  const [visible, { setTrue, setFalse, toggle, set }] = useBoolean(false)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>布尔状态管理</div>
      <div style={{ marginBottom: 8 }}>
        当前值：
        <span style={{ color: visible ? '#52c41a' : '#ff4d4f' }}>
          {String(visible)}
        </span>
      </div>
      <div
        className="button"
        onClick={() => {
          toggle()
          action('toggle')(!visible)
        }}
      >
        Toggle
      </div>
      <div
        className="button"
        onClick={() => {
          setTrue()
          action('setTrue')('设置为 true')
        }}
      >
        Set True
      </div>
      <div
        className="button"
        onClick={() => {
          setFalse()
          action('setFalse')('设置为 false')
        }}
      >
        Set False
      </div>
      <div
        className="button"
        onClick={() => {
          set(true)
          action('set')(true)
        }}
      >
        Set(true)
      </div>
      <div
        className="button"
        onClick={() => {
          set(false)
          action('set')(false)
        }}
      >
        Set(false)
      </div>

      {/* 演示区域 */}
      <div style={{ marginTop: 24 }}>
        <div
          style={{
            width: 200,
            height: 100,
            background: visible
              ? 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
              : 'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            transition: 'all 0.3s',
          }}
        >
          {visible ? '显示中' : '隐藏中'}
        </div>
      </div>
    </div>
  )
}

export default UseBooleanDemo
`;function i(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"useboolean",children:"useBoolean"}),`
`,e.jsx(s.p,{children:"管理 boolean 状态的 Hook。"}),`
`,e.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(s.p,{children:["useBoolean 是 useToggle 的语义化封装，专门用于管理布尔值状态。它提供了更直观的 API，如 ",e.jsx(s.code,{children:"setTrue"}),"、",e.jsx(s.code,{children:"setFalse"}),"，让代码更具可读性。"]}),`
`,e.jsx(s.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"控制模态框显示/隐藏"}),`
`,e.jsx(s.li,{children:"控制加载状态"}),`
`,e.jsx(s.li,{children:"控制开关状态"}),`
`,e.jsx(s.li,{children:"控制展开/折叠状态"}),`
`]}),`
`,e.jsx(s.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(t,{language:"tsx",children:d}),`
`,e.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"defaultValue"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"初始值"})]})})]}),`
`,e.jsx(s.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"state"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"当前状态值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.setTrue"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"设置为 true"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.setFalse"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"设置为 false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.set"}),e.jsx("td",{children:e.jsx("code",{children:"(value: boolean) => void"})}),e.jsx("td",{children:"设置指定值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.toggle"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"切换状态"})]})]})]}),`
`,e.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(s.p,{children:"useBoolean 基于 useToggle 实现，将其返回的通用 toggle 方法封装成更语义化的布尔操作方法。"}),`
`,e.jsx(s.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"调用 useToggle，传入布尔化后的 defaultValue"}),`
`,e.jsx(s.li,{children:"使用 useMemo 创建 setTrue、setFalse 等方法"}),`
`,e.jsx(s.li,{children:"返回状态和操作方法"}),`
`]})]})}function j(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{j as default};
