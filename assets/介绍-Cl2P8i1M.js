import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import times from '../../../packages/js-utils/src/times'

const timesDemo = () => {
  // 基础：生成索引序列
  action('times - 索引序列')(times(5, (i) => i))

  // 结果翻倍
  action('times - 翻倍 doubled')(times(3, (i) => i * 2))

  // 常量填充
  action('times - 常量填充')(times(4, () => 'x'))

  // 生成对象数据
  action('times - 生成对象数据')(times(3, (i) => ({ id: i, name: 'item_' + i })))

  // n < 1 返回空数组
  action('times - n=0 返回空数组')(times(0, (i) => i))
  action('times - n=-1 返回空数组')(times(-1, (i) => i))

  // 小数 n 会截断为整数（源码 n < 1 检查，循环 i < n）
  action('times - n=2.6 执行2次')(times(2.6, (i) => i))

  // 传入 String 作为迭代器
  action('times - String 迭代器')(times(3, String))
}

export default timesDemo
`;function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"times",children:"times"}),`
`,n.jsx(i.p,{children:"调用迭代函数 n 次。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"times"})," 调用迭代函数 n 次，返回每次调用结果组成的数组。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"生成固定数量的数据"}),`
`,n.jsx(i.li,{children:"重复执行操作"}),`
`,n.jsx(i.li,{children:"创建序列"}),`
`]}),`
`,n.jsx(i.h2,{id:"重复调用函数",children:"重复调用函数"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"times"})," 重复调用函数指定次数。"]}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"调用次数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(index: number) => T"})}),n.jsx("td",{children:"迭代器函数"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"T[]"})]}),`
`,n.jsx(i.li,{children:"描述：每次调用结果组成的数组"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 实现迭代执行"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 循环 n 次 → 每次调用迭代器传入索引 → 收集结果"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 简单循环，传入递增索引"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 次数 + 迭代器 → 循环调用 → 收集结果数组"]}),`
`]})]})}function m(e={}){const{wrapper:i}={...t(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{m as default};
