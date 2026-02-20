import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import '../../.css/index.css'
import useToggle from '../../../packages/element-utils/src/useToggle'
import { action } from 'storybook/actions'

const UseToggleDemo = () => {
  // 基础布尔切换
  const [boolState, boolActions] = useToggle()
  // 自定义值切换
  const [customState, customActions] = useToggle('Hello', 'World')

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础布尔切换</div>
      <div style={{ marginBottom: 8 }}>
        当前值：<span style={{ color: '#1890ff' }}>{String(boolState)}</span>
      </div>
      <div
        className="button"
        onClick={() => {
          boolActions.toggle()
          action('toggle 布尔值')(!boolState)
        }}
      >
        Toggle
      </div>
      <div
        className="button"
        onClick={() => {
          boolActions.setLeft()
          action('setLeft')('设置为 false')
        }}
      >
        Set False (setLeft)
      </div>
      <div
        className="button"
        onClick={() => {
          boolActions.setRight()
          action('setRight')('设置为 true')
        }}
      >
        Set True (setRight)
      </div>

      <div style={{ margin: '24px 0 16px', fontWeight: 'bold' }}>
        自定义值切换
      </div>
      <div style={{ marginBottom: 8 }}>
        当前值：<span style={{ color: '#52c41a' }}>{customState}</span>
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.toggle()
          action('toggle 自定义值')(
            customState === 'Hello' ? 'World' : 'Hello'
          )
        }}
      >
        Toggle (Hello/World)
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.set('Hello')
          action('set')('Hello')
        }}
      >
        Set Hello
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.set('World')
          action('set')('World')
        }}
      >
        Set World
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.setLeft()
          action('setLeft')('Hello')
        }}
      >
        Set Left (Hello)
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.setRight()
          action('setRight')('World')
        }}
      >
        Set Right (World)
      </div>
    </div>
  )
}

export default UseToggleDemo
`;function n(t){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"usetoggle",children:"useToggle"}),`
`,e.jsx(s.p,{children:"用于在两个状态值间切换的 Hook。"}),`
`,e.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(s.p,{children:["useToggle 是一个用于管理切换状态的 React Hook，它可以在两个值之间切换。默认情况下，它在 ",e.jsx(s.code,{children:"true"})," 和 ",e.jsx(s.code,{children:"false"})," 之间切换，但也支持在任意两个自定义值之间切换。"]}),`
`,e.jsx(s.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"控制模态框/抽屉的显示隐藏"}),`
`,e.jsx(s.li,{children:"切换主题（明/暗）"}),`
`,e.jsx(s.li,{children:"切换语言"}),`
`,e.jsx(s.li,{children:"控制折叠/展开状态"}),`
`,e.jsx(s.li,{children:"任何需要在两个状态之间切换的场景"}),`
`]}),`
`,e.jsx(s.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(i,{language:"tsx",children:d}),`
`,e.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"defaultValue"}),e.jsx("td",{children:e.jsx("code",{children:"D"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"默认值（左值）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reverseValue"}),e.jsx("td",{children:e.jsx("code",{children:"R"})}),e.jsx("td",{children:e.jsx("code",{children:"!defaultValue"})}),e.jsx("td",{children:"反转值（右值）"})]})]})]}),`
`,e.jsx(s.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"state"}),e.jsx("td",{children:e.jsx("code",{children:"D | R"})}),e.jsx("td",{children:"当前状态值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.toggle"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"切换状态"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.set"}),e.jsx("td",{children:e.jsx("code",{children:"(value: D | R) => void"})}),e.jsx("td",{children:"设置指定值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.setLeft"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"设置为左值（defaultValue）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.setRight"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"设置为右值（reverseValue）"})]})]})]}),`
`,e.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(s.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"状态初始化"}),": 使用 ",e.jsx(s.code,{children:"useState"})," 初始化状态为 ",e.jsx(s.code,{children:"defaultValue"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"计算反转值"}),": 如果未提供 ",e.jsx(s.code,{children:"reverseValue"}),"，则默认使用 ",e.jsx(s.code,{children:"!defaultValue"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"创建操作方法"}),": 使用 ",e.jsx(s.code,{children:"useMemo"})," 缓存各个操作函数，避免不必要的重渲染"]}),`
`]}),`
`,e.jsx(s.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"泛型支持"}),": 支持任意类型的值切换，不仅限于布尔值"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"函数重载"}),": 提供多种调用方式的类型提示"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Memoization"}),": 使用 ",e.jsx(s.code,{children:"useMemo"})," 优化性能，确保 actions 引用稳定"]}),`
`]})]})}function a(t={}){const{wrapper:s}={...l(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{a as default};
