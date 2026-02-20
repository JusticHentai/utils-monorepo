import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import toLower from '../../../packages/js-utils/src/toLower'

const toLowerDemo = () => {
  action('toLower 演示')({
    '"HELLO"': toLower('HELLO'),
    '"Hello World"': toLower('Hello World'),
    '"--Foo-Bar--"': toLower('--Foo-Bar--'),
  })
}

export default toLowerDemo
`,l=`import { action } from 'storybook/actions'
import toLower from '../../../packages/js-utils/src/toLower'

const edgeCaseDemo = () => {
  action('toLower - 边界情况')({
    'Hello WORLD': toLower('Hello WORLD'), '空字符串': toLower(''), '全大写': toLower('ABC'), '含数字': toLower('A1B2')
  })
}

export default edgeCaseDemo
`;function s(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"tolower",children:"toLower"}),`
`,n.jsx(o.p,{children:"转换字符串为全小写"}),`
`,n.jsx(o.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"toLower"})," 转换字符串为全小写。"]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"数据类型标准化"}),`
`,n.jsx(o.li,{children:"用户输入处理"}),`
`,n.jsx(o.li,{children:"跨模块数据传递前的格式统一"}),`
`]}),`
`,n.jsx(o.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(o.p,{children:["点击按钮查看 ",n.jsx(o.code,{children:"toLower"})," 的基本使用效果。"]}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(o.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(o.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(o.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,n.jsx(o.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"string"})]}),`
`,n.jsx(o.li,{children:"描述：返回转换后的字符串"}),`
`]}),`
`,n.jsx(o.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"文件职责"}),": ",n.jsx(o.code,{children:"toLower/index.ts"})," 导出 toLower 函数"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"核心流程"}),": 转换字符串为全小写"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function m(e={}){const{wrapper:o}={...t(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(s,{...e})}):s(e)}export{m as default};
