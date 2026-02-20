import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import filter from '../../../../packages/learn-utils/src/handwritten/filter'

const normalDemo = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // 过滤出偶数
  const evenNumbers = filter(arr, (item) => item % 2 === 0)

  // 过滤出大于5的数
  const greaterThan5 = filter(arr, (item) => item > 5)

  return {
    original: arr,
    evenNumbers, // [2, 4, 6, 8, 10]
    greaterThan5, // [6, 7, 8, 9, 10]
  }
}

export default normalDemo
`,t=`export default function filter(
  arr: any[],
  cb: (...args: any[]) => boolean
): any[] {
  const res = []

  for (const [i, item] of arr.entries()) {
    if (cb(item, i, arr)) {
      res.push(item)
    }
  }

  return res
}
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filter-数组过滤",children:"filter 数组过滤"}),`
`,n.jsxs(e.p,{children:["手写实现 ",n.jsx(e.code,{children:"Array.prototype.filter()"})," 方法，返回满足条件的元素组成的新数组。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"遍历数组"}),"：使用 ",n.jsx(e.code,{children:"for...of"})," 配合 ",n.jsx(e.code,{children:"entries()"})," 获取索引和元素"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"条件判断"}),"：对每个元素执行回调函数，返回 ",n.jsx(e.code,{children:"true"})," 则保留"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"返回新数组"}),"：不修改原数组，返回过滤后的新数组"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"arr",children:"arr"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any[]"})]}),`
`,n.jsx(e.li,{children:"描述：需要过滤的数组"}),`
`]}),`
`,n.jsx(e.h3,{id:"cb",children:"cb"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(item: any, index: number, arr: any[]) => boolean"})]}),`
`,n.jsxs(e.li,{children:["描述：过滤条件回调函数，返回 ",n.jsx(e.code,{children:"true"})," 表示保留该元素"]}),`
`]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any[]"})]}),`
`,n.jsx(e.li,{children:"描述：满足条件的元素组成的新数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"回调函数参数",children:"回调函数参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item"}),"：当前元素"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index"}),"：当前索引"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"arr"}),"：原数组"]}),`
`]})]})}function m(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{m as default};
