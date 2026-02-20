import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import myPromiseAllSettled from '../../../../packages/learn-utils/src/handwritten/MyPromiseAllSettled'

const normalDemo = async () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve('p1 success'), 100))
  const p2 = new Promise((_, reject) => setTimeout(() => reject('p2 error'), 50))
  const p3 = new Promise((resolve) => setTimeout(() => resolve('p3 success'), 200))

  const result = await myPromiseAllSettled([p1, p2, p3])

  return {
    message: 'Promise.allSettled 等待所有完成',
    result,
    // [
    //   { status: 'fulfilled', value: 'p1 success' },
    //   { status: 'rejected', value: 'p2 error' },
    //   { status: 'fulfilled', value: 'p3 success' }
    // ]
  }
}

export default normalDemo
`,o=`export default function myPromiseAllSettled(promise: Promise<any>[]) {
  if (!promise.length) {
    return Promise.resolve([])
  }

  return new Promise((resolve) => {
    const result: { status: 'fulfilled' | 'rejected'; value: any }[] = []
    let num = 0
    const length = promise.length

    promise.forEach((item: Promise<any>, i: number) => {
      Promise.resolve(item).then(
        (res) => {
          result[i] = { status: 'fulfilled', value: res }
          num++

          if (num === length) {
            resolve(result)
          }
        },
        (err) => {
          result[i] = { status: 'rejected', value: err }
          num++

          if (num === length) {
            resolve(result)
          }
        }
      )
    })
  })
}
`;function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"mypromiseallsettled-手写-promiseallsettled",children:"MyPromiseAllSettled 手写 Promise.allSettled"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Promise.allSettled"})," 等待所有 Promise 完成（无论成功失败），返回每个 Promise 的状态和结果。"]}),`
`,e.jsx(n.h2,{id:"核心原理",children:"核心原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"等待全部"}),"：不会因为某个 Promise 失败而提前结束"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"状态记录"}),"：记录每个 Promise 的状态（fulfilled/rejected）和值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"顺序保持"}),"：结果数组顺序与输入顺序一致"]}),`
`]}),`
`,e.jsx(n.h2,{id:"与-promiseall-的区别",children:"与 Promise.all 的区别"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"all"}),"：任一失败就 reject"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"allSettled"}),"：等待全部完成，返回所有结果"]}),`
`]}),`
`,e.jsx(n.h2,{id:"源码实现",children:"源码实现"}),`
`,e.jsx(l,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(l,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"promise",children:"promise"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<any>[]"})]}),`
`,e.jsx(n.li,{children:"描述：Promise 数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<Array<{ status: 'fulfilled' | 'rejected', value: any }>>"})]}),`
`,e.jsx(n.li,{children:"描述：包含每个 Promise 状态和结果的数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"应用场景",children:"应用场景"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"批量请求"}),"：需要知道每个请求的结果"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"并行任务"}),"：允许部分失败的场景"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"日志记录"}),"：记录所有操作的结果"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
