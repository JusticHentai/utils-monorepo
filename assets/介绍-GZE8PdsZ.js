import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import upperFirst from '../../../packages/js-utils/src/upperFirst'

const upperFirstDemo = () => {
  action('upperFirst 演示')({
    '"fred"': upperFirst('fred'),
    '"FRED"': upperFirst('FRED'),
    '"Fred"': upperFirst('Fred'),
  })
}

export default upperFirstDemo
`,c=`import { action } from 'storybook/actions'
import upperFirst from '../../../packages/js-utils/src/upperFirst'

const edgeCaseDemo = () => {
  action('upperFirst - 边界情况')({
    'hello': upperFirst('hello'), '空字符串': upperFirst(''), '单字符': upperFirst('a'), '已是大写': upperFirst('ABC')
  })
}

export default edgeCaseDemo
`;function i(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"upperfirst",children:"upperFirst"}),`
`,r.jsx(n.p,{children:"将字符串首字母转换为大写，其余部分保持不变"}),`
`,r.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"upperFirst"})," 将字符串首字母转换为大写，其余部分保持不变。"]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"数据处理和转换"}),`
`,r.jsx(n.li,{children:"功能组合和增强"}),`
`,r.jsx(n.li,{children:"简化常见操作"}),`
`]}),`
`,r.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,r.jsxs(n.p,{children:["点击按钮查看 ",r.jsx(n.code,{children:"upperFirst"})," 的基本使用效果。"]}),`
`,r.jsx(s,{language:"typescript",children:d}),`
`,r.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,r.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,r.jsx(s,{language:"typescript",children:c}),`
`,r.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"str"}),r.jsx("td",{children:r.jsx("code",{children:"unknown"})}),r.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,r.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"string"})]}),`
`,r.jsx(n.li,{children:"描述：返回首字母大写的字符串"}),`
`]}),`
`,r.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"文件职责"}),": ",r.jsx(n.code,{children:"upperFirst/index.ts"})," 导出 upperFirst 函数"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"核心流程"}),": 将字符串首字母转换为大写，其余部分保持不变"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(e={}){const{wrapper:n}={...t(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(i,{...e})}):i(e)}export{u as default};
