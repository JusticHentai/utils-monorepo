import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import myPromiseAll from '../../../../packages/learn-utils/src/handwritten/MyPromiseAll'

const normalDemo = async () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve('p1'), 100))
  const p2 = new Promise((resolve) => setTimeout(() => resolve('p2'), 200))
  const p3 = new Promise((resolve) => setTimeout(() => resolve('p3'), 50))

  const result = await myPromiseAll([p1, p2, p3])

  return {
    message: 'Promise.all 全部成功',
    result, // ['p1', 'p2', 'p3']
  }
}

export default normalDemo
`,t=`import myPromiseAll from '../../../../packages/learn-utils/src/handwritten/MyPromiseAll'

const errorDemo = async () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve('p1'), 100))
  const p2 = new Promise((_, reject) => setTimeout(() => reject('p2 error'), 50))
  const p3 = new Promise((resolve) => setTimeout(() => resolve('p3'), 200))

  try {
    await myPromiseAll([p1, p2, p3])
    return { message: '不应该到这里' }
  } catch (error) {
    return {
      message: 'Promise.all 有一个失败',
      error, // 'p2 error'
    }
  }
}

export default errorDemo
`,c=`export default function myPromiseAll(promisies: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    const res: any[] = []
    let count = 0
    const length = promisies.length

    promisies.forEach((item: any, i: number) => {
      Promise.resolve(item)
        .then((myRes) => {
          count += 1
          res[i] = myRes

          if (count === length) {
            resolve(res)
          }
        })
        .catch(reject)
    })
  })
}
`;function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"mypromiseall-手写-promiseall",children:"MyPromiseAll 手写 Promise.all"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Promise.all"})," 接收一个 Promise 数组，当所有 Promise 都成功时返回结果数组，任一失败则立即 reject。"]}),`
`,e.jsx(n.h2,{id:"核心原理",children:"核心原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"返回新 Promise"}),"：包装所有输入的 Promise"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"计数器"}),"：记录已完成的 Promise 数量"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"结果数组"}),"：按顺序存储每个 Promise 的结果"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"快速失败"}),"：任一 Promise reject 则整体 reject"]}),`
`]}),`
`,e.jsx(n.h2,{id:"源码实现",children:"源码实现"}),`
`,e.jsx(s,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"全部成功示例",children:"全部成功示例"}),`
`,e.jsx(s,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"有失败示例",children:"有失败示例"}),`
`,e.jsx(s,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"promises",children:"promises"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<any>[]"})]}),`
`,e.jsx(n.li,{children:"描述：Promise 数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<any[]>"})]}),`
`,e.jsx(n.li,{children:"描述：所有 Promise 结果组成的数组（按输入顺序）"}),`
`]}),`
`,e.jsx(n.h2,{id:"注意事项",children:"注意事项"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"结果数组顺序与输入顺序一致，不是完成顺序"}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"Promise.resolve"})," 包装非 Promise 值"]}),`
`,e.jsx(n.li,{children:"空数组会立即 resolve 为空数组"}),`
`]})]})}function x(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{x as default};
