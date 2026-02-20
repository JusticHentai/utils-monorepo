import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import myPromiseResolve from '../../../../packages/learn-utils/src/handwritten/MyPromiseResolve'

const normalDemo = async () => {
  // 包装普通值
  const result1 = await myPromiseResolve('hello')

  // 包装对象
  const result2 = await myPromiseResolve({ name: 'test', value: 123 })

  return {
    message: 'Promise.resolve 包装值',
    result1, // 'hello'
    result2, // { name: 'test', value: 123 }
  }
}

export default normalDemo
`,t=`export default function myPromiseResolve(value: any) {
  return new Promise((resolve) => {
    resolve(value)
  })
}
`;function l(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"mypromiseresolve-手写-promiseresolve",children:"MyPromiseResolve 手写 Promise.resolve"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Promise.resolve"})," 将任意值包装为一个 resolved 状态的 Promise。"]}),`
`,e.jsx(n.h2,{id:"核心原理",children:"核心原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"创建新 Promise"}),"：返回一个新的 Promise 实例"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"立即 resolve"}),"：在构造函数中直接调用 resolve"]}),`
`]}),`
`,e.jsx(n.h2,{id:"源码实现",children:"源码实现"}),`
`,e.jsx(r,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(r,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"value",children:"value"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"any"})]}),`
`,e.jsx(n.li,{children:"描述：需要包装的值"}),`
`]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<any>"})]}),`
`,e.jsx(n.li,{children:"描述：resolved 状态的 Promise"}),`
`]}),`
`,e.jsx(n.h2,{id:"特殊情况",children:"特殊情况"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"传入 Promise"}),"：直接返回该 Promise"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"传入 thenable"}),"：会尝试调用其 then 方法"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"传入普通值"}),"：包装为 resolved 的 Promise"]}),`
`]}),`
`,e.jsx(n.h2,{id:"应用场景",children:"应用场景"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"统一返回值"}),"：将同步值转为 Promise"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"链式调用起点"}),"：作为 Promise 链的起始"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"兼容处理"}),"：处理可能是 Promise 也可能是普通值的情况"]}),`
`]})]})}function a(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{a as default};
