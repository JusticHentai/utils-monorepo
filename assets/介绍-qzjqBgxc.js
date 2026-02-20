import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import timeoutFormat, {
  ERROR_TYPE,
} from '../../../packages/js-utils/src/timeoutFormat'

const successDemo = async () => {
  const fn = async () => {
    await sleep(100)
    return '成功'
  }

  // 先将函数转为 [res, err] 的形式
  const asyncFormatFn = asyncFormat(fn)
  // 再使用 timeoutFormat 包装
  const timeoutFn = timeoutFormat<typeof fn>({
    fn: asyncFormatFn,
    timeout: 1000,
  })
  const [result, error] = await timeoutFn()

  if (error) {
    if (error.errorType === ERROR_TYPE.TIMEOUT) {
      action('异步函数先完成 - 超时错误')({ result, error })
    } else {
      action('异步函数先完成 - 普通错误')({ result, error })
    }
  } else {
    action('异步函数先完成 - 成功')({ result, error })
  }
}

export default successDemo
`,c=`import { action } from 'storybook/actions'
import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import timeoutFormat, {
  ERROR_TYPE,
} from '../../../packages/js-utils/src/timeoutFormat'

const timeoutDemo = async () => {
  const fn = async () => {
    await sleep(2000)
    return '成功'
  }

  // 先将函数转为 [res, err] 的形式
  const asyncFormatFn = asyncFormat(fn)
  // 再使用 timeoutFormat 包装
  const timeoutFn = timeoutFormat<typeof fn>({
    fn: asyncFormatFn,
    timeout: 1000,
  })
  const [result, error] = await timeoutFn()

  if (error) {
    if (error.errorType === ERROR_TYPE.TIMEOUT) {
      action('超时先完成 - 超时错误')({ result, error })
    } else {
      action('超时先完成 - 普通错误')({ result, error })
    }
  } else {
    action('超时先完成 - 成功')({ result, error })
  }
}

export default timeoutDemo
`;function t(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"timeoutformat",children:"timeoutFormat"}),`
`,n.jsxs(r.p,{children:["timeoutFormat 是一个用于将已经返回 ",n.jsx(r.code,{children:"[res, err]"})," 形式的函数转换为带有超时能力的新函数。当包装后的函数执行时会与超时竞速，如果异步函数先完成则返回 ",n.jsx(r.code,{children:"[result, undefined]"}),"，如果超时先完成则返回 ",n.jsx(r.code,{children:"[undefined, TimeoutError]"}),"。"]}),`
`,n.jsx(r.h2,{id:"异步函数先完成",children:"异步函数先完成"}),`
`,n.jsx(o,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"超时先完成",children:"超时先完成"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(r.h3,{id:"泛型",children:"泛型"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"Fn"})," - 被包装函数的类型"]}),`
`]}),`
`,n.jsx(r.h3,{id:"options",children:"options"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"TimeoutFormatOption<Fn>"})]}),`
`,n.jsxs(r.li,{children:["描述：超时选项",`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"fn"}),"：需要包装的函数，类型为 ",n.jsx(r.code,{children:"WrappedFunction<Fn>"})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"timeout"}),"：超时时间（毫秒）"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"WrappedFunction<Fn, TimeoutError>"})]}),`
`,n.jsxs(r.li,{children:["描述：返回一个包装后的函数，调用时返回 ",n.jsx(r.code,{children:"Promise<[Awaited<ReturnType<Fn>>, undefined] | [undefined, TimeoutError]>"})]}),`
`]}),`
`,n.jsx(r.h2,{id:"timeouterror-接口",children:"TimeoutError 接口"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`enum ERROR_TYPE {
  TIMEOUT,
  NORMAL_ERROR,
}

interface TimeoutError {
  errorType: ERROR_TYPE
  error: any
}
`})}),`
`,n.jsx(r.h3,{id:"字段说明",children:"字段说明"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"errorType"}),": 错误类型，",n.jsx(r.code,{children:"ERROR_TYPE.TIMEOUT"})," 表示超时错误，",n.jsx(r.code,{children:"ERROR_TYPE.NORMAL_ERROR"})," 表示普通错误"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"error"}),": 原始错误对象"]}),`
`]}),`
`,n.jsx(r.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import asyncFormat from '@your-org/js-utils/asyncFormat'
import timeoutFormat, { ERROR_TYPE } from '@your-org/js-utils/timeoutFormat'

const fetchData = async (url: string) => {
  // 模拟网络请求
  const response = await fetch(url)
  return response.json()
}

// 先将函数转为 [res, err] 的形式
const asyncFormatFn = asyncFormat(fetchData)

// 创建带超时的函数（5秒超时）
const timeoutFetch = timeoutFormat({ fn: asyncFormatFn, timeout: 5000 })

// 使用
const [data, error] = await timeoutFetch('https://api.example.com/data')

if (error) {
  if (error.errorType === ERROR_TYPE.TIMEOUT) {
    console.log('请求超时')
  } else {
    console.log('请求失败:', error.error)
  }
} else {
  console.log('请求成功:', data)
}
`})})]})}function p(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t(e)}export{p as default};
