import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import fetchFormat from '../../../packages/js-utils/src/fetchFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import { ERROR_TYPE } from '../../../packages/js-utils/src/timeoutFormat'

const successDemo = async () => {
  const fetchFn = async (text: string) => {
    action('开始请求')(text)
    await sleep(500)
    action('请求完成')(text)
    return \`\${text} success\`
  }

  // 使用 fetchFormat 包装，自动处理 asyncFormat + timeoutFormat + retryFormat
  const wrappedFn = fetchFormat({ fetchFn, retryCount: 3, timeout: 3000 })
  const [res, err] = await wrappedFn('成功用例')

  if (err) {
    if (err.errorType === ERROR_TYPE.TIMEOUT) {
      action('请求成功用例 - 超时')({ res, err })
    } else {
      action('请求成功用例 - 错误')({ res, err })
    }
  } else {
    action('请求成功用例 - 成功')({ res, err })
  }
}

export default successDemo
`,i=`import { action } from 'storybook/actions'
import fetchFormat from '../../../packages/js-utils/src/fetchFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import { ERROR_TYPE } from '../../../packages/js-utils/src/timeoutFormat'

const errorDemo = async () => {
  let attemptCount = 0

  const fetchFn = async (text: string) => {
    attemptCount++
    action('开始请求')(text, \`第 \${attemptCount} 次尝试\`)
    await sleep(500)
    action('请求失败')(text, \`第 \${attemptCount} 次尝试\`)
    throw new Error(\`\${text} error\`)
  }

  // 使用 fetchFormat 包装，自动处理 asyncFormat + timeoutFormat + retryFormat
  const wrappedFn = fetchFormat<typeof fetchFn>({
    fetchFn,
    retryCount: 3,
    timeout: 3000,
  })
  const [res, err] = await wrappedFn('失败用例')

  if (err) {
    if (err.errorType === ERROR_TYPE.TIMEOUT) {
      action('请求失败用例 - 超时')({
        res,
        err,
        errMessage: err?.error?.message,
      })
    } else {
      action('请求失败用例（重试 3 次后仍失败）')({
        res,
        err,
        errMessage: err?.error?.message,
      })
    }
  } else {
    action('请求失败用例 - 成功')({ res, err })
  }
}

export default errorDemo
`,a=`import { action } from 'storybook/actions'
import fetchFormat from '../../../packages/js-utils/src/fetchFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import { ERROR_TYPE } from '../../../packages/js-utils/src/timeoutFormat'

const timeoutDemo = async () => {
  let attemptCount = 0

  const fetchFn = async (text: string) => {
    attemptCount++
    action('开始请求')(text, \`第 \${attemptCount} 次尝试\`)
    await sleep(2000) // 超过 1000ms 超时时间
    action('请求完成')(text, \`第 \${attemptCount} 次尝试\`)
    return \`\${text} success\`
  }

  // 使用 fetchFormat 包装，设置 1000ms 超时
  const wrappedFn = fetchFormat({ fetchFn, retryCount: 3, timeout: 1000 })
  const [res, err] = await wrappedFn('超时用例')

  if (err) {
    if (err.errorType === ERROR_TYPE.TIMEOUT) {
      action('超时用例（每次请求都超时，重试 3 次后返回超时错误）')({
        res,
        err,
        errMessage: err?.error?.message,
      })
    } else {
      action('超时用例 - 普通错误')({
        res,
        err,
        errMessage: err?.error?.message,
      })
    }
  } else {
    action('超时用例 - 成功')({ res, err })
  }
}

export default timeoutDemo
`;function o(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"fetchformat",children:"fetchFormat"}),`
`,n.jsxs(e.p,{children:["fetchFormat 是一个用于将普通异步函数转换为带有完整请求能力的函数。它内部组合了 ",n.jsx(e.code,{children:"asyncFormat"}),"、",n.jsx(e.code,{children:"timeoutFormat"})," 和 ",n.jsx(e.code,{children:"retryFormat"}),"，提供了错误处理、超时控制和自动重试的能力。"]}),`
`,n.jsx(e.h2,{id:"成功用例",children:"成功用例"}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"失败用例重试后仍失败",children:"失败用例（重试后仍失败）"}),`
`,n.jsx(t,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"超时用例",children:"超时用例"}),`
`,n.jsx(t,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"泛型",children:"泛型"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Fn"})," - 被包装函数的类型"]}),`
`]}),`
`,n.jsx(e.h3,{id:"options",children:"options"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"FetchFormatOption<Fn>"})]}),`
`,n.jsxs(e.li,{children:["描述：配置选项",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fetchFn"}),"：需要包装的请求函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"retryCount"}),"：重试次数，默认值为 ",n.jsx(e.code,{children:"3"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"timeout"}),"：超时时间（毫秒），默认值为 ",n.jsx(e.code,{children:"3000"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"WrappedFunction<Fn, TimeoutError>"})]}),`
`,n.jsxs(e.li,{children:["描述：返回一个包装后的函数，调用时返回 ",n.jsx(e.code,{children:"Promise<[res, undefined] | [undefined, TimeoutError]>"})," 的形式"]}),`
`]}),`
`,n.jsx(e.h2,{id:"内部实现",children:"内部实现"}),`
`,n.jsx(e.p,{children:"fetchFormat 内部按以下顺序组合了三个格式化函数："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"asyncFormat"}),": 将函数转为返回 ",n.jsx(e.code,{children:"[res, err]"})," 的形式"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"timeoutFormat"}),": 添加超时控制"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"retryFormat"}),": 添加自动重试能力"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const fetchFormat = <Fn extends BaseFunction>({
  fetchFn,
  retryCount = 3,
  timeout = 3000,
}: FetchFormatOption<Fn>): WrappedFunction<Fn, TimeoutError> => {
  return (...args: Parameters<Fn>) => {
    /** 将函数转为 [res, err] 的形式 */
    const asyncFormatFn = asyncFormat<Fn>(fetchFn)

    /** 超时 */
    const timeoutFn = timeoutFormat<Fn>({ fn: asyncFormatFn, timeout })

    /** 重试 */
    const retryFn = retryFormat<Fn>({ fn: timeoutFn, retryCount })

    return retryFn(...args)
  }
}
`})}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import fetchFormat from '@your-org/js-utils/fetchFormat'
import { ERROR_TYPE } from '@your-org/js-utils/timeoutFormat'

const fetchData = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

// 创建带完整能力的请求函数
const safeFetch = fetchFormat({
  fetchFn: fetchData,
  retryCount: 3,  // 重试 3 次
  timeout: 5000,  // 5 秒超时
})

// 使用
const [data, error] = await safeFetch('https://api.example.com/data')

if (error) {
  if (error.errorType === ERROR_TYPE.TIMEOUT) {
    console.log('请求超时')
  } else {
    console.log('请求失败:', error.error)
  }
} else {
  console.log('请求成功:', data)
}
`})})]})}function F(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{F as default};
