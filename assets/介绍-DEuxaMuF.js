import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"createeffectwithtarget",children:"createEffectWithTarget"}),`
`,e.jsx(n.p,{children:"创建一个支持目标元素的 effect hook 工厂函数。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createEffectWithTarget"})," 是一个工厂函数，用于创建支持 DOM 目标元素变化检测的 effect hook。当目标元素或依赖数组变化时，会重新执行 effect。"]}),`
`,e.jsx(n.p,{children:"常用场景："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"需要监听某个 DOM 元素的 effect"}),`
`,e.jsx(n.li,{children:"当 ref 指向的元素变化时需要重新绑定事件"}),`
`,e.jsx(n.li,{children:"配合其他 DOM 相关的 hook 使用"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useEffect } from 'react'
import { createEffectWithTarget } from '@justichentai/element-utils'

const useEffectWithTarget = createEffectWithTarget(useEffect)

function MyComponent() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useEffectWithTarget(
    () => {
      console.log('effect 执行', targetRef.current)
      return () => {
        console.log('effect 清理')
      }
    },
    [count],
    targetRef
  )

  return <div ref={targetRef}>内容</div>
}
`})}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"useEffectType"}),e.jsx("td",{children:e.jsx("code",{children:"typeof useEffect | typeof useLayoutEffect"})}),e.jsx("td",{children:"要包装的 effect hook"})]})})]}),`
`,e.jsx(n.h2,{id:"返回的-hook-参数",children:"返回的 Hook 参数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"effect"}),e.jsx("td",{children:e.jsx("code",{children:"EffectCallback"})}),e.jsx("td",{children:"effect 回调函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"deps"}),e.jsx("td",{children:e.jsx("code",{children:"DependencyList"})}),e.jsx("td",{children:"依赖数组"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"BasicTarget | BasicTarget[]"})}),e.jsx("td",{children:"目标元素（支持 ref、函数或直接 DOM 元素）"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"index.ts"})," 包含工厂函数的完整实现"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"使用 ref 保存上一次的元素和依赖"}),`
`,e.jsx(n.li,{children:"每次 effect 执行时比较元素和依赖是否变化"}),`
`,e.jsx(n.li,{children:"变化时执行清理函数并重新执行 effect"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"depsAreSame"})," 比较依赖数组"]}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"getTargetElement"})," 解析目标元素"]}),`
`,e.jsx(n.li,{children:"支持数组形式的多个目标元素"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": effect 触发 → 比较元素/依赖 → 执行或跳过"]}),`
`]})]})}function x(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{x as default};
