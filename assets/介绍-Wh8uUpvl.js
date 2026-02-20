import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { useRef } from 'react'
import { action } from 'storybook/actions'
import useUpdate from '../../../packages/element-utils/src/useUpdate'
import '../../.css/index.css'

const UseUpdateDemo = () => {
  const update = useUpdate()
  const renderCountRef = useRef(0)
  renderCountRef.current += 1

  const handleUpdate = () => {
    update()
    action('useUpdate')('触发强制重新渲染')
  }

  return (
    <div>
      <div className="button" onClick={handleUpdate}>
        强制重新渲染
      </div>
      <div className="area">
        <div className="card">
          渲染次数: {renderCountRef.current}
        </div>
      </div>
    </div>
  )
}

export default UseUpdateDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useupdate",children:"useUpdate"}),`
`,e.jsx(n.p,{children:"强制组件重新渲染的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useUpdate"})," 返回一个函数，调用该函数会触发组件强制重新渲染。内部通过 ",e.jsx(n.code,{children:"useState"})," 设置新对象引用来触发更新。"]}),`
`,e.jsx(n.p,{children:"常用于需要手动触发渲染但不依赖特定状态变化的场景，如外部数据源变化时强制刷新。"}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(c,{language:"tsx",children:r}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"调用即触发组件重新渲染"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：实现 ",e.jsx(n.code,{children:"useUpdate"})," Hook，通过创建新对象引用触发 React 重渲染"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useState({})"})," 创建状态，忽略状态值本身"]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"useCallback(() => setState({}), [])"})," 创建稳定的更新函数"]}),`
`,e.jsxs(n.li,{children:["调用 ",e.jsx(n.code,{children:"setState({})"})," 时，由于每次传入新对象引用（",e.jsx(n.code,{children:"{} !== {}"}),"），React 判定状态变化并触发重渲染"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"新对象引用"}),"：",e.jsx(n.code,{children:"setState({})"})," 每次创建新的空对象，React 通过 ",e.jsx(n.code,{children:"Object.is"})," 比较发现引用不同，触发更新"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useCallback"})}),"：空依赖数组保证函数引用稳定，不会导致依赖它的子组件不必要重渲染"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"忽略状态值"}),"：",e.jsx(n.code,{children:"const [, setState]"})," 解构忽略第一个元素，状态值不被使用"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`useState({}) → [_, setState]
       ↓
useCallback(() => setState({}), []) → update 函数（引用稳定）
       ↓
调用 update() → setState({}) → 新对象引用 → React 重渲染
`})})]})}function j(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{j as default};
