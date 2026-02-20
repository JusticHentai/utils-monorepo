import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import repeat from '../../../packages/js-utils/src/repeat'

const repeatDemo = () => {
  // 基本重复 (lodash: repeat('*', 3) => '***')
  action('repeat - 星号3次')(repeat('*', 3))

  // 字符串重复 (lodash: repeat('abc', 2) => 'abcabc')
  action('repeat - abc重复2次')(repeat('abc', 2))

  // 默认1次
  action('repeat - 默认1次')(repeat('ha'))

  // 0次返回空字符串 (lodash: repeat('abc', 0) => '')
  action('repeat - 0次')(repeat('abc', 0))

  // 负数返回空字符串 (lodash: repeat('abc', -2) => '')
  action('repeat - 负数')(repeat('abc', -2))

  // 小数会被取整 (lodash: repeat('abc', 2.6) => 'abcabc')
  action('repeat - 小数2.6')(repeat('abc', 2.6))

  // 分隔线生成
  action('repeat - 分隔线')(repeat('-', 20))

  // 作为map迭代器 (lodash: ['a','b','c'].map(repeat) => ['a','b','c'])
  action('repeat - map迭代器')(['a', 'b', 'c'].map((s) => repeat(s)))
}

export default repeatDemo`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"repeat",children:"repeat"}),`
`,n.jsx(e.p,{children:"重复字符串 n 次。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"repeat"})," 将字符串重复指定次数。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"生成重复模式"}),`
`,n.jsx(e.li,{children:"字符串填充"}),`
`,n.jsx(e.li,{children:"分隔线生成"}),`
`]}),`
`,n.jsx(e.h2,{id:"字符串重复",children:"字符串重复"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"repeat"})," 将字符串重复指定次数。"]}),`
`,n.jsx(c,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要重复的字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"重复次数，默认 1"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:"描述：重复后的字符串"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现字符串重复"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 将字符串重复 n 次拼接"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 处理边界情况（0次、负数、非整数）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 字符串 + 次数 → 重复拼接 → 返回结果"]}),`
`]})]})}function j(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
