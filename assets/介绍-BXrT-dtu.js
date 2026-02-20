import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { MyPromise } from '../../../../packages/learn-utils/src/handwritten/MyPromise'

const normalDemo = () => {
  return new Promise((resolve) => {
    const myPromise = new MyPromise((res, rej) => {
      setTimeout(() => {
        res('MyPromise resolved!')
      }, 100)
    })

    myPromise
      .then((value: string) => {
        return value + ' -> then1'
      })
      .then((value: string) => {
        resolve({
          message: 'MyPromise 链式调用成功',
          result: value + ' -> then2',
        })
      })
  })
}

export default normalDemo
`,l=`import { MyPromise } from '../../../../packages/learn-utils/src/handwritten/MyPromise'

const rejectDemo = () => {
  return new Promise((resolve) => {
    const myPromise = new MyPromise((res, rej) => {
      setTimeout(() => {
        rej('MyPromise rejected!')
      }, 100)
    })

    myPromise
      .then(
        (value: string) => value,
        (error: string) => {
          return 'Error caught: ' + error
        }
      )
      .then((value: string) => {
        resolve({
          message: 'MyPromise reject 处理成功',
          result: value,
        })
      })
  })
}

export default rejectDemo
`,o=`type MyFunction = (...params: any[]) => any

export class MyPromise {
  status: 'pending' | 'success' | 'failure' = 'pending'
  value: any
  successQueue: MyFunction[] = []
  failureQueue: MyFunction[] = []

  constructor(exe: MyFunction) {
    const resolve = (value: any) => {
      const doResolve = () => {
        if (this.status === 'pending') {
          this.status = 'success'
          this.value = value

          while (this.successQueue.length) {
            const cb = this.successQueue.shift()

            cb && cb(this.value)
          }
        }
      }

      setTimeout(doResolve, 0)
    }

    const reject = (value: any) => {
      const doReject = () => {
        if (this.status === 'pending') {
          this.status = 'failure'
          this.value = value

          while (this.failureQueue.length) {
            const cb = this.failureQueue.shift()

            cb && cb(this.value)
          }
        }
      }

      setTimeout(doReject, 0)
    }

    exe(resolve, reject)
  }

  then(
    success: MyFunction = (value: any) => value,
    failure: MyFunction = (value: any) => value
  ) {
    return new MyPromise((resolve: MyFunction, reject: MyFunction) => {
      const successFn = (value: any) => {
        try {
          const res = success(value)

          return res instanceof MyPromise
            ? res.then(resolve, reject)
            : resolve(res)
        } catch (err) {
          reject(err)
        }
      }

      const failureFn = (value: any) => {
        try {
          const res = failure(value)

          return res instanceof MyPromise
            ? res.then(resolve, reject)
            : resolve(res)
        } catch (err) {
          reject(err)
        }
      }

      if (this.status === 'pending') {
        this.successQueue.push(successFn)
        this.failureQueue.push(failureFn)
      } else if (this.status === 'success') {
        success(this.value)
      } else {
        failure(this.value)
      }
    })
  }

  catch(failure: MyFunction = (value) => value) {
    return this.then(() => null, failure)
  }
}
`;function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"mypromise-手写-promise",children:"MyPromise 手写 Promise"}),`
`,e.jsx(n.p,{children:"手写 Promise 是前端面试中的高频考点，考察对异步编程和 Promise 规范的理解。"}),`
`,e.jsx(n.h2,{id:"核心原理",children:"核心原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"三种状态"}),"：",e.jsx(n.code,{children:"pending"}),"（进行中）、",e.jsx(n.code,{children:"fulfilled"}),"（已成功）、",e.jsx(n.code,{children:"rejected"}),"（已失败）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"状态不可逆"}),"：状态只能从 ",e.jsx(n.code,{children:"pending"})," 变为 ",e.jsx(n.code,{children:"fulfilled"})," 或 ",e.jsx(n.code,{children:"rejected"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"异步执行"}),"：",e.jsx(n.code,{children:"resolve"})," 和 ",e.jsx(n.code,{children:"reject"})," 使用 ",e.jsx(n.code,{children:"setTimeout"})," 模拟微任务"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"链式调用"}),"：",e.jsx(n.code,{children:"then"})," 方法返回新的 Promise"]}),`
`]}),`
`,e.jsx(n.h2,{id:"实现要点",children:"实现要点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用队列存储回调函数，支持多次 ",e.jsx(n.code,{children:"then"})," 调用"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"then"})," 返回新的 Promise 实现链式调用"]}),`
`,e.jsxs(n.li,{children:["处理 ",e.jsx(n.code,{children:"then"})," 回调返回 Promise 的情况"]}),`
`]}),`
`,e.jsx(n.h2,{id:"源码实现",children:"源码实现"}),`
`,e.jsx(r,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"resolve-示例",children:"resolve 示例"}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"reject-示例",children:"reject 示例"}),`
`,e.jsx(r,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"promise-状态流转",children:"Promise 状态流转"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`pending ──resolve──> fulfilled
   │
   └──reject───> rejected
`})}),`
`,e.jsx(n.h2,{id:"面试常见追问",children:"面试常见追问"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Promise 的状态为什么不可逆？"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"保证异步操作结果的确定性"}),`
`,e.jsx(n.li,{children:"一旦确定就不会再改变"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"then 为什么返回新的 Promise？"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"实现链式调用"}),`
`,e.jsx(n.li,{children:"每个 then 的结果独立"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"resolve 为什么要异步执行？"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"保证 then 的回调在当前同步代码执行完后执行"}),`
`,e.jsx(n.li,{children:"符合 Promise/A+ 规范"}),`
`]}),`
`]}),`
`]})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
