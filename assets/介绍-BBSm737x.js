import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import forEach from '../../../packages/js-utils/src/forEach'

const forEachDemo = () => {
  // 基础遍历
  const result: string[] = []
  forEach([1, 2, 3], (n) => { result.push('item-' + n) })
  action('forEach - 遍历数组')(result)

  // forEach 别名演示
  const each = forEach
  action('forEach === each')(forEach === each)

  // 返回 false 中断遍历
  const items: number[] = []
  forEach([1, 2, 3, 4, 5], (n) => {
    if (n > 3) return false
    items.push(n)
  })
  action('forEach - 返回 false 中断')({
    收集到的: items,
    说明: '遍历到 4 时返回 false 中断',
  })
}

export default forEachDemo
`,i=`import { action } from 'storybook/actions'
import forEachRight from '../../../packages/js-utils/src/forEachRight'

const forEachRightDemo = () => {
  const result: number[] = []
  forEachRight([1, 2, 3], (n) => result.push(n))
  action('forEachRight - 从右遍历')(result)
}

export default forEachRightDemo
`;function h(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"foreach",children:"forEach"}),`
`,n.jsxs(r.p,{children:["遍历集合中每个元素并执行回调函数。同时提供 ",n.jsx(r.code,{children:"forEachRight"})," 从右遍历。"]}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"forEach"})," 遍历集合元素，对每个元素调用 iteratee 函数。支持数组和对象。回调中返回 ",n.jsx(r.code,{children:"false"})," 可提前终止遍历。",n.jsx(r.code,{children:"forEachRight"})," 从最后一个元素开始遍历。别名 ",n.jsx(r.code,{children:"each"})," 和 ",n.jsx(r.code,{children:"eachRight"}),"。"]}),`
`,n.jsx(r.h2,{id:"foreach---遍历集合",children:"forEach - 遍历集合"}),`
`,n.jsx(c,{language:"typescript",children:s}),`
`,n.jsx(r.h2,{id:"foreachright---从右遍历",children:"forEachRight - 从右遍历"}),`
`,n.jsx(c,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要遍历的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T, index: number, collection: T[]) => unknown"})}),n.jsx("td",{children:"遍历回调"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"T[]"})]}),`
`,n.jsx(r.li,{children:"描述：原集合"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"forEach/index.ts"})," 导出 forEach、forEachRight、each、eachRight"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": for 循环遍历，支持 return false 中断"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 支持数组和对象的统一遍历接口"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 集合 → 遍历每个元素 → 调用 iteratee → 返回原集合"]}),`
`]})]})}function f(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(h,{...e})}):h(e)}export{f as default};
