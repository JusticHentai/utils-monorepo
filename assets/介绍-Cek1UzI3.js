import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import map from '../../../../packages/learn-utils/src/handwritten/map'

const normalDemo = () => {
  const arr = [1, 2, 3, 4, 5]

  // 每个元素乘以2
  const doubled = map(arr, (item) => item * 2)

  // 每个元素转为对象
  const objects = map(arr, (item, index) => ({ id: index, value: item }))

  return {
    original: arr,
    doubled, // [2, 4, 6, 8, 10]
    objects, // [{id: 0, value: 1}, ...]
  }
}

export default normalDemo
`,o=`export default function map(arr: any[], cb: (...args: any[]) => any) {
  const res = []

  for (const [i, item] of arr.entries()) {
    res.push(cb(item, i, arr))
  }

  return res
}
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"map-数组映射",children:"map 数组映射"}),`
`,n.jsxs(e.p,{children:["手写实现 ",n.jsx(e.code,{children:"Array.prototype.map()"})," 方法，返回对每个元素执行回调后的新数组。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"遍历数组"}),"：使用 ",n.jsx(e.code,{children:"for...of"})," 配合 ",n.jsx(e.code,{children:"entries()"})," 获取索引和元素"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"执行回调"}),"：对每个元素执行回调函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"收集结果"}),"：将回调返回值收集到新数组中"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"arr",children:"arr"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any[]"})]}),`
`,n.jsx(e.li,{children:"描述：需要映射的数组"}),`
`]}),`
`,n.jsx(e.h3,{id:"cb",children:"cb"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(item: any, index: number, arr: any[]) => any"})]}),`
`,n.jsx(e.li,{children:"描述：映射回调函数，返回值作为新数组的元素"}),`
`]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any[]"})]}),`
`,n.jsx(e.li,{children:"描述：映射后的新数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"与-foreach-的区别",children:"与 forEach 的区别"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"map"})," 返回新数组，",n.jsx(e.code,{children:"forEach"})," 返回 ",n.jsx(e.code,{children:"undefined"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"map"})," 用于数据转换，",n.jsx(e.code,{children:"forEach"})," 用于遍历执行副作用"]}),`
`]})]})}function m(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{m as default};
