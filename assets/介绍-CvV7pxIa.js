import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import retryFormat from '../../../packages/js-utils/src/retryFormat'
import sleep from '../../../packages/js-utils/src/sleep'

let attemptCount = 0

const successDemo = async () => {
  attemptCount = 0

  const fn = async () => {
    attemptCount++
    action('开始执行')(attemptCount)
    await sleep(1000)
    action('执行完成')(attemptCount)

    if (attemptCount < 2) {
      throw new Error('失败')
    }

    return '成功'
  }

  // 先将函数转为 [res, err] 的形式
  const asyncFormatFn = asyncFormat(fn)
  // 再使用 retryFormat 包装
  const retryFn = retryFormat<typeof fn>({ fn: asyncFormatFn, retryCount: 3 })

  const res = await retryFn()

  action('重试成功用例')(res)
}

export default successDemo
`,i=`import { action } from 'storybook/actions'
import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import retryFormat from '../../../packages/js-utils/src/retryFormat'
import sleep from '../../../packages/js-utils/src/sleep'

const failDemo = async () => {
  let attemptCount = 0
  const fn = async () => {
    attemptCount++
    action('开始执行')(attemptCount)
    await sleep(1000)
    action('执行完成')(attemptCount)
    throw new Error('总是失败')
  }

  // 先将函数转为 [res, err] 的形式
  const asyncFormatFn = asyncFormat(fn)
  // 再使用 retryFormat 包装
  const retryFn = retryFormat<typeof fn>({ fn: asyncFormatFn, retryCount: 3 })

  const res = await retryFn()

  action('重试失败用例')(res)
}

export default failDemo
`;function o(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"retryformat",children:"retryFormat"}),`
`,n.jsxs(t.p,{children:["retryFormat 是一个用于将已经返回 ",n.jsx(t.code,{children:"[res, err]"})," 形式的函数转换为带有自动重试能力的新函数。当包装后的函数执行失败时会自动重试，直到成功为止，如果重试次数达到上限，则返回最后一次错误信息。"]}),`
`,n.jsx(t.h2,{id:"成功用例",children:"成功用例"}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(t.h2,{id:"失败用例",children:"失败用例"}),`
`,n.jsx(e,{language:"typescript",children:i}),`
`,n.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(t.h3,{id:"泛型",children:"泛型"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"Fn"})," - 被包装函数的类型"]}),`
`]}),`
`,n.jsx(t.h3,{id:"options",children:"options"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["类型：",n.jsx(t.code,{children:"RetryFormatOption<Fn>"})]}),`
`,n.jsxs(t.li,{children:["描述：重试选项",`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"fn"}),"：需要包装的函数，类型为 ",n.jsx(t.code,{children:"WrappedFunction<Fn>"})]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"retryCount"}),"：重试次数"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["类型：",n.jsx(t.code,{children:"WrappedFunction<Fn>"})]}),`
`,n.jsxs(t.li,{children:["描述：返回一个包装后的函数，调用时返回 ",n.jsx(t.code,{children:"Promise<[res, undefined] | [undefined, err]>"})," 的形式"]}),`
`]})]})}function u(r={}){const{wrapper:t}={...s(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(o,{...r})}):o(r)}export{u as default};
