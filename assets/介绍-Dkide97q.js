import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isError from '../../../packages/js-utils/src/isError'

const errorDemo = () => {
  // Error 及其子类
  action('isError - Error 类型')({
    'new Error()': isError(new Error('test')),
    'new TypeError()': isError(new TypeError('type error')),
    'new RangeError()': isError(new RangeError('range error')),
    'new DOMException()': isError(new DOMException('abort', 'AbortError')),
  })

  // 非 Error
  action('isError - 非 Error 类型')({
    '"error" 字符串': isError('error'),
    'Error 构造函数': isError(Error),
    '类似 Error 的对象': isError({ message: 'err' }),
    'null': isError(null),
    '1': isError(1),
  })
}

export default errorDemo
`;function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"iserror",children:"isError"}),`
`,r.jsx(e.p,{children:"检查值是否为 Error 对象。"}),`
`,r.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"isError"})," 支持检测 ",r.jsx(e.code,{children:"Error"}),"、",r.jsx(e.code,{children:"TypeError"}),"、",r.jsx(e.code,{children:"RangeError"})," 等内置错误类型，以及 ",r.jsx(e.code,{children:"DOMException"}),"。通过 ",r.jsx(e.code,{children:"Object.prototype.toString"})," 标签和 ",r.jsx(e.code,{children:"instanceof"})," 检测。"]}),`
`,r.jsx(e.h2,{id:"iserror---类型检测",children:"isError - 类型检测"}),`
`,r.jsx(i,{language:"typescript",children:c}),`
`,r.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"value"}),r.jsx("td",{children:r.jsx("code",{children:"unknown"})}),r.jsx("td",{children:"要检查的值"})]})})]}),`
`,r.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["类型：",r.jsx(e.code,{children:"boolean"})]}),`
`,r.jsx(e.li,{children:"描述：如果是 Error 返回 true"}),`
`]}),`
`,r.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"文件职责"}),": ",r.jsx(e.code,{children:"isError/index.ts"})," 导出 isError"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"核心流程"}),": toString 标签检查 + instanceof 检查"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"关键技术点"}),": 支持 ",r.jsx(e.code,{children:"[object Error]"})," 和 ",r.jsx(e.code,{children:"[object DOMException]"})]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"数据流向"}),": value → toString 标签 → instanceof → 返回布尔值"]}),`
`]})]})}function E(n={}){const{wrapper:e}={...s(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}export{E as default};
