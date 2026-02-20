import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const a=`import { action } from 'storybook/actions'
import flatMap from '../../../packages/js-utils/src/flatMap'

const flatMapDemo = () => {
  action('flatMap')(flatMap([1, 2, 3], (n) => [n, n * 2]))
}

export default flatMapDemo
`,d=`import { action } from 'storybook/actions'
import flatMapDeep from '../../../packages/js-utils/src/flatMapDeep'

const flatMapDeepDemo = () => {
  action('flatMapDeep')(flatMapDeep([1, 2], (n) => [[n, [n * 2]]]))
}

export default flatMapDeepDemo
`;function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"flatmap",children:"flatMap"}),`
`,e.jsx(n.p,{children:"映射后扁平化，提供 flatMap、flatMapDeep、flatMapDepth 三种深度。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"flatMap"})," 对集合每个元素调用映射函数，然后将结果扁平化一层。",e.jsx(n.code,{children:"flatMapDeep"})," 完全扁平化。",e.jsx(n.code,{children:"flatMapDepth"})," 可指定扁平化深度。等价于先 ",e.jsx(n.code,{children:"map"})," 再 ",e.jsx(n.code,{children:"flatten"}),"。"]}),`
`,e.jsx(n.h2,{id:"flatmap---映射后扁平化一层",children:"flatMap - 映射后扁平化一层"}),`
`,e.jsx(l,{language:"typescript",children:a}),`
`,e.jsx(n.h2,{id:"flatmapdeep---完全扁平化",children:"flatMapDeep - 完全扁平化"}),`
`,e.jsx(l,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"collection"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"要处理的集合"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"iteratee"}),e.jsx("td",{children:e.jsx("code",{children:"(value: T) => R[]"})}),e.jsx("td",{children:"映射函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"depth"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"扁平化深度（flatMapDepth，默认1）"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"R[]"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"flatMap/index.ts"})," 导出 flatMap、flatMapDeep、flatMapDepth"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": map → flatten，depth 控制扁平化层级"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 递归扁平化、深度参数控制"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 集合 → map 映射 → flatten 扁平化 → 返回一维数组"]}),`
`]})]})}function j(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{j as default};
