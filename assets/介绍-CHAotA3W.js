import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as a}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import '../../.css/index.css'
import useSetState from '../../../packages/element-utils/src/useSetState'
import { action } from 'storybook/actions'

interface UserInfo {
  name: string
  age: number
  email: string
  address: {
    city: string
    street: string
  }
}

const UseSetStateDemo = () => {
  const [state, setState] = useSetState<UserInfo>({
    name: 'John',
    age: 20,
    email: 'john@example.com',
    address: {
      city: 'Beijing',
      street: 'Main Street',
    },
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>对象状态管理</div>
      <div
        style={{
          marginBottom: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
          fontFamily: 'monospace',
          fontSize: 12,
        }}
      >
        <pre style={{ margin: 0 }}>{JSON.stringify(state, null, 2)}</pre>
      </div>

      <div
        className="button"
        onClick={() => {
          setState({ name: 'Jane' })
          action('setState')({ name: 'Jane' })
        }}
      >
        修改 name 为 Jane
      </div>
      <div
        className="button"
        onClick={() => {
          setState({ age: state.age + 1 })
          action('setState')({ age: state.age + 1 })
        }}
      >
        age + 1
      </div>
      <div
        className="button"
        onClick={() => {
          setState((prev) => ({ age: prev.age + 5 }))
          action('setState (函数式)')('age + 5')
        }}
      >
        函数式更新 age + 5
      </div>
      <div
        className="button"
        onClick={() => {
          setState({
            name: 'Mike',
            email: 'mike@example.com',
          })
          action('setState (多字段)')({ name: 'Mike', email: 'mike@example.com' })
        }}
      >
        同时修改多个字段
      </div>
      <div
        className="button"
        onClick={() => {
          setState({
            address: {
              ...state.address,
              city: 'Shanghai',
            },
          })
          action('setState (嵌套对象)')({ address: { city: 'Shanghai' } })
        }}
      >
        修改嵌套对象 city
      </div>
      <div
        className="button"
        onClick={() => {
          setState({
            name: 'John',
            age: 20,
            email: 'john@example.com',
            address: {
              city: 'Beijing',
              street: 'Main Street',
            },
          })
          action('重置')('恢复初始值')
        }}
      >
        重置所有
      </div>
    </div>
  )
}

export default UseSetStateDemo
`;function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"usesetstate",children:"useSetState"}),`
`,e.jsx(t.p,{children:"管理对象类型 state 的 Hook，类似 class 组件的 this.setState。"}),`
`,e.jsx(t.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(t.p,{children:"useSetState 提供了与 class 组件 this.setState 相似的 API，可以进行对象的部分更新而不需要手动合并。它支持直接传入对象或函数式更新。"}),`
`,e.jsx(t.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"管理复杂的表单状态"}),`
`,e.jsx(t.li,{children:"管理多个相关联的状态"}),`
`,e.jsx(t.li,{children:"从 class 组件迁移到函数组件"}),`
`]}),`
`,e.jsx(t.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(a,{language:"tsx",children:d}),`
`,e.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"initialState"}),e.jsx("td",{children:e.jsx("code",{children:"S | (() => S)"})}),e.jsx("td",{children:"初始状态对象或返回初始状态的函数"})]})})]}),`
`,e.jsx(t.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"state"}),e.jsx("td",{children:e.jsx("code",{children:"S"})}),e.jsx("td",{children:"当前状态对象"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"setState"}),e.jsx("td",{children:e.jsx("code",{children:"SetState<S>"})}),e.jsx("td",{children:"合并更新状态的函数"})]})]})]}),`
`,e.jsx(t.h3,{id:"setstate-类型",children:"SetState 类型"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type SetState<S> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null)
) => void
`})}),`
`,e.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(t.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"使用 useState 管理状态"}),`
`,e.jsx(t.li,{children:"setMergeState 函数判断传入的是函数还是对象"}),`
`,e.jsx(t.li,{children:"将新状态与旧状态合并（浅合并）"}),`
`,e.jsx(t.li,{children:"使用 useMemoizedFn 保证 setState 引用稳定"}),`
`]})]})}function m(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};
