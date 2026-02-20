import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import join from '../../../packages/js-utils/src/join'

const joinDemo = () => {
  action('join - 默认逗号')({
    输入: ['a', 'b', 'c'],
    结果: join(['a', 'b', 'c']),
  })

  action('join - 自定义分隔符')({
    输入: ['2024', '01', '15'],
    分隔符: '-',
    结果: join(['2024', '01', '15'], '-'),
  })

  action('join - 空格分隔')({
    输入: ['Hello', 'World'],
    结果: join(['Hello', 'World'], ' '),
  })
}

export default joinDemo
`;function s(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"join",children:"join"}),`
`,n.jsx(i.p,{children:"将数组元素用指定分隔符连接成字符串。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"join"})," 函数将数组中的元素通过指定分隔符连接为一个字符串，是 ",n.jsx(i.code,{children:"Array.prototype.join"})," 的函数式封装。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"生成 CSV 数据"}),`
`,n.jsx(i.li,{children:"拼接路径或 URL 参数"}),`
`,n.jsx(i.li,{children:"将列表转为可读文本"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础连接",children:"基础连接"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"join"})," 将数组元素连接成字符串，支持自定义分隔符。"]}),`
`,n.jsx(o,{language:"typescript",children:d}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要连接的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"separator"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:'分隔符，默认为 ","'})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"string"})]}),`
`,n.jsx(i.li,{children:"描述：连接后的字符串"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 封装数组连接操作"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 接收数组和分隔符 → 调用数组 join 方法"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 处理空数组和 null/undefined 值"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 数组 + 分隔符 → 连接操作 → 返回字符串"]}),`
`]})]})}function a(r={}){const{wrapper:i}={...e(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(s,{...r})}):s(r)}export{a as default};
