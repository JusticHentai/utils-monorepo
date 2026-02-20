import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import toFinite from '../../../packages/js-utils/src/toFinite'

const toFiniteDemo = () => {
  action('toFinite 演示')({
    '3.2': toFinite(3.2),
    'Number.MIN_VALUE': toFinite(Number.MIN_VALUE),
    'Infinity': toFinite(Infinity),
    '"3.2"': toFinite('3.2'),
    'NaN': toFinite(NaN),
  })
}

export default toFiniteDemo
`,c=`import { action } from 'storybook/actions'
import toFinite from '../../../packages/js-utils/src/toFinite'

const edgeCaseDemo = () => {
  action('toFinite - 边界情况')({
    'Infinity': toFinite(Infinity), '-Infinity': toFinite(-Infinity), '3.2': toFinite(3.2), '"3.2"': toFinite('3.2'), 'NaN': toFinite(NaN)
  })
}

export default edgeCaseDemo
`;function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"tofinite",children:"toFinite"}),`
`,n.jsx(i.p,{children:"将 value 转换为有限数值"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"toFinite"})," 将 value 转换为有限数值。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"数据类型标准化"}),`
`,n.jsx(i.li,{children:"用户输入处理"}),`
`,n.jsx(i.li,{children:"跨模块数据传递前的格式统一"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(i.p,{children:["点击按钮查看 ",n.jsx(i.code,{children:"toFinite"})," 的基本使用效果。"]}),`
`,n.jsx(t,{language:"typescript",children:r}),`
`,n.jsx(i.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(i.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要转换的值"})]})})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"number"})]}),`
`,n.jsx(i.li,{children:"描述：返回转换后的数值"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"toFinite/index.ts"})," 导出 toFinite 函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 将 value 转换为有限数值"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function m(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{m as default};
