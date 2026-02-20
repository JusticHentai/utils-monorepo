import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import intersection from '../../../packages/js-utils/src/intersection'

const basicDemo = () => {
  action('intersection')(intersection([2, 1], [2, 3]))
}

export default basicDemo
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"intersection",children:"intersection"}),`
`,n.jsx(e.p,{children:"创建交集数组。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"intersection"})," 返回所有数组中共有的元素。",n.jsx(e.code,{children:"intersectionBy"})," 按迭代器比较。",n.jsx(e.code,{children:"intersectionWith"})," 按比较函数比较。"]}),`
`,n.jsx(e.h2,{id:"数组交集",children:"数组交集"}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"arrays"}),n.jsx("td",{children:n.jsx("code",{children:"T[][]"})}),n.jsx("td",{children:"要计算交集的数组"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T[]"})]}),`
`,n.jsx(e.li,{children:"描述：交集数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"intersection/index.ts"})," 导出 intersection、intersectionBy、intersectionWith"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 以第一个数组为基准，过滤出在所有其他数组中都存在的元素"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": Set 优化查找、iteratee 转换"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 多个数组 → 以首数组为基准 → 过滤共有元素 → 返回交集"]}),`
`]})]})}function a(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{a as default};
