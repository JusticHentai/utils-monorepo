import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"domtarget--gettargetelement",children:"domTarget / getTargetElement"}),`
`,e.jsx(n.p,{children:"获取目标 DOM 元素的工具函数。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getTargetElement"})," 用于从多种形式的目标输入中获取实际的 DOM 元素。支持 React ref、函数和直接的 DOM 元素。"]}),`
`,e.jsx(n.p,{children:"这是很多 DOM 相关 hooks 的基础工具，用于统一处理不同形式的元素引用。"}),`
`,e.jsx(n.h2,{id:"支持的输入形式",children:"支持的输入形式"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"函数"}),": ",e.jsx(n.code,{children:"() => Element"})," - 返回目标元素的函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ref 对象"}),": ",e.jsx(n.code,{children:"RefObject<Element>"})," - React 的 ref 对象"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"直接值"}),": ",e.jsx(n.code,{children:"Element | null | undefined"})," - 目标元素本身"]}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import getTargetElement from '@justichentai/element-utils/domTarget'

// 从 ref 获取
const element1 = getTargetElement(divRef)

// 从函数获取
const element2 = getTargetElement(() => document.getElementById('my-id'))

// 直接传入元素
const element3 = getTargetElement(document.body)

// 使用默认值
const element4 = getTargetElement(null, document.documentElement)
`})}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"BasicTarget<T>"})}),e.jsx("td",{children:"目标元素（支持函数、ref 或直接值）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"defaultElement"}),e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"当 target 为空时返回的默认元素"})]})]})]}),`
`,e.jsx(n.h2,{id:"类型定义",children:"类型定义"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type TargetValue<T> = T | undefined | null

type TargetType = HTMLElement | Element | Window | Document

type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | RefObject<TargetValue<T>>
`})}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," - 主函数实现"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"})," - 类型定义"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"检查 target 是否为空，为空则返回默认值"}),`
`,e.jsx(n.li,{children:"判断 target 类型（函数、ref、直接值）"}),`
`,e.jsx(n.li,{children:"根据类型提取实际元素并返回"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"typeof target === 'function'"})," 判断函数"]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"'current' in target"})," 判断 ref 对象"]}),`
`]}),`
`]}),`
`]})]})}function j(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{j as default};
