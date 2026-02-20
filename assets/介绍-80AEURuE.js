import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import myPromiseAny from '../../../../packages/learn-utils/src/handwritten/MyPromiseAny'

const normalDemo = async () => {
  const p1 = new Promise((_, reject) => setTimeout(() => reject('p1 error'), 100))
  const p2 = new Promise((resolve) => setTimeout(() => resolve('p2 success'), 200))
  const p3 = new Promise((_, reject) => setTimeout(() => reject('p3 error'), 50))

  const result = await myPromiseAny([p1, p2, p3])

  return {
    message: 'Promise.any 第一个成功的',
    result, // 'p2 success'
  }
}

export default normalDemo
`,t=`export default function myPromiseAny(promises: Promise<any>[]) {
  if (!promises.length) {
    Promise.reject(new AggregateError('No Promise in Promise.any was resolved'))
  }

  return new Promise((resolve, reject) => {
    const result = []
    let num = 0

    promises.forEach((item: any, i: number) => {
      Promise.resolve(item).then(
        (res) => {
          resolve(res)
        },
        (err) => {
          result[i] = err
          num++

          if (num === promises.length) {
            reject(new AggregateError('No Promise in Promise.any was resolved'))
          }
        }
      )
    })
  })
}
`;function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"mypromiseany-手写-promiseany",children:"MyPromiseAny 手写 Promise.any"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Promise.any"})," 返回第一个成功的 Promise，只有所有都失败才会 reject。"]}),`
`,e.jsx(n.h2,{id:"核心原理",children:"核心原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"成功优先"}),"：任一 Promise 成功就立即 resolve"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"错误收集"}),"：收集所有失败的错误"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"全部失败"}),"：所有 Promise 都失败时抛出 ",e.jsx(n.code,{children:"AggregateError"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"与-promiserace-的区别",children:"与 Promise.race 的区别"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"race"}),"：第一个完成的（无论成功失败）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"any"}),"：第一个成功的（忽略失败）"]}),`
`]}),`
`,e.jsx(n.h2,{id:"源码实现",children:"源码实现"}),`
`,e.jsx(s,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(s,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"promises",children:"promises"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<any>[]"})]}),`
`,e.jsx(n.li,{children:"描述：Promise 数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<any>"})]}),`
`,e.jsx(n.li,{children:"描述：第一个成功的 Promise 的结果"}),`
`]}),`
`,e.jsx(n.h2,{id:"aggregateerror",children:"AggregateError"}),`
`,e.jsxs(n.p,{children:["当所有 Promise 都失败时，抛出 ",e.jsx(n.code,{children:"AggregateError"}),"，包含所有错误信息。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`try {
  await Promise.any([...])
} catch (e) {
  console.log(e.errors) // 所有错误的数组
}
`})})]})}function x(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{x as default};
