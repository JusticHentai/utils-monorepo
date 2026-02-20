import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import myPromiseRace from '../../../../packages/learn-utils/src/handwritten/MyPromiseRace'

const normalDemo = async () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve('p1 - 100ms'), 100))
  const p2 = new Promise((resolve) => setTimeout(() => resolve('p2 - 50ms'), 50))
  const p3 = new Promise((resolve) => setTimeout(() => resolve('p3 - 200ms'), 200))

  const result = await myPromiseRace([p1, p2, p3])

  return {
    message: 'Promise.race 最快的胜出',
    result, // 'p2 - 50ms'
  }
}

export default normalDemo
`,c=`export default function myPromiseRace(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    for (const item of promises) {
      item.then(resolve, reject)
    }
  })
}
`;function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"mypromiserace-手写-promiserace",children:"MyPromiseRace 手写 Promise.race"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Promise.race"})," 返回最先完成的 Promise 的结果，无论成功还是失败。"]}),`
`,e.jsx(n.h2,{id:"核心原理",children:"核心原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"竞速机制"}),"：第一个完成的 Promise 决定最终结果"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"遍历绑定"}),"：对每个 Promise 绑定 resolve 和 reject"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"状态锁定"}),"：一旦有结果，后续 Promise 的结果被忽略"]}),`
`]}),`
`,e.jsx(n.h2,{id:"源码实现",children:"源码实现"}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(r,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"promises",children:"promises"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<any>[]"})]}),`
`,e.jsx(n.li,{children:"描述：Promise 数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<any>"})]}),`
`,e.jsx(n.li,{children:"描述：最先完成的 Promise 的结果"}),`
`]}),`
`,e.jsx(n.h2,{id:"应用场景",children:"应用场景"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"超时控制"}),"：与超时 Promise 竞速"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"多源请求"}),"：从多个源获取数据，取最快的"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"性能优化"}),"：多个备选方案，选最快响应的"]}),`
`]}),`
`,e.jsx(n.h2,{id:"超时控制示例",children:"超时控制示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const timeout = new Promise((_, reject) => 
  setTimeout(() => reject('timeout'), 5000)
)
const result = await Promise.race([fetchData(), timeout])
`})})]})}function x(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
