import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isArrayBuffer from '../../../packages/js-utils/src/isArrayBuffer'

const isArrayBufferDemo = () => {
  action('isArrayBuffer 演示')({
    'new ArrayBuffer(2)': isArrayBuffer(new ArrayBuffer(2)),
    '[]': isArrayBuffer([]),
    '{}': isArrayBuffer({}),
    'null': isArrayBuffer(null),
  })
}

export default isArrayBufferDemo
`,t=`import { action } from 'storybook/actions'
import isArrayBuffer from '../../../packages/js-utils/src/isArrayBuffer'

const edgeCaseDemo = () => {
  const results = {
    'new ArrayBuffer(2)': isArrayBuffer(new ArrayBuffer(2)),
    '普通对象': isArrayBuffer({}),
    'null': isArrayBuffer(null),
    '[]': isArrayBuffer([]),
  }

  action('isArrayBuffer - 边界情况')(results)
}

export default edgeCaseDemo
`;function i(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"isarraybuffer",children:"isArrayBuffer"}),`
`,r.jsx(n.p,{children:"检查 value 是否是 ArrayBuffer 对象"}),`
`,r.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"isArrayBuffer"})," 检查 value 是否是 ArrayBuffer 对象。"]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"条件判断前的类型检查"}),`
`,r.jsx(n.li,{children:"数据验证和过滤"}),`
`,r.jsx(n.li,{children:"类型安全的分支处理"}),`
`]}),`
`,r.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,r.jsxs(n.p,{children:["点击按钮查看 ",r.jsx(n.code,{children:"isArrayBuffer"})," 的基本使用效果。"]}),`
`,r.jsx(s,{language:"typescript",children:c}),`
`,r.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,r.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,r.jsx(s,{language:"typescript",children:t}),`
`,r.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"value"}),r.jsx("td",{children:r.jsx("code",{children:"unknown"})}),r.jsx("td",{children:"要检查的值"})]})})]}),`
`,r.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"value is ArrayBuffer"})]}),`
`,r.jsx(n.li,{children:"描述：如果是 ArrayBuffer，返回 true"}),`
`]}),`
`,r.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"文件职责"}),": ",r.jsx(n.code,{children:"isArrayBuffer/index.ts"})," 导出 isArrayBuffer 函数"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"核心流程"}),": 检查 value 是否是 ArrayBuffer 对象"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"关键技术点"}),": 使用 Object.prototype.toString 进行类型判断"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function x(e={}){const{wrapper:n}={...l(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(i,{...e})}):i(e)}export{x as default};
