import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import upperCase from '../../../packages/js-utils/src/upperCase'

const upperCaseDemo = () => {
  action('upperCase 演示')({
    '"Foo Bar"': upperCase('Foo Bar'),
    '"fooBar"': upperCase('fooBar'),
    '"--foo-bar--"': upperCase('--foo-bar--'),
  })
}

export default upperCaseDemo
`,l=`import { action } from 'storybook/actions'
import upperCase from '../../../packages/js-utils/src/upperCase'

const edgeCaseDemo = () => {
  action('upperCase - 边界情况')({
    'hello world': upperCase('hello world'), 'camelCase': upperCase('camelCase'), '空字符串': upperCase(''), '含特殊字符': upperCase('foo-bar')
  })
}

export default edgeCaseDemo
`;function o(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"uppercase",children:"upperCase"}),`
`,e.jsx(n.p,{children:"转换字符串为大写形式，以空格分隔"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"upperCase"})," 转换字符串为大写形式，以空格分隔。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数据处理和转换"}),`
`,e.jsx(n.li,{children:"功能组合和增强"}),`
`,e.jsx(n.li,{children:"简化常见操作"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"upperCase"})," 的基本使用效果。"]}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(r,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"string"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.li,{children:"描述：返回转换后的字符串"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"upperCase/index.ts"})," 导出 upperCase 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 转换字符串为大写形式，以空格分隔"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用正则表达式匹配"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{j as default};
