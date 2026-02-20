import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { useState } from 'react'
import { action } from 'storybook/actions'
import useCreation from '../../../packages/element-utils/src/useCreation'
import '../../.css/index.css'

const UseCreationDemo = () => {
  const [count, setCount] = useState(0)
  const [dep, setDep] = useState(0)

  // useCreation 返回一个 ref，保证对象只在 dep 变化时重新创建
  const stableRef = useCreation(() => ({ id: Math.random() }), [dep])

  const handleShowValue = () => {
    action('useCreation 返回值')(stableRef.current)
  }

  return (
    <div>
      <div className="button" onClick={handleShowValue}>
        查看 useCreation 返回值
      </div>
      <div className="button" onClick={() => setCount((c) => c + 1)}>
        增加计数 (count: {count})
      </div>
      <div className="button" onClick={() => setDep((d) => d + 1)}>
        改变依赖 (dep: {dep})
      </div>
    </div>
  )
}

export default UseCreationDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usecreation",children:"useCreation"}),`
`,e.jsx(n.p,{children:"用于创建只初始化一次的对象，比 useMemo 更稳定。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useCreation"})," 是 ",e.jsx(n.code,{children:"useMemo"})," 的替代品，可以保证对象只在依赖变化时重新创建。React 的 ",e.jsx(n.code,{children:"useMemo"})," 不保证缓存一定不会被丢弃，而 ",e.jsx(n.code,{children:"useCreation"})," 可以保证。"]}),`
`,e.jsxs(n.p,{children:["新版本的 ",e.jsx(n.code,{children:"useCreation"})," 返回一个 ref 对象，而不是直接返回创建的值，这是为了避免在渲染阶段访问 ref 而导致的 ESLint 警告。"]}),`
`,e.jsx(n.p,{children:"常用场景："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"创建昂贵的对象实例"}),`
`,e.jsx(n.li,{children:"需要保证引用稳定的场景"}),`
`,e.jsx(n.li,{children:"创建单例模式的对象"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(r,{language:"tsx",children:c}),`
`,e.jsx(n.h2,{id:"usecreation-vs-usememo",children:"useCreation vs useMemo"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useMemo"}),": React 可能在内存压力下丢弃缓存，直接返回值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useCreation"}),": 保证只在依赖变化时重新创建，返回 ref 对象"]}),`
`]}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"factory"}),e.jsx("td",{children:e.jsx("code",{children:"() => T"})}),e.jsx("td",{children:"创建对象的工厂函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"deps"}),e.jsx("td",{children:e.jsx("code",{children:"DependencyList"})}),e.jsx("td",{children:"依赖数组，依赖变化时重新创建对象"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:["返回一个 ",e.jsx(n.code,{children:"React.MutableRefObject"}),"，其 ",e.jsx(n.code,{children:"current"})," 属性包含："]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"deps"}),e.jsx("td",{children:e.jsx("code",{children:"DependencyList"})}),e.jsx("td",{children:"当前的依赖数组"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"obj"}),e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"工厂函数创建的对象"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"initialized"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否已初始化"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useCreation/index.ts"}),"：主文件，实现 useCreation hook"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"depsAreSame/index.ts"}),"：依赖比较函数，判断依赖是否变化"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心流程"}),"："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useRef"})," 存储依赖数组、创建的对象和初始化状态"]}),`
`,e.jsxs(n.li,{children:["在 ",e.jsx(n.code,{children:"useEffect"})," 中检查依赖是否变化"]}),`
`,e.jsx(n.li,{children:"依赖变化时调用工厂函数重新创建对象"}),`
`,e.jsx(n.li,{children:"返回整个 ref 对象供外部使用"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"关键技术点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useRef"}),"：保持对象引用在组件生命周期内稳定"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useEffect"}),"：在副作用中执行对象创建，避免渲染阶段的问题"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"depsAreSame"}),"：浅比较依赖数组，使用 ",e.jsx(n.code,{children:"Object.is"})," 比较每个元素"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"数据流向"}),`：
调用方传入 factory 和 deps → useRef 存储状态 → useEffect 检查并创建 → 返回 ref 对象 → 调用方在 effect 中访问 ref.current.obj`]})]})}function a(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{a as default};
