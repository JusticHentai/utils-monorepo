import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import compact from '../../../packages/js-utils/src/compact'

const basicDemo = () => {
  // 移除所有假值
  const input = [0, 1, false, 2, '', 3, null, undefined, NaN]

  action('compact - 移除所有假值')({
    输入: input,
    结果: compact(input),
    被移除的假值: 'false, null, 0, "", undefined, NaN',
  })

  // 字符串 '0' 不是假值
  action('compact - 只过滤假值，不过滤 truthy 值')({
    输入: ['0', '1', '2'],
    结果: compact(['0', '1', '2']),
    说明: '字符串 "0" 是 truthy 值，不会被过滤',
  })

  // 空数组
  action('compact - 空数组')({
    结果: compact([]),
  })
}

export default basicDemo
`;function i(e){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c.h1,{id:"compact",children:"compact"}),`
`,n.jsx(c.p,{children:"创建一个新数组，移除所有假值元素。"}),`
`,n.jsx(c.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"compact"})," 函数用于过滤数组中的假值（falsy values）。"]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"假值包括"}),"："]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"false"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"null"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"0"})}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:'""'}),"（空字符串）"]}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"undefined"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"NaN"})}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"清理数组中的无效数据"}),`
`,n.jsx(c.li,{children:"过滤空值"}),`
`,n.jsx(c.li,{children:"数据预处理"}),`
`]}),`
`,n.jsx(c.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(c.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要处理的数组"})]})})]}),`
`,n.jsx(c.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["类型：",n.jsx(c.code,{children:"T[]"})]}),`
`,n.jsx(c.li,{children:"描述：移除假值后的新数组"}),`
`]})]})}function a(e={}){const{wrapper:c}={...s(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(i,{...e})}):i(e)}export{a as default};
