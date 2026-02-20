import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import toLength from '../../../packages/js-utils/src/toLength'

const toLengthDemo = () => {
  action('toLength 演示')({
    '3.2': toLength(3.2),
    '-1': toLength(-1),
    'Number.MAX_SAFE_INTEGER + 1': toLength(Number.MAX_SAFE_INTEGER + 1),
    '0': toLength(0),
    '"3"': toLength('3'),
  })
}

export default toLengthDemo
`,h=`import { action } from 'storybook/actions'
import toLength from '../../../packages/js-utils/src/toLength'

const edgeCaseDemo = () => {
  action('toLength - 边界情况')({
    '3.2': toLength(3.2), '-1': toLength(-1), 'Infinity': toLength(Infinity), '0': toLength(0)
  })
}

export default edgeCaseDemo
`;function o(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"tolength",children:"toLength"}),`
`,n.jsx(e.p,{children:"将 value 转换为适合用作类数组长度的整数"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"toLength"})," 将 value 转换为适合用作类数组长度的整数。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"数据类型标准化"}),`
`,n.jsx(e.li,{children:"用户输入处理"}),`
`,n.jsx(e.li,{children:"跨模块数据传递前的格式统一"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"toLength"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要转换的值"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：返回转换后的整数"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"toLength/index.ts"})," 导出 toLength 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 将 value 转换为适合用作类数组长度的整数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{a as default};
