import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";function c(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"createupdateeffect",children:"createUpdateEffect"}),`
`,e.jsx(n.p,{children:"创建一个只在更新时执行的 effect hook 工厂函数。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createUpdateEffect"})," 是一个工厂函数，用于创建只在依赖更新时执行的 effect hook。与原生 useEffect 不同，首次渲染时不会执行。"]}),`
`,e.jsx(n.p,{children:"常用场景："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"只需要在状态更新时执行副作用"}),`
`,e.jsx(n.li,{children:"避免首次渲染时的不必要操作"}),`
`,e.jsx(n.li,{children:"实现 componentDidUpdate 的效果"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useEffect } from 'react'
import { createUpdateEffect } from '@justichentai/element-utils'

const useUpdateEffect = createUpdateEffect(useEffect)

function MyComponent() {
  const [count, setCount] = useState(0)

  // 首次渲染不会执行，只在 count 更新时执行
  useUpdateEffect(() => {
    console.log('count 更新了:', count)
  }, [count])

  return <button onClick={() => setCount(c => c + 1)}>增加</button>
}
`})}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"hook"}),e.jsx("td",{children:e.jsx("code",{children:"typeof useEffect | typeof useLayoutEffect"})}),e.jsx("td",{children:"要包装的 effect hook"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsx(n.p,{children:"返回一个与 useEffect/useLayoutEffect 签名相同的 hook，但首次渲染时不执行。"}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"index.ts"})," 包含工厂函数实现"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"使用 ref 记录是否已挂载"}),`
`,e.jsx(n.li,{children:"首次执行时只设置标记，不执行 effect"}),`
`,e.jsx(n.li,{children:"后续执行时正常调用 effect"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"使用闭包和 ref 保存挂载状态"}),`
`,e.jsx(n.li,{children:"支持 react-refresh（热更新时重置状态）"}),`
`]}),`
`]}),`
`]})]})}function x(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{x as default};
