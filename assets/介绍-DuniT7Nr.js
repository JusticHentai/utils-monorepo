import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import rearg from '../../../packages/js-utils/src/rearg'

const reargDemo = () => {
  const fn = (...args: unknown[]) => [...args]

  // 基本重排 (lodash: rearg(fn, [2,0,1])('b','c','a') => ['a','b','c'])
  const rearged = rearg(fn, [2, 0, 1])
  action('rearg - [2,0,1] 重排')(rearged('b', 'c', 'a'))

  // 重复索引 (lodash: rearg(fn, [1,1,1])('c','a','b') => ['a','a','a'])
  const repeated = rearg(fn, [1, 1, 1])
  action('rearg - 重复索引[1,1,1]')(repeated('c', 'a', 'b'))

  // 不存在的索引返回 undefined (lodash: rearg(fn, [1,4])('b','a','c') => ['a',undefined,'c'])
  const nonExist = rearg(fn, [1, 4])
  action('rearg - 不存在的索引[1,4]')(nonExist('b', 'a', 'c'))

  // 索引少于参数时，多余参数被截断
  // (lodash: rearg(fn, [1,0])('b','a','c') => ['a','b','c'] — c作为额外参数)
  const fewer = rearg(fn, [1, 0])
  action('rearg - 索引少于参数')(fewer('b', 'a', 'c'))

  // 双重rearg (lodash: rearg(rearg(fn,[2,1,0]),[1,0,2])('b','c','a') => ['a','b','c'])
  const r1 = rearg(fn, [2, 1, 0])
  const r2 = rearg(r1, [1, 0, 2])
  action('rearg - 双重rearg')(r2('b', 'c', 'a'))
}

export default reargDemo`;function s(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"rearg",children:"rearg"}),`
`,n.jsx(r.p,{children:"创建重新排列参数的函数。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"rearg"})," 创建一个函数，按照指定的索引顺序重新排列参数后调用原函数。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"调整函数参数顺序以适配不同 API"}),`
`,n.jsx(r.li,{children:"函数适配器"}),`
`,n.jsx(r.li,{children:"参数重排列"}),`
`]}),`
`,n.jsx(r.h2,{id:"参数重排列",children:"参数重排列"}),`
`,n.jsxs(r.p,{children:["使用 ",n.jsx(r.code,{children:"rearg"})," 改变函数参数的传入顺序。"]}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"(...args) => unknown"})}),n.jsx("td",{children:"要重排参数的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"indexes"}),n.jsx("td",{children:n.jsx("code",{children:"number[]"})}),n.jsx("td",{children:"参数索引排列顺序"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"(...args) => ReturnType<T>"})]}),`
`,n.jsx(r.li,{children:"描述：参数重排后调用原函数的包装函数"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"index.ts"})," 实现参数重排列"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 接收函数和索引数组 → 创建包装 → 调用时按索引重新排列参数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 索引映射，参数位置交换"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 参数列表 → 按索引重排 → 调用原函数 → 返回结果"]}),`
`]})]})}function j(e={}){const{wrapper:r}={...c(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{j as default};
