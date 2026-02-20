import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import replace from '../../../packages/js-utils/src/replace'

const replaceDemo = () => {
  // 字符串模式 (lodash: replace('abcde', 'de', '123') => 'abc123')
  action('replace - 字符串模式')(replace('abcde', 'de', '123'))

  // 正则全局替换 (lodash: replace('abcde', /[bd]/g, '-') => 'a-c-e')
  action('replace - 正则全局替换')(replace('abcde', /[bd]/g, '-'))

  // 替换函数
  action('replace - 回调函数')(replace('abc', /[a-c]/g, (m) => m.toUpperCase()))

  // 仅替换第一个匹配
  action('replace - 仅首次')(replace('foo-bar-foo', 'foo', 'baz'))

  // 正则全局替换所有匹配
  action('replace - 全局替换')(replace('foo-bar-foo', /foo/g, 'baz'))
}

export default replaceDemo`;function c(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"replace",children:"replace"}),`
`,e.jsx(n.p,{children:"替换字符串中匹配的部分。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"replace"})," 替换字符串中匹配模式的部分，支持字符串和正则表达式模式。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"文本搜索替换"}),`
`,e.jsx(n.li,{children:"模板变量替换"}),`
`,e.jsx(n.li,{children:"数据格式化"}),`
`]}),`
`,e.jsx(n.h2,{id:"字符串替换",children:"字符串替换"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"replace"})," 替换字符串中匹配的部分。"]}),`
`,e.jsx(l,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"string"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"要处理的字符串"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"pattern"}),e.jsx("td",{children:e.jsx("code",{children:"string | RegExp"})}),e.jsx("td",{children:"匹配模式"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"replacement"}),e.jsx("td",{children:e.jsx("code",{children:"string | Function"})}),e.jsx("td",{children:"替换值或替换函数"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.li,{children:"描述：替换后的字符串"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"index.ts"})," 封装字符串替换"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 接收字符串、模式和替换值 → 调用 String.prototype.replace"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 支持字符串和正则表达式模式，支持替换函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 字符串 + 模式 + 替换 → 匹配替换 → 返回新字符串"]}),`
`]})]})}function j(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{j as default};
