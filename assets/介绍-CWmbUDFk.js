import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import reduce from '../../../../packages/learn-utils/src/handwritten/reduce'

const normalDemo = () => {
  const arr = [1, 2, 3, 4, 5]

  // 求和
  const sum = reduce(arr, (acc, curr) => acc + curr, 0)

  // 求最大值
  const max = reduce(arr, (acc, curr) => Math.max(acc, curr))

  // 数组转对象
  const obj = reduce(
    arr,
    (acc, curr, index) => {
      acc[\`key\${index}\`] = curr
      return acc
    },
    {} as Record<string, number>
  )

  return {
    original: arr,
    sum, // 15
    max, // 5
    obj, // {key0: 1, key1: 2, ...}
  }
}

export default normalDemo
`,d=`export default function reduce(
  arr: any[],
  cb: (...args: any[]) => any,
  initValue?: any
) {
  const hasInitValue = initValue === 0 ? !initValue : !!initValue

  let res = hasInitValue ? initValue : arr[0]

  for (let i = hasInitValue ? 0 : 1; i < arr.length; i++) {
    res = cb(res, arr[i], i, arr)
  }

  return res
}
`;function i(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"reduce-数组归约",children:"reduce 数组归约"}),`
`,n.jsxs(r.p,{children:["手写实现 ",n.jsx(r.code,{children:"Array.prototype.reduce()"})," 方法，将数组归约为单个值。"]}),`
`,n.jsx(r.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"初始值处理"}),"：如果提供初始值，从索引 0 开始；否则用第一个元素作为初始值，从索引 1 开始"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"累积计算"}),"：每次迭代将上一次的结果和当前元素传入回调函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"返回最终值"}),"：遍历完成后返回累积的结果"]}),`
`]}),`
`,n.jsx(r.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(c,{language:"typescript",children:d}),`
`,n.jsx(r.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(c,{language:"typescript",children:l}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(r.h3,{id:"arr",children:"arr"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"any[]"})]}),`
`,n.jsx(r.li,{children:"描述：需要归约的数组"}),`
`]}),`
`,n.jsx(r.h3,{id:"cb",children:"cb"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"(accumulator: any, currentValue: any, index: number, arr: any[]) => any"})]}),`
`,n.jsx(r.li,{children:"描述：归约回调函数"}),`
`]}),`
`,n.jsx(r.h3,{id:"initvalue",children:"initValue"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"any"}),"（可选）"]}),`
`,n.jsx(r.li,{children:"描述：初始值，如果不提供则使用数组第一个元素"}),`
`]}),`
`,n.jsx(r.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"any"})]}),`
`,n.jsx(r.li,{children:"描述：归约后的单个值"}),`
`]}),`
`,n.jsx(r.h2,{id:"常见应用场景",children:"常见应用场景"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数组求和"}),"：",n.jsx(r.code,{children:"reduce((a, b) => a + b, 0)"})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数组去重"}),"：结合 ",n.jsx(r.code,{children:"includes"})," 使用"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数组转对象"}),"：将数组转换为键值对对象"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"扁平化数组"}),"：结合 ",n.jsx(r.code,{children:"concat"})," 使用"]}),`
`]})]})}function j(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{j as default};
