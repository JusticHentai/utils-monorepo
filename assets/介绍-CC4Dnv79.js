import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import split from '../../../packages/js-utils/src/split'

const splitDemo = () => {
  // 字符串分隔符
  action('split - 字符串分隔符')({
    输入: "split('abcde', 'c')",
    结果: split('abcde', 'c'),
  })

  // 正则分隔符
  action('split - 正则分隔符')({
    输入: "split('abcde', /[bd]/)",
    结果: split('abcde', /[bd]/),
  })

  // 限制数量
  action('split - 空字符串分隔+限制数量')({
    输入: "split('abcde', '', 2)",
    结果: split('abcde', '', 2),
  })

  // 逗号分隔
  action('split - 逗号分隔')({
    输入: "split('a,b,c', ',')",
    结果: split('a,b,c', ','),
  })

  // null 安全
  action('split - null 输入返回空数组')({
    输入: 'split(null)',
    结果: split(null as unknown as string),
  })
}

export default splitDemo
`;function l(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"split",children:"split"}),`
`,n.jsx(s.p,{children:"按分隔符拆分字符串。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"split"})," 按分隔符拆分字符串，是 ",n.jsx(s.code,{children:"String.prototype.split"})," 的函数式封装。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"CSV 数据解析"}),`
`,n.jsx(s.li,{children:"URL 参数解析"}),`
`,n.jsx(s.li,{children:"文本行分割"}),`
`]}),`
`,n.jsx(s.h2,{id:"字符串拆分",children:"字符串拆分"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"split"})," 按分隔符拆分字符串。"]}),`
`,n.jsx(e,{language:"typescript",children:r}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要拆分的字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"separator"}),n.jsx("td",{children:n.jsx("code",{children:"string | RegExp"})}),n.jsx("td",{children:"分隔符"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"limit"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"可选，最大分割数"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"string[]"})]}),`
`,n.jsx(s.li,{children:"描述：拆分后的字符串数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 封装字符串 split"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 调用 String.prototype.split"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 支持字符串和正则分隔符，limit 限制返回数量"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 字符串 + 分隔符 → split → 返回字符串数组"]}),`
`]})]})}function p(i={}){const{wrapper:s}={...t(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(l,{...i})}):l(i)}export{p as default};
