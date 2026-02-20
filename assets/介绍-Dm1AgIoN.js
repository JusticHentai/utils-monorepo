import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import slice from '../../../packages/js-utils/src/slice'

const sliceDemo = () => {
  const arr = [1, 2, 3, 4, 5]

  // 默认返回全部副本 (lodash: slice(arr) deepEqual arr, !== arr)
  const copy = slice(arr)
  action('slice - 默认全部')({ result: copy, isNewRef: copy !== arr })

  // 正数 start (lodash: slice(arr, 1) => [2,3])
  action('slice - start=1')(slice(arr, 1))

  // start + end (lodash: slice(arr, 1, 3) => [2,3])
  action('slice - start=1,end=3')(slice(arr, 1, 3))

  // 负数 start (lodash: slice([1,2,3], -1) => [3])
  action('slice - 负数start')(slice(arr, -2))

  // 负数 end (lodash: slice([1,2,3], 0, -1) => [1,2])
  action('slice - 负数end')(slice(arr, 0, -1))

  // start >= end 返回空数组 (lodash: slice(arr, 2, 2) => [])
  action('slice - start>=end')(slice(arr, 3, 2))

  // start >= length 返回空数组
  action('slice - start超出范围')(slice(arr, 10))

  // 原数组不变
  action('slice - 原数组不变')(arr)
}

export default sliceDemo`;function e(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"slice",children:"slice"}),`
`,n.jsx(s.p,{children:"创建数组的切片。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"slice"})," 创建数组的切片，是 ",n.jsx(s.code,{children:"Array.prototype.slice"})," 的函数式封装。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数组截取"}),`
`,n.jsx(s.li,{children:"分页取数据"}),`
`,n.jsx(s.li,{children:"不修改原数组的子数组获取"}),`
`]}),`
`,n.jsx(s.h2,{id:"数组切片",children:"数组切片"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"slice"})," 创建数组的切片。"]}),`
`,n.jsx(c,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要切片的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"start"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"起始索引，默认 0"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"end"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"结束索引（不含）"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"T[]"})]}),`
`,n.jsx(s.li,{children:"描述：数组的切片"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 封装数组 slice 操作"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 调用 Array.prototype.slice 创建子数组"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 不修改原数组，返回新数组"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 数组 + 起止索引 → slice 操作 → 返回新子数组"]}),`
`]})]})}function j(r={}){const{wrapper:s}={...i(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(e,{...r})}):e(r)}export{j as default};
