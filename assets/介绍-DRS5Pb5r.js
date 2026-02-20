import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import noop from '../../../packages/js-utils/src/noop'

const noopDemo = () => {
  const result = noop()
  action('noop - 返回值')(result)
  action('noop - 类型')(typeof noop)

  // 常用于默认回调
  function doSomething(callback = noop) {
    callback()
    return 'done'
  }

  action('noop - 默认回调')(doSomething())
}

export default noopDemo
`;function s(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"noop",children:"noop"}),`
`,n.jsx(o.p,{children:"空函数，不执行任何操作。"}),`
`,n.jsx(o.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"noop"})," 是一个空函数，不接受参数也不返回值。常用作默认回调或占位函数。"]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"默认回调函数"}),`
`,n.jsx(o.li,{children:"禁用某些操作"}),`
`,n.jsx(o.li,{children:"占位函数"}),`
`]}),`
`,n.jsx(o.h2,{id:"空函数",children:"空函数"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"noop"})," 不执行任何操作，常用作默认回调。"]}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(o.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{})]}),`
`,n.jsx(o.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"void"})]}),`
`,n.jsx(o.li,{children:"描述：undefined"}),`
`]}),`
`,n.jsx(o.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"文件职责"}),": ",n.jsx(o.code,{children:"index.ts"})," 导出一个空函数"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"核心流程"}),": 不执行任何操作，返回 undefined"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"关键技术点"}),": 简单的空函数实现"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"数据流向"}),": 无输入 → 无操作 → 返回 undefined"]}),`
`]})]})}function p(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(s,{...e})}):s(e)}export{p as default};
