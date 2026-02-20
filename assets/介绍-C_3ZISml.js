import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import lowerFirst from '../../../packages/js-utils/src/lowerFirst'

const lowerFirstDemo = () => {
  action('lowerFirst 演示')({
    '"Fred"': lowerFirst('Fred'),
    '"FRED"': lowerFirst('FRED'),
    '"fred"': lowerFirst('fred'),
  })
}

export default lowerFirstDemo
`,t=`import { action } from 'storybook/actions'
import lowerFirst from '../../../packages/js-utils/src/lowerFirst'

const edgeCaseDemo = () => {
  action('lowerFirst - 边界情况')({
    'HELLO': lowerFirst('HELLO'), '空字符串': lowerFirst(''), '单字符': lowerFirst('A'), '已是小写': lowerFirst('abc')
  })
}

export default edgeCaseDemo
`;function i(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"lowerfirst",children:"lowerFirst"}),`
`,r.jsx(n.p,{children:"将字符串首字母转换为小写"}),`
`,r.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"lowerFirst"})," 将字符串首字母转换为小写。"]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"数据处理和转换"}),`
`,r.jsx(n.li,{children:"功能组合和增强"}),`
`,r.jsx(n.li,{children:"简化常见操作"}),`
`]}),`
`,r.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,r.jsxs(n.p,{children:["点击按钮查看 ",r.jsx(n.code,{children:"lowerFirst"})," 的基本使用效果。"]}),`
`,r.jsx(s,{language:"typescript",children:l}),`
`,r.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,r.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,r.jsx(s,{language:"typescript",children:t}),`
`,r.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"str"}),r.jsx("td",{children:r.jsx("code",{children:"unknown"})}),r.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,r.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"string"})]}),`
`,r.jsx(n.li,{children:"描述：返回首字母小写的字符串"}),`
`]}),`
`,r.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"文件职责"}),": ",r.jsx(n.code,{children:"lowerFirst/index.ts"})," 导出 lowerFirst 函数"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"核心流程"}),": 将字符串首字母转换为小写"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function m(e={}){const{wrapper:n}={...o(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(i,{...e})}):i(e)}export{m as default};
