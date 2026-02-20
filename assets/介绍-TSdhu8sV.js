import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import flat from '../../../../packages/learn-utils/src/handwritten/flat'

const normalDemo = () => {
  const arr = [1, [2, [3, [4, 5]]]]

  return {
    original: arr,
    flat1: flat(arr, 1), // [1, 2, [3, [4, 5]]]
    flat2: flat(arr, 2), // [1, 2, 3, [4, 5]]
    flatInfinity: flat(arr, Infinity), // [1, 2, 3, 4, 5]
  }
}

export default normalDemo
`,d=`export default function flat(array: any[], deep: number): any[] {
  if (deep === 0) {
    return array
  }

  return array.reduce(
    (result, curr) =>
      result.concat(Array.isArray(curr) ? flat(curr, deep - 1) : curr),
    []
  )
}
`;function l(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"flat-数组扁平化",children:"flat 数组扁平化"}),`
`,n.jsxs(r.p,{children:["手写实现 ",n.jsx(r.code,{children:"Array.prototype.flat()"})," 方法，将嵌套数组按指定深度展开为一维数组。"]}),`
`,n.jsx(r.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"递归处理"}),"：遍历数组，如果元素是数组则递归处理"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"深度控制"}),"：通过 ",n.jsx(r.code,{children:"deep"})," 参数控制展开的层数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"使用 reduce"}),"：利用 ",n.jsx(r.code,{children:"reduce"})," 和 ",n.jsx(r.code,{children:"concat"})," 实现数组合并"]}),`
`]}),`
`,n.jsx(r.h2,{id:"实现要点",children:"实现要点"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["当 ",n.jsx(r.code,{children:"deep === 0"})," 时直接返回原数组"]}),`
`,n.jsxs(r.li,{children:["使用 ",n.jsx(r.code,{children:"Array.isArray()"})," 判断元素是否为数组"]}),`
`,n.jsxs(r.li,{children:["递归时 ",n.jsx(r.code,{children:"deep - 1"})," 控制递归深度"]}),`
`]}),`
`,n.jsx(r.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(r.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(r.h3,{id:"array",children:"array"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"any[]"})]}),`
`,n.jsx(r.li,{children:"描述：需要扁平化的嵌套数组"}),`
`]}),`
`,n.jsx(r.h3,{id:"deep",children:"deep"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"number"})]}),`
`,n.jsxs(r.li,{children:["描述：扁平化的深度，",n.jsx(r.code,{children:"Infinity"})," 表示完全展开"]}),`
`]}),`
`,n.jsx(r.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"any[]"})]}),`
`,n.jsx(r.li,{children:"描述：扁平化后的数组"}),`
`]}),`
`,n.jsx(r.h2,{id:"其他实现方式",children:"其他实现方式"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"使用 flat 原生方法"}),"：",n.jsx(r.code,{children:"arr.flat(Infinity)"})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"使用 toString + split"}),"：",n.jsx(r.code,{children:"arr.toString().split(',')"}),"（仅适用于数字数组）"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"使用栈实现"}),"：非递归方式"]}),`
`]})]})}function u(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(l,{...e})}):l(e)}export{u as default};
